import "../../styles/about.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div class="about-root">
      <div class="about-logo">
        <img src="images/BigLogo.png" />
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
            navigate("/Projects");
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
