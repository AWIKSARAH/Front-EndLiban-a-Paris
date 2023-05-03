import * as React from "react";
import Card from "./card";
import "./listingCard.css";
import { Pagination } from "@mui/material";

function ListingCard(props) {
  const [localStatus, setLocalStatus] = React.useState("Closed");
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
        {props.data.map((place) => {
          const { id, image, title, description, location, tel } = place;

          const today = new Date()
            .toLocaleString("en-us", { weekday: "long" })
            .toLowerCase();
          console.log("today" + today);
          const [from, to] = place.schedule[today].fromTo.split("-");
          let timeStatus = "Closed";

          console.log("from to" + [from, to]); //from to07:00,23:00
          if (place.schedule[today].status === "open") {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {
              timeZone: "Europe/Paris",

              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });
            console.log("kokoko" + timeString); //kokoko17:29
            const [hours, minutes] = timeString.split(":");
            const timeObject = new Date();
            timeObject.setHours(hours, minutes, 0);

            const [hoursTo, minutesTo] = to.split(":");
            const timetoObject = new Date();
            timetoObject.setHours(hoursTo, minutesTo, 0);

            const [hoursFrom, minutesFrom] = from.split(":");
            const timeFromObject = new Date();
            timeFromObject.setHours(hoursFrom, minutesFrom, 0);

            if (timeFromObject <= timeObject && timetoObject >= timeObject)
              console.log("LocalStatus" + localStatus);
            timeStatus = "Open";
          } else {
            timeStatus = "Closed";
          }

          return (
            <Card
              key={id}
              image={image}
              description={description}
              title={title}
              location={location}
              status={timeStatus}
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
