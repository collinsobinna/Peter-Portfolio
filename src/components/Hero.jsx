import React from "react";
import { Link } from "react-router-dom";

import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h2>the</h2>
        <h2>philosophy</h2>
      </div>

      <div className="hero-grid">
        <img src={hero} alt="" />

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
