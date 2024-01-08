import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div>
          <Routes>
            <Route path="Peter-Portfolio" element={<Home />} />
            <Route path="ourServices" element={<OurServices />} />
            <Route path="project" element={<Project />} />
            <Route path="contactUs" element={<ContactUs />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
