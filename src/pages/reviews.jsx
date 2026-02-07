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
import '../styles/animations.css';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Banner2 from '../components/banner2';
import './reviews.css';

import { useEffect, useRef, useState } from "react";
import TestimonialShowcase from '../components/testimonial-showcase';


export default function Reviews({

     eyebrow = "Philosophy",
  title = "Look and feel your best naturally",
  copy = `We want to help you with your health and wellness at Total Health Initiative, I really like being healthy do you?`,
  image = "/assets/images/milky-way-full-stars-space.jpg",
  thimage = "/assets/images/milky-way-full-stars-space.jpg",
  
}) {
    useRevealOnScroll()
  const imgRef = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;

        // progress: 0 (top enters) → 1 (bottom leaves)
        const progress = Math.min(
          1,
          Math.max(0, (viewportH - rect.top) / (viewportH + rect.height))
        );

        // map progress to a small translate range (parallax amount)
        const translate = (progress - 0.5) * 40; // -20px … +20px
        setY(translate);
        ticking = false;
      });
    };

    // run once on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, 
  []);

const testimonials = [
  {
    text: "Dr. Folkers work exceeded my expectations and I couldn't be happier with the outcome. He is remarkably talented and meticulous about his work. He made me feel very comfortable, was personable, and took his time to answer all of my questions. His nurse, Heidi, and staff were also knowledgeable and compassionate which made for a very positive experience. I will certainly recommend Dr. Folkers to all of my family and friends for their plastic surgery needs.",
    author: "Amber",
    date: "Sep 16, 2025",
  },
  {
    text:
      "If you really want to know about a surgeon, ask an OR nurse. I am an RN and have worked in the OR for 25+ years. I've worked with countless surgeons and, when it came time for me to need the services of one for reconstructive and plastic surgery, I chose Dr. Folkers. He is friendly, compassionate, took all the time necessary to explain procedures and answer all my questions, and did an excellent job on my surgery. I am confident I made the right choice and would recommend him to anyone.",
    author: "Anonymous",
    date: "Jul 22, 2017",
  },
  {
    text:
      "I can't say enough good things about my experience with Dr Folkers, his staff, and the team at Broadlawns Hospital! The care I was given before and after my surgery was amazing. They all took the time to listen to me and provide the information and comfort I needed to get me through it. GREAT, GREAT group of people! I highly recommend!",
    author: "Marianne",
    date: "Jan 20, 2025",
  },
  {
    text:
      "I had 3 procedures done this year, I was very happy with all my results! I'm so glad I did this! The nursing staff was great, friendly, and attentive. Dr Folkers was very down to earth, kind, understanding, and did an excellent job! I would highly recommend him and his team they all are wonderful, such a great experience!",
    author: "Julie",
    date: "Oct 28, 2024",
  },
  {
    text:
      "GREAT, GREAT group of people!",
    author: "Marianne N.",
    date: "Jun 2, 2021",
  },
  {
    text:
      "Dr. Folkers did a wonderful job with my surgery. Him and his staff were able to answer all of my questions, quick to get me in for an appointment if I had any concerns, and very friendly. I'm very happy with both the results of my surgery and my experience!",
    author: "Danielle",
    date: "Apr 28, 2020",
  },
];
    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/images/istock-wheat2.jpg"
            title = "Reviews"
            subtitle= "Meet the team that makes your medical dreams possible"
        />

    


<TestimonialShowcase
  testimonials={testimonials}
  initialCount={6}
  buttonLabel="View More Testimonials"
/>;


        
        

        <Footer />


        </>
    );
}