import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
export default function Card(props) {
  const statusColor =
    props.status === "Coming Soon"
      ? "orange"
      : props.status === "Open"
      ? "green"
      : "red";
  const statusStyle = { color: statusColor };

  return (
    <div className="event__card">
      <div className="event__header">
        <div className="event__image" style={{ backgroundImage: `url(${props.image.startsWith("http")?props.image:`${process.env.REACT_APP_IMAGE_URL}${props.image}`})` }}>

          <Link  to={`/events/${props.tags}`}>
            <span className="event__tag">{props.tags}</span>
          </Link>{" "}
        </div>
        <div className="event__date">
          <span style={statusStyle}>{props.status}</span>{" "}
        </div>
      </div>
      <div className="event__info">
        <p href="#" className="event__block">
          <span className="event__title">{props.title} </span>
        </p>
        <p className="event__description">{props.description} </p>
      </div>
    </div>
  );
}
