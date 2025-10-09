import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavigationBar.module.css'
import Carrito from '../Carrito/Carrito';
import CartButton from '../CartButton/CartButton';

import logo from '../../assets/Logo luna cafe.png'


function NavigationBar({ carrito, valorTotal, cantTotal, setCarrito, setValorTotal, setCantTotal }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<div className={styles.navbar}>
			<Container>
				<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
					<Container>
						<Navbar.Brand as={NavLink} to="/" className="order-1">
							<img src={logo} alt="Luna Café" className={styles.logo} />
						</Navbar.Brand>

						<div className="d-flex align-items-center order-2 order-lg-3 ms-2">
							<Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2 d-lg-none" />
							<CartButton count={cantTotal} onClick={handleShow} />
						</div>


						<Navbar.Collapse id="responsive-navbar-nav" className="order-3 order-lg-2 w-100">
							<Nav className="me-auto">
								<Nav.Link as={NavLink} to="/" className={styles.secciones}>Home</Nav.Link>
								<Nav.Link as={NavLink} to="/menu" className={styles.secciones}>Menú</Nav.Link>
								<Nav.Link as={NavLink} to="/reservar" className={styles.secciones}>Reservar</Nav.Link>
								<Nav.Link as={NavLink} to="/about" className={styles.secciones}>Nosotros</Nav.Link>
								<Nav.Link as={NavLink} to="/contacto" className={styles.secciones}>Contacto</Nav.Link>
							</Nav>
						</Navbar.Collapse>

					</Container>
				</Navbar>
			</Container>

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
						handleClose={handleClose}
					/>
				</Offcanvas.Body>
			</Offcanvas>



		</div>
	);
}

export default NavigationBar;

