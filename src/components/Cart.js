import './Cart.css';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';

export default function Cart() {
  return (
    <div className='cart'>
      <OrderList />
      <OrderSummary />
    </div>
  )
}