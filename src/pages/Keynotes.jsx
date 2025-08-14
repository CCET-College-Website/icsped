import React from "react";
import styles from "./Keynotes.module.css";

export default function Keynotes() {
  return (
      <div className={styles.keynotePage}>
        <section className={styles.keynoteSection}>
          <div className={styles.keynoteContainer}>
            <h1 className={styles.keynoteTitle}>Keynote Speakers</h1>
            <div className={styles.keynoteUnderline}></div>

            <ul className={styles.keynoteList}>
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