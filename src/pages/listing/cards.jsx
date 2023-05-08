import { Link } from "react-router-dom";
import "./cards.css";
import { useState } from "react";

function Card(props) {
  const [isShowing, setIsShowing] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsShowing(!isShowing);
  };
  // console.log(new Date(2023, 4, 1, 10, 0));
  const cardClass = isShowing ? "card show" : "card";

  return (
    <div
      className={cardClass}
      style={{
        zIndex: isShowing ? 10 : 1,
      }}
      >
      <div className="card__image-holder">
        <img
          className="card__image"
          src={props.imageSrc}
          alt={props.imageAlt}
          />
      </div>
      <div className="card-title"
      >
        <Link href="#" className="toggle-info btn"
        onClick={handleClick}
        >
          <span className="left"></span>
          <span className="right"></span>
        </Link>
        <h2>{props.title}</h2>
        <small>Image from Liban A Paris</small>
      </div>
      <div className="card-flap flap1">
        <div className="card-description">{props.description}</div>
        <div className="card-flap flap2">
          <div className="card-actions">
            <Link to={`${props._id}`} className="btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
