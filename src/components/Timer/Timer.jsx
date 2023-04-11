import React, { useRef, useState, useEffect } from "react";
import "./timer.scss";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("January 8, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      //   time
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setMins(min);
        setSecs(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    let intc = interval.current;
    startTimer();
    return () => {
      clearInterval(intc);
    };
  });

  return (
    <div className="timer">
      <div className="times">
        <div className="bose column">
          <h2>{days}</h2>
          <span>Days</span>
        </div>
        <div className="bose column">
          <h2>{hours}</h2>
          <span>Hours</span>
        </div>
        <div className="bose column">
          <h2>{mins}</h2>
          <span>Minutes</span>
        </div>
        <div className="bose column">
          <h2>{secs}</h2>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
