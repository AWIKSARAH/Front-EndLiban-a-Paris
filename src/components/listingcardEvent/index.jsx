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
    <div className="card--listing_container">
      <div className="card--listing_title">
        <h2>{props.pageTitle}</h2>
      </div>
      <div className="card--listing">
        {props.data.map((event) => {
          const { _id, image, title, description, location, tel ,category} = event;
  
          const timeStatus = event.status.status;
          
          return (
            <Link style={{textDecoration:"none"}}to={`/events/${event.type}/${_id}`} key={_id}>
              <Card
                image={image}
                description={description}
                title={title}
                location={location}
                status={timeStatus}
                tel={tel}
                tags={category}
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
