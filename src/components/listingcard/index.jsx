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
          onChange={handlePageChange} // adding onChange event
        />
      </div>
      <div className="card--listing" style={{ display: "grid" }}>
        {props.data.map((place) => {
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
