import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/gridMenu/gridMenu"
import { productos } from "../data/productos"
import "./Menu.css"
import { Container } from "react-bootstrap"

export default function Menu() {
  return (
    <>
      <Container>
      <div className="contenedor">
        <div className="sidebar">
          <SideBarBS/>
        </div>
        <div className="grid">
          <GridMenu productos={productos}/>
        </div>
      </div>
      </Container>
    </>
  )
}
