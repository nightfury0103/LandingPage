import "../../styles/home.scss";
import { useContext, useState, useEffect } from "react";
import { CarouselContext } from "../Scroll/Carousel/Context";

export default function Home() {
  const context = useContext(CarouselContext);

  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.currentIndex == 0) {
      setStatus(true);
    } else {
      setTimeout(() => {
        setStatus(false);
      }, 1000);
    }
  });
  return (
    <div class={status ? "home-root" : "home-root none"}>
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
