import "../../styles/projects.scss";
import "./project";
import Project from "./project";
import { useContext, useState, useEffect } from "react";
import { SliderContext } from "../Slider/SliderContext";
import "animate.css";

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

export default function Projects() {
  AOS.refresh();
  const projects = [1, 2, 3, 4];
  const context = useContext(SliderContext);

  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.curId == 2) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  });

  return (
    <div
      class={
        status
          ? "projects-root animate__animated animate__fadeInLeft"
          : "projects-root none"
      }
    >
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
      <div
        class={
          status
            ? "projects-text animate__animated animate__fadeInUp animate__delay-1s"
            : "projects-text"
        }
      >
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
