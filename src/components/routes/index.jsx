import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Layout from "../layout";
import PlacesPage from "../../pages/places";
import ContactPage from "../contact";
import SubmitListing from "../../pages/listing";
import ListingForm from "../listingForm";
import Cards from "../../pages/listing/selectListing";
import DynamicPlacePage from "../../pages/places/dynamicPlace";
import BlogPost from "../../pages/blogPost";
export default function AllRouts() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Services Routes */}
          <Route path="/services/:type" element={<DynamicPlacePage />} />
          {/* Culture Routes */}
          <Route path="/culture/:type" element={<DynamicPlacePage />} />
          {/* Adresses Culinaires Routes */}
          <Route path="/places/:type" element={<DynamicPlacePage />} />


          {/* Classifieds Routes */}
          <Route path="/classifieds/:type" element={<Cards />} />
          {/* Deals Routes */}
          <Route path="/deals/:type" element={<Cards />} />
          {/* News Routes */}
          <Route path="/news/:type" element={<Cards />} />

          
          <Route path="/listing" element={<SubmitListing />}>
            {/* <Route path="/listing" element={<Cards />} /> */}
            <Route path="/listing/:table" element={<ListingForm />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}
