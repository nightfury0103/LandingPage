import React from "react";
import Carousel from "../Scroll/Carousel";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";

const Slider = () => (
  <Carousel>
    <Home />
    <About />
    <Projects />
  </Carousel>
);

export default Slider;
