import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Layout from "../layout";
import PlacesPage from "../../pages/places";
import ContactPage from "../contact";
import SubmitListing from "../../pages/listing";
import ListingForm from "../listingForm";

export default function AllRouts() {
    
const [isLodding,setLoding]=useState(false);

useEffect(()=>{
setLoding(true);
setTimeout(()=>{
  setLoding(false);
},5000)


},[]);

  return (

    <div>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {}
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listing" element={<SubmitListing />} >
            <Route path="/listing/:table" element={<ListingForm/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
