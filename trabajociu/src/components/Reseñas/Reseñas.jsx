import styles from'./Reseñas.module.css'; 
import comentarios from '../../data/comentarios.js'; 
import Rating from './Rating.jsx'; 
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const Reseñas = () => {
  return (
    <div className={styles["comentarios-carrusel-contenedor"]}>
      <h2 className={styles["titulo-comentarios"]}>Nuestros Clientes Felices</h2>
      
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        loop={true}
      >
        {comentarios.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles["comentario-tarjeta"]}>
              <div className={styles["header-tarjeta"]}>
                <img className={styles["avatar"]} src={item.avatar} alt={item.name} />
                <div className={styles["info"]}>
                  <h3 className={styles["nombre-cliente"]}>{item.name}</h3>
                  <p className={styles["rol-cliente"]}>{item.role}</p>
                </div>
                {/* ⭐️ Usa el componente Rating y le pasa la puntuación ⭐️ */}
                <Rating score={item.score} /> 
              </div>
              <p className={styles["review-texto"]}>{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reseñas;