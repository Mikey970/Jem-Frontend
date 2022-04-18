import './Nav.css';
import { Container, Navbar, NavDropdown, Nav, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar = () => {
    return (
        //<div className='navbar'>
        //<div className='btns-div'>
        //<button className='home-btn'><Link to="/">Home</Link></button>
        //<button className='cart-btn'><Link to="/cart">Cart</Link></button>
        //<Dropdown>
        //<Dropdown.Toggle variant='primary' id='dropdown-shop'>
        //Shop
        //</Dropdown.Toggle>
        //<Dropdown.Menu>
        //<Dropdown.Item><Link to="/shop">TVs</Link></Dropdown.Item>
        //<Dropdown.Item><Link to="/shop">Consoles</Link></Dropdown.Item>
        //<Dropdown.Item><Link to="/shop">Phones</Link></Dropdown.Item>
        //<Dropdown.Item><Link to="/shop">PCs/Laptops</Link></Dropdown.Item>
        //<Dropdown.Item><Link to="/shop">Headphones</Link></Dropdown.Item>
        //</Dropdown.Menu>
        //</Dropdown>
        //</div>
        //</div>
        <Navbar expand='sm' sticky="top" variant="dark">
        <Nav className="me-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavDropdown title="Shop">
        <NavDropdown.Item href="/shop/tvs">TVs</NavDropdown.Item>
        <NavDropdown.Item href="/shop/consoles">Consoles</NavDropdown.Item>
        <NavDropdown.Item href="/shop/phones">Phones</NavDropdown.Item>
        <NavDropdown.Item href="/shop/laptops">PCs/Laptops</NavDropdown.Item>
        <NavDropdown.Item href="/shop/headphones">Consoles</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar>
    );
}

export default NaviBar;

