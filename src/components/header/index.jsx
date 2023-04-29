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
            <Link href="#">
              <FaFacebook className="social-icon" />
            </Link>
            <Link href="#">
              <FaTwitter className="social-icon" />
            </Link>
            <Link href="">
              {" "}
              <FaInstagram className="social-icon" />
            </Link>
          </div>
          <div className="navbar-social">
            <Link href="">À propos</Link>
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
        <Link href="/">Home</Link>

        <div className="dropdown">
          <Link href="#" className="dropbtn-agenda">
            {" "}
            Event
          </Link>
          <div className="dropdown-content">
            <Link href="#">Evenements</Link>
            <Link href="#">Activities</Link>
            <Link href="#">Soirees</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link href="/places"> Places</Link>
          <div className="dropdown-content">
            <Link href="#">A</Link>
            <Link href="#">b</Link>
            <Link href="#">c</Link>
          </div>
        </div>
        <Link className="dr" href="#">
          Aboutus
        </Link>
      </div>
    </div>
  );
}
