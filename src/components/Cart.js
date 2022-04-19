import './Cart.css';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart(props) {
  const { id, setId, electronicInOrder, setElectronicInOrder } = props;
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    let getOrder = async () => {
      let orderId = id;
      if (orderId) {
        let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
        setElectronics(data.electronics);
        setOrder(data);
      }
    }
    getOrder()
  });

  return (
    <div className='cart'>
      <OrderList electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder} electronics={electronics} order={order} setOrder={setOrder} setId={ setId } id={ id } setElectronics={ setElectronics }/>
      <OrderSummary order={ order }/>
    </div>
  )
}
