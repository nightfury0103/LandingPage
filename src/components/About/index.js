import "../../styles/about.scss";
import { useContext, useEffect, useState } from "react";
import { CarouselContext } from "../Scroll/Carousel/Context";

export default function Home() {
  const context = useContext(CarouselContext);

  const [logoStatus, setLogoStatus] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.currentIndex == 1) {
      setTimeout(() => {
        setLogoStatus(true);
      }, 200);
      setStatus(true);
    } else {
      setTimeout(() => {
        setStatus(false);
      }, 1000);
      if (context.currentIndex == 0) setLogoStatus(false);
    }
  });

  return (
    <div class={status ? "about-root" : "about-root none"}>
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
            context.setNextSlide("FORWARD");
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
