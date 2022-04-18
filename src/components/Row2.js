//fire
import "../row2.css"
import { useEffect, useState } from 'react'
import axios from "axios";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom'
import { Navigate } from 'react-router';

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

      <div id="earbuds" value="earbuds" onClick={event=>window.location.href="http://localhost:3000/shop/earbuds"} className="box"><img></img><span><p>Earbuds</p></span></div>
      <div id="tv" value="tv" onClick={event=> window.location.href= "/shop/tvs"} className="box"><img></img><span><p>TVs</p></span></div>
      <div id="consoles" value="consoles" onClick={event=> window.location.href='/shop/consoles'} className="box"><img></img><span><p>Consoles</p></span></div>
      <div id="phones" value="phones" onClick={ event=> window.location.href='/shop/phones'}className="box"><img></img><span><p>Phones</p></span></div>
      <div id="laptops" value="laptops" onClick={event=> window.location.href='/shop/laptops' }className="box"><img></img><span><p>Laptops</p></span></div>

      <div 
      id="earbuds" 
      onClick={event=>  <Navigate to="/shop/earbuds"/>} 
      className="box">
      <img
      src="https://as-images.apple.com/is/MME73_AV1?wid=1000hei=1000fmt=jpegqlt=95.v=1632861333000"
      />
      <p>Earbuds</p>
      </div>

      <div 
      id="tv" 
      onClick={event=> window.location.href='/shop/tv'} 
      className="box">
      <img
      src="https://aiwa.com.au/wp-content/uploads/2019/12/AW500.jpg"
      />
      <p>TVs</p>
      </div>

      <div 
      id="consoles" 
      onClick={event=> window.location.href='/shop/consoles'} 
      className="box">
      <img
      src="https://manuals.plus/wp-content/uploads/2021/10/SONY-PS5-PlayStation-5.png"
      />
      <p>Consoles</p>
      </div>

      <div 
      id="phones" 
      onClick={ event=> window.location.href='/shop/phones'}
      className="box">
      <img
      src="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw1d5c6fbd/images/061/23/61233656-1.jpg?sw=1000&sh=1000&sm=fit"
      /><p>Phones</p>
      </div>
     
      <div 
      id="laptops" 
        onClick={event => {
          
          window.location.replace('/shop/laptops')
        }} 
      className="box">
      <img
      src="https://as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1634145627000"
      />
      <p>Laptops</p>
      </div>

    </div>
  )
}

export default Row2;
