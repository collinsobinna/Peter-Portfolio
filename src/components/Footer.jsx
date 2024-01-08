import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <p>
        © {currentYear} <span>PL INTERIOR AND EXTERIOR</span> All Rights
        Reserved
      </p>
    </section>
  );
};

export default Footer;
