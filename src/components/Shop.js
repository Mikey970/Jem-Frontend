import './Shop.css';
import ShopCards from './ShopCards.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    let getOrder = async () => {
      let orderId = localStorage.getItem("orderId");
      if (orderId) {
        let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
        setOrder(data);
      }

    }
    getOrder()
    let getElectronics = async () => {
      let { data } = await axios.get("https://jem-backend.herokuapp.com/api/electronics");
      setElectronics(data);
    }
    getElectronics();
  }, []);

  return (
      <div className='shop-div'>
      <div className='sidebar-div'>
      <button className='tv-btn'>TVs</button>
      <button className='consoles-btn'>Consoles</button>
      <button className='phones-btn'>Phones</button>
      <button className='pcs-btn'>PCs/Laptops</button>
      <button className='headphones-btn'>Headphones</button>
      </div>
      <ShopCards electronics={electronics} order={order} setOrder={ setOrder }/>
      </div>
  )
}

export default Shop;
