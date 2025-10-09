import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardMenu from '../CardMenu/CardMenu';

export default function GridMenu({ productos, agregarAlCarrito }) {
  return (
    <section>
      <Container>
        <Row>
          {productos.map((prod, idx) => (
            <Col
              key={idx}
              xs={12} sm={6} md={4} 
              className="mb-4"
            >
              <CardMenu
                prod={prod}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

