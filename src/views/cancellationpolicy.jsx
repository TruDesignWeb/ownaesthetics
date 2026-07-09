"use client";
// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import Banner2 from '../components/banner2';
export default function Home() {
    useRevealOnScroll();
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />
      <Banner2 
        image = "/assets/images/contact.svg"
        title = "Cancellation Policy"
        subtitle= "Learn about how we handle cancellations and no-shows."
        variant = ""
    />

     <section id = "cancellation-policy" className="">
            <div className="[background:#f8f9fa] [padding:80px_0_100px_0] [&_h1]:[font-size:42px] [&_h1]:[font-weight:600] [&_h1]:[text-align:center] [&_h1]:[margin-bottom:40px] [&_h1]:[color:#2d2d2d] [&_h1]:[letter-spacing:0.5px] [&_h2]:[font-size:22px] [&_h2]:[font-weight:600] [&_h2]:[color:#2d2d2d] [&_h2]:[margin-top:2rem] [&_h2]:[margin-bottom:0.5rem] [&_h3]:[font-size:18px] [&_h3]:[font-weight:600] [&_h3]:[color:#2d2d2d] [&_h3]:[margin-top:1.5rem] [&_h3]:[margin-bottom:0.5rem] [&_p]:[font-size:16px] [&_p]:[line-height:1.9] [&_p]:[color:#444] [&_li]:[font-size:16px] [&_li]:[line-height:1.9] [&_li]:[color:#444] [&_ul]:[padding-left:1.5rem] [&_ul]:[margin-bottom:1rem] [&_ol]:[padding-left:1.5rem] [&_ol]:[margin-bottom:1rem] [&_a]:[color:#9f6048] [&_a]:[text-decoration:underline] [&_a:hover]:[color:#7a4535] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#9f6048] max-[768px]:[padding:50px_0_70px_0] max-[768px]:[&_h1]:[font-size:28px] max-[768px]:[&_h2]:[font-size:18px]">
                {/* <h1 className="">OWN Aesthetics PLC */}
                {/* Cancellation &amp; No-Show Policy</h1> */}
                        
                <div className="[max-width:900px] [width:100%] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin:0_auto] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] max-[768px]:[padding:30px_24px]">
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
