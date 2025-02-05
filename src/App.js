import React from "react";
import Hero from "./Header/Hero.js";
import Header from "./Header/Header.js";
import Subheadline from "./Header/Subheadline.js";
// import Hero from "./Header/Hero2.js";
import Service from "./Header/Service.js";
import Nav from"./Day2/Nav.jsx"
import Hero2 from"./Day2/Hero2.jsx"
import Products from "./Day2/Products.jsx";
import Footer from "./Day2/Footer.jsx";
const App = () => {
  return (
    // Day1


    // <div className="container">
    //   <Header/>
    //   <Hero/>
    //   <Subheadline/>
    //   <Hero2/>
    //   <Service/>
    // </div>


    // Day2

    <>
    <Nav/>
    <Hero2/>
    <Products/>
    <Footer/>
    </>
  );
};

export default App;
