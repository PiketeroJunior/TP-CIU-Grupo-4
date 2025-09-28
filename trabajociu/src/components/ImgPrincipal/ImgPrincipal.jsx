import Boton from "../Boton/Boton";
import styles from "./ImgPrincipal.module.css"



export default function ImgPrincipal() {

  return (
      <div className={styles.contenedorInicio}>
        <h1 className={styles.titulo}>Luna & Granos Café</h1>
        <p>Momentos únicos en cada taza</p>
        <Boton texto="carta"></Boton>
      </div> /*agregar la ruta al boton*/
  )
}