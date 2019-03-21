import React from "react";

function CarousalControl(props) {
  return (
    <a
      className={props.className}
      href="#carouselExampleControls"
      role="button"
      data-slide={props.data_slide}
    >
      <span className="navigationButton" aria-hidden="true">
        <img src={props.image} alt="" />
      </span>
      <span className="sr-only">{props.text}</span>
    </a>
  );
}

export default CarousalControl;
