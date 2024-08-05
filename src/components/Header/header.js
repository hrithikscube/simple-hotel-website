import React from "react";
import './header.css';
const Header = () =>{
 return(
    <div className="header-container">
       {/* <div className="headerimg"> */}
       <img className="header-img" src="/icons/pageicon.jpeg" alt="pageicon"/>
       {/* </div> */}

       <div className="main-nav">
        {/* <nav className="main-nav"> */}
            <ul className="nav-list-main">
                <li className="nav-list">
                    <a href= "#ourhotel" className="nav-link">Our Hotel</a>
                </li>
                <li className="nav-list">
                    <a href= "#Rooms" className="nav-link nav-items-rooms-rates">Rooms and Rates</a>
                </li>
                <li className="nav-list">
                    <a href= "#facilities" className="nav-link">Facilities</a>
                </li>
                <li className="nav-list">
                    <a href= "#contact" className="nav-link">Contact us</a>
                </li>
                <li className="nav-list">
                    <img className="search" src="/icons/image.png" alt="search"/>
                </li>
            </ul>
        {/* </nav> */}
       </div>
    </div>
 ) 
}

export default Header;