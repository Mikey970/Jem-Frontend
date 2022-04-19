import './Nav.css';
import { Container, Navbar, NavDropdown, Nav, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar = () => {
    return (
        <Navbar expand='sm' sticky="top" variant="dark">
        <Nav className="me-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavDropdown title="Shop">
        <NavDropdown.Item href="/shop/tv">TVs</NavDropdown.Item>
        <NavDropdown.Item href="/shop/consoles">Consoles</NavDropdown.Item>
        <NavDropdown.Item href="/shop/phones">Phones</NavDropdown.Item>
        <NavDropdown.Item href="/shop/laptops">PCs/Laptops</NavDropdown.Item>
        <NavDropdown.Item href="/shop/earbuds">Earbuds</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar>
    );
}

export default NaviBar;

