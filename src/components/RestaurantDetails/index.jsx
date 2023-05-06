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
import {
  faCircleInfo,
  faPhone,
  faTag,
  faEnvelope,
  faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

const days = [
  {
    french: "Lundi",
    english: "monday",
  },
  {
    french: "Mardi",
    english: "tuesday",
  },
  {
    french: "Mercredi",
    english: "wednesday",
  },
  {
    french: "Jeudi",
    english: "thursday",
  },
  {
    french: "Vendredi",
    english: "friday",
  },
  {
    french: "Samedi",
    english: "saturday",
  },
  {
    french: "Dimanche",
    english: "sunday",
  },
];
// const [showSchedule, setShowSchedule]=useState()
function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };
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
    placeType,
  } = restaurant;
  
  return (
    <div className="restaurant-section">
      <div className="restaurant-container">
        <div className="restaurant-image">
          <img
            className="img-rest"
            src={
              image.startsWith("http") ? image : `http://localhost:5000${image}`
            }
            alt={title}
            // width={1420}
            // height={300}
          />
        </div>
        <div className="restaurent-wrap">
          <div className="restaurant-description-title">
            <h3 className="restaurant-title">{title}</h3>
            <div className="restaurant-line"></div>
            <p className="restaurant-description">{description}</p>
          </div>
          <div className="restaurant-info">
            <div className="restaurant-details">
              <p className="restaurant-location">
                <FontAwesomeIcon icon={faCircleInfo} /> {location}
              </p>
              <p className="restaurant-tel">
                <FontAwesomeIcon icon={faPhone} />
                {tel}
              </p>
              <p className="restaurant-tags">
                <FontAwesomeIcon icon={faTag} />
                {tags}
              </p>
              <p className="restaurant-email">
                <FontAwesomeIcon icon={faEnvelope} />
                {email}
              </p>
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

              <button  className="schedual-button" onClick={toggleSchedule}><FontAwesomeIcon icon={faCalendarDays} /> Schedule</button>
              {showSchedule && (
                <div>
                  {days.map((day) => (
                    <div className="days-of-week_resto">
                      <h4>{day.french}: </h4>
                      <h4>
                        {schedule[day.english].status === "open"
                          ? schedule[day.english].fromTo
                          : "Closed"}
                      </h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
