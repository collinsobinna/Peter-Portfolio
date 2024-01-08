import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Display from "../components/Display";
import OurProject from "../components/OurProject";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Display />
      <OurProject />
      <Services />
    </>
  );
};

export default Home;
