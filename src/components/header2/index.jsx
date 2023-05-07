import { Link } from "react-router-dom";
import "./header.css";
import Logo2 from "../../img/white-logo.png";
import { FaHome } from "react-icons/fa";
import SocialMediaLinks from "./socialMediaLinks";
import MappedLinkComponent from "./navigation";
import MobileHeader from "./mobileHeader";
function Header() {
  return (
    <header className="header_container">
      <div className="header--desktop">
        <div className="top--header_container">
          <div className="top--left_header flex--header">
            <Link to="/">
              <FaHome />
            </Link>
            <Link to="/about">À propos</Link>
          </div>
          <div className="top--right_header flex--header">
            <div className="header--social_container flex--header">
              <SocialMediaLinks />
            </div>
            <div className="flex--hear">
              <Link to="/contact" className="contact--us_button">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="middle--header_container">
          <img src={Logo2} alt="logo" width={300} />
          <Link to="/listing" >
          Ajoutez votre
          </Link>
        </div>
        <div className="bottom--header_container">
          <MappedLinkComponent />
        </div>
      </div>
      <div className="header--mobile">
        <MobileHeader/>
      </div>
    </header>
  );
}

export default Header;
