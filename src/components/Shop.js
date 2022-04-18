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

  let TVarray = [];
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "TV") {
     TVarray.push(electronics[i])
   }
  }
  console.log(TVarray)
  let consoleArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Game Console") {
     consoleArray.push(electronics[i])
   }
  }
  console.log(consoleArray)

  let laptopArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Laptop") {
    laptopArray.push(electronics[i])
   }
  }
  console.log(laptopArray)

  let earbudsArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Earbuds") {
    earbudsArray.push(electronics[i])
   }
  }
  console.log(earbudsArray)

 

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
