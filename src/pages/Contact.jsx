import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
      <div className="ct-section">
        {/* Section heading */}
        <div className="ct-section-title">
          <h2>CONTACT</h2>
          <div className="ct-underline" />
        </div>

        {/* Map with overlapping unified card */}
        <div className="ct-map-wrap">
          <iframe
              className="ct-map"
              title="Google Map - CCET Degree Wing"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.217942157979!2d76.80631017534609!3d30.727652381637735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1691838023456!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Single unified card */}
          <div className="ct-unified-card">
            {/* Info Section */}
            <div className="ct-info-grid">
              <div className="ct-info-col">
                <div className="ct-info-heading">Email</div>
                <div className="ct-info-row">
                  <span className="ct-icon" aria-hidden>📧</span>
                  <a className="ct-link" href="mailto:anilrose@ccet.ac.in">
                    anilrose@ccet.ac.in
                  </a>
                </div>
              </div>

              <div className="ct-info-col">
                <div className="ct-info-heading">Phone</div>
                <div className="ct-info-row">
                  <span className="ct-icon" aria-hidden>📞</span>
                  <a className="ct-link" href="tel:+919416234853">
                    +91 94162 34853
                  </a>
                </div>
              </div>

              <div className="ct-info-col">
                <div className="ct-info-heading">Address</div>
                <div className="ct-info-row">
                  <span className="ct-icon" aria-hidden></span>
                  <span>
                  Chandigarh College Of Engineering and Technology, Sector – 26, Chandigarh, India
                </span>
                </div>
                <div className="ct-info-row">
                  <span className="ct-icon" aria-hidden>🕒</span>
                  <span>Mon–Fri — 09:30–17:30 Hrs</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="ct-form" onSubmit={(e) => e.preventDefault()}>
              <div className="ct-form-row">
                <input className="ct-input" type="text" placeholder="Name" required />
                <input className="ct-input" type="tel" placeholder="Phone" required />
              </div>
              <input className="ct-input" type="email" placeholder="Email address" required />
              <textarea className="ct-textarea" placeholder="Message" required />
              <button className="ct-btn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  );
}
