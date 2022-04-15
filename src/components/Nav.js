import './Nav.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
        <div className='btns-div'>
        <button className='home-btn'><Link to="/">Home</Link></button>
        <button className='cart-btn'><Link to="/cart">Cart</Link></button>
        <Dropdown>
        <Dropdown.Toggle variant='dark' id='dropdown-shop'>
        Shop
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item><Link to="/shop">TVs</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/shop">Consoles</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/shop">Phones</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/shop">PCs/Laptops</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/shop">Headphones</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        </div>
    );
}

export default Nav;

