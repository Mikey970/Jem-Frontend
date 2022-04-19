import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/NaviBar'
import Cart from './components/Cart';
import Shop from './components/Shop';
import { useState, useEffect, useId } from 'react';



function App() {
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [electronicInOrder, setElectronicInOrder] = useState("");
  useEffect(() => {
    setId(localStorage.getItem("orderId"));
  })
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home setType={ setType } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>}/>
        <Route path="/cart" element={<Cart id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop" element={<Shop id={id} setId={setId} type={ type} setType={ setType } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop/tv" element={<Shop type="TV" id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop/earbuds" element={<Shop type="Earbuds" id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop/laptops" element={<Shop type="Laptop" id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop/consoles" element={<Shop type="Game Console" id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>} />
        <Route path="/shop/phones" element={<Shop type="Phone" id={ id } setId={ setId } electronicInOrder = {electronicInOrder} setElectronicInOrder = {setElectronicInOrder}/>}/>
      </Routes>
    </div>
  );
}

export default App;
