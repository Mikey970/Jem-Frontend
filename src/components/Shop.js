import './Shop.css';
import ShopCards from './ShopCards.js';

const Shop = () => {

    return (
        <div className='home-div'>
        <div className='sidebar-div'>
        <button className='tv-btn'>TVs</button>
        <button className='consoles-btn'>Consoles</button>
        <button className='phones-btn'>Phones</button>
        <button className='pcs-btn'>PCs/Laptops</button>
        <button className='headphones-btn'>Headphones</button>
        </div>
        <ShopCards />
        </div>
    )
}

export default Shop;
