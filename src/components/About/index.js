import "../../styles/about.scss";
import { useContext } from "react";
import { CarouselContext } from "../Carousel/Context";

export default function Home() {
  const context = useContext(CarouselContext);
  return (
    <div class="about-root">
      <div class="about-logo">
        <img src="../images/BigLogo.png" />
        <span class="about-logo-link">Link</span>
        <span class="about-logo-dap">Dap</span>
      </div>
      <div class="about-contact-btn">
        <button>Contact</button>
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
