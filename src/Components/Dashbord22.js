import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashbord.css';

function Dashboard22() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="right-sidebar">
      </div>
    </div>
  );
}

export default Dashboard22;
