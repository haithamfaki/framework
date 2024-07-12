import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTable,faList, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>DECORATION</h1>
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard" className="menu-item active">
          <FontAwesomeIcon icon={faTable} className="menu-icon" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/orderlist" className="menu-item">
          <FontAwesomeIcon icon={faList} className="menu-icon" />
          <span>Order List</span>
        </Link>

        <div className='log-out'>
        <Link to="/login" className="menu-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
          <span>User Logout</span>
        </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
