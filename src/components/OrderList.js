import './OrderList.css';
import CheckoutCard from './CheckoutCard';
import axios from 'axios';
import { useEffect } from 'react';

export default function OrderList(props) {
  const { electronics, order, setOrder, setElectronics, id, setId } = props;
  
  const isEmpty = electronics.length <= 0;

  return !isEmpty ? (
    <div className="order-list">
      {electronics.map((electronic, index) => <CheckoutCard electronic={electronic} setElectronics={setElectronics} order={order} setOrder={setOrder} setId={ setId } id={ id } key={ index }/>)}
    </div>
  ) : (<div className='order-list empty-cart'>
      <h3>NOTHING IS IN YOUR CART</h3>
  </div>)
}
