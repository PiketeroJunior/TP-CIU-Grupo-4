import { useState } from 'react'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Reservar from "./pages/Reservar";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/footer/Footer"
import Carrito from './pages/Carrito'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [carrito, setCarrito] = useState([])
  const [valorTotal, setValorTotal] = useState(0)
  const [cantTotal, setCantTotal] = useState(0)

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
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/menu" element={<Menu
          carrito={carrito}
          valorTotal={valorTotal}
          cantTotal={cantTotal}
          setCarrito={setCarrito}
          setValorTotal={setValorTotal}
          setCantTotal={setCantTotal}
        />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Podemos quizás hacer una pagina de error, u otra*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App
