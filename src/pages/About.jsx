import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">

      {/* About Conference */}
      <div className="about-container">
        <div className="about-image">
          <img src="/About_img_2.png" alt="Conference Hall" />
        </div>
        <div className="about-text">
          <h2>About Conference</h2>
          <div className="underline purple"></div>
          <p>
            ICSPED-26 aims to invite scholars, experts, and industry professionals
            from around the globe to present their innovative ideas and research
            experience in the fields of signal processing and electronic design.
          </p>
        </div>
      </div>

      {/* About CCET */}
      <div className="about-ccet-section">
  <div className="about-ccet-content">
    <h2>About CCET</h2>
    <div className="underline purple"></div>
    <p>
      CCET is well known for its huge infrastructure and state-of-the-art
      facilities. It is also known as Green Campus because it has a unique
      environment-friendly & energy-efficient building with fabulous
      architecture, lush verdant woods, and landscape gardens that provide
      an idyllic academic environment to our students. CCET offers B.E.
      (Bachelor of Engineering) courses in four streams i.e., Electronics &
      Communication Engineering, Computer Science & Engineering, Mechanical
      Engineering, and Civil Engineering.
    </p>
  </div>
</div>


    </section>
  );
};

export default About;
