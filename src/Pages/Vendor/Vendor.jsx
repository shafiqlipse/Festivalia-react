import React, { useRef } from "react";
import "./vendor.scss";
// import "../Tickets/tickets.scss";
import emailjs from "@emailjs/browser";
// import Fest from "../../static/logos.png";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";

const Vendor = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56x1nco",
        "template_gnol2pb",
        form.current,
        "2bbzGiJah99wQFATz"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  return (
    <div className="vendors">
      <div className="txt">
        <p>VENDORS</p>
        <h1>Book a spot now</h1>
      </div>
      <div className="grides vend">
        <div className="pac">
          <h1>UGX 1,000,000</h1>
          <hr />
          <h3>MARKETPLACE - STALL / TABLE</h3>
          <hr />
          <div className="list">
            <li>2 festival passes</li>
            <li>Selling space in street food market</li>
          </div>
        </div>
        <div className="pac">
          <h1>UGX 3,000,000</h1>
          <hr />
          <h3>MARKETPLACE - POP UP SHOP OR EXHIBITOR TENT</h3>
          <hr />
          <div className="list">
            <li>4 festival passes</li>
            <li>Half of a 5m x 5m tent</li>
            <li>2 tables and 2 chairs</li>
          </div>
        </div>
        <div className="pac">
          <h1>UGX 4,500,000</h1>
          <hr />
          <h3>PREMIUM POP UP SHOP OR EXHIBITOR TENT</h3>
          <hr />
          <div className="list">
            <li>6 festival passes</li>
            <li>5m x 5m tent</li>
            <li>2 tables and 2 chairs</li>
            <li>Power supply</li>
          </div>
        </div>
        <div className="pac">
          <h1>UGX 1,000,000</h1>
          <hr />
          <h3>STREET FOOD VENDORS</h3>
          <hr />
          <div className="list">
            <li>2 festival passes</li>
            <li>Selling space with table and 2 chairs</li>
          </div>
        </div>
        <div className="pac">
          <h1>UGX 4,500,000</h1>
          <hr />
          <h3>FOOD COURT</h3>
          <hr />
          <div className="list">
            <li>6 festival passes</li>
            <li>5m x 5m tent</li>
            <li>2 tables</li>
            <li>2 chairs</li>
            <li>Power supply</li>
          </div>
        </div>
        <div className="pac">
          <h1>UGX 7,000,000</h1>
          <hr />
          <h3>PREMIUM RESTAURANT SPACE</h3>
          <hr />
          <ul className="list">
            <li>Spectacular Nile river view location.</li>
            <li>
              Create a unique food experience for your restaurant business
            </li>
            <li>8 festivals passes, 5m x 5m tent</li>
            <li>2 rectangular tables, 5 round tables with 20 chairs.</li>
            <li>*Need to bring your own generator</li>
          </ul>
        </div>
      </div>
      <div className="txt">
        <p>Make a reservation</p>
        <h1>Book a spot now</h1>
      </div>
      <div className="form flex">
        <div className="left">
          <li>
            <FaEnvelopeOpen />
            meetupfestival@gmail.com
          </li>
          <li>
            <FaPhoneAlt />
            +256 786118137
          </li>
          
        </div>
        <div className="left">
          <form className="form-control column" ref={form} onSubmit={sendEmail}>
            <h3>Names</h3>
            <input type="text" placeholder="FullName" name="full_name" />
            <h3>Phone</h3>
            <input type="text" placeholder="Tel" required name="phone" />
            <h3>Email</h3>
            <input
              type="Email"
              placeholder="Your Email"
              required
              name="email"
            /><h3>Address</h3>
            <input
              type="text"
              placeholder="Your Address"
              required
              name="address"
            />
            <h3>Spot</h3>
            <select name="spot" id="spot">
              <option value="MARKETPLACE - STALL / TABLE">MARKETPLACE - STALL / TABLE</option>
              <option value="MARKETPLACE - POP UP SHOP OR EXHIBITOR TENT">MARKETPLACE - POP UP SHOP OR EXHIBITOR TENT</option>
              <option value="PREMIUM POP UP SHOP OR EXHIBITOR TENT">PREMIUM POP UP SHOP OR EXHIBITOR TENT</option>
              <option value="STREET FOOD VENDORS">STREET FOOD VENDORS</option>
              <option value="FOOD COURT">FOOD COURT</option>
              <option value="PREMIUM RESTAURANT SPACE">PREMIUM RESTAURANT SPACE</option>
            </select>

            <button className="btn-max" type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
