import './CheckoutCard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CheckoutCard(props) {
  const { order, setOrder, setElectronics, electronicInOrder, setElectronicInOrder } = props;
  const [inArray, setInArray] = useState(true);
  const [electronic, setElectronic] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getElectronic = async () => {
    let { data } = await axios.get("https://jem-backend.herokuapp.com/api/electronics/" + electronicInOrder.electronicId);
    setElectronic(data)
  }

  const getElectronicInOrder = async () => {
    const { data } =
      await axios.get("https://jem-backend.herokuapp.com/api/orderElectronics/" + order._id + "/" + electronic._id);
    getElectronicInOrder(data);
  }

  useEffect(() => {
    getElectronic();
    getElectronicInOrder();
  }, [])

  const increment = async () => {
    let { data } =
      await axios.put("https://jem-backend.herokuapp.com/api/orderElectronics/" + order._id + "/" + electronic._id, {
        ...electronicInOrder,
        quantity: electronicInOrder.quantity + 1
      });
    let array = order.electronics;
    let found = array.find((e) => e.electronicId === electronicInOrder.electronicId);
    console.log(found, "found")
    let count = 0;
    array = array.map((e) => {
      if (!count && e.electronicId === electronicInOrder.electronicId) {
        e.quantity += 1
        count++;
      }
      return e
    })
    let counter = 0
    let { data: newOrder } = await axios.put("https://jem-backend.herokuapp.com/api/orders/" + order._id, {
        ...order,
      electronics: array.filter((e => {
        if (e.quantity > 0) {
          return true;
        }
        counter++;
        return false;
      }))
    });
    if(counter) setOrder(newOrder);
    setElectronicInOrder(data);
  }

  const decrement = async () => {
    let { data } =
      await axios.put("https://jem-backend.herokuapp.com/api/orderElectronics/" + order._id + "/" + electronic._id, {
        ...electronicInOrder,
        quantity: electronicInOrder.quantity - 1
      });
    let array = order.electronics;
    let found = array.find((e) => e.electronicId === electronicInOrder.electronicId);
    console.log(found, "found")
    let count = 0;
    array = array.map((e) => {
      if (!count && e.electronicId === electronicInOrder.electronicId) {
        e.quantity -= 1
        count++;
      }
      return e
    })
    let counter = 0
    let { data: newOrder } = await axios.put("https://jem-backend.herokuapp.com/api/orders/" + order._id, {
        ...order,
      electronics: array.filter((e => {
        if (e.quantity > 0) {
          return true;
        }
        counter++;
        return false;
      }))
    });
    if (counter) {
      setOrder(newOrder);
      window.location.reload();
    }
    setElectronicInOrder(data);
  }

  const { Brand, Model, Image, Price } = electronic;
  const { quantity: Quantity } = electronicInOrder
  
  return inArray && electronic && Quantity >= 0 ? (
    <div className="checkout-card">
      <div className='checkout-card-image'>
        <img src={ Image } width="75" height="75"/>
      </div>
      <div className="checkout-card-non-image">
        <div className='checkout-card-non-image-div'>
          <div>{Brand}</div>
          <div>{Model}</div>
          <div>{Price + "$"}</div>
        </div>
        <div className='checkout-card-non-image-div quantity-container'>
          <div>Quantity: { Quantity || 1 }</div>
          <div className='incro-decro-buttons'>
            <button onClick={increment} className='plus'>+</button>
            <button onClick={decrement} className='minus'>-</button>
          </div>
        </div>
      </div>
    </div>
  ) : <div></div>
}