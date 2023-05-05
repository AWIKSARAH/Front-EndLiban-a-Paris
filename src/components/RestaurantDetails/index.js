import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./RestaurantDetails.css"

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(` http://localhost:5000/api/places/${id}`) 
      .then((response) => {
        setRestaurant(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { image, title, description, location, tel, socialMedia ,tags, email, placeType } = restaurant;

  // const today = new Date()
  //   .toLocaleString("en-us", { weekday: "long" })
  //   .toLowerCase();
  // const [from, to] = restaurant.schedule[today].fromTo.split("-");
  // let timeStatus = "Closed";

  // if (restaurant.schedule[today].status === "open") {
  //   const now = new Date();
  //   const timeString = now.toLocaleTimeString([], {
  //     timeZone: "Europe/Paris",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: false,
  //   });
  //   const [hours, minutes] = timeString.split(":");
  //   const timeObject = new Date();
  //   timeObject.setHours(hours, minutes, 0);

  //   const [hoursTo, minutesTo] = to.split(":");
  //   const timetoObject = new Date();
  //   timetoObject.setHours(hoursTo, minutesTo, 0);

  //   const [hoursFrom, minutesFrom] = from.split(":");
  //   const timeFromObject = new Date();
  //   timeFromObject.setHours(hoursFrom, minutesFrom, 0);

  //   if (timeFromObject <= timeObject && timetoObject >= timeObject)
  //     timeStatus = "Open";
  // } else {
  //   timeStatus = "Closed";
  // }

  return (
    <div className="restaurant-details">
      <div className="restaurant-details-image">
        <img src={image} alt={image} />
      </div>
      <div className="restaurant-details-info">
        <h2>{title}</h2>
        {/* <p>{placeType}</p> */}
        <p>{description}</p>
        <p>{location}</p>
        <p>{tel}</p>
        <p>{tags}</p>
        <p>{email}</p>
        {/* <p>{url}</p> */}
        {/* <p>{socialMedia}</p> */}
        {/* <p>Time Status: {timeStatus}</p> */}
      </div>
    </div>
  );
}
export default RestaurantDetails
