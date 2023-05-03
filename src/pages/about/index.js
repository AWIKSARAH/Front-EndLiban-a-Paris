import React, { useState, useEffect } from 'react';
import "./about.css";
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from "../../img/FI-for-WP-post.png"
import axios from 'axios';
import MoreInfo from "../../components/MoreInfo"

export default function About() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/info/')
      .then(response => {
        setContactInfo(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [showMoreInfo, setShowMoreInfo] = useState(false); // add state for tracking whether to show more info

  const handleReadMoreClick = () => {
    setShowMoreInfo(true);
  };

  const handleLessInfoClick = () => {
    setShowMoreInfo(false);
  };

// THE title and the img will be static data while other will be fetched (because of the content of the fields)


  return (
    <div className='about-section'>
      <div className='about-container'>
        <div className='content-section-about'>
          <div className='about-title'> <h1>About Us</h1>
          </div>
          <div className='content-about'> 
            <h3>static title here</h3> 
            {contactInfo && (
              <p>{contactInfo.aboutUs}</p>
            )}
            <div className='button'>
              {showMoreInfo ? (
                <button onClick={handleLessInfoClick}>Show Less</button>
              ) : (
                <button onClick={handleReadMoreClick}>Read More</button>
              )}
            </div>
            {showMoreInfo && (
              <MoreInfo />
            )}
            <div className='social-media-about'>
              {contactInfo && contactInfo.socialMedia.map(account => (
                <i key={account.name}>
                  <Link to={account.url}>
                    {account.name === 'facebook' ? (
                      <FaFacebook />
                    ) : account.name === 'twitter' ? (
                      <FaTwitter />
                    ) : account.name === 'instagram' ? (
                      <FaInstagram />
                    ) : null}
                  </Link>
                </i>
              ))}
            </div>
          </div>
        </div>
        
        <div className="image-section-about">
          <img src={Image} /> 
        </div>
      </div>
    </div>
  );
}
