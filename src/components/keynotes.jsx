import React from "react";
import "./KeynoteSpeakers.css";

export default function keynotes() {
  return (
    <div className="keynote-page">
      <section className="keynote-section">
        <div className="keynote-container">
          <h1 className="keynote-title">Keynote Speakers</h1>
          <div className="keynote-underline"></div>

          <ul className="keynote-list">
            <li>1. Prof. Sukumar Mishra, Director, IIT (ISM) Dhanbad</li>
            <li>2. Dr. Pushpak Bhattacharya, Professor CSE, IIT Mumbai</li>
            <li>3. Dr. Gurunath, Associate Prof., Electrical Engineering, IISC, Bangalore</li>
            <li>4. Dr. Tapas Chakravarty, Principal Scientist, TCS Bangalore, India</li>
            <li>5. Dr. Sridhar Sukumar, Vice President, Accenture, India</li>
            <li>6. Dr. Vipin Kumar, Chief Scientist, CSIO-CSIR, Chandigarh</li>
          </ul>
        </div>
      </section>
    </div>
  );
}