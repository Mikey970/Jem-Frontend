import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './components/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
