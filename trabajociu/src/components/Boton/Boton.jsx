import { Link } from "react-router-dom";
import styles from "./Boton.module.css"

export default function Boton({texto, to, onClick, type = "button"}) {
    if (to) {
        return (
            <Link to={to} className={styles.boton}>
                {texto}
            </Link>
        ) /*diferentes estilos de botón?*/
    }
    return (
        <button type={type} onClick={onClick} className={styles.boton}>
            {texto}
        </button>
    )
}