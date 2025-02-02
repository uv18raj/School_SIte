import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Kaizen Play School</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/owner">Owner</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
