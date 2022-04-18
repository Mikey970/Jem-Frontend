import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/NaviBar.js'
import Cart from './components/Cart';
import Shop from './components/Shop';
import { useState, useEffect, useId } from 'react';


function App() {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(localStorage.getItem("orderId"));
  })
  console.log(id, "id")
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart id={ id } setId={ setId } />} />
        <Route path="/shop" element={<Shop id={ id } setId={ setId }/>} />
        <Route path="/shop/tv" element={<Shop id={ id } setId={ setId }/>} />
        <Route path="/shop/earbuds" element={<Shop id={ id } setId={ setId }/>} />
        <Route path="/shop/laptops" element={<Shop id={ id } setId={ setId }/>} />
        <Route path="/shop/consoles" element={<Shop id={ id } setId={ setId }/>} />
        <Route path="/shop/phones" element={<Shop id={ id } setId={ setId }/>}/>
      </Routes>
    </div>
  );
}

export default App;
