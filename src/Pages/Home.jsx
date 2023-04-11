import React from "react";
import About from "../components/Abt/About";
import Act from "../components/Activities/Act";
import Feature from "../components/Feat/Feature";

import Hero from "../components/Hero/Hero";
import Pricing from "../components/Price.jsx/Price";


const Home = () => {
  return (
    <div>
      <Hero />
    <About/>
    <Feature/>
    <Act/>
    <Pricing/>
    </div>
  );
};

export default Home;
