// File: src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import ContactForm from "../components/contactform";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-1">
          <img
            className="logo-img"
            src="\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Logo Icon\PNG\OWN_Icon_CMYK_Black.png"
          />

          <p>
            7601 Office Plaza Dr. N<br />
            Norwood 1, Suite 115
            <br />
            West Des Moines, IA 50266
          </p>
          <a href="https://www.google.com/maps/place/Own+Aesthetics+PLC/@41.5868727,-94.9654378,9z/data=!4m10!1m2!2m1!1sown+aesthetics!3m6!1s0x87ec2183bd08ca1d:0x769a96c0fa498807!8m2!3d41.5868727!4d-93.8118733!15sCg5vd24gYWVzdGhldGljc5IBC21lZGljYWxfc3BhqgFLEAEqEiIOb3duIGFlc3RoZXRpY3MoADIfEAEiGxQYyzhi_LQcyRViqag_cSExnuB2n5YyK36nMDISEAIiDm93biBhZXN0aGV0aWNz4AEA!16s%2Fg%2F11mdb849vx?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">
            <button type="button" className="dir-btn">
              Directions
            </button>
          </a>
          <p>
            <a
              href="tel:5156721860"
              style={{ textDecoration: "none", color: "white" }}
            >
              (515)-672-1860
            </a>
            <br />
            <a
              href="mailto:info@ownaesthetics.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Email: info@ownaesthetics.com
            </a>
          </p>
          <div className="footer-social-links" aria-label="Social media links">
            <a
              href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Own Aesthetics on Facebook"
            >
              <img src="/assets/images/images/facebook-icon.png" alt="" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/ownaestheticsdsm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Own Aesthetics on Instagram"
            >
              <img src="/assets/images/images/instagram-icon.png" alt="" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon&nbsp;&nbsp;&nbsp;&nbsp;By appt. only</p>
          <p>Tue&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 5:00pm</p>
          <p>Wed&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 7:00pm</p>
          <p>Thu&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 5:00pm</p>
          <p>Fri&nbsp;&nbsp;&nbsp;&nbsp;9:00am – 5:00pm</p>
          <p>Sat&nbsp;&nbsp;&nbsp;&nbsp;by appt. only</p>
          <p>Sun&nbsp;&nbsp;&nbsp;&nbsp;closed</p>
        </div>
        {/* <div className="footer-section">
          <h3 data-icon="🔬">Research & Innovation</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p>
        </div> */}
        <div className="footer-section">
          {/* <h3 data-icon="🔬">Follow us</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p> */}

          {/* <ContactForm
            title="Join Our Health Community"
            subtitle="Sign up and get the latest wellness tips in your inbox."
            placeholder="you@example.com"
            buttonText="Join Now"
              /> */}
          <div className="newsletter-container">
            <h2>
              <b>Want to learn more?</b>
            </h2>
            <p>Enter your information below and we'll get back to you!</p>

            <form
              className="newsletter-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="d2c03bfd-17bb-4683-b096-fc7df9822b38"
              />

              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                name="name"
                required
              />

              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                name="email"
                required
              />

              <input
                type="tel"
                className="form-control"
                placeholder="Your phone number"
                name="phone"
                required
              />

              <input
                type="text"
                className="form-control"
                placeholder="How can we help?"
                name="interest"
              />

              {/* ✅ Checkbox group */}
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="preferences[]"
                    value="newsletter"
                  />
                  Please add me to your newsletter/special offer email list
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="preferences[]"
                    value="information"
                  />
                  I would like more information about a service or product
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Own Aesthetics.</p>
        <Link
          to="/terms"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "15px",
          }}
        >
          Terms of Service
        </Link>
        <Link to="/privacy" style={{ color: "white", textDecoration: "none" }}>
          Privacy Policy
        </Link>
        <Link
          to="/cancellation"
          style={{ color: "white", textDecoration: "none", marginLeft: "15px" }}
        >
          Cancellation Policy
        </Link>
        <div style={{ marginTop: "12px" }}>
          <Link
            to="/services/injectables"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Injectables
          </Link>
          <Link
            to="/services/facials"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Facials
          </Link>
          <Link
            to="/services/nouvaderm-laser-resurfacing"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            NOUVADerm Laser
          </Link>
          <Link
            to="/locations/des-moines"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Des Moines
          </Link>
          <Link
            to="/locations/west-des-moines"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            West Des Moines
          </Link>
          <Link
            to="/locations/waukee"
            style={{ color: "white", textDecoration: "none" }}
          >
            Waukee
          </Link>
        </div>
      </div>
    </footer>
  );
}
