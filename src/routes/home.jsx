import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import prjImages from "../assets/images.js";
import "../css/home.css";

function Home() {
  const [active, setActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    setActive(inView);
  }, [inView]);
  useEffect(() => {
    const preloadImages = () => {
      prjImages.forEach((image) => {
        const img = new Image();
        img.src = `/images/foods-slider/${image}`;
      });
    };
    preloadImages();
  }, []);

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
      <div id="hello">
        <span>Hello, I'm</span>
        <h1>
          Gagik <br /> Manasyan
        </h1>
        <span>FrontEnd Developer</span>
        <span id="scroll-down">
          Scroll Down
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>
      <div id="home-wrapper" ref={ref}>
        {active && (
          <div id="slides-wrapper">
            <h2>See My Work</h2>
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
        )}
      </div>
    </div>
  );
}
export default Home;
