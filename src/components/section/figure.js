import React from 'react';
import './figure.css';

const Figure = () => {
  return (
    <div className="image-container">
      <div className='main-image'>
      <img src="/icons/backgroundimg.jpeg" alt="description" className="background-image" />
      </div>
      <div className="overlay-content">
        <h1 className="heading">WELCOME TO BON HOTEL</h1>
        <p className="subtitle">Good people. Good thinking. Good feeling.</p>
        <button className="explore-button">EXPLORE</button>
      </div>
        
          <div className='facilities-container'>
           <h2 className='facilities-heading'>Facilities</h2>
            <div className='facilities-icons'>
              <div className='facilities'>
                <img src='./icons/kitchen.svg' alt='kitchen'/>
                <p>Kitchen</p>
              </div>
              <div className='facilities'>
                <img src='./icons/wifi.svg' alt='wifi'/>
                <p>WiFi</p>
              </div>
              <div className='facilities'>
                <img src='./icons/pool.svg' alt='pool'/>
                <p>Pool</p>
              </div>
              <div className='facilities'>
                <img src='./icons/gym.svg' alt='gym'/>
                <p>Gym</p>
              </div>
              <div className='facilities'>
                <img src='./icons/taxi.svg' alt='taxi'/>
                <p>Taxi</p>
              </div>
            </div>
            
          </div>
        </div>
      
    
  );
}

export default Figure;
