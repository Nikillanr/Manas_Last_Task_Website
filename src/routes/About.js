import DestinationAbout from "../components/DestinationAbout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import img8 from "../assets/homeimg8.jpg";
import { motion } from "framer-motion";

function About() {
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
        heroImg={img8}
        tcName="hero-mid-text"
        title=""
        text=""
        btnText=""
        url="/"
      />
      <AboutUs />
      <DestinationAbout />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}

export default About;
