import React, { useRef } from "react";
import "./tickets.scss";
import emailjs from "@emailjs/browser";
import Fest from "../../static/logos.png";

const Tickets = () => {
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
    <div className="tickets-page">
      <div className="txt">
        <h1>TICKETS</h1>
        <p>
          You are just one step closer to securing your seat, Fill in the
          details below correctly and we will contact you soon.
        </p>
      </div>
      <div className="form flex">
        <div className="left">
          <img src={Fest} alt="fest" />
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
            />
            <h3>Package</h3>
            <select name="service" id="service">
              <option value="Dessired service">Dessired Package</option>
              <option value="Ordinary">Ordinary</option>
              <option value="VIP">VIP</option>
              <option value="VVIP Table">VVIP Table</option>
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

export default Tickets;
