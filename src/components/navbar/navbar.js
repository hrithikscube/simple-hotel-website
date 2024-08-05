import React from "react";
import './navbar.css';


const Navbar = () =>
{

// const [optionSelected, setOptionselected] = useState('false');

// function handleChange(event)
// {
//    setOptionselected(event.target.value !== '');
// }


    return(
        
           <div className="Navcomponent">
            <ul className="Nav-items ">
               <li className= "select-container">
                  <select className="custom-select">
                    <option value= "">Select a City</option>
                    <option value= "blg">blg</option>
                    <option value= "hyd">hyd</option>
                  </select>
               </li>
               <li className="checkin-container">
                  {/* <div className="nav-check-in"> */}
                  <div className="checkin">Check In</div>
                  {/* <div> */}
                  <img src="./icons/calendar.svg" alt="calender" className="calendar"/>
                  {/* </div> */}
                  {/* </div> */}
               </li>
               <li className="checkout-container">
               {/* <div className="nav-check-in"> */}
                  <div className="checkout">Check Out</div>
                  {/* <div> */}
                  <img src="./icons/calendar.svg" alt="calender" className="calendar"/>
                  {/* </div> */}
                  {/* </div> */}
               </li>
               <li className="Navi">
                <div className="Availability"> Check Availability</div>
               </li>
            </ul>
           </div>
        
    )
}

export default Navbar;