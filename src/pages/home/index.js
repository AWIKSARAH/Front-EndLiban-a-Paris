import React from "react";
import "./home.css";
import taboule from "./images/taboule.jpeg";
import dabke from "./images/dabke.png";
import kebe from "./images/kibbeh-mish-37-3-261x300.jpg";
import mezze from "./images/mezze.png";
import Blaklava from "./images/blaklava.png";
import fayrouz from "./images/fayrouz.png";
import wine from "./images/wine.png";
import clothing from "./images/clothing.png";
import wedding from "./images/wedding.png";
import shawerma from "./images/shawerma.png";
import coffe from "./images/coffe.png";

export default function Home() {
  return (
    <div className="Wrapp">
      <div className="hero-section">
        <header>
          <h1 className="white">Emowring your every food moment the best fod</h1>
          <div className="map-search-container">
            <form method="post">
              <input
                type="text"
                id="address-input"
                placeholder="What's your address?"
              />
              <button id="submit-button">Submit</button>
            </form>
            <p className="white"> EXPLORE THE PLACES AND SERVICES AND EVENTS</p>
          </div>
        </header>






        <section className="image-section-container">
        <div className="first-column-image">
          <img src={dabke} className="image-1" />
          <br/>
          </div>
          <div className="second-column-image">
            <img src={taboule} className="image-1" />
            <img src={Blaklava} className="image-1" />
          </div>
          <div className="third-column-image">
            <img src={shawerma} className="image-1" />
            <img src={kebe} className="image-1" />
          </div>
          <div className="fourth-column-image">
            <img src={coffe} className="image-1" />
            <img src={wedding} className="image-1" />
          </div>
          <div className="five-column-image">
            <img src={fayrouz} className="image-1" />
            <img src={clothing} className="image-1" />
          </div>
        </section>





      </div>
    </div>
  );
}
