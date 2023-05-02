import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import { useState } from "react";

function Card(props) {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowing(!isShowing);
  };
  console.log(new Date(2023, 4, 1, 10, 0))
  const cardClass = isShowing ? "card show" : "card";

  return (
    <div
      className={cardClass}
      style={{
        zIndex: isShowing?10:1,
      }}
      onClick={handleClick}
    >
      <div className="card__image-holder">
        <img
          className="card__image"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </div>
      <div className="card-title">
        <Link href="#" className="toggle-info btn">
          <span className="left"></span>
          <span className="right"></span>
        </Link>
        <h2>{props.title}</h2>
        <small>Image from unsplash.com</small>
      </div>
      <div className="card-flap flap1">
        <div className="card-description">{props.description}</div>
        <div className="card-flap flap2">
          <div className="card-actions">
            <Link href="#" className="btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      <Card
        imageSrc="https://source.unsplash.com/300x225/?wave"
        imageAlt="wave"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
      <Card
        imageSrc="https://source.unsplash.com/300x225/?beach"
        imageAlt="beach"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
      <Card
        imageSrc="https://source.unsplash.com/300x225/?mountain"
        imageAlt="mountain"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
      <Card
        imageSrc="https://source.unsplash.com/300x225/?field"
        imageAlt="field"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
      <Card
        imageSrc="https://source.unsplash.com/300x225/?water"
        imageAlt="water"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
      <Card
        imageSrc="https://source.unsplash.com/300x225/?river"
        imageAlt="river"
        title="Card title"
        description="This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."
      />
    </div>
  );
}

export default Cards;
