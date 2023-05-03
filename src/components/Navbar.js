import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./Menuitems";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <a href="/" className="navimg">
          <img
            alt="NavImg"
            src="https://www.projectmanas.in/static/media/manas-with-border.cc617a95dd6d2b255717.png"
          />
        </a>

        <h1 className="navbar-logo"></h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
