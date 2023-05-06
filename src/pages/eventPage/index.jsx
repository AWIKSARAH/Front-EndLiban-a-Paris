import React, { useEffect, useState } from "react";
import "./event.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaLink } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import top10SocialMedia from "./socialMedias";

const Event = () => {
  const {  id } = useParams();
  const [event, setEvent] = useState(null);
 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/${id}`)
      .then((response) => setEvent(response.data.data));
  });
  
function toLocalDate(date){
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

}

const formattedStartDate = new Date(event?.start_date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

const formattedEndDate = new Date(event?.end_date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
  return (
    <>
      {event && (
        <div className="event-wrapper">
          <div className="event-social">
            <div className="event-img">
              <img src={event.image.startsWith("http")?event.image:`http://localhost:5000${event.image}`} alt={event.title} width={300} height={300} />
            </div>
            <div className="event-media">
              <div className="social-link">
                <FaPhone />
                <Link to={`tel:${event.tel}`}>Phone</Link>
              </div>
              {event.website && (
                <div className="social-link">
                  <FaLink />
                  <a href={event.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </div>
              )}
              {event.socialMedia.map((social) => (
                <div className="social-link" key={social.name}>
                  {top10SocialMedia[social.name]}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="event-content">
            <h2 className="event-title">{event.title}</h2>
            <div className="event-tags">
              {event.tags.map((tag) => (
                <span className="event-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="event-grid">
              <div className="event-grid-item">
                <FaCalendarAlt style={{ width: "40px", height: "40px",}} />
                <div>
                  <p>From {formattedStartDate}</p>
                  <p>To {formattedEndDate}</p>
                </div>
              </div>
              <div className="event-grid-item">
                <FaMapMarkerAlt style={{ width: "50px", height: "50px" }} />
                <div>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
            <div className="event-content-text">{event.description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
