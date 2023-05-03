import * as React from "react";
import Card from "./card";
import "./listingCard.css";
import { Pagination } from "@mui/material";

function ListingCard(props) {
  const handlePageChange = (event, value) => {
    props.setCurrentPage(value);
  };
  return (
    <div className="card--listing_container">
      <div className="card--listing_title">
        <h2>{props.pageTitle}</h2>
        <Pagination
          shape="rounded"
          color="success"
          page={props.currentPage}
          count={props.pageCount || 1}
          showFirstButton
          showLastButton
          size="small"
          onChange={handlePageChange}
        />
      </div>
      <div className="card--listing">
        {props.rd.map((place) => {
          const { id, image, title, description, location, tel } =
            place;

          const today = new Date()
            .toLocaleString("en-us", { weekday: "long" })
            .toLowerCase();
          const sstatus = place.schedule[today].status;
          const status = sstatus.charAt(0).toUpperCase() + sstatus.slice(1);

          // console.log(`Today is ${today}`);
          // console.log(` status ${image}`);
          return (
            <Card
              key={id}
              image={image}
              description={description}
              title={title}
              location={location}
              status={status}
              tel={tel}
              page="event"
            />
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
