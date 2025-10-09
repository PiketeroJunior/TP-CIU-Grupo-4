import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/GridMenu/GridMenu"
import { productos } from "../data/productos"
import "./Menu.css"
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import Portada from "../components/Portada/Portada"


export default function Menu({ agregarAlCarrito}) {
  
  useEffect(() => {
    document.title = 'Menu - Luna & Granos Café'
  })

  const [filtrosActivos, setFiltrosActivos] = useState([])

  
  const productosFiltrados =
    filtrosActivos.length === 0
      ? productos
      : productos.filter((p) => filtrosActivos.includes(p.subcategoria))

  

  return (
    <>
      <Portada texto="Menú" variant="menu"/>
      <Container>
      <div className="contenedor">
        <div className="sidebar">
          <SideBarBS
            filtrosActivos={filtrosActivos}
            setFiltrosActivos={setFiltrosActivos}
          />
        </div>
        <div className="grid">
          <GridMenu 
          productos={productosFiltrados}
          agregarAlCarrito={agregarAlCarrito}
          />
        </div>
      </div>
      </Container>
    </>
  )
}
