import img1 from "../assets/homeimg1.jpg";
import img2 from "../assets/homeimg2.jpg";
import img3 from "../assets/homeimg3.jpg";
import img4 from "../assets/homeimg4.jpg";
import img5 from "../assets/homeimg5.jpg";
import img6 from "../assets/homeimg6.jpg";
import img7 from "../assets/homeimg7.jpg";
import img8 from "../assets/homeimg8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>About Us</h1>
      <p></p>
      <DestinationData
        cname="first-des"
        heading="Project MANAS"
        text="The official AI and Robotics team of MAHE.
        IGVC 2019 Grand Champions.
        Building an autonomous car for India.
        Developed a fully autonomous drone."
        img1={img1}
        img2={img2}
        licname="lihome"
      />

      <DestinationData
        cname="first-des-reverse"
        heading="Who are we?"
        text="Project MANAS is the official AI and Robotics team of MAHE, Manipal established in 2014. We are the Grand Prize winners and won the Lescoe Cup at the Intelligent Ground Vehicle Competition which is held at Michigan. Our aim is to build India’s first driverless car and are among the top 13 participants in the Mahindra’s Rise Prize challenge."
        img1={img3}
        img2={img4}
        licname="lihome"
      />

      <DestinationData
        cname="first-des"
        heading="Vision"
        text="Project MANAS aims to inspire advanced research in Artificial Intelligence and oversee its implementation enabling automated systems to be made available to general populous."
        img1={img5}
        img2={img6}
        licname="lihome"
      />

      <DestinationData
        cname="first-des-reverse"
        heading="Mission"
        text="Our mission is to uphold the tradition of pushing the limits of Artificial Intelligence and Bringing Bits to Life."
        img1={img7}
        img2={img8}
        licname="lihome"
      />
    </div>
  );
};
export default Destination;
