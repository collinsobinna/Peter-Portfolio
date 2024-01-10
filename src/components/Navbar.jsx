import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} alt="" />

        <h2>PETER LOVE CONCEPT</h2>
      </div>

      <div className="navbar-link">
        <ul
          className={click ? "navbar-links active" : "navbar-links"}
          onClick={handleClick}
        >
          <li>
            <Link to="/Peter-Portfolio">Home</Link>
          </li>

          <li>
            <Link to="/project">Project</Link>
          </li>

          {/* <li>
            <Link to="/ourServices">Our Services</Link>
          </li> */}

          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>

        <div
          className={click ? "navbar-socials active" : "navbar-socials"}
          onClick={handleClick}
        >
          <Link to="tel:+2348164613635">
            <FaPhoneAlt />
          </Link>

          <Link to="whatsapp://send?phone=+2348035308412">
            <FaWhatsapp />
          </Link>

          <Link to="mailto:pnrialike87@gmail.com">
            <FaEnvelope />
          </Link>
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
    </section>
  );
};

export default Navbar;
