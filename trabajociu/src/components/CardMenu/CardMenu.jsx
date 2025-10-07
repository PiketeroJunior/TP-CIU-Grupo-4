import { Card } from "react-bootstrap"
import Boton from '../Boton/Boton';

export default function CardMenu({ prod, agregarAlCarrito }) {

  return (
    <div>
      <Card className="h-100">
        <div style={{ overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={prod.imagen}
            style={{ objectFit: 'cover', height: '200px', width: '100%' }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{fontFamily:"Libre Baskerville, serif", color:"#4f493d", fontWeight:"bold"}}>{prod.titulo}</Card.Title>
          <Card.Text className="flex-grow-1" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
            {prod.descripcion}
          </Card.Text>
          <Card.Text style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
            <strong>
              {typeof prod.precio === "number" && !isNaN(prod.precio)
                ? `$${prod.precio.toFixed(2)}`
                : "Precio no disponible"}
            </strong>
          </Card.Text>
          <Boton texto="Agregar al carrito" onClick={() => agregarAlCarrito(prod)} />
        </Card.Body>
      </Card>
    </div>
  )
}
