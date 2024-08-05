import React from "react";
import "./roomsandrate.css";

const Roomsandrate = () => {
  return (
    <div className="rooms-container">
      <div className="header">
        <h2>Rooms and Rates</h2>
      </div>

      <div className="wrapper">
        <div className="Roomtypes">
          <p className="para">Standard Twin Room</p>
          <button className="check-Rates">Check Rates</button>
        </div>
        <div className="Roomstandard">
          <p className="para">Standard Room</p>
          <button className="check-Rates">Check Rates</button>
        </div>
    </div> 

      <div className="wrapper2">
      <div className="Standard-view">
            <p className="para">Standard View Rooms</p>
            <button className="check-Rates">Check Rates</button>
        </div>
        <div className="Deluxe-Rooms">
            <p className="para">Deluxe Rooms</p>
            <button className="check-Rates">Check Rates</button>
          </div>
      </div>
    </div>
  );
};
export default Roomsandrate;
