
// File: src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';
import ContactForm from '../components/contactform';
import { useState } from 'react';
import axios from 'axios';

export default function Footer() {
  return (
    <footer className = "footer">
      <div className="footer-content">
        <div className="footer-section-1">
          <img className = "logo-img" src = "\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Logo Icon\PNG\OWN_Icon_CMYK_Black.png"/>
          
          <p>7601 Medical Plaza<br />Suite 115<br />West Des Moines, IA 50266</p>
          <p>Phone: (515) 672-1860<br />Email: info@ownaesthetics.com</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 5:00pm</p>
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
            <div className= "newsletter-container">
              <h2><b>Want to learn more?</b></h2>
              <p>Enter your information below and we'll get back to you!</p>

              <form className = "newsletter-form" action="https://api.web3forms.com/submit" method="POST">
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

                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>

        </div>
        <div className="footer-section">

          <h3>Other Information</h3>
          
          <p><a href="#">Emergency Medicine</a></p>
          <p><a href="#">Advanced Diagnostics</a></p>
          <p><a href="#">Cardiology Center</a></p>
          <p><a href="#">Neurology Services</a></p>


        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Own Aesthetics. Dedicated to exceptional medical care and patient wellness.</p>
      </div>
    </footer>
  );
}
