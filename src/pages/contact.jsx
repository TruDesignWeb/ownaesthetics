// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';
import Stats from '../components/stats';
import Programs from '../components/programs';
import Membership from '../components/membership';
import Outcomes from '../components/outcomes';
import Journey from '../components/journey';
import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/animations.css';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Banner2 from '../components/banner2';


import "./contact.css";

export default function Contact() {
    useRevealOnScroll()
  return (
    
        <>
      <Navbar />
      <Banner2 />
      <CustomCursor />

      <section className="contact-page">
        <div className="contact-container">
          {/* Left Info Panel */}
          <div className="contact-info">
            <h2>See how Total Health can help!</h2>
            <p>7601 Office Plaza Dr. N Suite 115<br />West Des Moines, IA 50266</p>
            <p>(515) 555-CARE<br />info@totalhealth.com</p>

            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email *" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <Footer />
    </>


  );
}

// export default function About(){
//     useRevealOnScroll()
//     return(
//         <>
//         <CustomCursor />
        
//         <Navbar />
//         <Banner2 
//             image = "/assets/images/milky-way-full-stars-space.jpg"
//             title = "Your Wellness starts here"
//             subtitle= "Discover a new path to living with the fountain of youth"
//         />
        


//         <Journey />
//         <Outcomes />

//         <Footer />


//         </>
//     );
// }