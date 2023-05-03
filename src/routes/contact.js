import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Contact() {
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
        heroImg="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        tcName="hero-text"
        title="CONTACT US"
        text=""
        btnText=""
        url="/"
      />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}
export default Contact;
