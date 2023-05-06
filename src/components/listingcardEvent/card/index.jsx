import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./card.css";
export default function Card(props) {
  const statusClassName =
    props.status === "Coming Soon"
      ? "status-orange"
      : props.status === "Open"
      ? "status-green"
      : props.status === "Closed"
      ? "status-red"
      : "status-yellow";

  console.log(props.status);
  return (
    <div className="event__card">
      <div className="event__header">
        <div
          className="event__image"
          style={{
            backgroundImage: `url(${
              props.image.startsWith("http")
                ? props.image
                : `${process.env.REACT_APP_IMAGE_URL}${props.image}`
            })`,
          }}
        >
          <Link to={`/events/${props.tags}`}>
            <span className="event__tag">{props.tags}</span>
          </Link>{" "}
        </div>
        <div className="event__date">
        <span className={`status ${statusClassName}`}>
      {props.status}
    </span>        </div>
      </div>
      <div className="event__info">
        <p href="#" className="event__block">
          <span className="event__title">{props.title} </span>
        </p>
        <p className="event__description">{props.description} </p>
      </div>
      {/* <div className="block_infos"> */}
      <div className="adress_block">
        {" "}
        <div className="event__info__loc">
          <FontAwesomeIcon icon={faPhone} />
          <span className="adress">{props.tel}</span>
        </div>
        <div className="event__info__loc">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="adress">{props.location}</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
