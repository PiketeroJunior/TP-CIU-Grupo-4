import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/gridMenu/gridMenu"
import { productos } from "../data/productos"
import "./Menu.css"

export default function Menu() {
  return (
    <>
      <div>Menu</div>
      <div className="contenedor">
        <div className="sidebar">
          <SideBarBS/>
        </div>
        <div className="grid">
          <GridMenu productos={productos}/>
        </div>
      </div>
    </>
  )
}
