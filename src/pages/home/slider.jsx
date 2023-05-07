import React, { useRef } from "react";
import Card from "../../components/listingcardEvent/card";
import "./cardSlider.css";
import { Link } from "react-router-dom";

export default function Slider({ cards ,to}) {
  const sliderRef = useRef(null);

  const handleNext = () => {
    slide("next");
  };

  const handlePrev = () => {
    slide("prev");
  };

  const slide = (direction) => {
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth / 3;
    const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="slider" ref={sliderRef}>
        {cards.map((card) => (
          <div key={card._id} className="card">
            <Link to={`/${to||`events/${card.type}`}/${card._id}`}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
              location={card.location}
              status={card.status?.status||"New"}
              tel={card.tel}
              tags={card.category}
              page="event"
              />
              </Link>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
