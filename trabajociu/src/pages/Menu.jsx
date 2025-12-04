import SideBarBS from "../components/sidebars/SideBarBS"
import GridMenu from "../components/GridMenu/GridMenu"
import "./Menu.css"
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import Portada from "../components/Portada/Portada"
import { getProductos, getProductosPorCategoria } from "../services/api"

export default function Menu({ agregarAlCarrito}) {
  useEffect(() => {
    document.title = 'Menu - Luna & Granos Café'
  }, [])

  const [filtrosActivos, setFiltrosActivos] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let mounted = true
    const cargar = async () => {
      try {
        setLoading(true)
        setError("")
        const cats = Array.isArray(filtrosActivos) ? filtrosActivos : []
        let data
        if (cats.length === 1) {
          data = await getProductosPorCategoria(cats[0])
        } else {
          data = await getProductos()
          if (cats.length > 1) {
            const setCats = new Set(cats)
            data = data.filter(p => setCats.has(p.categoria) || setCats.has(p.subcategoria))
          }
        }
        if (mounted) setProductos(data)
      } catch (e) {
        console.error(e)
        if (mounted) setError('No se pudieron cargar los productos')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    cargar()
    return () => { mounted = false }
  }, [Array.isArray(filtrosActivos) ? filtrosActivos.join("|") : ""])

  const productosFiltrados =
    filtrosActivos.length === 0
      ? productos
      : productos.filter((p) => filtrosActivos.includes(p.categoria))

  return (
    <main>
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
          {loading && <p>Cargando productos...</p>}
          {error && <p className="text-danger">{error}</p>}
          <GridMenu 
          productos={productosFiltrados}
          agregarAlCarrito={agregarAlCarrito}
          />
          {!loading && productosFiltrados.length === 0 && <p>No hay productos para mostrar.</p>}
        </div>
      </div>
      </Container>
    </main>
  )
}
