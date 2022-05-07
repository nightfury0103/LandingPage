import "../../styles/home.scss";
import { useContext } from "react";
import { CarouselContext } from "../Scroll/Carousel/Context";

export default function Home() {
  const context = useContext(CarouselContext);

  return (
    <div class="home-root">
      <div class="home-logo">
        <img src="images/BigLogo.png" />
      </div>
      <div class="home-btn">
        <button
          onClick={() => {
            context.setNextSlide("FORWARD");
          }}
        >
          Hello
        </button>
      </div>
    </div>
  );
}
