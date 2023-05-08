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
import RestaurantDetails from "../RestaurantDetails";
import DynamicEventPage from "../../pages/events/dynamicEvent";
import Event from "../../pages/eventPage";
import CreatePlaceForm from "../createPlaceForm";
import CreateEventForm from "../createPlaceForm/createEventForm";
import Successfully from "../createPlaceForm/success";
import SuccessfullyContact from "../contact/success2";
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
          <Route path="/classifieds/:type/:id" element={<BlogPost />} />
          <Route path="/classifieds/:type" element={<Cards />} />
          {/* Deals Routes */}
          <Route path="/deals/:type" element={<Cards />} />
          <Route path="/deals/:type/:id" element={<BlogPost />} />
          {/* News Routes */}
          <Route path="/news/:type" element={<Cards />} />
          <Route path="/news/:type/:id" element={<BlogPost />} />


          <Route path="/restaurant/:id" element={<RestaurantDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/places" element={<PlacesPage />}>
            <Route path=":type" element={<DynamicPlacePage />} />
            <Route path="/places" element={<DynamicPlacePage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listing" element={<SubmitListing />} />
          <Route path="/listing/places" element={<ListingForm />} >

          <Route path="/listing/places/:type" element={<CreatePlaceForm />} />
          </Route>
          <Route path="/listing/events" element={<ListingForm />} >

          <Route path="/listing/events/:type" element={<CreateEventForm />} />
          </Route>
          <Route path="/listing/success" element={<Successfully />} />

          {/* events*/}
          <Route path="/events/:type/:id" element={<Event />} />
          <Route path="/events/:type" element={<DynamicEventPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/success" element={<SuccessfullyContact />} />
        </Route>
      </Routes>
    </div>
  );
}
