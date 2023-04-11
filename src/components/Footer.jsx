import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Loh from "../static/s.jfif";
// import Loh2 from "../static/gf.png";
import Loh3 from "../static/download.png";
import Loh4 from "../static/logo.png";
import Loh5 from "../static/loog.png";
import Logo from "../static/loog.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="partners column">
        <h1>Partners & Sponsors</h1>
        <div className="lite">
          <img src={Loh} alt="brand" />
          {/* <img src={Loh2} alt="brand" /> */}
          <img src={Loh3} alt="brand" />
          <img src={Loh4} alt="brand" />
          <img src={Loh5} alt="brand" />
        </div>
        <button className="btn-max">Sponsor</button>
      </div>
      <div className="nav flex">
        <div className="col">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="col flex">
          
          <li>
            <a href="/ticket">Reservations</a>
          </li>
          <li>
            <a href="/Vendors">Vendors</a>
          </li>
          <li>
            <a href="/Privacy policy">Privacy policy</a>
          </li>
        </div>
        <div className="col">
          <div className="social flex">
            <a href="https://www.facebook.com/profile.php?id=100088576860814">
              <FaFacebook className="ico" />
            </a>
            <a href="https://twitter.com/MeetUpFestival">
              <FaTwitter className="ico" />
            </a>
            <a href="https://www.instagram.com/meetupfestival/">
              <FaInstagram className="ico" />
            </a>
            <a href="https://www.linkedin.com/in/meetup-festival-96326a259/">
              <FaLinkedin className="ico" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy ">
        <FaCopyright />
        Meetup Festival 2022 All Rights reserved
      </div>
    </div>
  );
};

export default Footer;
