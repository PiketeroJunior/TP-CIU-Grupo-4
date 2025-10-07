import styles from "./Portada.module.css"

export default function Portada({texto, variant}) {
  const clases = `${styles.portada} ${styles[variant]}`
  
  return (
    <div className={clases}>
        <h1 className={styles.titulo}>{texto}</h1>
    </div>
  )
}