//fire
import "../row2.css"
import { useEffect, useState } from 'react'

function Row2(props) {
  const [TVimg, setTVimg] = useState("");
  /*useEffect(() => {
    fetch("https://jem-backend.herokuapp.com/api/electronics")
    .then(response => response.json())
    .then(data => setTVimg(data[0].Image))
    });
    */
  
  return (
    <div className="row2container">
      <div id="earbuds" onClick={event=> window.location.href='/shop/earbuds'} className="box"><img></img><span><p>Earbuds</p></span></div>
      <div id="tv" onClick={event=> window.location.href='/shop/tv'} className="box"><img></img><span><p>TVs</p></span></div>
      <div id="consoles" onClick={event=> window.location.href='/shop/consoles'} className="box"><img></img><span><p>Consoles</p></span></div>
      <div id="phones" onClick={ event=> window.location.href='/shop/phones'}className="box"><img></img><span><p>Phones</p></span></div>
      <div id="laptops" onClick={event=> window.location.href='/shop/laptops' }className="box"><img></img><span><p>Laptops</p></span></div>
    </div>
  )
}

export default Row2;