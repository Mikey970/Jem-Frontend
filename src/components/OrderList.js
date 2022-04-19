import './OrderList.css';
import CheckoutCard from './CheckoutCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OrderList(props) {
  const { electronics, order, setOrder, setElectronics, id, setId, electronicInOrder, setElectronicInOrder } = props;

  // useEffect(() => {
  //   if (electronics && electronics[0] && electronics[0].Quantity) {
  //     electronics.forEach((electronic, i) => {
  //       map.set(electronic._id, (map.get(electronic._id) + 1 || 1));
  //     });
  
  //     let array = electronics.map((electronic) => {
  //       electronic.Quantity = map.get(electronic._id);
  //       return electronic
  //     })
  
  //     array = array.filter((electronic) => {
  //       if (map.get(electronic._id)) {
  //         map.delete(electronic._id);
  //         return electronic;
  //       }
  //     })
  //     filtered = true;
  //     setElectronics(array);
  //   }
  // })

  // console.log(filtered)

  const getOrders = async () => {
    // console.log(id, "id")
    let { data } = await axios.get("https://jem-backend.herokuapp.com/api/orders/" + (id || localStorage.getItem("orderId")))

    setOrder(data)
    setElectronics(order ? order.electronics : []);
    // electronics.map((e) => console.log(e, "fjhdjhhdjf"))
  }
  
  useEffect(() => {
    getOrders();
  })
  
  const isEmpty = order.electronics ? order.electronics.length <= 0: true;

  return !isEmpty ? (
    <div className="order-list">
      {order.electronics.map((electronic, index) => <CheckoutCard setElectronicInOrder = {setElectronicInOrder} electronicInOrder={electronic} setElectronics={setElectronics} order={order} setOrder={setOrder} setId={ setId } id={ id } key={ index }/>)}
    </div>
  ) : (<div className='order-list empty-cart'>
      <h3>NOTHING IS IN YOUR CART</h3>
  </div>)
} 
