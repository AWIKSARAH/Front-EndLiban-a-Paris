import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import SocialMediaLinks from "./socialMediaLinks";
import MappedLinkComponent from "./navigation";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-header-container">
      <div className="mobile-header-top">
        <Link to="/">
          <FaHome />
        </Link>
        <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
          <FaBars />
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-content">
          <div className="mobile-menu-links">
            <MappedLinkComponent />
          </div>
          <div className="bottom-mobile-menu">
          <div className="mobile-menu-social">
            <SocialMediaLinks />
          </div>
          <div className="mobile-menu-contact">
            <Link to="/contact" className="contact-us-button">
              Contact
            </Link>
          </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
