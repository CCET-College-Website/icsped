import React from "react";
import "./Impdate.css";

export default function Impdate() {
  return (
    <div className="impdate-page">
      <h1 className="impdate-title">IMPORTANT DATES</h1>
      <div className="impdate-underline"></div>
      <table className="impdate-table">
        <tbody>
          <tr>
            <td className="bold">Submission of Full-Length Paper</td>
            <td>9th September, 2025</td>
          </tr>
          <tr>
            <td className="bold">Paper Acceptance Notification</td>
            <td>9th November, 2025</td>
          </tr>
          <tr>
            <td className="bold">Submission of Final Version of Paper</td>
            <td>30th November, 2025</td>
          </tr>
          <tr>
            <td className="bold">Registration Deadline (Early Bird)</td>
            <td>10th December, 2025</td>
          </tr>
          <tr>
            <td className="bold">Registration Deadline (Late)</td>
            <td>30th December, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
