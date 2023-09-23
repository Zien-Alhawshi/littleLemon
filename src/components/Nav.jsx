import React, { useState } from 'react';
import logo from "../assets/Logo.svg";
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isMenuOpen} onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>

      <ul className={`main-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BookingPage">Reservations</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
