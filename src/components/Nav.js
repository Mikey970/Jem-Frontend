import './Nav.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
    return (
        <div className='navbar'>
        <div className='btns-div'>
        <button className='home-btn'>Home</button>
        <button className='cart-btn'>Cart</button>
        <Dropdown>
        <Dropdown.Toggle variant='dark' id='dropdown-shop'>
        Shop
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="/#">TVs</Dropdown.Item>
        <Dropdown.Item href="/#">Consoles</Dropdown.Item>
        <Dropdown.Item href="/#">Phones</Dropdown.Item>
        <Dropdown.Item href="/#">PCs/Laptops</Dropdown.Item>
        <Dropdown.Item href="/#">Headphones</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        </div>
    );
}

export default Nav;

