import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
  FaHome,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "./header.css";
import Logo from "../../img/logo.png";
import Logo2 from "../../img/white-logo.png";
import { Link, useLocation } from "react-router-dom";
import { links } from "./links";
import { IconButton } from "@mui/material";

function CustomLink(props) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={props.link.dropdown ? "dropdown" : null}>
      <div className="dropdown-showing">
        <Link to={"#"} className={"home_buttom " + props.isActive(props.link)}>
          {props.link.name}
        </Link>
        {props.link.dropdown ? (
          <IconButton
            name="dropdown-button"
            onClick={(e) => setShowContent(!showContent)}
            className="dropdown-button"
          >
            <FaChevronDown color="white" />
          </IconButton>
        ) : (
          ""
        )}
      </div>
      {props.link.dropdown && (
        <>
          <div className={`dropdown-content ${showContent ? "show" : ""}`}>
            {props.link.dropdown.map((subLink, subIndex) => (
              <Link key={subIndex} to={subLink.path}>
                {subLink.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };
  const isActive = (link) => {
    if (link.path === "/" + location.pathname.split("/")[1]) {
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
  console.log(location);
  return (
    <header
      className={`home-wrapper-Container ${isMobileNav ? "mobile-nav" : ""}`}
    >
      <div className="header-container">
        <div className="right-section-header">
          <img src={Logo} alt="logo" width={50} />
          <Link to="/about">À propos</Link>
        </div>
        <div className="navbar-social-container">
          <div className="social-media-icon">
            <Link to="https://www.facebook.com/Libanaparis" target="_blank">
              <FaFacebook className="social-icon" />
            </Link>
            <Link to="https://twitter.com/libanaparis" target="_blank">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="https://instagram.com/libanaparis" target="_blank">
              <FaInstagram className="social-icon" />
            </Link>
            <Link to="http://tiktok.com/@libanaparis" target="_blank">
              <FaTiktok className="social-icon" />
            </Link>
            <Link to="https://youtube.com/@libanaparis" target="_blank">
              <FaYoutube className="social-icon" />
            </Link>
          </div>
          <div className="navbar-social">
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
      <div
        className={`last-header-navbar ${isMobileNav ? "mobile-version" : ""}`}
      >
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FaHome />
        </Link>
        {links.map((link, index) => (
          <CustomLink
            key={index}
            isMobileNav={isMobileNav}
            isActive={isActive}
            link={link}
          ></CustomLink>
        ))}
        {isMobileNav && (
          <div className="navbar-social-container">
            <div className="social-media-icon">
              <Link to="https://www.facebook.com/Libanaparis">
                <FaFacebook className="social-icon" />
              </Link>
              <Link to="https://twitter.com/libanaparis">
                <FaTwitter className="social-icon" />
              </Link>
              <Link to="https://instagram.com/libanaparis">
                <FaInstagram className="social-icon" />
              </Link>
              <Link to="http://tiktok.com/@libanaparis">
                <FaTiktok className="social-icon" />
              </Link>
              <Link to="https://youtube.com/@libanaparis">
                <FaYoutube className="social-icon" />
              </Link>
            </div>
            <div className="navbar-social">
              <Link className="contact-us-button" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
