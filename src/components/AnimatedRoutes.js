import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Sponsors from "../routes/Sponsors";
import Contact from "../routes/contact";
import { AnimatePresence } from "framer-motion";
import Gallery from "../routes/Gallery";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
