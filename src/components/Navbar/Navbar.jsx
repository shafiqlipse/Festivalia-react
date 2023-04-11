import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../static/loog.png";
import { Navs } from "../../Data/NavData"; 

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bg, setBg] = useState(false);

  const Navstick = () => {
    if (window.scrollY > 100) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  const MobileMenu = () => {
    setToggle(!toggle);
  };

  window.addEventListener("scroll", Navstick);
  return (
    <div className={`navbar flex ${bg ? "colored" : "null"}`}>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="navbar-nav flex">
      {Navs.map((index) => {
          return (
            <li className="nav-item" key={index.id}>
              <Link to={index.link} className="navlink" onClick={MobileMenu}>
                {index.page}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="toggle" onClick={MobileMenu}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-mobile flex ${toggle ? null : "toleft"}`}>
        {Navs.map((index) => {
          return (
            <li className="nav-item" key={index.id}>
              <Link to={index.link} className="navlink" onClick={MobileMenu}>
                {index.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
