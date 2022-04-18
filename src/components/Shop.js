import './Shop.css';
import ShopCards from './ShopCards.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Shop = (props) => {
  const { id, setId } = props;
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    let getOrder = async () => {
      let orderId = id;
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
  
  let consoleArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Game Console") {
     consoleArray.push(electronics[i])
   }
  }

  
 let laptopArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Laptop") {
    laptopArray.push(electronics[i])
   }
  }

    let earbudsArray = []
    for (let i = 0; i < electronics.length; i++){
      if (electronics[i].Type === "Earbuds") {
      
        console.log(window.location)
        
        
        
     }
    }

  

  const location = useLocation()
  console.log(location.pathname)

 useEffect(() => {
    if (window.location.href === 'http://localhost:3000/shop/tvs') {
     
      //setElectronics(TVarray)
     
    console.log(electronics)
  }
 
 });
  
 
  
  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/shop/consoles') {
       
      setElectronics(consoleArray)
     
      console.log(electronics)
    }
    });
 

  
  

  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/shop/laptops') {
     
      
        setElectronics(laptopArray)
        console.log(electronics)
      
    }
  },[window.location.href]);
  

 useEffect(() => {
  if (window.location.href === 'http://localhost:3000/shop/earbuds') {


 setElectronics(earbudsArray)
 console.log(electronics)
}

},);

 

 
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
