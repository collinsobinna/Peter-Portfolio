import React from "react";

const Map = () => {
  return (
    <section className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6941494376865!2d3.4886627733502817!3d6.433319224208139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf516ac8e7289%3A0xf6e003ca4222a4a3!2sWestbrook%20mall%20by%20Dillon!5e0!3m2!1sen!2sng!4v1700820490228!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
