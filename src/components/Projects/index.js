import "../../styles/projects.scss";
import "./project";
import Project from "./project";
import { useContext, useState, useEffect } from "react";
import { CarouselContext } from "../Scroll/Carousel/Context";
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

export default function Home() {
  AOS.refresh();
  const projects = [1, 2, 3, 4];
  const context = useContext(CarouselContext);

  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.currentIndex == 2) {
      setStatus(true);
    } else {
      setTimeout(() => {
        setStatus(false);
      }, 1000);
    }
  });

  return (
    <div class={status ? "projects-root" : "projects-root none"}>
      <div class="projects-header">
        <div class="projects-logo">
          <img src="../images/BigLogo.png" />
          <span class="projects-logo-link">Link</span>
          <span class="projects-logo-dap">Dap</span>
        </div>
        <div class="projects-contact-btn">
          <button>Contact</button>
        </div>
      </div>
      <div class="projects-text">
        We specialize in creating platform agnostic web apps, custom CMS and
        Ecommerce themes, server administration, data migration and management,
        site migration and maintenance, branding, UX/UI design, and project
        mtanagement.
      </div>
      <div class="projects-wrapper">
        {projects.map((name, id) => (
          <Project key={id} name={name} />
        ))}
      </div>
    </div>
  );
}
