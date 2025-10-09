
import Portada from '../components/Portada/Portada'
import ContactoForm from '../components/Contacto/ContactoForm'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

export default function Contacto() {
  useEffect(() => {
    document.title = 'Contacto - Luna & Granos Café'
  },[]);
  return (
    <main>
        <Portada texto="Contacto" variant="contacto"></Portada>
        <Container>
          <ContactoForm/>
        </Container>
    </main>
  )
}
