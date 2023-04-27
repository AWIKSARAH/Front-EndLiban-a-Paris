import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./card.css";

export default function ActionAreaCard(props) {
  return (
    // <Card
    //   sx={{ maxWidth: 300 }}
    //   style={{
    //     boxShadow: "rgb(0 0 0 / 14%) 3px 3px 3px",
    //     borderBottomRightRadius: "25px",
    //   }}
    // >
    //   <CardActionArea>
    //     <div
    //       style={{
    //         overflow: "hidden",
    //         backgroundColor: "white",
    //         zIndex: "1",
    //         "&:hover": {
    //           backgroundColor: "transparent",
    //         },
    //       }}
    //     >
    //       <CardMedia
    //         sx={{
    //           opacity: "0.5",
    //           transform: "scale(1)",
    //           transition: "transform 0.4s ease-in-out",
    //           "&:hover": {
    //             transform: "scale(1.3)",
    //             opacity: 1,
    //           },
    //         }}
    //         component="img"
    //         image={props.image}
    //         alt={props.alt}
    //       />
    //     </div>
    //     <CardContent
    //       sx={{
    //         background: "#a7c3ad",
    //         padding: 0,
    //         height: "1300",
    //         // '&:before':{
    //         //   content:"", backgroundColor:'black',width:'100%',borderRaduis:'25px'
    //         // }
    //       }}
    //     >
    //       <Typography
    //         gutterBottom
    //         variant="h5"
    //         component="div"
    //         sx={{
    //           background: "#356940",
    //           color: "white",
    //           boxShadow: "3px 3px 3px #00000055",
    //         }}
    //       >
    //         {props.title}
    //       </Typography>
    //       <Typography
    //         sx={{ padding: "10px", display: "block" }}
    //         variant="body2"
    //         color="text.secondary"
    //       >
    //         {props.description}
    //         <span className="span--location">
    //           <br />
    //           <br />
    //           <FontAwesomeIcon
    //             icon={faLocationDot}
    //             shake
    //             style={{ color: "#27511f" }}
    //           />{" "}
    //           : {props.location}
    //         </span>
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <ul className="cards">
    <li>
      <a href="" className="card">
        <img src={props.image} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src="../../../logo.png" alt={props.alt} />
            <div className="card__header-text">
              <h3 className="card__title">{props.title}</h3>            
              <span className="card__status">
                <FontAwesomeIcon
                icon={faLocationDot}
                shake
                style={{ color: "#27511f" }}
              />{" "}
               : {props.location}  &nbsp;&nbsp;&nbsp;&nbsp;
               <FontAwesomeIcon icon={faPhone} shake size="sm" style={{"--fa-secondary-color": "#5d6d89",color: "#27511f"}} />:705458457
               </span>
            </div>
          </div>
          <p className="card__description">{props.description}</p>
        </div>
      </a>      
    </li>
  </ul>

  );
}
