import React from "react";
import './footer.css';

const Footer = () =>{
return(
<div className="footer">
<div className="footer-components">
    <div className="wrappers">
     <div className="img-class">
          <img src="./icons/footer.svg" alt="footer-icon"/>
     </div>
      <div className="hotel-full-details">
          <ul className="hotel-details">
            <li className="hotel-name">
              <p>Bon Hotel head office</p>
            </li>
            <li className="hotel-contact">
            <p> +23 455 668 779</p>
            </li>
            <li className="hotel-email">
            <p>info@bonshotels.com</p>
            </li>
          </ul>
        </div>
    </div>
    <div className="about">
      <ul className="about-hotel">
        <li className="hotel">
         Our Hotel
        </li>
        <li className="hotel">
         Our Conference
        </li>
        <li className="hotel">
          Our Company  
        </li>
        <li className="hotel">
           Hotel Design
        </li>
        <li className="hotel">
           Careers
        </li>
      </ul>
    </div>

    <div className="subscribe-contents">
     <ul className="subscribe">
        <li className="sub">
         <p>Subscribe for offers</p>
        </li>
        <li className="last">
         <input type="email"  placeholder="Email address"  className="email-container"/> 
        </li>
        <li className="last">
         <button className="subscribe-button">Subscribe Now</button>
        </li>
     </ul>
    </div>
    </div>
</div>  
)

}

export default Footer;