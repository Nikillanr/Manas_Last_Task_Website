import "./styles.css";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Sponsors from "./routes/Sponsors";
import Contact from "./routes/contact";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}
