import React, { useState } from 'react';
import axios from 'axios';
import './Footer.css';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(' http://localhost:5000/api/news', { email });
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    } catch (error) {
      console.log(error);
      alert('There was an error subscribing to our newsletter. Please try again later.');
    }
  };

  return (
    <div>
      <footer>
        <div className='row'>
          <div className='col'>
            <img src={Logo} className='logo-footer' />
            <p>A newsletter is a powerful marketing tool that businesses can use to stay connected with their aud</p>
          </div>
          <div className='col'>
            <h3>
              office <div className='underline'><span></span></div>
            </h3>
            <p>akkar road</p>
            <p>halba akkar</p>
            <p>lebanon akkar halba</p>
            <p className='email-id'>ayadtarraf1111@hotmail.com</p>
            <h4>+96176107281</h4>
          </div>
          <div className='col'>
            <h3 className='link-h3'>
              Links<div className='underline'><span></span></div>
            </h3>
            <ul>
              <li>
                {' '}
                <a href=''>Home</a>
              </li>
              <li>
                {' '}
                <a href=''>Event</a>
              </li>
              <li>
                {' '}
                <a href=''>Place</a>
              </li>
              <li>
                {' '}
                <a href=''>About us</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>
              NewsLetter<div className='underline'><span></span></div>
            </h3>
            <form onSubmit={handleSubmit}>
              <FontAwesomeIcon icon={farEnvelope} className='far' />
              <input
                type='email'
                placeholder='Enter your Email address'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button type='submit'>
                <FontAwesomeIcon icon={faArrowRight} className='fas' />
              </button>
            </form>
            <div className='social-media-icon-footer'>
              <i>
                <a href='#'>
                  <FaFacebook className='social--footer' />
                </a>
              </i>
              <i>
                {' '}
                <a href='#'>
                  <FaTwitter className='social--footer' />
                </a>
              </i>
              <i>
                <a href=''>
                  {' '}
                  <FaInstagram className='social--footer' />
                </a>
              </i>
            </div>
          </div>
        </div>
        <hr></hr>
      </footer>
    </div>
  );
}
