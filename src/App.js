import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Row from './components/Row';
import Row2 from './components/Row2';
function App() {
  return (
    <div>
    <Row />
      <Row2 />
      </div>
  );
}

export default App;
