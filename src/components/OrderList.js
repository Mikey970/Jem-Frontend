import './OrderList.css';
import CheckoutCard from './CheckoutCard';
export default function OrderList(props) {
  const { electronics, order, setOrder, setElectronics, id, setId } = props;
  // console.log(electronics)
  return (
    <div className="order-list">
      {electronics.map((electronic, index) => <CheckoutCard electronic={electronic} setElectronics={setElectronics} order={order} setOrder={setOrder} setId={ setId } id={ id } key={ index }/>)}
    </div>
  )
}