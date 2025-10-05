import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/gridMenu/gridMenu"
import { productos } from "../data/productos"
import "./Menu.css"
import { Container } from "react-bootstrap"
import { useState } from "react"


export default function Menu() {

  const [filtrosActivos, setFiltrosActivos] = useState([])

  // Filtrar productos según filtros activos
  const productosFiltrados =
    filtrosActivos.length === 0
      ? productos
      : productos.filter((p) => filtrosActivos.includes(p.subcategoria))

  return (
    <>
      <Container>
      <div className="contenedor">
        <div className="sidebar">
          <SideBarBS
            filtrosActivos={filtrosActivos}
            setFiltrosActivos={setFiltrosActivos}
          />
        </div>
        <div className="grid">
          <GridMenu productos={productosFiltrados}/>
        </div>
      </div>
      </Container>
    </>
  )
}
