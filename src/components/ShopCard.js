import './ShopCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopCard = (props) => {
  const { electronic, order, setOrder } = props;

  const createOrder = async () => {
    let newOrder = {
      electronics: [electronic]
    }
    let { data } = await axios.post("https://jem-backend.herokuapp.com/api/orders", newOrder)
    let { _id } = data;
    localStorage.setItem("orderId", _id);
  }

  const updateOrder = async (id) => {
    let newOrder = {...order};
    newOrder.electronics = [...newOrder.electronics, electronic];
    let { data } = await axios.put(`https://jem-backend.herokuapp.com/api/orders/${id}`, newOrder)
    console.log(data)
    setOrder(data)
  }

  const handleAddToCard = () => {
    let orderId = localStorage.getItem("orderId");
    if (!orderId) {
      createOrder();
    } else {
      updateOrder(orderId);
    }
  }
    return (
      <div className='card-div'>
        <div className='shop-card-image-container'>

        </div>
        <div className='shop-card-title'></div>
        <div className='shop-card-price'></div>
        <div className='add-to-cart'>
          <button onClick={handleAddToCard}>Add to cart</button>
        </div>
        </div>
    );
}

export default ShopCard;
