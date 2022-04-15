import './Nav.css';

const Nav = () => {
    return (
        <div className='navbar'>
        <div className='btns-div'>
        <button className='home-btn'>Home</button>
        <button className='Shop-btn'>Shop</button>
        <div className='dropdown'>
        <select>
        <option value="emil">Emil</option>
        <option value="Random">Random</option>
        <option value="emil">Emil</option>
        </select>
        </div>
        <button className='cart-btn'>Cart</button>
        </div>
        </div>
    );
}

export default Nav;

