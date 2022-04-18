import './ShopCards.css';
import ShopCard from './ShopCard.js';

const ShopCards = (props) => {
  let { electronics, order, setOrder, setId, id } = props;

    return (
      <div className='shopcards-div'>
        {electronics.map((electronic, index) => <ShopCard electronic={electronic} order={order} key={index} setOrder={ setOrder } id={ id } setId={ setId }/>)}
      </div>
    )
}

export default ShopCards;
