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
							<Nav.Link as={NavLink} to="/">Home</Nav.Link>
							<Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
							<Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
							<Nav.Link as={NavLink} to="/about">Nosotros</Nav.Link>
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
