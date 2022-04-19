import './OrderList.css';
import CheckoutCard from './CheckoutCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OrderList(props) {
  const { electronics, order, setOrder, setElectronics, id, setId } = props;
  let filtered = false;

  const map = new Map();

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
  
  const isEmpty = electronics ? electronics.length <= 0: true;

  return !isEmpty ? (
    <div className="order-list">
      {electronics.map((electronic, index) => <CheckoutCard electronic={electronic} setElectronics={setElectronics} order={order} setOrder={setOrder} setId={ setId } id={ id } key={ index }/>)}
    </div>
  ) : (<div className='order-list empty-cart'>
      <h3>NOTHING IS IN YOUR CART</h3>
  </div>)
}
