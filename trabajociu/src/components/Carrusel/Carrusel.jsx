import './Carrusel.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Boton from '../Boton/Boton';

// Nuevo código (solución):
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// Lista de productos de ejemplo
const productosDeEjemplo = [
  { id: 1, nombre: "Desayuno Suizo", precio: 199.99, imagenUrl: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg" },
  { id: 2, nombre: "Torta de chocolate", precio: 89.50, imagenUrl: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
  { id: 3, nombre: "Combo Sin Tacc", precio: 120.00, imagenUrl: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg" },
  { id: 4, nombre: "Ravioles Caseros", precio: 45.75, imagenUrl: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg" },
  { id: 5, nombre: "Cafe y medialunas", precio: 450.00, imagenUrl: "https://images.pexels.com/photos/2220618/pexels-photo-2220618.jpeg" },
  { id: 6, nombre: "Desayuno americano", precio: 65.20, imagenUrl: "https://images.pexels.com/photos/2136862/pexels-photo-2136862.jpeg" }, 
];

const Carrusel = () => {
  return (
    <div className="carrusel-contenedor">
      <h2 className="prodDest">Productos destacados</h2>
      <Swiper
        // Módulos que vas a usar
        modules={[Navigation, Pagination, Autoplay]}
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
        navigation
        pagination={{ clickable: true }}
        // Si no se especifica un breakpoint, este es el valor por defecto
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false, }} // Cambia de diapositiva cada 3 segundos
        loop={true} // Hace que el carrusel sea infinito
      >
        {/* Mapea tus productos para crear cada diapositiva */}
        {productosDeEjemplo.map((producto) => (
          <SwiperSlide key={producto.id}>
            <div className="producto-tarjeta">
              <img className="imagen-tarjeta" src={producto.imagenUrl} alt={producto.nombre} />
              <h3 className="nombre-tarjeta">{producto.nombre}</h3>
              <p className="precio-tarjeta">${producto.precio}</p>
              <Boton texto="Comprar" onClick={() => alert(`Compraste: ${producto.nombre}`)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
