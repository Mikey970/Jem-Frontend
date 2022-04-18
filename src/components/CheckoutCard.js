import './CheckoutCard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CheckoutCard(props) {
  const { electronic, order, setOrder, setElectronics } = props;
  const [inArray, setInArray] = useState(true);
  
  const updateOrder = async (isIncrement) => {
    let count = 0;
    console.log(electronic._id, !isIncrement)
    const filteredElectronics = !isIncrement ? order.electronics.filter((e) => {
      if (e._id === electronic._id) {
        count++;
        if (count === 1) return false;
      }
      return true;
    }) : [...order.electronics, electronic];
    if (order.electronics.length === filteredElectronics.length) {
      setInArray(false);
    } else {
      const newOrder = { ...order, total: isIncrement ? order.total + electronic.Price : order.total - electronic.Price };
      newOrder.electronics = filteredElectronics;
      let { data } = await axios.put(`https://jem-backend.herokuapp.com/api/orders/${order._id}`, newOrder);
      setOrder(data);
      console.log(data, filteredElectronics.length)
      setElectronics(data.electronics);
    }
    console.log(filteredElectronics)
    
  }
  const deleteOrder = async () => {
    await axios.delete(`https://jem-backend.herokuapp.com/api/orders/${order._id}`);
    localStorage.removeItem('orderId');
  }
  const increment = () => {
    updateOrder(true);
  }
  
  const decrement = () => {
    updateOrder(false);
    if (order.total <= 0) {
      deleteOrder();
    }
  }
  
  return inArray ? (
    <div className="checkout-card">
      <div className='checkout-card-image'>
        image
      </div>
      <div className="checkout-card-non-image">
        <div>
          <div>Title</div>
          <div>Price</div>
        </div>
        <div className='quantity-container'>
          <div>Quantity</div>
          <div className='incro-decro-buttons'>
            <button onClick={increment} className='plus'>+</button>
            <button onClick={decrement} className='minus'>-</button>
          </div>
        </div>
      </div>
    </div>
  ) : <div></div>
}