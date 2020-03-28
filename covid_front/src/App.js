import React, { useState, useEffect } from 'react';
import MainChart from './components/MainChart';
import Header from './components/Header';
import './App.css';

function App() {

  const [history, setHistory] = useState()
  const [daily_status, setDailyStatus] = useState({
    confirmed: "50",
    recovered: "12",
    deaths: "2",
    negative: "123"
  });


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/covid?XDEBUG_SESSION_START=PHPSTORM',
      {
        method: "GET",
      }).then(res => res.json()).then(
        response => {
          console.log(response)

          var formatedResponse = response.map(rec => {
            var d = new Date(rec.created_at)
            rec.created_at = d.getDate() + '-' + d.toLocaleString('default', { month: 'long' })
            return rec
          });
          console.log(formatedResponse)
          setHistory(formatedResponse)

          setDailyStatus(formatedResponse[formatedResponse.length - 1])
        }).catch(error => console.log(error));
  }, []);


  return (
    <div className="App">
      <Header daily_status={daily_status} />
      <MainChart history={history} daily_status={daily_status} />
    </div>
  );
}

export default App;
