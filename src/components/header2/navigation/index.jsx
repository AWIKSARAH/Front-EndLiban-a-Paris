import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FaChevronDown } from 'react-icons/fa';

import { links } from '../links';

const MappedLinkComponent = () => {
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState({});

  const handleDropdownToggle = (linkIndex) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [linkIndex]: !prevState[linkIndex],
    }));
  };

  return (
    <div className="mapped-link-container">
      <div className='dropdown-label has-something'>

      <Link to="/"  className='something'>
      Page d'accueil
          </Link>
      </div>
      {links.map((link, index) => {
        const isActive = link.dropdown.some((dropdownLink) =>
          location.pathname.includes(dropdownLink.path)
        );

        return (
          <div key={index} className={`mapped-link-wrapper${isActive ? ' active' : ''}`}>
            <span className="dropdown">
              <div className="dropdown-label" onClick={() => handleDropdownToggle(index)}>
                {link.name}
                <IconButton name="dropdown-button" className="dropdown-button">
                  <FaChevronDown color="white" />
                </IconButton>
              </div>
              <div className={`dropdown-content${openDropdown[index] ? ' open' : ''}`}>
                {link.dropdown.map((dropdownLink, dropdownIndex) => (
                  <a key={dropdownIndex} href={dropdownLink.path}>
                    {dropdownLink.name}
                  </a>
                ))}
              </div>
            </span>
          </div>
        );
      })}
      <div className='dropdown-label'>

      <Link to="/listing"  className='something'>
          Ajoutez votre
          </Link>
      </div>
    </div>
  );
};

export default MappedLinkComponent;
