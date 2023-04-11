import React from "react";
import PageHead from "../../components/PageHead";
import "./activities.scss";
import Music from "../../static/rema.webp";
import Dance from "../../static/dance.jpg";
import Food from "../../static/food.jpg";
import Games from "../../static/games.jpg";
import Dress from "../../static/dress.jpg";

const Activities = () => {
  return (
    <div className="activities">
      <PageHead
        hed="Activities"
        par="From Musical performances to Art exibitions, we have quite a variety of fun and culture rich activities for you."
      />

      <div className="actives">
        <div className="activity">
          <div className="left flex">
            <div className="imh">
              <img src={Music} alt="rema" />
            </div>
            <div className="text">
              <h1>Musical performances</h1>
              <p>
                Stunning musical performances from the best artists from all regions including Rema Namakula, David Lutalo, Cindy, and many more all at your disposal.
              </p>
            </div>
          </div>
          <div className="left flex">
            
            <div className="text">
              <h1>Cultural dance</h1>
              <p>
                Come enjoy the rich dance of Uganda's culture featuring cultural troops from all regions.
              </p>
            </div>
            <div className="imh">
              <img src={Dance} alt="rema" />
            </div>
          </div>
          <div className="left flex">
            <div className="imh">
              <img src={Food} alt="rema" />
            </div>
            <div className="text">
              <h1>Traditional food</h1>
              <p>
                From Matooke to Kalo come enjoy mouth watering traditional dishes from all tribes prepared by the best kitchen kings and queens.
              </p>
            </div>
          </div>
          <div className="left flex">
            
            <div className="text">
              <h1>Traditional games</h1>
              <p>
                Mweso, Ludo, duulu, and many more game, come watch and also participate in these cultural games from all regions.
              </p>
            </div>
            <div className="imh">
              <img src={Games} alt="rema" />
            </div>
          </div>
          <div className="left flex">
            <div className="imh">
              <img src={Dress} alt="rema" />
            </div>
            <div className="text">
              <h1>Cultural wear</h1>
              <p>
                Witness the rich culture of Uganda with tradional wear from all regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
