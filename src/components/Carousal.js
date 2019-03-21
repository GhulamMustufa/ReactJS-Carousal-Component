import React, { Component } from "react";
import image4 from "../images/feedback-icon-next.png";
import image5 from "../images/feedback-icon-prev.png";
import CarousalSlider from "./CarousalSlider";

import CarousalControl from "./CarousalControl";
export default class Carousal extends Component {
  render() {
    return (
      <div className="App paddingTop">
        <div
          id="carouselExampleControls"
          className="carousel slide multi-item-carousel"
          data-ride="carousel"
          data-type="multi"
          data-interval="3000"
        >
          <CarousalSlider />
          <CarousalControl
            image={image5}
            className="carousel-control-prev"
            data_slide="prev"
            text="prev"
          />
          <CarousalControl
            image={image4}
            className="carousel-control-next"
            data_slide="next"
            text="next"
          />
        </div>
      </div>
    );
  }
}
