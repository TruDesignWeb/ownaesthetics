"use client";
// File: src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
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
    <>
      <div
        className={`navbar-container [position:fixed] [top:0] [left:0] [width:100%] [transition:transform_0.4s_cubic-bezier(0.4,_0,_0.2,_1)] [z-index:9999] [&.scrolled]:[transform:translateY(0)] ${scrolled ? "scrolled" : ""}`}
        id="navbar-container"
      >
        {/* Top Navigation Strip */}
        <div className="[width:100%] [height:38px] [background:#133550] [backdrop-filter:blur(5px)] [display:flex] [align-items:center] [justify-content:center] [position:relative] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:100%] [&::before]:[left:0] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(135deg,_#e2e6be_0%,_#79703d_100%)] [&::before]:[transition:top_0.6s_cubic-bezier(0.4,_0,_0.2,_1)] [.navbar-container.scrolled_&::before]:[top:100%] max-[900px]:[height:32px]">
          <div className="[position:relative] [z-index:2] [display:flex] [gap:2rem] max-[900px]:[position:relative] max-[900px]:[z-index:2] max-[900px]:[display:flex] max-[900px]:[gap:1rem]">
            {/* <ul><Link href="/Membership" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">Membership</Link></ul> */}
            {/* <ul>
            <Link href="/rsvp" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">
              1 Year Anniversary!
            </Link>
          </ul> */}
            <ul>
              <Link href="/socials" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">
                Socials
              </Link>
            </ul>
            <ul>
              <Link href="/contact" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">
                Contact Us
              </Link>
            </ul>
            <ul>
              <Link href="/about" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">
                <img
                  className="[height:20px] [transition:all_0.3s_ease] max-[900px]:[height:15px] max-[900px]:[display:none]"
                  src="/assets/images/TotalHealthLogo_HorizontalWhite.webp"
                />
              </Link>
            </ul>
            {/* <ul><Link href="/Referring-Partners" className="[color:white] [text-decoration:none] [font-size:1.02rem] [font-weight:400] [padding:0.2rem_0.7rem] [border-radius:15px] [transition:all_0.3s_ease] [opacity:0.8] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[color:white] max-[900px]:[text-decoration:none] max-[900px]:[font-size:0.9rem] max-[900px]:[font-weight:400] max-[900px]:[padding:0.1rem_0.5rem] max-[900px]:[border-radius:15px] max-[900px]:[transition:all_0.3s_ease] max-[900px]:[opacity:0.8]">Referring Partners</Link></ul> */}
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="[width:100%] [background:rgba(0,_0,_0,_0)] [backdrop-filter:blur(1px)] [box-shadow:0_4px_20px_rgba(0,_0,_0,_0.001)] [transition:all_0.4s_cubic-bezier(0.4,_0,_0.2,_1)] [padding:0.55rem_0] [position:relative] [overflow:visible] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:-200%] [&::before]:[left:0] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(135deg,_#ebe1d2_0%,_#9e9c8d_100%)] [&::before]:[transition:top_0.6s_cubic-bezier(0.4,_0,_0.2,_1)] [.navbar-container.scrolled_&::before]:[top:0] [.navbar-container.scrolled_&]:[padding:0.45rem_0] [.navbar-container.scrolled_&]:[box-shadow:0_2px_10px_rgba(0,_0,_0,_0.2)] max-[1400px]:[padding:0.5rem_0] max-[900px]:[position:relative] max-[900px]:[z-index:5000] max-[900px]:[padding:0.25rem_0]" id="navbar">
          <div className="[max-width:1200px] [margin:0_auto] [padding:0_2rem] [display:flex] [justify-content:space-between] [align-items:center] [z-index:2] [position:relative] [overflow:visible] max-[900px]:[padding:0_1rem]">
            <Link href="/" className="[font-size:2.5rem] [font-weight:bold] [color:white] [text-decoration:none] [transition:font-size_0.3s_ease] [text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.3)] [transform-origin:left_center] [.navbar-container.scrolled_&]:[font-size:1.8rem]">
              <img
                src="/assets/images/OWN Branding/OWN Final Logos/Print CMYK/Logo Icon/PNG/OWN_Icon_CMYK_White.png"
                alt="Total Health Logo"
                className="[width:92px] max-[900px]:[width:64px]"
              />
            </Link>

            <div
              className={`[display:none] [flex-direction:column] [cursor:pointer] [padding:0.5rem] [position:relative] [z-index:2] [&_span]:[width:25px] [&_span]:[height:3px] [&_span]:[background:white] [&_span]:[margin:3px_0] [&_span]:[transition:0.3s] [&_span]:[border-radius:2px] max-[900px]:[display:flex] max-[900px]:[z-index:2100] max-[900px]:[&.active_span:nth-child(1)]:[transform:rotate(45deg)_translate(5px,_5px)] max-[900px]:[&.active_span:nth-child(2)]:[opacity:0] max-[900px]:[&.active_span:nth-child(3)]:[transform:rotate(-45deg)_translate(6px,_-6px)] ${menuOpen ? "active" : ""}`}
              id="hamburger"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul
              className={`[display:flex] [align-items:center] [list-style:none] [gap:1.35rem] max-[900px]:[position:absolute] max-[900px]:[top:100%] max-[900px]:[left:0] max-[900px]:[width:100%] max-[900px]:[display:none] max-[900px]:[flex-direction:column] max-[900px]:[align-items:center] max-[900px]:[background:rgba(0,_0,_0,_0.97)] max-[900px]:[padding:1rem_0] max-[900px]:[gap:0.75rem] max-[900px]:[z-index:6000] max-[900px]:[&.active]:[display:flex] ${menuOpen ? "active" : ""}`}
              id="nav-menu"
            >
              <li className="[position:relative]">
                <Link href="/about" className="[&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [color:white] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  About
                </Link>
              </li>
              <li className="[position:relative]">
                <Link href="/services" className="[&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [color:white] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  Services
                </Link>
              </li>
              <li className="[position:relative]">
                <Link href="/reviews" className="[&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [color:white] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  Reviews
                </Link>
              </li>
              <li className="[position:relative]">
                <Link href="/skincare" className="[&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [color:white] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  Skincare
                </Link>
              </li>
              <li>
                <a href="tel:15156721860" className="cta [&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [background-color:white] [color:black] [background-blend-mode:lighten] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  <img src="/assets/phone.svg" className="[display:inline-block] [vertical-align:middle] [width:25px] [height:auto]" />
                  (515) 672-1860
                </a>
              </li>
              <li className="[position:relative]" onClick={click}>
                <Link href="#book-now" className="cta [&.cta]:[display:inline-flex] [&.cta]:[align-items:center] [&.cta]:[gap:0.5rem] [display:inline-flex] [align-items:center] [justify-content:center] [text-decoration:none] [font-size:1.2rem] [font-weight:400] [line-height:1] [padding:0.4rem_0.75rem] [border-radius:25px] [transition:font-size_0.3s_ease] [position:relative] [overflow:hidden] [transform-origin:center_center] [background-color:white] [color:black] [background-blend-mode:lighten] [.navbar-container.scrolled_&]:[font-size:1.1rem] [.navbar-container.scrolled_&]:[transform:translateY(5px)] [&:hover]:[transition:all_0.4s] [&:hover]:[opacity:1] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-1px)] max-[900px]:[width:100%] max-[900px]:[text-align:center] max-[900px]:[font-size:1.1rem] max-[900px]:[padding:0.75rem]">
                  Book Now
                </Link>
              </li>
              {/* /Appointments */}
            </ul>
          </div>
        </nav>
      </div>

      <div className="[display:none] [position:fixed] [left:0] [right:0] [bottom:0] [z-index:99999] max-[900px]:[display:flex] max-[900px]:[position:fixed] max-[900px]:[left:0] max-[900px]:[right:0] max-[900px]:[bottom:0] max-[900px]:[z-index:99999] max-[900px]:[justify-content:space-between] max-[900px]:[gap:0.75rem] max-[900px]:[padding:0.9rem_1rem_1rem] max-[900px]:[background:rgba(19,_53,_80,_0.96)] max-[900px]:[backdrop-filter:blur(14px)] max-[900px]:[border-top:1px_solid_rgba(255,_255,_255,_0.12)]">
        <a href="tel:15156721860" className="phone [display:inline-flex] [align-items:center] [justify-content:center] [gap:0.5rem] [border:none] [border-radius:999px] [text-decoration:none] [font-size:1.15rem] [font-weight:600] [line-height:1] [min-height:46px] [padding:0.25rem_1rem] [&.phone]:[background:rgba(255,_255,_255,_0.08)] [&.phone]:[color:#fff] [&.phone]:[border:1px_solid_rgba(255,_255,_255,_0.2)] [&.book]:[background:#fff] [&.book]:[color:#000] max-[900px]:[flex:1] max-[900px]:[width:100%]">
          <img src="/assets/phone.svg" className="[display:inline-block] [width:18px] [height:auto]" alt="Call" />
          Call Now
        </a>
        <a
          href="https://www.joinblvd.com/b/ownaesthetics/widget#/visit-type"
          className="book [display:inline-flex] [align-items:center] [justify-content:center] [gap:0.5rem] [border:none] [border-radius:999px] [text-decoration:none] [font-size:1.15rem] [font-weight:600] [line-height:1] [min-height:46px] [padding:0.25rem_1rem] [&.phone]:[background:rgba(255,_255,_255,_0.08)] [&.phone]:[color:#fff] [&.phone]:[border:1px_solid_rgba(255,_255,_255,_0.2)] [&.book]:[background:#fff] [&.book]:[color:#000] max-[900px]:[flex:1] max-[900px]:[width:100%]"
        >
          <button type="button" className="book [display:inline-flex] [align-items:center] [justify-content:center] [gap:0.5rem] [border:none] [border-radius:999px] [text-decoration:none] [font-size:1.15rem] [font-weight:600] [line-height:1] [min-height:46px] [padding:0.25rem_1rem] [&.phone]:[background:rgba(255,_255,_255,_0.08)] [&.phone]:[color:#fff] [&.phone]:[border:1px_solid_rgba(255,_255,_255,_0.2)] [&.book]:[background:#fff] [&.book]:[color:#000] max-[900px]:[flex:1] max-[900px]:[width:100%]">
            Book Now
          </button>
        </a>
      </div>
    </>
  );
}
