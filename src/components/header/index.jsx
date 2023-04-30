import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./header.css";
import Logo from "../../img/logo.png";
import Logo2 from "../../img/white-logo.png";
import { Link, useLocation } from "react-router-dom";
import { links } from "./links";

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };
  const isActive = (link) => {
    if (link.path === location.pathname) {
      return "active";
    }
    if (link.dropdown) {
      link.dropdown.forEach((e) => {
        if (e.path === location.pathname) {
          return "active";
        }
      });
    }
    return " ";
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
            <Link to="#">
              <FaFacebook className="social-icon" />
            </Link>
            <Link to="#">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="">
              {" "}
              <FaInstagram className="social-icon" />
            </Link>
          </div>
          <div className="navbar-social">
            <Link to="">À propos</Link>
            <Link className="contact-us-button" to="/contact">
              Contact Us
            </Link>
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
        {links.map((link, index) => (
          <div key={index} className={link.dropdown ? "dropdown" : null}>
            <Link to={link.path} className={isActive(link)}>
              {link.name}
            </Link>
            {link.dropdown && (
              <div className="dropdown-content">
                {link.dropdown.map((subLink, subIndex) => (
                  <Link key={subIndex} to={subLink.path}>
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
