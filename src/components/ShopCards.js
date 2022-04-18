import './ShopCards.css';
import ShopCard from './ShopCard.js';

const ShopCards = (props) => {
  let { electronics } = props;

    return (
      <div className='shopcards-div'>
        {electronics.map((electronic, index) => <ShopCard electronic={electronic} key={ index }/>)}
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    )
}

export default ShopCards;
