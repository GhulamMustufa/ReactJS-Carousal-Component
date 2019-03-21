import React from "react";
import image1 from "../images/feedback-slider-01.png";
import image2 from "../images/feedback-slider-02.png";
import image3 from "../images/feedback-slider-03.png";
import CarousalHeader from "./CarousalHeader";
import CarousalItem from "./CarousalItem";

function CarousalSlider() {
  return (
    <div className="carousel-inner" role="listbox">
      <div className="container container2">
        <CarousalHeader />
      </div>
      <CarousalItem
        image={image1}
        className="carousel-item active"
        heading="Great apps feature"
        content="Progressively develop revolutionary solutions via customer
                 directed testing a for a new for good 1st time memorising ."
        name="Rihana Julio"
        position="web designer"
      />
      <CarousalItem
        image={image2}
        className="carousel-item"
        heading="Amazing Design with feature"
        content="Progressively develop revolutionary solutions via customer
                 directed testing a for a new for good 1st time memorising ."
        name="Nicolas Martin"
        position="web designer"
      />
      <CarousalItem
        image={image3}
        className="carousel-item"
        heading=" Make my life easiest then before"
        content="Progressively develop revolutionary solutions via customer
                 directed testing a for a new for good 1st time memorising ."
        name="Thomas"
        position="web developer"
      />
    </div>
  );
}

export default CarousalSlider;
