import styles from "./Footer.module.css"


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles["datos-footer"]}>
                <div className={styles["item-footer"]}>
                    <div className={styles["border-icon"]}>
                        <a href="mailto:facundoroman.gimenez@estudiantes.unahur.edu.ar">
                            <i className='bx bx-envelope'></i>
                        </a>
                    </div>
                    <p className={styles["texto-footer"]}>Enviá tu CV</p>
                </div>
                <div className={styles["item-footer"]}>
                    <div className={styles["border-icon"]}>
                        <a href="mailto:facundoromangimenez@gmail.com">
                            <i className='bx bxl-gmail'></i>
                        </a>
                    </div>
                    <p className={styles["texto-footer"]}>Consultas</p>
                </div>
                <div className={styles["item-footer"]}>
                    <div className={styles["border-icon"]}>
                        <a href="https://api.whatsapp.com/send?phone=541135932853">
                            <i className='bx bxl-whatsapp'></i>
                        </a>
                    </div>
                    <p className={styles["texto-footer"]}>Reserva</p>
                </div>
                <div className={styles["item-footer"]}>   
                    <div className={styles["border-icon"]}>
                        <a href="https://www.instagram.com/luna_coffee_brunch/?hl=es">
                            <i className='bx bxl-instagram'></i>
                        </a>
                    </div>
                    <p className={styles["texto-footer"]}>Seguinos</p>
                </div> 
            </div>
            <p className={styles["texto-sobre-linea"]}>Encontranos en Tte. Origone 123 - Hurlingham</p>
            <h2 className={styles["titulo-final"]}>&copy; 2025 Grupo 4 CIU</h2>
        </footer>
    )
}