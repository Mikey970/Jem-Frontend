//fire
import './Home.css';

import Row from './Row';
import Row2 from './Row2';
import Row3 from './Row3';
function Home(props) {
  return (<div className='home-div'>
    <Row />
      <Row2 />
      <Row3 />
      </div>);
}


export default Home;
