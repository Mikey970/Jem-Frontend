import './OrderList.css';
import CheckoutCard from './CheckoutCard';
export default function OrderList() {
  return (
    <div className="order-list">
      <CheckoutCard/>
      <CheckoutCard/>
      <CheckoutCard/>
    </div>
  )
}