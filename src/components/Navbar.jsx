import "../assets/css/navbar.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <h2 className="logo">IUMC_GLOBAL</h2>

        {/* MENU */}
        <ul className="nav-menu">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          {/* MEGA DROPDOWN */}
          <li className="dropdown">
            Certifications Service <FaChevronDown style={{ fontSize: "12px" }} />

            <div className="mega-menu">

              {/* IP PROTECTION */}
              <div className="menu-column">
                <h4>IP Protection</h4>

                <Link to="/service/trademark">Trademark Registration</Link>
                <Link to="/service/patent">Patent Registration</Link>
                <Link to="/service/copyright">Copyright Registration</Link>
                <Link to="/service/design">Design Registration</Link>
                <Link to="/service/ip-enforcement">IP Enforcement</Link>
                <Link to="/service/ip-audit">IP Audit</Link>
              </div>

              {/* LEGAL ADVISORY */}
              <div className="menu-column">
                <h4>Legal Advisory</h4>

                <Link to="/service/business-contracts">Business Contracts</Link>
                <Link to="/service/company-law">Company Law</Link>
                <Link to="/service/startup-services">Startup Services</Link>
                <Link to="/service/property-law">Property Law</Link>
                <Link to="/service/debt-recovery">Debt Recovery</Link>
              </div>

            </div>
          </li>

          <li><Link to="/clients">Our Clients</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* BUTTON */}
          <button
            className="reach-btn"
            onClick={() => setShowModal(true)}
          >
            Reach Us
          </button>

        </ul>
      </nav>

      {/* MODAL */}
      <ContactModal
        show={showModal}
        close={() => setShowModal(false)}
      />
    </>
  );
}

export default Navbar;