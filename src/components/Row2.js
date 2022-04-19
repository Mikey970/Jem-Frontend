//fire
import "../row2.css"
import { useEffect, useState } from 'react'
import axios from "axios";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom'
import { Navigate } from 'react-router';

function Row2(props) {
  const { setType } = props;
  const [TVimg, setTVimg] = useState("");
  /*useEffect(() => {
    fetch("https://jem-backend.herokuapp.com/api/electronics")
    .then(response => response.json())
    .then(data => setTVimg(data[0].Image))
    });
    */
  
  const handleClick = (event) => {
    console.log("hit")
    setType(event.target.name);
  }
    
  
   
  return (
    <div className="row2container">

      <Link style={{ textDecoration: 'none' }} to="/shop"><div id="earbuds"  className="box"><img name="Earbuds" src="https://as-images.apple.com/is/MME73_AV1?wid=1000hei=1000fmt=jpegqlt=95.v=1632861333000" onClick={handleClick}></img><span><h4 style={{ textDecoration: 'none', color:"black" }}>Earbuds</h4></span></div></Link>
      <Link style={{ textDecoration: 'none', color: "black" }} to="/shop"><div id="tv" className="box"><img src="https://aiwa.com.au/wp-content/uploads/2019/12/AW500.jpg" name="TV" onClick={handleClick}></img><span><h4>TVs</h4></span></div></Link>
      <Link style={{ textDecoration: 'none', color: "black" }} to="/shop"><div id="consoles" className="box"><img name="Game Console" src="https://manuals.plus/wp-content/uploads/2021/10/SONY-PS5-PlayStation-5.png" onClick={handleClick}></img><span><h4 style={{ textDecoration: 'none', color: "black" }}>Consoles</h4></span></div></Link>
      <Link style={{ textDecoration: 'none', color: "black" }} to="/shop"><div id="phones" className="box"><img name="Phone" src="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw1d5c6fbd/images/061/23/61233656-1.jpg?sw=1000&sh=1000&sm=fit" onClick={handleClick}></img><span><h4 style={{ textDecoration: 'none', color: "black" }}>Phones</h4></span></div></Link>
      <Link style={{ textDecoration: 'none', color: "black" }} to="/shop"><div id="laptops" className="box"><img name="Laptop" src="https://as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1634145627000" onClick={handleClick}></img><span><h4 style={{ textDecoration: 'none', color: "black" }}>Laptops</h4></span></div></Link>
      
    </div>
  )
}

export default Row2;
