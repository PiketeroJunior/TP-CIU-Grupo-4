import { useEffect } from 'react';
import Nosotros from '../components/Nosotros/Nosotros'
import Portada from '../components/Portada/Portada';


export default function About() {
  useEffect(() => {
      document.title = 'Nosotros - Luna & Granos Café'
    }, []);
  return (
    <>
      <Portada texto="Quiénes somos" variant="nosotros"/>
      <Nosotros />
    </>
  )
}
