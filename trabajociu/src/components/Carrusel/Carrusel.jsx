import './Carrusel.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Boton from '../Boton/Boton';
import {productos} from '../../data/productos';

// Nuevo código (solución):
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Carrusel = ({agregarAlCarrito}) => {
  
  const productosAleatorios = structuredClone(productos)
  .sort(() => Math.random() - 0.5)
  .slice(0, 6);

  return (
    <div className="carrusel-contenedor">
      <h2 className="prodDest">Productos destacados</h2>
      <Swiper
        // Módulos que vas a usar
        modules={[Autoplay]}
        // Configuración para que el carrusel sea responsive
        breakpoints={{
          // Cuando la pantalla sea >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Cuando la pantalla sea >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // Cuando la pantalla sea >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        // Configuración para la navegación y paginación
        //navigation
        // pagination={{ clickable: false }}
        // Si no se especifica un breakpoint, este es el valor por defecto
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false, }} // Cambia de diapositiva cada 3 segundos
        loop={true} // Hace que el carrusel sea infinito
      >

      
        
        {productosAleatorios.map((producto) => (
          <SwiperSlide key={producto.id}>
            <div className="producto-tarjeta">
              <img className="imagen-tarjeta" src={producto.imagen} alt={producto.titulo} />
              <h3 className="nombre-tarjeta">{producto.titulo}</h3>
              <p className="precio-tarjeta">${producto.precio}</p>
              <Boton texto="Comprar" onClick={() => agregarAlCarrito(producto)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Carrusel;
