import React from "react";
import Hero from "./Hero";
import About from "./About";
import IMC from "./IMC";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PricingPlan from "./PricingPlan";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-auto">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="imc">
          <IMC />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="banner">
          <Banner />
        </div>
        <div id="trainers">
          <Trainers />
        </div>
        <div id="popular">
          <Popular />
        </div>
        <div id="plans">
          <PricingPlan />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default Home;
