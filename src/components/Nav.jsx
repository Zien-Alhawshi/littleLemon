import logo from "../assets/Logo.svg";
import "./Nav.css";

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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Menu</a></li>
        <li><a href="/contact">Reservations</a></li>
        <li><a href="/contact">Order Online</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
