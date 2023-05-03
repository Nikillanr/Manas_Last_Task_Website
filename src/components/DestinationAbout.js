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

const DestinationAbout = () => {
  return (
    <div className="destination">
      <h1>Our Projects</h1>
      <p></p>
      <DestinationData
        cname="first-des"
        heading="SERAPHIM"
        text="Seraphim was our first ever entry into the 20th Student Unmanned Aerial Systems Competition held at St. Mary’s College, Maryland, USA, in 2022. Out of 71 teams from across the world, it ranked as follows:"
        licname="liabout"
        li1="18th in the World (Overall)"
        li2="2nd in Flight Readiness Review"
        li3="10th in Technical Design Report"
        li4=" 18th in Mission Demonstration"
        img1="https://i.imgur.com/IyIZrBm.jpeg"
        img2="https://i.imgur.com/NJ0R2ZU.jpeg"
      />

      <DestinationData
        cname="first-des"
        heading="CLEO"
        text="Cleo is our first attempt at a drone. It was built as a testing benchmark for our autonomous waypoint navigation, path planning and coverage planning algorithms. The key features of Cleo are as follows:"
        licname="liabout"
        li1="Capable of Autonomous flight for 20 minutes."
        li2="Achieves Static Obstacle Avoidance."
        li3=" Maximum Altitude 100 ft"
        li4=" Waypoint Accuracy of 1.3 m"
        img1="https://i.imgur.com/dU3wTWa.jpeg"
        img2="https://i.imgur.com/79raK1i.jpeg"
      />

      <DestinationData
        cname="first-des"
        heading="EVE"
        text="Eve, our driverless car, boasts a software stack capable of Level 2 autonomy behaviour such as real-time navigation and mapping, as well as lane following and switching. Project MANAS is the youngest and the only fully undergraduate team to qualify for the Mahindra Rise Prize challenge where we stood in the top 13 finalists out of 300 teams. Some highlights are as follows:"
        licname="liabout"
        li1="VectorNav: GNSS-Aided Internal Navigation System"
        li2="NVIDIA GTX 1080Ti: GPU's for Deep learning algorithms"
        li3="XIMEA MQ042CG Camera: Capture images and videos with a 79 degree horizontal FOV"
        li4="Ouster 3d LiDAR: 3d Mapping of environment upto 120m. Spatial awareness and localisation for autonomous applications "
        img1="https://i.imgur.com/kyF5Xr3.jpeg"
        img2={img1}
      />

      <DestinationData
        cname="first-des"
        heading="SOLO"
        text="Solo was developed as a successor to Adam, taking part in the International Ground Vehicle Challenge in 2019, and received various accolades. Among 46 teams, Solo stood as follows:"
        licname="liabout"
        li1="Grand Prize Winner (Overall)."
        li2="1st in the Interoperability Challenge"
        li3="2nd in Overall Robot Design"
        li4=" 6th in Cyber Security"
        img1="https://i.imgur.com/gvFeY34.jpeg"
        img2="https://i.imgur.com/6Qq4LfK.jpeg"
      />

      <DestinationData
        cname="first-des"
        heading="ADAM"
        text="Adam is an autonomous ground vehicle, which was our first entry into the International Ground Vehicle Challenge, held at Oakland University, Michigan, USA, in 2018. Among 26 teams, Adam achieved the following results:"
        licname="liabout"
        li1="9th in the World (Overall)"
        li2="2nd in India (Overall)"
        li3="2nd in the Interoperability Challenge"
        li4="first entry into the International Ground Vehicle Challenge"
        img1="https://i.imgur.com/pzgLFfn.jpeg"
        img2="https://i.imgur.com/NuK93uf.jpeg"
      />

      <DestinationData
        cname="first-des"
        heading="WALL-E"
        text="Our first stride into the autonomous robots started with Wall-E. It was built as a proof of concept. Wall-E is where the journey and dream began."
        licname="lihome"
        img1="https://scontent.fbom2-2.fna.fbcdn.net/v/t1.18169-9/10959666_322626917934582_8989421911164402103_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=RUCJQJg8KogAX_Oye36&_nc_ht=scontent.fbom2-2.fna&oh=00_AfA4VbkXImOjGuvmNBRTGe73yhEd-w0nnzixIClfjNHPXw&oe=645904E5"
        img2="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.18169-9/17883_322626987934575_9068741386661857651_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=I1Wh4vzZEGIAX8QHU2K&_nc_ht=scontent.fbom2-1.fna&oh=00_AfAtkp7r3jIpEfnbX3l9dlEL1Twt88v4LTNC7pN3RW3s9Q&oe=6459071D"
      />
    </div>
  );
};
export default DestinationAbout;
