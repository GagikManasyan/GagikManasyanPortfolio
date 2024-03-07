import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import prjImages from "./assets/images.js";
import "./css/home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLeft = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? prjImages.length - 1 : prevSlide - 1
    );
  };
  const slideRight = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === prjImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div id="home">
      <button
        id="slides-left"
        onClick={() => {
          slideLeft();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        id="slides-right"
        onClick={() => {
          slideRight();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div
        id="slides"
        style={{ transform: `translateX(-${currentSlide * 90}vw)` }}
      >
        <div className="img-container">
          <img src={prjImages[0]} alt="" />
          <span>My Works</span>
        </div>
        <div className="img-container">
          <img src={prjImages[1]} alt="" />
          <span>My Works</span>
        </div>
        <div className="img-container">
          <img src={prjImages[2]} alt="" />
          <span>My Works</span>
        </div>
      </div>
    </div>
  );
}
export default Home;
