import React from "react";
import "./about.scss";
import Bg from '../../static/bg.jpg'
const About = () => {
  return (
    <div className="about-section flex" id="about">
      <div className="left">
        <h1>About the Meet up festival</h1>
        <p>
          Experience at it’s Ultimate. A fusion of culture, comedy, food ,
          drinks, games and nonstop entertainment is Meetup Festival. Meet and
          connect with a variety of men and women from everywhere around Uganda.
          Discover the unity in diversity. Connect with different people ,
          listen into unique sounds, taste cultural foods , local beverages with
          comedy and nonstop entertainment.
        </p>
        <button className="btn-max">Join In</button>
      </div>
      <div className="left">
        <img src={Bg} alt="festival" />
      </div>
    </div>
  );
};

export default About;
