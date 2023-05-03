import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import GalleryComp from "../components/GalleryComp";
import img1 from "../assets/homeimg6.jpg";
import { motion } from "framer-motion";

function Gallery() {
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
        heroImg="https://manipal.edu/content/dam/manipal/mu/Admissions/Home_Banner.png"
        tcName="hero-text"
        title=""
        text=""
        btnText=""
        url="/"
      />
      <GalleryComp />
      <Footer />
    </motion.div>
  );
}
export default Gallery;
