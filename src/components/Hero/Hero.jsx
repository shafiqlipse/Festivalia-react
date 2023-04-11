import React from "react";
import "./hero.scss";
import LOOg from '../../static/loog.png'
import {FaClock, FaMapMarker} from 'react-icons/fa'
import Timer from "../Timer/Timer";

const Hero = () => {
  return (
    <div className="hero-section flex">
      <div className="left">
        <img src={LOOg} alt="logo-meetup festival" />
        <h1>Experience at it’s Ultimate.</h1>
        <p>
          A fusion of culture, comedy, food , drinks, games and nonstop
          entertainment is Meetup Festival. Meet and connect with a variety of
          men and women from everywhere around Uganda. Discover the unity in
          diversity.
        </p>
        <div className="list flex">
          <li className="loc flex">
            <FaMapMarker className='icon'/>
            <span>Akamwesi gardens</span>
          </li>
          <li className="loc flex">
            <FaClock className='icon'/>
            <span>10:00AM - MID NIGHT</span>
          </li>
        </div>
        <Timer/>
      </div>
    </div>
  );
};

export default Hero;
