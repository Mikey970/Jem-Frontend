import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
<<<<<<< HEAD
import Home from './components/Home';
function App() {
  return (
    <Home />
=======
import Nav from './components/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav />
    </div>
>>>>>>> bd6b6e6bf679668552ffc0c7b99f0bbdf1d90ab3
  );
}

export default App;
