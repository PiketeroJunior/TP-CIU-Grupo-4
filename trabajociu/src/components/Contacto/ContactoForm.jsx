import Boton from "../Boton/Boton";
import styles from "./ContactoForm.module.css"
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalConfirm from "../ModalConfirm/ModalConfirm";

export default function ContactoForm() {

    const [mostrarExito, setMostrarExito] = useState(false);

    const [data, setData] = useState({
        nombre: "",
        email: "",
        consulta:""
    })

    function manejarCambio(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const manejarEnvio = (e) => {
        e.preventDefault()
        
        if(error) return
        setMostrarExito(true)
    }

    const [error, setError] = useState("")
    const [intentos, setIntentos] = useState(0)

    useEffect(() => {
        if (intentos > 0) {
            const permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚñÑ "

            if(!data.nombre.trim()) {
                setError("El nombre no puede ser vacío.")
            } else if([... data.nombre].some(letra => !permitidos.includes(letra))) {
                setError("El nombre no puede contener caracteres especiales.");
            } else {
                setError("")
            }
        }
   }, [data.nombre, intentos])

  return (
    <>
        <div className={styles.aclaracion}>
            <p>Este formulario es solo para consultas.</p>
            <p>Si querés hacer una reserva, podés hacerlo seleccionando la opción "<span className={styles.resaltar}>Reservar</span>" en la barra de navegación.</p>
        </div>
    
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


                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={styles.texto}>Consulta</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Consulta" value={data.consulta} onChange={manejarCambio} name="consulta" required/>
                    </Form.Group>

                    

                    <div className={styles.div}>
                        <Boton type="submit" texto="Enviar"></Boton>
                    </div>
                </Form>
            </div>
        
        <ModalConfirm
        isOpen={mostrarExito}
        titulo="¡Consulta enviada con éxito!"
        mensaje="Se envió la consulta. Te responderemos a la brevedad."
        onClose={() => setMostrarExito(false)}
        textoBoton="ir al inicio"
        variantBoton="secundario"
        to="/"
        ></ModalConfirm>
    </>
  )
}
