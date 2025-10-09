import { useState } from 'react'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Reservar from "./pages/Reservar";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contacto from './pages/Contacto';
import Footer from "./components/footer/Footer"
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [carrito, setCarrito] = useState([])
  const [valorTotal, setValorTotal] = useState(0)
  const [cantTotal, setCantTotal] = useState(0)


  
    function agregarAlCarrito (producto) {
      const itemEnCarrito = carrito.find(item => item.id === producto.id)
      if(itemEnCarrito){
        const nuevosProductos = carrito.map(item => 
          item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item
        )
        setCarrito(nuevosProductos)
      }else{
        setCarrito([...carrito, producto])
      }
      setCantTotal(cantTotal + producto.cantidad)
      setValorTotal(valorTotal + producto.precio)
    }

  return (
    <>
      <NavigationBar
        carrito={carrito}
        valorTotal={valorTotal}
        cantTotal={cantTotal}
        setCarrito={setCarrito}
        setValorTotal={setValorTotal}
        setCantTotal={setCantTotal}
      />
      <Routes>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/menu" element={<Menu
          agregarAlCarrito={agregarAlCarrito}
          />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
