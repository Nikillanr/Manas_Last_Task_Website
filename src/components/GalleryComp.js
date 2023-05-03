import "./GalleryCompStyles.css";
import CloseIcon from "@material-ui/icons/Close";
import img1 from "../assets/homeimg1.jpg";
import img2 from "../assets/homeimg2.jpg";
import img3 from "../assets/homeimg3.jpg";
import img4 from "../assets/homeimg4.jpg";
import img5 from "../assets/homeimg5.jpg";
import img6 from "../assets/homeimg6.jpg";
import img7 from "../assets/homeimg7.jpg";
import img8 from "../assets/homeimg8.jpg";
import img9 from "../assets/cleo.jpg";
import img10 from "../assets/eve.jpg";
import img11 from "../assets/seraphim.jpg";
import { useState } from "react";

const GalleryComp = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
    {
      id: 7,
      imgSrc: img7
    },
    {
      id: 8,
      imgSrc: img8
    },
    {
      id: 9,
      imgSrc: img9
    },
    {
      id: 10,
      imgSrc: img10
    },
    {
      id: 11,
      imgSrc: img11
    }
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <h1 className="maintext"> Gallery</h1>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryComp;
