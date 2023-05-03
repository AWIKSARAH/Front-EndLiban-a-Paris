import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Slider from "./fourCardsSlider";

export default function Home() {
  const [cardData,setCardData]= useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/places/latest`).then((response) => {setCardData(response.data.data.docs)}).catch(e=>console.log(e));
  }, []);
  return (
    <div className="Wrapp">
      <div className="hero-section">
        <section className="image-section-container">
          <div className="first-column-image">
            <img
              alt="lebanese"
              src={dabke}
              className="image-1"
              width={240}
              height={300}
            />
            <br />
          </div>
          <div className="second-column-image">
            <img
              alt="lebanese"
              src={coffe}
              className="image-1"
              width={180}
              height={240}
            />
            <img
              alt="lebanese"
              src={kebe}
              className="image-1"
              width={180}
              height={240}
            />
          </div>
          <div className="third-column-image">
            <img
              alt="lebanese"
              src={shawerma}
              className="image-1"
              width={200}
              height={300}
            />
            <img
              alt="lebanese"
              src={Blaklava}
              className="image-1"
              width={200}
              height={300}
            />
          </div>
          <div className="fourth-column-image">
            <img
              alt="lebanese"
              src={taboule}
              className="image-1"
              width={180}
              height={240}
            />
            <img
              alt="lebanese"
              src={wedding}
              className="image-1"
              width={180}
              height={240}
            />
          </div>
          <div className="five-column-image">
            {/* <img alt="lebanese" src={fayrouz} className="image-1" /> */}
            <img
              alt="lebanese"
              src={clothing}
              className="image-1"
              width={240}
              height={300}
            />
          </div>
        </section>
      </div>
     { cardData.length&&<Slider cardData={cardData} cardsPerSlide={4}/>}
    </div>
  );
}
