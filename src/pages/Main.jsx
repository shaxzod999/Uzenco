import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About";
import Features from "../components/Features";
import MapShowcase from "../components/MapShowcase";
import Community from "../components/Community";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

function Main() {
  return (
    <div>
      <Hero />
       <About />
      {/*<Features />
      <MapShowcase />
      <Community />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <CTA /> */}
    </div>
  );
}

export default Main;
