
import Portada from '../components/Portada/Portada'
import ContactoForm from '../components/Contacto/ContactoForm'
import { useEffect } from 'react'

export default function Contacto() {
  useEffect(() => {
    document.title = 'Contacto - Luna & Granos Café'
  },[]);
  return (
    <div>
        <Portada texto="Contacto"></Portada>
        <ContactoForm/>
    </div>
  )
}
