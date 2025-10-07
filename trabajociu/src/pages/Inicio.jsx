import ImgPrincipal from "../components/ImgPrincipal/ImgPrincipal" 
import Carrusel from "../components/Carrusel/Carrusel"
import { useEffect } from "react"


export default function Inicio() {
  useEffect(() => {
    document.title = 'Inicio - Luna & Granos Café'
  }, []);

  return (
    <>
        <ImgPrincipal/>
        <Carrusel/>
    </>
  )
}
