import "./ImageCarouselStyles.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Images from "./Images";

function ImageCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="main">
      <div className="images">
        <a href="/gallery">
          <h1>Gallery</h1>
        </a>
        <p>Swipe/Drag to see images</p>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {Images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ImageCarousel;
