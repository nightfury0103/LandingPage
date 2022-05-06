import "./style.css";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Cursor from "./components/cursor";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // Global settings:
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
