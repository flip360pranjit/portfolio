import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactMe from "../pages/ContactMe";
import Success from "../pages/Success";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default Routers;
