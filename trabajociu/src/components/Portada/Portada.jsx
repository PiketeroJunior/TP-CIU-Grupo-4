import styles from "./Portada.module.css"

export default function Portada({texto}) {
  return (
    <div className={styles.portada}>
        <h1 className={styles.titulo}>{texto}</h1>
    </div>
  )
}