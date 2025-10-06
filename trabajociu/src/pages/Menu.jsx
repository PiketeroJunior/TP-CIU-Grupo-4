import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/gridMenu/gridMenu"
import { productos } from "../data/productos"
import "./Menu.css"
import { Container } from "react-bootstrap"
import { useState } from "react"


export default function Menu({carrito, setCarrito, valorTotal, setValorTotal, cantTotal, setCantTotal}) {
  //Logica de filtros
  const [filtrosActivos, setFiltrosActivos] = useState([])

  // Filtrar productos según filtros activos
  const productosFiltrados =
    filtrosActivos.length === 0
      ? productos
      : productos.filter((p) => filtrosActivos.includes(p.subcategoria))

  //Logica del carrito 

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
