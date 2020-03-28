import React from 'react';


function Header(props) {


  return (
    <div className="header">
      <div style={{ flexGrow: 3 }}>
        <h3>Recovered</h3>  {props.daily_status.recovered}
      </div>
      <div style={{ flexGrow: 3 }}>
        <h3>Confirmed</h3>  {props.daily_status.confirmed}
      </div>
      <div style={{ flexGrow: 3 }}>
        <h3>Deaths</h3>  {props.daily_status.deaths}
      </div>
      <div style={{ flexGrow: 3 }}>
        <h3>Negative</h3>  {props.daily_status.negative}
      </div>
    </div>
  );
}

export default Header;
