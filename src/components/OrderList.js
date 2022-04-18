import './OrderList.css';
import CheckoutCard from './CheckoutCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OrderList(props) {
  const { electronics, order, setOrder, setElectronics, id, setId } = props;

  const map = new Map();

  useEffect(() => {
    
    electronics.forEach((electronic, i) => {
      map.set(electronic._id, (map.get(electronic._id) + 1 || 1));
    });

    let array = electronics.map((electronic) => {
      electronic.Quantity = map.get(electronic._id);
      return electronic
    })

    array = array.filter((electronic) => {
      if (map.get(electronic._id)) {
        map.delete(electronic._id);
        return electronic;
      }
    })

    setElectronics(array);
  }, [electronics])
  
  const isEmpty = electronics.length <= 0;

  return !isEmpty ? (
    <div className="order-list">
      {electronics.map((electronic, index) => <CheckoutCard electronic={electronic} setElectronics={setElectronics} order={order} setOrder={setOrder} setId={ setId } id={ id } key={ index }/>)}
    </div>
  ) : (<div className='order-list'>
      NOTHING IS IN YOUR CART
  </div>)
}