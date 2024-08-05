import React from "react";
import './roomimage.css'
const Roomimage = () =>
{
    return(
        <div className="image-container">
          <div className="bottom-content">
          <div className="bottom-left">
          <p  className="room-text">Standard Rooms</p>
          <button className="check-Rates">Check Rates</button>
          </div>
          <div className="bottom-right">
          <p className="room-text">Deluxe Rooms</p>
          <button className="check-Rates">Check Rates</button>
          </div>
          </div>
        </div>
    )
}

export default Roomimage;