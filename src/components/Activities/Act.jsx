import React from "react";
import "./act.scss";
import { FaAcquisitionsIncorporated } from "react-icons/fa";

const Act = () => {
  return (
    <div className="activity" id="activity">
      <div className="txt">
        <p>ACTIVITIES</p>
        <h1>A cultural fest like no other</h1>
      </div>
      <div className="grides actives">
        <li className="act">
          <FaAcquisitionsIncorporated className="icond" />
          <h2>Cultural performances</h2>
          <p>
            Experience the best of Uganda's wealthy culture through breath
            taking performances by the best acts from all regions
          </p>
        </li>
        <li className="act">
          <FaAcquisitionsIncorporated className="icond" />
          <h2>Cultural food</h2>
          <p>
          Yummy is an under statement when defining Uganda cultural meals, come and get a taste of thrills.
          </p>
        </li>
        <li className="act">
          <FaAcquisitionsIncorporated className="icond" />
          <h2>Cultural Art Exibition</h2>
          <p>
          From Music, Dance and Dramma to fine art, Uganda's diverse art and craft all at your disposal
          </p>
        </li>
      </div>
    </div>
  );
};

export default Act;
