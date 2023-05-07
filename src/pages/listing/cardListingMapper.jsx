import React from "react";
import "./listing.css";
import { Link } from "react-router-dom";

function OneCard(props) {
  return (
    <Link
      to={`/listing/${props.to}/${props.card.type}`}
      className="col"
      onTouchStart={props.handleTouchStart}
    >
      <div className="container">
        <div
          className="front"
          style={{
            backgroundImage: `url(${props.card.frontImage})`,
          }}
        >
          <div className="inner">
            <p>{props.card.title}</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div
          className="back"
          style={{
            backgroundImage: `url(${props.card.backImage})`,
          }}
        >
          <div className="inner">
            <p>{props.card.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

const CardListingMapper = ({ cardData, to ,heading}) => {
  const handleTouchStart = (event) => {
    event.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="add-listing_wrapper">
      <h1>{heading}</h1>
      <div className="cols">
        {cardData.map((card) => (
          <OneCard
            to={to}
            key={card.id}
            handleTouchStart={handleTouchStart}
            card={card}
          ></OneCard>
        ))}
      </div>
    </div>
  );
};

export default CardListingMapper;
