import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="header-icon" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="header-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="header-icon" />
        <FontAwesomeIcon icon={faUser} className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
