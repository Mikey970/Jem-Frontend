//fire
import './Home.css';
import Row from './Row';
import Row2 from './Row2';
import Row3 from './Row3';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NaviBar from './NaviBar';
import './Shop.css';
import ShopCards from './ShopCards.js';
function Home(props) {
  
  const { setType } = props
  let [electronics, setElectronics] = useState([]);
  
  


    useEffect(() => {
        fetch('http://localhost:3000/api/electronics')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (<div className='home-div'>
        <Row />
        <Row2 setType={ setType }/>
        <Row3 />
        </div>);
}


export default Home;
