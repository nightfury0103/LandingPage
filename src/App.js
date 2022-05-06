import "./style.css";
import Cursor from "./components/Cursor";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
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
      <Cursor>
        <Slider />
      </Cursor>
    </Layout>
  );
}
