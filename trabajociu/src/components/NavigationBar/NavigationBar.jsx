import { NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavigationBar.module.css'
// import NavDropdown from 'react-bootstrap/NavDropdown'; Por si lo queremos usar mas adelante

function CollapsibleExample() {

	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
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
					<Nav>
						<Nav.Link href="#deets" className={styles["carrito"]}>
							<i className='bx bx-cart'></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
