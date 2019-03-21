import React from "react";

function CarousalItem(props) {
  return (
    <div className={props.className}>
      <div className="slider">
        <div className="contentContainer">
          <h2 className="contentHeading">{props.heading}</h2>
          <p className="content">{props.content}</p>
        </div>
        <div className="feedback-meta-item">
          <div className="feedback-meta">
            <div className="feedback-meta-img">
              <img src={props.image} alt="" />
            </div>
            <div className="feedback-meta-content">
              <h2>{props.name}</h2>
              <p>{props.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarousalItem;
