import React from "react";
import "./feat.scss";
import Rema from "../../static/rema.webp";
import Lut from "../../static/lut.webp";
import Cin from "../../static/ciindy.webp";
import Coco from "../../static/download.jfif";
import Shi from "../../static/download (1).jfif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feature = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="feat-section" id="feature">
      <div className="txt">
        <h1>Featuring</h1>
        <p>
          Uganda's best Artists from all regions, Central, Northern, Western,
          and Eastern.
        </p>
      </div>
      <div className="feat ">
        <h2> Single Item</h2>
        <Slider {...settings} className="slides-container">
          <div className="artist column">
            <img src={Rema} alt="rema" />
            <h3>Rema Namakula</h3>
          </div>
          <div className="artist">
            <img src={Lut} alt="rema" />
            <h3>David Lutalo</h3>
          </div>
          <div className="artist">
            <img src={Cin} alt="rema" />
            <h3>Cindy</h3>
          </div>
          <div className="artist">
            <img src={Coco} alt="rema" />
            <h3>Coco finger</h3>
          </div>
          <div className="artist">
            <img src={Shi} alt="rema" />
            <h3>Shine Omukiga</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Feature;
