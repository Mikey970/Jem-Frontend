import './Nav.css';
import { Container, Navbar, NavDropdown, Nav, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar = (props) => {
    let { setType, type, electronics } = props;

    
    return (
        <Navbar expand='sm' sticky="top" variant="dark">
        <Nav className="me-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavDropdown title="Shop">
        <Link className="drop-link" to="/shop/tv">TVs</Link>
        <Link className="drop-link" to="/shop/consoles">Consoles</Link>
        <Link className="drop-link" to="/shop/phones">Phones</Link>
        <Link className="drop-link" to="/shop/laptops">PCs/Laptops</Link>
        <Link className="drop-link" to="/shop/earbuds">Earbuds</Link>
        </NavDropdown>
        </Nav>
        </Navbar>
    );
}

export default NaviBar;

