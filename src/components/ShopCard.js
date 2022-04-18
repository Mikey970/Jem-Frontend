import './ShopCard.css';
import { useEffect, setState } from 'react';
import axios from 'axios';

const ShopCard = (props) => {
  let { electronic } = props
  useEffect(() => { 
    
  }, []);
    return (
      <div className='card-div'>
        <div className='shop-card-image-container'>

        </div>
        <div className='shop-card-title'></div>
        <div className='shop-card-price'></div>
        <div className='add-to-cart'>
          <button>Add to cart</button>
        </div>
        </div>
    );
}

export default ShopCard;
