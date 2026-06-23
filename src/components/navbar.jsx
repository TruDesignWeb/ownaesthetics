// File: src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Home from "../pages/index";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function click() {
    (function (a) {
      var b = {
        businessId: "fa0706b5-be29-4bdb-92d2-2baec823e0fe",
      };

      var c = a.createElement("script");
      var d = a.querySelector("script");

      c.src = "https://static.joinboulevard.com/injector.min.js";
      c.async = true;
      c.onload = function () {
        blvd.init(b);
      };

      d.parentNode.insertBefore(c, d);
    })(document);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`navbar-container ${scrolled ? "scrolled" : ""}`}
      id="navbar-container"
    >
      {/* Top Navigation Strip */}
      <div className="top-navbar">
        <div className="top-nav-content">
          {/* <ul><Link to="/Membership" className="top-nav-link">Membership</Link></ul> */}
          {/* <ul>
            <Link to="/rsvp" className="top-nav-link">
              1 Year Anniversary!
            </Link>
          </ul> */}
          <ul>
            <Link to="/Socials" className="top-nav-link">
              Socials
            </Link>
          </ul>
          <ul>
            <Link to="/Contact" className="top-nav-link">
              Contact Us
            </Link>
          </ul>
          <ul>
            <Link to="/About" className="top-nav-link">
              <img
                className="th-logo"
                src="/assets/images/TotalHealthLogo_HorizontalWhite.png"
              />
            </Link>
          </ul>
          {/* <ul><Link to="/Referring-Partners" className="top-nav-link">Referring Partners</Link></ul> */}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar" id="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img
              src="\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Logo Icon\PNG\OWN_Icon_CMYK_White.png"
              alt="Total Health Logo"
              className="logo-img"
            />
          </Link>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            id="hamburger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Reviews" className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Skincare" className="nav-link">
                Skincare
              </Link>
            </li>
            <li>
              <a href="tel:15156721860" className="nav-link cta">
                <img src="/assets/phone.svg" className="nav-icon" />
                (515) 672-1860
              </a>
            </li>
            <li className="nav-item" onClick={click}>
              <Link to="#book-now" className="nav-link cta">
                Book Now
              </Link>
            </li>
            {/* /Appointments */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
