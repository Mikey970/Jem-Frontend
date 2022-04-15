import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './components/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <div>
    <Nav />
      <Home />
      </div>
  
  );
}

export default App;
