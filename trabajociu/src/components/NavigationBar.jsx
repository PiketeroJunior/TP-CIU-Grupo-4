import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'; Por si lo queremos usar mas adelante

function CollapsibleExample() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
			<Container>
				<Navbar.Brand href="#home">Luna & Granos - Café</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link to="/">Home</Nav.Link>
						<Nav.Link to="/menu">Menú</Nav.Link>
						<Nav.Link to="/contacto">Nosotros</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Carrito</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
