import React from "react";
import { Link } from "react-router-dom";

import services from "../images/services.jpg";

const Services = () => {
  return (
    <section className="services-container">
      <div>
        <h2>our</h2>
        <h2>services</h2>
      </div>

      <div className="service-image">
        <img src={services} alt="" />

        <div className="service-abs">
          <marquee behavior="" direction="left">
            INTERIORS AND EXTERIORS INTERIORS AND EXTERIORS
          </marquee>
        </div>
      </div>

      <p>
        Peter Love Interiors And Exteriors is all about delivering beautiful,
        inspiring spaces as well as elevating the owner’s living and/or working
        environment into a positive experience that evokes happiness, well-being
        and contentment. We are manpowered with a well experienced in-house
        interior design team to help you every step of the way; however we also
        work closely with architects, interior designers and decorators who
        collaborate with our clients.
      </p>

      <Link to="/project">Our services</Link>
    </section>
  );
};

export default Services;
