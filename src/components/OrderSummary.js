import './OrderSummary.css'
export default function OrderSummary(props) {
  const { order } = props;
  return (
    <section className='order-summary-section'>
      <div className="order-summary">
        <div className='order-summary-container'>
          <h1>Order Summary</h1>
          <div className='reciept'>
            <div className='prices'>
              <div className='prices-row price'>
                <h6>Original Price</h6>
                <h6>{Math.floor(order ? order.total : 0) + "$"}</h6>
              </div>
              <div className='prices-row price'>
                <h6>Store Pickup</h6>
                <h6>Free</h6>
              </div>
              <div className='prices-row price'>
                <h6>Estimated Sales Tax</h6>
                <h6>{Math.floor(order ? order.total * .03 : 0) + "$"}</h6>
              </div>
            </div>
            <div className='prices-row total'>
              <h2>Total</h2>
              <h3>{Math.floor(order ? order.total + order.total * .03 : 0) + "$"}</h3>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}