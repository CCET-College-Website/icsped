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
              <li>1. Dr. C.C. Reddy, Professor and Head, Electrical Engineering Department, IIT Ropar</li>
              <li>2. Dr. Ashish Sharma, Department of Climate, Meteorology & Atmospheric Sciences at the University of Illinois Urbana-Champaign, USA</li>
            </ul>
          </div>
        </section>
      </div>
  );
}