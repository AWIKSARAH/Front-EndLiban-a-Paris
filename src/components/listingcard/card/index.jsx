import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function ActionAreaCard(props) {
  const { image, title, location, description, status , tel,page } = props;

  return (
<div className={`restaurant`} style={{borderTop:   status === 'Closed' ? '10px solid #c02a2c' : status === 'Coming Soon' ? '10px solid #2f7509' : '10px solid blue'}}>
      <div className="infos_left">
        <div className="image_container" style={{ backgroundImage: `url(${image})` }}>
        </div>
        
        <div className="prix_block" style={{backgroundColor: status === 'Closed' ? '#c02a2c' : status === 'Coming Soon' ? '#2f7509' : 'blue', display: page=== 'event' ? 'block' : 'none'}}>
        <span className="text_prix" >{status}</span>
        </div>
        <div className="block_infos">
          <h1>{title}</h1>
          <div className="adress_block">
          {" "}

          <FontAwesomeIcon icon={faLocationDot} />
            <span className="adress">{location}</span>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="adress">{tel}</span>
          </div>
          <div className="description_block">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
