import './Cart.css';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart(props) {
  const { id, setId, electronicInOrder, setElectronicInOrder } = props;
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState({});

  const getOrder = async () => {
      let orderId = id || localStorage.getItem('orderId');
      console.log('fdjkdfkj', `https://jem-backend.herokuapp.com/api/orders/${orderId}`)
      let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
      setOrder(data);
      setId(orderId || localStorage.getItem('orderId'));
    }

  useEffect(() => {
    setId(id || localStorage.getItem('orderId'));
    getOrder()
  }, []);

  return (
    <div className='cart'>
      <OrderList electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder} electronics={electronics} order={order} setOrder={setOrder} setId={ setId } id={ id } setElectronics={ setElectronics }/>
      <OrderSummary order={ order }/>
    </div>
  )
}
