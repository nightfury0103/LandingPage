import "../../styles/about.scss";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { SliderContext } from "../Slider/SliderContext";

export default function About() {
  const context = useContext(SliderContext);

  const [logoStatus, setLogoStatus] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.curId == 1) {
      setTimeout(() => {
        setLogoStatus(true);
      }, 100);

      setStatus(true);
    } else {
      setStatus(false);
      if (context.curId == 0) setLogoStatus(false);
    }
  });

  return (
    <div
      class={
        status
          ? "about-root animate__animated animate__fadeIn"
          : "about-root none"
      }
    >
      <div class="about-header">
        <div class={logoStatus ? "about-logo on" : "about-logo"}>
          <img src="../images/BigLogo.png" />
          <span class="about-logo-link">Link</span>
          <span class="about-logo-dap">Dap</span>
        </div>
        <div class="about-contact-btn">
          <button>Contact</button>
        </div>
      </div>

      <div class="about-content">
        LinkDAP is a boutique web development agency specializing in design,
        development, branding, and everything in between.
      </div>
      <div class="about-projects-btn">
        <button
          onClick={() => {
            context.toggleId();
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
