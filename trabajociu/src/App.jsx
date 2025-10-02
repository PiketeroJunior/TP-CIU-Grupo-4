import NavigationBar from "./components/NavigationBar";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Menu from "./pages/Menu";
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="*" element={<Navigate to="/"/>}/> {/* Podemos quizás hacer una pagina de error, u otra*/ }
      </Routes>
    </>
  );
}

export default App
