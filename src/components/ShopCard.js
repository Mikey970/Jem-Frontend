import './ShopCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopCard = (props) => {
  const { electronic, order, setOrder, setId, id } = props;
  const createOrder = async () => {
    let newOrder = {
      electronics: [electronic],
      total: electronic.Price
    }
    let { data } = await axios.post("https://jem-backend.herokuapp.com/api/orders", newOrder)
    let { _id } = data;
    localStorage.setItem("orderId", _id);
    setId(_id);
    setOrder(data);
  }

  const getOrder = async (id) => {
    let orderId = id;
    if (orderId) {
      let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
      setOrder(data);
    }
  }

  useEffect(() => {
    getOrder(id)
  }, [])

  const updateOrder = async (id) => {
    getOrder(id);
    if (order) {
      let newOrder = { ...order, total: order.total + electronic.Price };
      console.log([...newOrder.electronics, electronic], "new elec")
      newOrder.electronics = [...newOrder.electronics, electronic];
      let { data } = await axios.put(`https://jem-backend.herokuapp.com/api/orders/${id}`, newOrder)
      console.log(data, "data")
      setOrder(data)
    }
  }

  const handleAddToCard = (event) => {
    event.target.click();
    let orderId = id;
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
