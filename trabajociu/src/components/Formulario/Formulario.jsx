import Boton from "../Boton/Boton";
import styles from "./Formulario.module.css"
import Form from 'react-bootstrap/Form';


import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalConfirm from "../ModalConfirm/ModalConfirm";


export default function Formulario() {
    
    const [mostrarExito, setMostrarExito] = useState(false);


    const [data, setData] = useState({
        nombre: "",
        email: "",
        fecha: "",
        hora: "",
        personas: "",
        comentario:""
    })

    function manejarCambio(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const textoPersonas = () => {
        return data.personas === "1"? "persona" : "personas"
    }

    
    const formatearFecha = (fecha) => {
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
        
        if(error) return
        setMostrarExito(true)
    }

    const [error, setError] = useState("")
    const [intentos, setIntentos] = useState(0)

    useEffect(() => {
       if (intentos > 0) {
            setError(data.nombre.trim() ? "" : "El nombre no puede ser vacío.");
        }
   }, [data.nombre, intentos])

    const horarios = ["8:00", "8:30", "9:00", "9:30","10:00", "10:30", "11:00", "11:30","12:00", "12:30", "13:00", "13:30","14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30","18:00", "18:30", "19:00", "19:30","20:00"]

  return (
    <>
        <div className={styles.contenedor}>
            <Form onSubmit={manejarEnvio}>

                <Row className="mb-3">

                    <Form.Group className="mb-3" as={Col} md="6">
                        <Form.Label className={styles.texto}>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={data.nombre} onChange={(e) => {manejarCambio(e); setIntentos(intentos + 1)}} name="nombre" required/>
                        {error && <p className={styles.error}>{error}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" as={Col} md="6" >
                        <Form.Label className={styles.texto}>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" value={data.email} onChange={manejarCambio} name="email" required/>
                    </Form.Group>

                </Row>

                <Row className="mb-3">

                    <Form.Group className="mb-4" as={Col} md="4">
                        <Form.Label className={styles.texto}>Fecha</Form.Label>
                        <Form.Control type="date" min={new Date().toISOString().slice(0,10)} value={data.fecha} onChange={manejarCambio} name="fecha" required/>
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="4">
                        <Form.Label className={styles.texto}>Hora</Form.Label>
                        <Form.Select aria-label="Default select example" value={data.hora} onChange={manejarCambio} name="hora" required>
                            <option value="">Selecciona la hora</option>
                            {horarios.map(h => (
                                <option value={h}>{h}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="4">
                        <Form.Label className={styles.texto}>Personas</Form.Label>
                        <Form.Select aria-label="Default select example" value={data.personas} onChange={manejarCambio} name="personas" required>
                            <option value="">Selecciona la cantidad</option>
                            {[...Array(10)].map((_, i) => (
                                <option value={i + 1}>{i + 1}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Row>


                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.texto}>¿Hay algo que debamos saber?</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Comentario" value={data.comentario} onChange={manejarCambio} name="comentario"/>
                </Form.Group>


                <div className={styles.div}>
                    <Boton type="submit" texto="Enviar"></Boton>
                </div>
            </Form>
        </div>
        <ModalConfirm
        isOpen={mostrarExito}
        titulo="¡Reserva realizada con éxito!"
        mensaje={mensajeReserva}
        onClose={() => setMostrarExito(false)}
        textoBoton="ir al inicio"
        to="/"
        ></ModalConfirm>
    </>
  )
}
