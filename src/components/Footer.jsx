import "../assets/css/footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h2>IUMC_GLOBAL</h2>
          <p>
            We provide professional certification services to improve
            your business standards globally.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 IUMC_GLOBAL Certifications | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;