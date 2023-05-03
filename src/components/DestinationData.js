import img1 from "../assets/homeimg1.jpg";
import img2 from "../assets/homeimg2.jpg";
import img3 from "../assets/homeimg3.jpg";
import img4 from "../assets/homeimg4.jpg";
import { Component } from "react";
import "./DestinationStyles.css";
import { motion } from "framer-motion";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.cname}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <ul className={this.props.licname}>
            <li>{this.props.li1}</li>
            <li>{this.props.li2}</li>
            <li>{this.props.li3}</li>
            <li>{this.props.li4}</li>
          </ul>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
