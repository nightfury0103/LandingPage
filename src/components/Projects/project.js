import "../../styles/project.scss";
import "../../styles/animation.scss";

export default function Project(props) {
  return (
    <div class="project">
      <a class="project-link" href="#">
        <div
          class="project-card"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
        >
          <div class="project-card-inner">
            <img src={"../projects/" + props.name + ".jpg"} />
          </div>
        </div>
        <div
          class="project-detail aos-item"
          data-aos="zoom-in-out"
          data-aos-duration="1000"
        >
          <div class="project-detail-bold">
            <span
              data-aos="shade"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              This is project No.{props.name}
              <br />
              Hello world!!!
            </span>
          </div>
          <div class="project-detail-light">
            <span
              data-aos="shade"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              Project No.{props.name}
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
            <polygon points="6.767 0.603 6.767 5.897 0.871 0 0 0.872 5.894 6.767 0.605 6.767 0.605 8 8 8 8 0.603 6.767 0.603"></polygon>
          </svg>
        </div>
      </a>
    </div>
  );
}
