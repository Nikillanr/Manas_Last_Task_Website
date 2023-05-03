import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/eve.jpg";
import Trip2 from "../assets/seraphim.jpg";
import Trip3 from "../assets/cleo.jpg";

function Trip() {
  return (
    <div className="tripcover">
      <div className="trip">
        <h1>Recent Projects</h1>
        <p></p>
        <div className="tripcard">
          <TripData
            cardimg={Trip2}
            heading="Meet SERAPHIM"
            text="Seraphim was our first ever entry into the 20th Student Unmanned Aerial Systems Competition held at St. Mary’s College, Maryland, USA, in 2022. Out of 71 teams from across the world...."
            linkto="/about"
          />

          <TripData
            cardimg={Trip3}
            heading="Meet CLEO"
            text="Cleo is our first attempt at a drone. It was built as a testing benchmark for our autonomous waypoint navigation, path planning and coverage planning algorithms...."
            linkto="/about"
          />

          <TripData
            cardimg={Trip1}
            heading="Meet EVE"
            text="Eve, our driverless car, boasts a software stack capable of Level 2 autonomy behaviour such as real-time navigation and mapping, as well as lane following and switching. Project MANAS is the youngest and the only fully undergraduate team to qualify for the Mahindra Rise Prize challenge where we stood in the top 13 finalists out of 300 teams."
            linkto="/about"
          />
        </div>
      </div>
    </div>
  );
}
export default Trip;
