import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardMenu from '../CardMenu/CardMenu';

export default function GridMenu({ productos }) {
  return (
     <Container>
      <Row>
        {productos.map((prod, idx) => (
          <Col 
            key={idx} 
            xs={12} sm={6} md={4}  // responsive: 1 col en xs, 2 en sm, 3 en md y más
            className="mb-4"
          >
           <CardMenu prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

