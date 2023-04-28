import * as React from "react";
import Card from "./card";
import "./listingCard.css";
import  places from "./fakeData" 
function ListingCard(props) {
  return (
    <div className="card--listing" style={{ display: "grid" }}>
      {places.map((place) => {
        const { id, image, title, description, location } = place;
        return (
          <Card
            key={id}
            image={image}
            description={description}
            title={title}
            location={location}
          />
        );
      })}
    </div>
  );
}

export default ListingCard;
