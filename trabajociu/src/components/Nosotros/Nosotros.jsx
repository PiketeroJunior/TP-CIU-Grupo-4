import Portada from '../Portada/Portada';
import styles from './Nosotros.module.css';


// URLs de las imágenes obtenidas:
const MAIN_IMG = "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg";
const CLIENT_IMG_1 = "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg";
const CLIENT_IMG_2 = "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg";
const CLIENT_IMG_3 = "https://images.pexels.com/photos/722244/pexels-photo-722244.jpeg";
const CLIENT_IMG_4 = "https://images.pexels.com/photos/2102037/pexels-photo-2102037.jpeg";

function AboutUs() {
  return (
    <>
      <Portada texto="Quiénes somos"/>
      <section className={styles['about-us-container']} id="about-us">
        
        <div className={styles['main-content']}>
          
          <img 
            src={MAIN_IMG} 
            alt="Personas conversando en la cafetería" 
            className={styles['main-image']}
          />
          
          <div className={styles['text-block']}>
            <h3>Luna & Granos - Más que un café</h3>
            <p>
              En Luna & Granos, creemos que los mejores momentos suceden entre sorbos de café y buena compañía. Fundada en la pasión por el grano perfecto, nuestra misión es simple: crear un refugio donde la comunidad pueda reunirse, trabajar y relajarse, desde el amanecer hasta el anochecer.
            </p>
            <p>
              Seleccionamos nuestros granos de origen único y tostamos en pequeños lotes para garantizar un sabor y aroma inigualables. Somos un espacio de encuentro, inspirados en la calma de la noche y la energía de la mañana, sirviendo siempre con el corazón. ¡Te esperamos para compartir tu momento perfecto!
            </p>
          </div>
        </div>

        <h3 className={styles['gallery-title']}>Nuestros clientes lo viven así</h3>
        
        
        <div className={styles['client-gallery']}>
          <img src={CLIENT_IMG_1} alt="Cliente tomando café" className={styles['client-photo']} />
          <img src={CLIENT_IMG_2} alt="Cliente usando laptop con café" className={styles['client-photo']} />
          <img src={CLIENT_IMG_3} alt="Cliente sonriendo con café" className={styles['client-photo']} />
          <img src={CLIENT_IMG_4} alt="Pareja compartiendo café" className={styles['client-photo']} />
        </div>

      </section>

    </>

  );
}

export default AboutUs;