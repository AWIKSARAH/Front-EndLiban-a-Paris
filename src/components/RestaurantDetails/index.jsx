import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const days =[
  {
    "french": "Lundi",
    "english": "monday"
  },
  {
    "french": "Mardi",
    "english": "tuesday"
  },
  {
    "french": "Mercredi",
    "english": "wednesday"
  },
  {
    "french": "Jeudi",
    "english": "thursday"
  },
  {
    "french": "Vendredi",
    "english": "friday"
  },
  {
    "french": "Samedi",
    "english": "saturday"
  },
  {
    "french": "Dimanche",
    "english": "sunday"
  }
]

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/places/${id}`)
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

  const {
    image,
    title,
    description,
    location,
    tel,
    socialMedia,
    tags,
    email,
    schedule,
  } = restaurant;

  return (
    <div className="restaurant-section">
      <div className="restaurant-container">
        <div className="restaurant-image">
          <img src={image.startsWith("http")?image:`http://localhost:5000${image}`} alt={title}  width={400} height={300}/>
        </div>
        <div className="restaurant-info">
          <div className="restaurant-details">
            <h3 className="restaurant-title">{title}</h3>
            <p className="restaurant-description">{description}</p>
            <p className="restaurant-location">{location}</p>
            <p className="restaurant-tel">{tel}</p>
            <p className="restaurant-tags">{tags}</p>
            <p className="restaurant-email">{email}</p>
            <div className="restaurant-social-media">
              {socialMedia.facebook && (
                <a href={socialMedia.facebook}>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              )}
              {socialMedia.instagram && (
                <a href={socialMedia.instagram}>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter}>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              )}
            </div>
            {days.map(day=>{
              return <div className="days-of-week_resto">
                <h4>{day.french}: {" "}</h4>{" "}
                <h4>{schedule[day.english].status==="open"?schedule[day.english].fromTo:"Closed"}</h4>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;