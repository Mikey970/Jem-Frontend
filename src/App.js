import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
