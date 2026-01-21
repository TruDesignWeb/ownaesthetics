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
import './about.css';

import { useEffect, useRef, useState } from "react";


export default function About({

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


    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.jpg"
            title = "About Us"
            subtitle= "Meet the team that makes your medical dreams possible"
        />
        
        {/* TEXT FIRST PIC SEC */}
        <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
            {/* Left: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">Philosophy</span>
            <h2 id="philo-title" className="philo-title">
                What Makes Us Special?
            </h2>
            <p className="philo-text">What makes us different is you. Each person unique, each person valuable and beautiful in their own skin, in their own way. This is skincare for everyone.</p>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src="/assets/images/images/christmas-staff.jpeg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>
        </div>
    </section>

        <section className = "highlight-section">
            <div className="highlight-wrap">
                <div className="highlight-item">
                    <h3 className="highlight-title">Our Mission</h3>
                    <p className="highlight-text">Own Aesthetics mission is to partner with you to enhance your skin health so that you will feel confident to own your aesthetic at any age and always.</p>
                </div>
            </div>
        </section>

        <section className="team-section" aria-labelledby="team-title">
            <h2 id="team-title" className="team-title">Meet Our Team</h2>
        </section>

        {/* PIC FIRST TEXT SEC */}
    <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
           {/* left: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" style={{transform: `translateX(10px)`}}/>
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src="/assets/images/images/christmas-staff.jpeg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>

            {/* rihgt: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">Philosophy</span>
            <h2 id="philo-title" className="philo-title">
                What Makes Us Special?
            </h2>
            <p className="philo-text">What makes us different is you. Each person unique, each person valuable and beautiful in their own skin, in their own way. This is skincare for everyone.</p>
            </div>

           
        </div>
    </section>

        
        {/* <Stats /> */}

        <Footer />


        </>
    );
}