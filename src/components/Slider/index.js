import React from "react";
import Carousel from "../Carousel";
//import { Carousel } from "react-scroll-slider";
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
