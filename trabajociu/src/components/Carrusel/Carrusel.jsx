import './Carrusel.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Boton from '../Boton/Boton';
import {productos} from '../../data/productos';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Carrusel = ({agregarAlCarrito}) => {
  
  const productosAleatorios = structuredClone(productos)
  .sort(() => Math.random() - 0.5)
  .slice(0, 6);

  return (
    <section className="carrusel-contenedor">
      <h2 className="prodDest">Productos destacados</h2>
      <Swiper
        
        modules={[Autoplay]}
        
        breakpoints={{
          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false, }} 
        loop={true} 
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

    </section>
  );
};

export default Carrusel;
