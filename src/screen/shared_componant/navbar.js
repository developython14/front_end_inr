import React from 'react';
import './css/navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-logo">
          LinkedIn
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/feed" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/network" className="navbar-link">
              My Network
            </a>
          </li>
          <li className="navbar-item">
            <a href="/jobs" className="navbar-link">
              Jobs
            </a>
          </li>
          <li className="navbar-item">
            <a href="/messaging" className="navbar-link">
              Messaging
            </a>
          </li>
          <li className="navbar-item">
            <a href="/notifications" className="navbar-link">
              Notifications
            </a>
          </li>
          <li className="navbar-item">
            <a href="/profile" className="navbar-link">
              Me
            </a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-button">Upgrade</button>
          <button className="navbar-button">Sign Out</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
