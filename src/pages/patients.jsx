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
import './patients.css';

import { useEffect, useRef, useState } from "react";
import TestimonialShowcase from '../components/testimonial-showcase';


export default function About({

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
    text: "I’ve been seeing Beth for four years now, and she’s the best.",
    author: "Allie",
    date: "Aug 7, 2025",
  },
  {
    text:
      "I am an RN with 25+ years of OR experience. I chose Dr. Folkers.",
    author: "Anonymous",
    date: "Jul 22, 2017",
  },
  {
    text:
      "From the moment I walked in, I was treated with kindness.",
    author: "Emily R.",
    date: "Aug 7, 2025",
  },
  {
    text:
      "Exceptional care and attention to detail. Highly recommend.",
    author: "Mark T.",
  },
  {
    text:
      "Professional, calming, and incredibly thorough experience.",
    author: "Sarah L.",
  },
];
    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.jpg"
            title = "Patients"
            subtitle= "Meet the team that makes your medical dreams possible"
        />

    


<TestimonialShowcase
  testimonials={testimonials}
  initialCount={3}
  buttonLabel="View More Testimonials"
/>;


        
        

        <Footer />


        </>
    );
}