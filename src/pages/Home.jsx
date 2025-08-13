import React from 'react';
import backgroundImg from '../assets/home/background.svg';
import './Home.css';

export default function Home() {
  return (
      <div className="home-container">
        <div className="background-section">
          <img className="background-img" src={backgroundImg} alt="Background" />
        </div>
        <div className="animated-card card">
          <div className="main-title">
            International <br/>
            Conference on Signal <br/>
            Processing & <br/>
            Electronic Design<br/>
            <span className="date-text">23-24 January 2026</span>
          </div>
          <div className="accent-line"></div>
          <div className="organizer-info">
            <span className="organized-by">Organised by:</span><br/>
            Department of Electronics and <br/>
            Communication Engineering<br/>
            Chandigarh College of Engineering and <br/>
            Technology, Sector- 26, Chandigarh
          </div>
        </div>
      </div>
  );
}