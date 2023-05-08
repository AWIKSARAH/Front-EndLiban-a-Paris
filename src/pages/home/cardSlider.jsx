import React from "react";
import Slider from "./slider";
import CardDataGenerator from "./cardDataGenerator.jsx";

export default function CardSlider({type,heading,to}) {
  return (
    <div className="card-slider">
      <h2>{heading}</h2>
      <CardDataGenerator type={type}>
        {(cards) => <Slider cards={cards} to={to} />}
      </CardDataGenerator>
    </div>
  );
}
