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
          <Route path="/blog" element={<SubmitListing />}>
            <Route path="/blog" element={<Cards />} />
            <Route path="/blog/post/" element={<BlogPost />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<PlacesPage />}>
            {/* <Route path="/places"  element={<DynamicPlacePage/>} /> */}

            <Route path=":type" element={<DynamicPlacePage />} />
            <Route path="/places" element={<DynamicPlacePage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listing" element={<SubmitListing />}>
            <Route path="/listing" element={<Cards />} />
            <Route path="/listing/:table" element={<ListingForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
