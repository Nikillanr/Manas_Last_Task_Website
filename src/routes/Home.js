import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import img1 from "../assets/herofg.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Navbar />
      <Hero
        cName="hero"
        fgimgcName="hero-fgimg"
        herofgimg={img1}
        heroImg="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        tcName="hero-text"
        title=""
        text=""
        btnText="Contact us"
        url="/Contact"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <ImageCarousel />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}

export default Home;
