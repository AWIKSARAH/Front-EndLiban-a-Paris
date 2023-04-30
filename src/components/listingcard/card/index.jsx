import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function ActionAreaCard(props) {
  const { image, title, location, description, price } = props;

  return (
    <div className={`restaurant`}>
      <div className="infos_left">
        <div className="image_container" style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="prix_block">
          <span className="text_prix">Prix</span>
          <span className="prix">{price}</span>
        </div>
        <div className="block_infos">
          <h1>{title}</h1>
          <div className="adress_block">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="adress">{location}</span>
          </div>
          <div className="description_block">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
