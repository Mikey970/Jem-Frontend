import './ShopCards.css';
import ShopCard from './ShopCard.js';

const ShopCards = (props) => {
  let { electronics, order, setOrder } = props;

    return (
      <div className='shopcards-div'>
        {electronics.map((electronic, index) => <ShopCard electronic={electronic} order={order} key={index} setOrder={ setOrder }/>)}
      </div>
    )
}

export default ShopCards;
