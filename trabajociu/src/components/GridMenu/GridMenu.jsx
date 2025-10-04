import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
            <Card className="h-100">
              <div style={{ overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={prod.imagen} 
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }} 
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{prod.titulo}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {prod.descripcion}
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

