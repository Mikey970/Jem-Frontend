
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav.js'
import Cart from './components/Cart';
import Shop from './components/Shop';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
