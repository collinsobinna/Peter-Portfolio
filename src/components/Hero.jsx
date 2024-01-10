import React from "react";
import { Link } from "react-router-dom";

import hero from "../images/heroVideo.mp4";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h2>the</h2>
        <h2>philosophy</h2>
      </div>

      <div className="hero-grid">
        <video autoPlay loop muted playsInline>
          <source src={hero} type="video/mp4" />
        </video>

        {/* <img src={hero} alt="" /> */}

        <div className="hero-details">
          <p>
            For three generations and nearly a century, Peter Love Interiors and
            Exteriors has been delivering elegant, timeless spaces and
            made-to-measure, hand crafted, fine furniture that excite the eye
            and nuture the soul.
          </p>

          <Link to="/contactUs">Contact us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
