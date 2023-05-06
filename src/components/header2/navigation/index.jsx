import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    </div>
  );
};

export default MappedLinkComponent;
