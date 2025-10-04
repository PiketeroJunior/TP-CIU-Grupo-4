import { Modal } from "react-bootstrap";
import Boton from "../Boton/Boton"
import styles from "./ModalConfirm.module.css"
import { useNavigate } from "react-router-dom";

export default function ModalConfirm({mostrar, onClose, titulo, mensaje, textoBoton, variantBoton, to}) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClose) onClose()
    if (to) navigate(to)
  }
  
  return (
    <Modal show={mostrar} onHide={onClose} backdrop="static" keyboard={false}>
      <div className={styles.modal}>
        <Modal.Header>
            <Modal.Title className={styles.texto}>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Boton texto={textoBoton} variant={variantBoton} onClick={handleClick}></Boton>
        </Modal.Footer>
      </div>
    </Modal>
  )
}