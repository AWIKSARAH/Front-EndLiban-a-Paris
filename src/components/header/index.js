import React, { useState } from 'react';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './header.css';
import Logo from "../../img/logo.png";
import Logo2 from "../../img/logo2.png";

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <div  className={`home-wrapper-Container ${isMobileNav ? "mobile-nav" : ""}`}>
      <div className='header-container'>
        <div className='right-section-header'>
       
          <img className='first-img-logo' src={Logo} alt="logo"/>
          <p className='first-p-logo'>Blog art, culture et voyages</p>
        </div>
        <div className='navbar-social-container' >
          <div className='social-media-icon'>
            <a href='#'>< FaFacebook className="social-icon" /></a>
            <a href='#'><FaTwitter className="social-icon" /></a>
            <a href=''> <FaInstagram className="social-icon" /></a>
          </div>
          <div className="navbar-social">
            <p>
              <a href=''  >À propos</a>
            </p>
            <button className='contact-us-button'>Contact Us</button>
          </div>
        </div>
      </div>
      <div className='middle-header-container'>
      <section className='mobile-menu-section'>
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
        <img className='second-img-logo' src={Logo2}></img>
      </div>
      <div className='last-header-navbar'>
          <button class="dropbtn-Home"><a href="#">Home</a></button>
       
        <div class="dropdown-first">
          <button class="dropbtn-agenda"><a href="#">  Event</a></button>
          <div class="dropdown-content-agenda">
            <a href="#">evenements</a>
            <a href="#">Activities</a>
            <a href="#">Soirees</a>
          </div>
          </div>
          
          <div class="dropdown-Secound">
          <button class="dropbtn-Places"><a href="#">  Places</a></button>
          <div class="dropdown-content-Places">
            <a href="#">A</a>
            <a href="#">b</a>
            <a href="#">c</a>
          </div>
          </div>
          <button class="dr"><a href="#">Aboutus</a></button>
       
          
        
        

      </div>
     
    </div>
  );
}
