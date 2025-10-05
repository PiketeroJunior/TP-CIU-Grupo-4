import NavigationBar from "./components/NavigationBar/NavigationBar";
import Reservar from "./pages/Reservar";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contacto from './pages/Contacto';
import Footer from "./components/footer/Footer"
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/reservar" element={<Reservar/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contacto"element={<Contacto/>}></Route>
        <Route path="*" element={<Navigate to="/"/>}/> {/* Podemos quizás hacer una pagina de error, u otra*/ }
      </Routes>
      <Footer/>
    </>
  );
}

export default App
