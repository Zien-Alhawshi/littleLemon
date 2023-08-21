import logoFooter from "../assets/logo-footer.svg"
import './Footer.css';

const Footer = ()=>{
    return(
        <footer className="footer">
        <div className="footer-column">
          <div className="logo">
            <img src={logoFooter} alt="Logo" />
          </div>
        </div>
        <div className="footer-column">
          <h2>Navigation</h2>
          <ul className="navigation-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <ul className="contact-info">
            <li>Phone: +123456789</li>
            <li>Email: example@example.com</li>
            <li>Address: 123 Main St, City</li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Social Media</h2>
          <ul className="social-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </footer>
    )
}
export default Footer