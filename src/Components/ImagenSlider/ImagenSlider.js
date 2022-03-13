import React, { useState } from "react";
import { SliderData } from "./SliderData";
import s from "./Slider.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImagenSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className={s.slider}>
        <FaArrowAltCircleLeft
          className={s.left}
          onClick={prevSlide}
        ></FaArrowAltCircleLeft>
        <FaArrowAltCircleRight
          className={s.rigth}
          onClick={nextSlide}
        ></FaArrowAltCircleRight>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <h1>{slide.name}</h1>
                  <img
                    src={slide.image}
                    alt={slide.id}
                    className={s.image}
                  ></img>
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImagenSlider;
