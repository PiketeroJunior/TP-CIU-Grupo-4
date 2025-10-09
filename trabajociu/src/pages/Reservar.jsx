import { useEffect } from 'react';
import Formulario from '../components/Formulario/Formulario';
import Portada from '../components/Portada/Portada';
import { Container } from 'react-bootstrap';

export default function Reservar() {
  useEffect(()=> {
    document.title = 'Reservar - Luna & Granos Café'
  })
  return (
    <main>
      <Portada texto="Hacé tu reserva" variant="reserva"/>
      <Container>
        <Formulario/>
      </Container>
    </main>
  )
}
