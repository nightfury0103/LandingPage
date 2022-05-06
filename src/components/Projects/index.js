import "../../styles/projects.scss";
import "./project";
import Project from "./project";

export default function Home() {
  const projects = [1, 2, 3, 4];
  return (
    <div class="projects-root">
      <div class="projects-logo">
        <img src="../images/BigLogo.png" />
        <span class="projects-logo-link">Link</span>
        <span class="projects-logo-dap">Dap</span>
      </div>
      <div class="projects-contact-btn">
        <button>Contact</button>
      </div>
      <div class="projects-text">
        We specialize in creating platform agnostic web apps, custom CMS and
        Ecommerce themes, server administration, data migration and management,
        site migration and maintenance, branding, UX/UI design, and project
        mtanagement.
      </div>
      <div class="projects-wrapper">
        <div class="projects-content">
          {projects.map((name) => (
            <Project name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
