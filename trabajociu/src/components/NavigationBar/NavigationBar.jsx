import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavigationBar.module.css'
import Carrito from '../../pages/Carrito';
import CartButton from '../CartButton/CartButton';
// import Carrito from '../../pages/Carrito';
import logo from '../../assets/Logo luna cafe.png'
// import NavDropdown from 'react-bootstrap/NavDropdown'; Por si lo queremos usar mas adelante

function NavigationBar({ carrito, valorTotal, cantTotal, setCarrito, setValorTotal, setCantTotal }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<div className={styles.navbar}>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand as={NavLink} to="/" className={styles.texto}>Luna & Granos Café</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/" className={styles.secciones}>Home</Nav.Link>
							<Nav.Link as={NavLink} to="/menu" className={styles.secciones}>Menu</Nav.Link>
							<Nav.Link as={NavLink} to="/reservar" className={styles.secciones}>Reservar</Nav.Link>
							<Nav.Link as={NavLink} to="/about" className={styles.secciones}>Nosotros</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Nav>
				{/* <Button variant="light" onClick={handleShow}>
					<i className='bx bx-cart' style={{ fontSize: '1.5rem' }}>{cantTotal > 0 ? cantTotal : ''}</i>
				</Button> */}
				<CartButton count={cantTotal} onClick={handleShow} />
				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={styles.carritoTitulo}>Carrito</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Carrito
							carrito={carrito}
							valorTotal={valorTotal}
							cantTotal={cantTotal}
							setCarrito={setCarrito}
							setValorTotal={setValorTotal}
							setCantTotal={setCantTotal}
						/>
					</Offcanvas.Body>
				</Offcanvas>
			</Nav>
		</div>
	);
}

export default NavigationBar;

