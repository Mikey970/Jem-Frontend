import './Shop.css';
import ShopCards from './ShopCards.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Shop = (props) => {
  const { id, setId, setType, type } = props;
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState(null);

  let getElectronics = async () => {
    let { data } = await axios.get("https://jem-backend.herokuapp.com/api/electronics");

    let filteredData = data.filter((electronic) => {
      return electronic.Type === type
    })

    setElectronics(filteredData);
  }
  
  useEffect(() => {
    let getOrder = async () => {
      let orderId = id;
      if (orderId) {
        let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
        setOrder(data);
      }

    }
    getOrder()
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
      <ShopCards electronics={electronics} order={order} setOrder={ setOrder } id={ id } setId={ setId }/>
      </div>
  )
}

export default Shop;
