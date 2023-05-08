import * as React from "react";
import Card from "./card";
import "./listingCard.css";
import { Pagination } from "@mui/material";
import { Link } from 'react-router-dom';

function ListingCard(props) {
  const handlePageChange = (event, value) => {
    props.setCurrentPage(value);
  };
  return (
    <div className="card--listing_container2">
      <div className="card--listing_title2">
        <h2>{props.pageTitle}</h2>
      </div>
      <div className="card--listing2">
        {props.data.map((place) => {
          const { _id, image, title, description, location, tel } = place;
          
          const today = new Date().toLocaleString("en-us", { weekday: "long" }).toLowerCase();
          const [from, to] = place.schedule[today].fromTo?.split("-")||["7:00","18:00"];
          const now = new Date().toLocaleTimeString("en-US", { hour12: false });
          const timeStatus = (place.schedule[today].status === "open" && from <= now && now <= to) ? "Open" : "Closed";
          
          return (
            <Link to={`/restaurant/${_id}`} key={_id}>
              <Card
                image={image}
                description={description}
                title={title}
                location={location}
                status={timeStatus}
                tel={tel}
                page="event"
              />
            </Link>
          );
        })}
      </div>
      <div className="card--listing_footer">
        <Pagination
          shape="rounded"
          color="success"
          page={props.currentPage}
          count={props.pageCount || 1}
          showFirstButton
          showLastButton
          size="large"
          onChange={handlePageChange} // adding onChange event
        />
      </div>
    </div>
  );
}
export default ListingCard;
