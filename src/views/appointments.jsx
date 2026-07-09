"use client";
// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';
import Stats from '../components/stats';
import Programs from '../components/programs';
import Membership from '../components/membership-component';
import Outcomes from '../components/outcomes';
import Journey from '../components/journey';
import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Banner2 from '../components/banner2';
import { useState, useEffect } from "react";
import axios from "axios";



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Server Response:", data);
  };

  return (
    <>
    <Navbar />
    <Banner2 
    title="Make an Appointment"
    />
    {/* <CustomCursor /> */}

    <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background-color:#f8f6ff] [padding:60px_0]">
      <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr_1.5fr] [gap:40px] [padding:0_20px] max-[768px]:[grid-template-columns:1fr]">
        {/* Left Info Panel */}
        <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [background:#9E9C8D] [border-radius:10px] [color:white] [display:flex] [flex-direction:column] [justify-content:center] [&_h2]:[font-size:2rem] [&_h2]:[margin-bottom:20px] [&_p]:[margin-bottom:20px] [&_p]:[font-size:1.1rem]">
          <h2>See how Total Health can help!</h2>
          <p>7601 Office Plaza Dr. N Suite 115<br />West Des Moines, IA 50266</p>
          <p>(515) 555-CARE<br />info@totalhealth.com</p>
        </div>

        {/* Right Contact Form */}
        <form className="contact-form [padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background:#f0f0fa] [border-radius:10px] [display:flex] [flex-direction:column] [gap:20px] [&_input]:[width:100%] [&_input]:[padding:12px] [&_input]:[border:1px_solid_#ccc] [&_input]:[border-radius:6px] [&_input]:[font-size:1rem] [&_textarea]:[width:100%] [&_textarea]:[padding:12px] [&_textarea]:[border:1px_solid_#ccc] [&_textarea]:[border-radius:6px] [&_textarea]:[font-size:1rem] [&_textarea]:[min-height:120px] [&_textarea]:[resize:vertical] [&_button]:[background:#2f4050] [&_button]:[color:white] [&_button]:[border:none] [&_button]:[padding:12px] [&_button]:[border-radius:6px] [&_button]:[cursor:pointer] [&_button]:[transition:0.3s] [&_button:hover]:[background:#44576a]" onSubmit={handleSubmit}>
          <div className="form-row [.contact-form_&]:[display:flex] [.contact-form_&]:[gap:20px] max-[768px]:[flex-direction:column]">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
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
//             image = "/assets/images/milky-way-full-stars-space.webp"
//             title = "Your Wellness starts here"
//             subtitle= "Discover a new path to living with the fountain of youth"
//         />
        


//         <Journey />
//         <Outcomes />

//         <Footer />


//         </>
//     );
// }