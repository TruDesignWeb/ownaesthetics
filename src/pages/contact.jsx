// File: src/pages/Home.jsx

import Navbar from '../components/navbar';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';

import '../styles/animations.css';


import "./contact.css";
import Banner2 from '../components/banner2';
import { Helmet } from 'react-helmet';
import { useState } from "react";



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend - if need database storage
    //change if need: Custom database storage

// HIPAA-compliant data handling

// CRM integrations beyond email

// Custom spam logic

// Full backend control


    // const res = await fetch("http://localhost:5000/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

};


  return (
    <>
          <Helmet>
        <title>Contact | Own Aesthetics</title>
        <meta
          name="description"
          content="Get in touch with Own Aesthetics. Reach us by phone, email or the contact form for appointments and questions about our med spa services in West Des Moines."
        />
        <meta
          name="keywords"
          content="contact own aesthetics, med spa contact, west des moines, skincare questions"
        />

        <meta property="og:title" content="Contact Own Aesthetics" />
        <meta
          property="og:description"
          content="Have a question or ready to book? Contact Own Aesthetics today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ownaesthetics.com/contact" />
        <meta
          property="og:image"
          content="https://ownaesthetics.com/assets/clinic.jpg"
        />

        <link rel="canonical" href="https://ownaesthetics.com/contact" />

      </Helmet>
    <Navbar />
    <Banner2 
      image = "/assets/images/contact.svg"
      title = "Contact Us"
      subtitle= "Get in touch with us today!"
        variant = ""
    />
    <CustomCursor />

    <section className="contact-page">
      <div className="contact-container">
        {/* Left Info Panel */}
        <div className="contact-info">
          <h2>See how Own Aesthetics can help!</h2>
          <p>7601 Office Plaza Dr. N, Norwood 1, Suite 115<br />West Des Moines, IA 50266</p>
          <p>(515) 672-1860<br />info@ownaesthetics.com</p>
        </div>
                  {submitted && (
            <p className="success-message">
              Thank you! We'll be in touch shortly.
            </p>
          )}
        {/* Right Contact Form */}
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input
              type="hidden"
              name="access_key"
              value="d2c03bfd-17bb-4683-b096-fc7df9822b38"
            />
          <div className="form-row">
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
          <button type="submit" >
            Send
          </button>
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
