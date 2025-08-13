import React from "react";
import styles from "./conference-theme.module.css";

function ConferenceTheme() {
  return (
    <div className={styles.conferenceContainer}>
      <div className={styles.contentSection}>
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>Conference Theme</h1>
          <div className={styles.titleUnderline}></div>
          <h2 className={styles.subtitle}>
            Green Communication and Green Energy for Sustainable Environment
          </h2>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img
          src="/hands-transparent-globe.png"
          alt="Hands holding a transparent globe with green plants, surrounded by environmental icons on a natural green background"
          className={styles.heroImage}
        />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14L12 19L17 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5L12 10L17 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default ConferenceTheme;
