import React from "react";
import "./RegistrationDetails.css";

const RegistrationDetails = () => {
  return (
    <div className="registration-container">
      <h1 className="title">REGISTRATION DETAILS</h1>
      <p className="sub-title">
        Important Dates and Fee for Registration
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Category of Delegates / Authors</th>
              <th colSpan="2">Early Bird on or before 10<sup>th</sup> December, 2025</th>
              <th colSpan="2">Till 30<sup>th</sup> December, 2025</th>
              <th colSpan="2">Spot Registration</th>
            </tr>
            <tr>
              <th>IEEE/IET Members</th>
              <th>General</th>
              <th>IEEE/IET Members</th>
              <th>General</th>
              <th>IEEE/IET Members</th>
              <th>General</th>
            </tr>
          </thead>
          <tbody>
            {/* Indian Authors & Delegates (INR) */}
            <tr>
              <td colSpan="7" className="section-header">Indian Authors & Delegates (in INR)</td>
            </tr>
            <tr>
              <td>Authors - Full Time Students*</td>
              <td>2,500.00</td>
              <td>3,000.00</td>
              <td>3,000.00</td>
              <td>4,000.00</td>
              <td>3,500.00</td>
              <td>5,000.00</td>
            </tr>
            <tr>
              <td>Authors - Teachers / Research Scholars</td>
              <td>3,500.00</td>
              <td>4,500.00</td>
              <td>4,000.00</td>
              <td>5,000.00</td>
              <td>5,000.00</td>
              <td>6,000.00</td>
            </tr>
            <tr>
              <td>Authors - Industry</td>
              <td>5,500.00</td>
              <td>6,500.00</td>
              <td>6,000.00</td>
              <td>7,500.00</td>
              <td>7,000.00</td>
              <td>9,000.00</td>
            </tr>
            <tr>
              <td>Delegate - Student / Research Scholar</td>
              <td>2,000.00</td>
              <td>3,000.00</td>
              <td>3,000.00</td>
              <td>4,000.00</td>
              <td>3,500.00</td>
              <td>5,000.00</td>
            </tr>
            <tr>
              <td>Delegate - Academician / Industry</td>
              <td>2,500.00</td>
              <td>3,500.00</td>
              <td>3,500.00</td>
              <td>4,500.00</td>
              <td>4,000.00</td>
              <td>6,000.00</td>
            </tr>

            {/* Foreign Authors & Delegates (USD) */}
            <tr>
              <td colSpan="7" className="section-header">Foreign Authors & Delegates (in USD)</td>
            </tr>
            <tr>
              <td>Authors - Full Time Students*</td>
              <td>150</td>
              <td>200</td>
              <td>200</td>
              <td>250</td>
              <td>250</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Authors - Teachers / Research Scholars</td>
              <td>200</td>
              <td>250</td>
              <td>250</td>
              <td>300</td>
              <td>350</td>
              <td>400</td>
            </tr>
            <tr>
              <td>Authors - Industry</td>
              <td>350</td>
              <td>400</td>
              <td>400</td>
              <td>500</td>
              <td>550</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="note">
        * For extra pages Indian author have to pay Rs. 500 per extra page and foreign author USD 50 per extra page (up to 8 pages).
      </p>
      <ul className="conditions">
        <li>Every accepted paper must have a UNIQUE SEPARATE REGISTRATION...</li>
        <li>Authors claiming discounted registration fee must produce valid proof...</li>
        <li>Registration fee includes Conference Kit, Breakfast and Lunch...</li>
      </ul>
    </div>
  );
};

export default RegistrationDetails;
