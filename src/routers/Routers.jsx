import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactMe from "../pages/ContactMe";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default Routers;
