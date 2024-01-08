import React from "react";
import { Link } from "react-router-dom";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map";

const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-details">
        <div className="contact-logo">
          <Link to="https://www.pinterest.com">
            <FaPinterest />
          </Link>

          <Link to="whatsapp://send?phone=+2348035308412">
            <FaWhatsapp />
          </Link>

          <Link to="mailto:pnrialike87@gmail.com">
            <FaEnvelope />
          </Link>

          <Link to="https://www.instagram.com/pnrialike87/">
            <FaInstagram />
          </Link>
        </div>

        <div className="contact-info">
          <div>
            <FaLocationDot />

            <p className="address">
              Ikate, 4th roundabout, beside Oando filling station, Lekki
            </p>
          </div>

          <div>
            <FaPhoneAlt />

            <Link to="tel:+2348164613635">
              <p>+2348164613635</p>
              <p>+2348035308412</p>
            </Link>
          </div>

          <div>
            <FaEnvelope />

            <Link to="mailto:pl@gmail.com">
              <p>Mail: pnrialike87@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <Map />
      </div>
    </section>
  );
};

export default ContactUs;
