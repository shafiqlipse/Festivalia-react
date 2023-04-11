import React from "react";
import "./price.scss";


const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="txt">
        <p>TICKETS</p>
        <h1>Save your seat at the coolest cultural fest in town</h1>
      </div>
      <div className="grides actives">
        <li className="act flex">
          <h1>Ordinally</h1>
          <h2>
            20,000 /<span> Person</span>
          </h2>
          <hr />
          <a href="https://www.eventbrite.com/e/meetup-festival-tickets-484484053847" className="btn-max">
            Buy ticket
          </a>
        </li>
        <li className="act flex">
          <h1>VIP</h1>
          <h2>
            50,000 /<span>Person</span>
          </h2>
          <hr />

          <a href="https://www.eventbrite.com/e/meetup-festival-tickets-484484053847" className="btn-max">
            Buy ticket
          </a>
        </li>
        <li className="act flex">
          <h1>VVIP</h1>
          <h2>2,000,000 /
            <span>Table</span>
          </h2>
          <hr />
          <a href="https://www.eventbrite.com/e/meetup-festival-tickets-484484053847" className="btn-max">
            Buy ticket
          </a>
        </li>
      </div>
    </div>
  );
};

export default Pricing;
