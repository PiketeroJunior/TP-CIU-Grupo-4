import {useNavigate } from "react-router-dom";
import styles from "./Boton.module.css"

export default function Boton({texto, to, onClick, type = "button", variant = "primario"}) {
    const clases = `${styles.boton} ${styles[variant]}`
    const navigate = useNavigate()

    const handleClick = () => {
        if(to) navigate(to)
        if(onClick) onClick()
    }

    return (
        <button type={type} onClick={handleClick} className={clases}>
            {texto}
        </button>
    )
}