import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <p>
        © {currentYear} <span>PETER LOVE CONCEPT</span> All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
