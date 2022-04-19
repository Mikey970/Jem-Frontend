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
    console.log("create")
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

  const updateOrder = async (id) => { // incorperate orderElectronics
    getOrder(id);
    if (order) {
      let orderElectronic =
        await axios.get(
          `https://jem-backend.herokuapp.com/api/orderElectronics/${order._id}/${electronic._id}`
        )
      let orderElectronicData = orderElectronic.data;
      if (!orderElectronicData) {
        let newOrderElectronic = await axios.post(
          `https://jem-backend.herokuapp.com/api/orderElectronics/`, {
          orderId: order._id,
          electronicId: electronic._id,
          quantity: 1
        })
        await axios.put(`https://jem-backend.herokuapp.com/api/orders/${order._id}`, {
          ...order,
          electronics: [newOrderElectronic.data]
        })
      } else {
        console.log("puttung")
        let newOrderElectronic = await axios.put(
          `https://jem-backend.herokuapp.com/api/orderElectronics/${order._id}/${electronic._id}`, {
          ...orderElectronicData, quantity: (orderElectronicData.quantity || 0) + 1
        })
        let orderElectronicId = newOrderElectronic.data._id;
        // await axios.put(
        //   `https://jem-backend.herokuapp.com/api/orders/${order._id}`, {
        //   ...orderElectronic, quantity: orderElectronic.quantity + 1
        // })
        console.log(newOrderElectronic, orderElectronicId, "putted")
        // await axios.put(`https://jem-backend.herokuapp.com/api/orderElectronics/${order._id}`, {
        //   ...order,
        //   electronics: [newOrderElectronic]
        // })
      }
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
    // console.log(electronic)
    return (
      <div className='card-div'>
        <img 
        src={electronic.Image}
        />
        <div className='shop-card-title'>{electronic.Model}</div>
        <div className='shop-card-price'>${electronic.Price}</div>
        <div className='add-to-cart'>
          <button onClick={handleAddToCard}>Add to cart</button>
        </div>
        </div>
    );
}

export default ShopCard;
