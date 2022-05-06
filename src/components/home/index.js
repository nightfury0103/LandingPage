import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div class="home-root">
      <div class="home-logo">
        <img src="images/BigLogo.png" />
      </div>
      <div class="home-btn">
        <button
          onClick={() => {
            navigate("/About");
          }}
        >
          Hello
        </button>
      </div>
    </div>
  );
}
