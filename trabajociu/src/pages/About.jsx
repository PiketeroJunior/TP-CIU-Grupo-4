import { useEffect } from 'react';
import Nosotros from '../components/Nosotros/Nosotros'

export default function About() {
  useEffect(() => {
      document.title = 'Nosotros - Luna & Granos Café'
    }, []);
  return (
    <>
      <Nosotros />
    </>
  )
}
