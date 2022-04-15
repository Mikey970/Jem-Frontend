import './CheckoutCard.css'
export default function CheckoutCard() {
  return (
    <div className="checkout-card">
      <div className='checkout-card-image'>
        image
      </div>
      <div className="checkout-card-non-image">
        <div>
          <div>Title</div>
          <div>Price</div>
        </div>
        <div className='quantity-container'>
          <div>Quantity</div>
          <div className='incro-decro-buttons'>
            <button className='plus'>+</button>
            <button className='minus'>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}