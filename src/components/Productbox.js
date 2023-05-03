import "./ProductsStyles.css";

function Productbox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.boximg} alt="" />
      </div>

      <div className="a-b-text">
        <h2>{props.boxtitle}</h2>
        <a href={props.url} target="blank" className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}
export default Productbox;
