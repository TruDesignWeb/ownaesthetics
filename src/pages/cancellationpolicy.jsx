// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './treatments.css';

import Banner2 from '../components/banner2';
import './cancellation.css';




export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner2 
        image = "/assets/images/contact.svg"
        title = "Cancellation Policy"
        subtitle= "Learn about how we handle cancellations and no-shows."
        variant = ""
    />

     <section id = "cancellation-policy" className = "cancellation-policy">
            <div className = "cancellation-policy-container">
                {/* <h1 className = "title servces-animated">OWN Aesthetics PLC */}
                {/* Cancellation &amp; No-Show Policy</h1> */}
                        
                <div className = "cancellation-policy-container-text">
                    <p>
                                
                    At OWN Aesthetics, we value your time and ours. To provide the best possible care
                    and accommodate all clients, we kindly ask for your understanding and cooperation with
                    our scheduling policies.
                    Cancellations &amp; Rescheduling
                    We require a 24-hour notice to cancel or reschedule an appointment. This allows us the
                    opportunity to offer your reserved time to another client.

                    Late Cancellations &amp; No-Shows
                    Appointments canceled less than 24 hours in advance will incur a $50 cancellation fee.
                    No-show appointments (those missed without notice) will be charged 100% of the
                    scheduled service amount.
                    Late Arrivals
                    If you arrive more than 10 minutes late, we may need to shorten or reschedule your
                    appointment to ensure timely service for all clients.
                    Policy Agreement
                    By booking an appointment with OWN Aesthetics, you acknowledge and agree to the
                    terms of this cancellation and no-show policy.
                    <br/><br/>
                    Thank you for understanding.
                    <br/>
                    Your cooperation helps us maintain exceptional care and availability
                    <br/>
                    for all of our patients.

        
        
                    </p>
                </div>
                
            </div>
    </section>
        

      

      <Footer />
    </>
  );
}
