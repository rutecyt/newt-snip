import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [markets, setMarkets] = useState([]);

  const getMarketData = () => {
    setInterval(() => {
      axios({
        method: 'get',
        url: 'https://api.newton.co/markets/v1/rates',
      })
        .then(function (data) {
          setMarkets(data.data);
        });
    }, 2000);
  }

  return (
    <div className="App">
      <div className="data-fetch-button"><button onClick={getMarketData}>Fetch Data / Update 2 Sec. Interval</button></div>
      <div className="data-list-wrapper">
        <ul className="data-list">
        {markets.map((pair, i) => <li key={i} className="data-pair">{pair.symbol.split('_').join('')}</li>)}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
