import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>PROJECT MANAS</h1>
          <p>Bringing Bits to Life</p>
        </div>
        <div>
          <a href="https://www.facebook.com/projectmanas">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/project.manas/?hl=en">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com/projectmanas">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCpgA3-I00lUVgXVeg1CNaFw">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
          <a href="https://www.linkedin.com/company/project-manas/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Get in touch</h4>
          <hr color="#ec8d20" width="10%" />
          <a href="mailto:projectmanas.mit@gmail.com">
            projectmanas.mit@gmail.com
          </a>
        </div>
        <div>
          <h4>Phone</h4>
          <hr color="#ec8d20" width="10%" />
          <a>Nilabha Das: +919163134679</a>
          <a>Deep Gupta: +917425825565</a>
          <a>Aditya Balaji: +918903081446</a>
        </div>
        <div>
          <h4>Address</h4>
          <hr color="#ec8d20" width="10%" />
          <a href="https://goo.gl/maps/azMkaWgtZFf7uX9z5" target="blank">
            Automobile Workshop,
          </a>
          <a href="https://goo.gl/maps/azMkaWgtZFf7uX9z5" target="blank">
            Near Kamath Circle,
          </a>
          <a href="https://goo.gl/maps/azMkaWgtZFf7uX9z5" target="blank">
            MIT, Manipal, Karnataka 576104
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <hr color="#ec8d20" width="20%" />
          <a href="https://www.projectmanas.in/faq" target="blank">
            FAQ
          </a>
          <a href="https://www.projectmanas.in/#about" target="blank">
            Project MANAS
          </a>
          <a href="/Gallery">Gallery</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
