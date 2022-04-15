import './OrderSummary.css'
export default function OrderSummary() {
  return (
    <section className='order-summary-section'>
      <div className="order-summary">
        <div className='order-summary-container'>
          <h1>Order Summary</h1>
          <div className='reciept'>
            <div className='prices'>
              <div className='prices-row price'>
                <h6>Original Price</h6>
                <h6>900$</h6>
              </div>
              <div className='prices-row price'>
                <h6>Store Pickup</h6>
                <h6>Free</h6>
              </div>
              <div className='prices-row price'>
                <h6>Estimated Sales Tax</h6>
                <h6>90$</h6>
              </div>
            </div>
            <div className='prices-row total'>
              <h2>Total</h2>
              <h2>990$</h2>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}