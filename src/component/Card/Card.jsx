import React from "react";
import "./Card.css";
import Mern from "../../assets/mern.png";
function Card({ title, image }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default Card;
