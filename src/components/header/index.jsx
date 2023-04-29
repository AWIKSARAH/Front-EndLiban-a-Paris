import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./header.css";
import Logo from "../../img/logo.png";
import Logo2 from "../../img/white-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <div
      className={`home-wrapper-Container ${isMobileNav ? "mobile-nav" : ""}`}
    >
      <div className="header-container">
        <div className="right-section-header">
          <img src={Logo} alt="logo" width={50} />
          <p className="first-p-logo">Blog art, culture et voyages</p>
        </div>
        <div className="navbar-social-container">
          <div className="social-media-icon">
            <Link  to="#">
              <FaFacebook className="social-icon" />
            </Link>
            <Link  to="#">
              <FaTwitter className="social-icon" />
            </Link>
            <Link  to="">
              {" "}
              <FaInstagram className="social-icon" />
            </Link>
          </div>
          <div className="navbar-social">
            <Link  to="">À propos</Link>
            <button className="contact-us-button">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="middle-header-container">
        <section className="mobile-menu-section">
          <div
            id="mobile-menu"
            className={`menu-toggle ${isMobileNav ? "is-active" : ""}`}
            onClick={toggleMobileNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </section>
        <img src={Logo2} alt="logo" width={300}></img>
      </div>
      <div className="last-header-navbar">
        <Link  to="/">Home</Link>

        <div className="dropdown">
          <Link  to="#" className="dropbtn-agenda">
            {" "}
            Event
          </Link>
          <div className="dropdown-content">
            <Link  to="#">Evenements</Link>
            <Link  to="#">Activities</Link>
            <Link  to="#">Soirees</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/places"> Places</Link>
          <div className="dropdown-content">
            <Link  to="#">A</Link>
            <Link  to="#">b</Link>
            <Link  to="#">c</Link>
          </div>
        </div>
        <Link className="dr"  to="#">
          Aboutus
        </Link>
      </div>
    </div>
  );
}
