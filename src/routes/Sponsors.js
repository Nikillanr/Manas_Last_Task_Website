import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import img1 from "../assets/homeimg1.jpg";
import { motion } from "framer-motion";

function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Navbar />
      <Hero
        cName="hero-mid"
        fgimgcName="hero-mid-fgimg"
        heroImg={img1}
        tcName="hero-mid-text"
        title=""
        text=""
        btnText=""
        url="/"
      />
      <Products />
      <Footer />
    </motion.div>
  );
}
export default Sponsors;
