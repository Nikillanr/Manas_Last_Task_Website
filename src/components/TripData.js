import "./TripStyles.css";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <a href={props.linkto}>
          <img alt="cardimg" src={props.cardimg} />
        </a>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default TripData;
