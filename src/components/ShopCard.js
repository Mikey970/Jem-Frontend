import './ShopCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopCard = (props) => {
  const { electronic, order, setOrder, setId, id, electronicInOrder, setElectronicInOrder } = props;

  const getElectronicInOrder = async () => {
    let { data } =
      await axios.get(
        `https://jem-backend.herokuapp.com/api/orderElectronics/${id}/${electronic._id}`
      )
    if (!data && id) {
      let { data: data2 } =
        await axios.post(
          `https://jem-backend.herokuapp.com/api/orderElectronics/`,
          {
            orderId: id,
            electronicId: electronic._id,
            quantity: 0
          }
        )
      setElectronicInOrder(data2)
    }
  }


  const createOrder = async () => {
    let { data } = axios.post("https://jem-backend.herokuapp.com/api/orders/", {
      electronics: []
    })
    if (!id) {
      setId(data._id);
      setOrder(data);
      localStorage.setItem("orderId", data._id)
    }
  }

  const getOrder = async () => {
    let { data } = await axios.get("https://jem-backend.herokuapp.com/api/orders/" + id)
    setOrder(data);
  }

  // may have to go one above to parent and order.electronics it

  useEffect(() => {
    getElectronicInOrder()
    if (!id) createOrder();
    if (!order) {
      getOrder();
    }
  }, [])

  const updateOrder = async () => {
    if (!order) createOrder();
    // you have orders and electronics
    let { data } =
      await axios.get("https://jem-backend.herokuapp.com/api/orderElectronics/" + id + "/" + electronic._id);
    setElectronicInOrder(data)
    if (!order) return;
    let foundNode = order.electronics.find((e) => data._id === e._id);
    if (!foundNode) {
      let { data: changedOrder} = await axios.put("https://jem-backend.herokuapp.com/api/orders/" + id, {
        ...order,
        electronics: [...order.electronics, electronicInOrder]
      })

      setOrder(changedOrder);
    } else {
      let { data: changedOrderElectronic } = await axios.put("https://jem-backend.herokuapp.com/api/orderElectronics/" + id + "/" + electronic._id, {
        ...electronicInOrder,
        quantity: electronicInOrder.quantity + 1
      })
      setElectronicInOrder(changedOrderElectronic);
    }
  }

    return (
      <div className='card-div'>
        <img 
        src={electronic.Image}
        />
        <div className='shop-card-title'>{electronic.Model}</div>
        <div className='shop-card-price'>${electronic.Price}</div>
        <div className='add-to-cart'>
          <button onClick={updateOrder}>Add to cart</button>
        </div>
        </div>
    );
}

export default ShopCard;
