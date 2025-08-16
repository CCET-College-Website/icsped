import React from "react";
import styles from "./Impdate.module.css";

export default function Impdate() {
  return (
      <div className={styles.impdatePage}>
        <h1 className={styles.impdateTitle}>IMPORTANT DATES</h1>
        <div className={styles.impdateUnderline}></div>
        <table className={styles.impdateTable}>
          <tbody>
          <tr>
            <td className={styles.bold}>Submission of Full-Length Paper</td>
            <td>9th September, 2025</td>
          </tr>
          <tr>
            <td className={styles.bold}>Paper Acceptance Notification</td>
            <td>9th November, 2025</td>
          </tr>
          <tr>
            <td className={styles.bold}>Submission of Final Version of Paper</td>
            <td>30th November, 2025</td>
          </tr>
          <tr>
            <td className={styles.bold}>Registration Deadline (Early Bird)</td>
            <td>10th December, 2025</td>
          </tr>
          <tr>
            <td className={styles.bold}>Registration Deadline (Late)</td>
            <td>30th December, 2025</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}
