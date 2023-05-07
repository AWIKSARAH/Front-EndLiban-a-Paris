import React from "react";
import Slider from "./slider";
import CardDataGenerator from "./cardDataGenerator.jsx";

export default function CardSlider({type,heading}) {
  return (
    <div className="card-slider">
      <h3>{heading}</h3>
      <CardDataGenerator type={type}>
        {(cards) => <Slider cards={cards} />}
      </CardDataGenerator>
    </div>
  );
}
