import React from "react";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import { SliderProvider } from "./SliderContext";

const Slider = () => (
  <SliderProvider>
    <Home />
    <About />
    <Projects />
  </SliderProvider>
);

export default Slider;
