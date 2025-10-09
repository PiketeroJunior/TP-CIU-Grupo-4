import styles from "./Portada.module.css"

export default function Portada({texto, variant}) {
  const clases = `${styles.portada} ${styles[variant]}`
  
  return (
    <section className={clases}>
        <h1 className={styles.titulo}>{texto}</h1>
    </section>
  )
}