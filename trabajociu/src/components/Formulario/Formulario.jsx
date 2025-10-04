import Boton from "../Boton/Boton";
import styles from "./Formulario.module.css"
import Form from 'react-bootstrap/Form';


import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalConfirm from "../ModalConfirm/ModalConfirm";


export default function Formulario() {


    
    const [mostrarExito, setMostrarExito] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [data, setData] = useState({
        nombre: "",
        email: "",
        fecha: "",
        hora: "",
        personas: "",
        comentario:""
    })

    function cambiar(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const textoPersonas = () => {
        return data.personas === "1"? "persona" : "personas"
    }

    
    const formatearFecha = (fecha) => {
        if (!fecha) return ""
        const [año, mes, dia] = fecha.split("-")
        return `${dia}/${mes}/${año}`
    }
    
    const mensajeReserva = (
        <p>
            Reserva hecha a nombre de <strong>{data.nombre}</strong> (<strong>{data.email}</strong>) para <strong>{data.personas}</strong> {textoPersonas()}, el día <strong>{formatearFecha(data.fecha)}</strong> a las <strong>{data.hora}</strong> hs.
        </p>
    )

    const manejarEnvio = (e) => {
        e.preventDefault()
        
        if(!data.nombre.trim()) {
            setError("El nombre no puede estar vacío.")
            setMostrarError(true)
            return
        }
        setError("")
        setMostrarExito(true)

        //handleShow()
    }

    const [error, setError] = useState("")

//     useEffect(() => {
//       if(!data.nombre.trim()) { 
//         setError("El nombre no puede ser vacío")
//     }
//   }, [data])

  return (
    <div className={styles.contenedor}>
        <Form onSubmit={manejarEnvio}>

            <Row className="mb-3">

                <Form.Group className="mb-3" as={Col} md="6">
                    <Form.Label className={styles.texto}>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={data.nombre} onChange={cambiar} name="nombre" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" as={Col} md="6" >
                    <Form.Label className={styles.texto}>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" value={data.email} onChange={cambiar} name="email" required/>
                </Form.Group>

            </Row>

            <Row className="mb-3">

                <Form.Group className="mb-4" as={Col} md="4">
                    <Form.Label className={styles.texto}>Fecha</Form.Label>
                    <Form.Control type="date" min={new Date().toISOString().slice(0,10)} value={data.fecha} onChange={cambiar} name="fecha" required/>
                </Form.Group>

                <Form.Group className="mb-4" as={Col} md="4">
                    <Form.Label className={styles.texto}>Hora</Form.Label>
                    <Form.Select aria-label="Default select example" value={data.hora} onChange={cambiar} name="hora" required>
                        <option value="">Selecciona</option>
                        <option value="8:00">8:00</option>
                        <option value="8:30">8:30</option>
                        <option value="9:00">9:00</option>
                        <option value="9:30">9:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" as={Col} md="4">
                    <Form.Label className={styles.texto}>Cantidad de personas</Form.Label>
                    <Form.Select aria-label="Default select example" value={data.personas} onChange={cambiar} name="personas" required>
                        <option value="">Selecciona</option>
                        {[...Array(10)].map((_, i) => (
                            <option value={i + 1}>{i + 1}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

            </Row>


            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={styles.texto}>¿Hay algo que debamos saber?</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Comentario" value={data.comentario} onChange={cambiar} name="comentario"/>
            </Form.Group>


            <div className={styles.div}>
                <Boton type="submit" texto="Enviar"></Boton>
            </div>


            <ModalConfirm
            mostrar={mostrarError} 
            titulo="Error" 
            mensaje={error} 
            onClose={() => setMostrarError(false)} 
            textoBoton="cerrar" 
            variantBoton="cerrar">
            </ModalConfirm>

            <ModalConfirm
            mostrar={mostrarExito}
            titulo="¡Reserva realizada con éxito!"
            mensaje={mensajeReserva}
            onClose={() => setMostrarExito(false)}
            textoBoton="ir al inicio"
            to="/"
            ></ModalConfirm>
      </Form>
    </div>
  )
}
