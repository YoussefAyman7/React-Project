import React from "react";
import Hero from "./Header/Hero.js";
import Header from "./Header/Header.js";
import Subheadline from "./Header/Subheadline.js";
import Hero2 from "./Header/Hero2.js";
import Service from "./Header/Service.js";
const App = () => {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <Subheadline/>
      <Hero2/>
      <Service/>
    </div>
  );
};

export default App;
