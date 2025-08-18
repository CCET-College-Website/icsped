import React from 'react';
import backgroundImg from '../assets/home/background.svg';
import ConferenceMarquee from '../components/marquee/marquee';
import ConferenceTheme from './conference-theme';
import Impdate from './Impdate';
import Contact from './Contact';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="background-section">
                    <img className="background-img" src={backgroundImg} alt="Background" />
                </div>
                <div className="mobile-marquee">
                    <ConferenceMarquee />
                </div>
                <div className="animated-card card">
                    <div className="main-title-main">
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
            <div className="desktop-marquee">
                <ConferenceMarquee />
            </div>

            {/* Added components with animations */}
            <div className="section-container fade-in-section">
                <ConferenceTheme />
            </div>
            <div className="section-container slide-in-section">
                <Impdate />
            </div>
            <div className="section-container fade-in-section">
                <Contact />
            </div>
        </>
    );
}