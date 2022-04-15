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
                <h3>Original Price</h3>
                <h3>900$</h3>
              </div>
              <div className='prices-row price'>
                <h3>Store Pickup</h3>
                <h3>Free</h3>
              </div>
              <div className='prices-row price'>
                <h3>Estimated Sales Tax</h3>
                <h3>90$</h3>
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