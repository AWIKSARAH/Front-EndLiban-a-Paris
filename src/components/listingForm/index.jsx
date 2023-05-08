import React from "react";
import "./listingForm.css";
import CreatePlaceForm from "../createPlaceForm";
import { Outlet } from "react-router-dom";
// import Map from "./map";

const ListingForm = () => {


  return (
    <div className="contact_us_2 listing--form_container">
      <div className="responsive-container-block big-container">
        <div className="blueBG"></div>
        <div className="responsive-container-block container">
       
            <div className="container-block form-wrapper form-wrapper2">
              <Outlet/>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ListingForm;
