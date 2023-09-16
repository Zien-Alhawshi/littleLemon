import logo from "../assets/Logo.svg";
import "./Nav.css";
import { Link } from 'react-router-dom';
import BookingPage from "./BookingPage";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <ul className="main-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/BookingPage">Reservations</Link></li>
        <li><Link to="/Order">Order Online</Link></li>
        <li> <Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
