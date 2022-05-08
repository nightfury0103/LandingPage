import "../../styles/home.scss";
import { useContext, useState, useEffect } from "react";
import { SliderContext } from "../Slider/SliderContext";

export default function Home() {
  const context = useContext(SliderContext);

  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (context.curId == 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  });
  return (
    <div
      class={
        status
          ? "home-root animate__animated animate__fadeIn"
          : "home-root none"
      }
    >
      <div class="home-logo">
        <img src="images/BigLogo.png" />
      </div>
      <div class="home-btn">
        <button
          onClick={() => {
            context.toggleId();
          }}
        >
          Hello
        </button>
      </div>
    </div>
  );
}
