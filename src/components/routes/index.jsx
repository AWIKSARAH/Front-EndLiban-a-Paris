import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Layout from "../layout";
import PlacesPage from "../../pages/places";
import ContactPage from "../contact";

export default function AllRouts() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}
