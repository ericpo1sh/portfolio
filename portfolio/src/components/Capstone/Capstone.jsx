import React from 'react';
import './Capstone.css';
import arrow_icon from '../../assets/arrow_icon.svg';

const Capstone = () => {
  return (
    <div className='capstone' id='work'>
      <div className='capstone-title'>
        <h1>Capstone Project</h1>
      </div>
      <div className='capstone-container'>
        <div className='capstone-demo-video'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Zg1n8p8Qg-0?si=Td7x4yfLhzL-gZsl'
            title='YouTube video player'
            frameBorder='6'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='capstone-details'>
          <h2>Virtual Aerial Drone Systems (VADS)</h2>
          <p className='capstone-description'>
            An open-source desktop application for real-time drone control, live video streaming, and immersive AR/VR experiences. VADS integrates seamlessly with custom drones powered by Raspberry Pi and Navio 2, providing an intuitive interface for controls and real-time data monitoring.
          </p>
          <ul>
            <li>Real-time drone control and live video streaming.</li>
            <li>Immersive AR/VR experience with Meta Quest 2.</li>
            <li>Low-latency streaming using WebRTC technology.</li>
            <li>Custom Electron desktop application interface.</li>
            <li>Integration with Raspberry Pi and Navio 2 hardware.</li>
          </ul>
        </div>
      </div>
      <a href='https://github.com/ericpo1sh/VADS'>
        <div className='capstone-showmore'>
          <p>Check out the project repository</p>
          <img src={arrow_icon} alt='button'></img>
        </div>
      </a>
    </div>
  );
};

export default Capstone;
