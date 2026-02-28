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
            image = "/assets/images/images/istock-brownplant.jpg"
            title = "About Us"
            subtitle= "We are committed to serving our community as a trusted resource, offering care from well-trained, highly educated practitioners — all under the guidance of Dr. Bryan Folkers, a reputable, double board-certified Plastic and Reconstructive surgeon"
            variant = " about"
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
            <p className="philo-text">What makes us different is you. Each person unique, each person valuable and beautiful in their own skin, in their own way. This is skincare for everyone.
            <br /><br />Own Aesthetics is directly connected to Total Health Experience in West Des Moines, Iowa, as it serves as the skin aesthetics division of the broader medical practice. While Total Health Experience focuses on comprehensive care such as hormone optimization, functional wellness, and concierge medicine, Own Aesthetics enhances that mission by providing advanced, medical-grade skin aesthetic treatments designed to support confidence and overall well-being. Together, they offer an integrated approach that combines internal health optimization with expert aesthetic care, supported by what many consider to be the best collection of doctors in the area, all working collaboratively to deliver a seamless and elevated patient experience.
            <br /></p>
            <a href = "https://www.totalhealthexperience.com/" target = "_blank" rel="noopener noreferrer"><button className="learn-more-btn">Learn More about Total Health Initiative</button></a>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src="/assets/images/christmas-staff.jpeg" alt="Spa reception with serene, warm tones" />
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
                <img src="/assets/images/images/DSC_2001.jpg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>

            {/* rihgt: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">Founder</span>
            <h2 id="philo-title" className="philo-title">
                Dr. Bryan Folkers
            </h2>
            <p className="philo-text">Own is under the guidance of Dr. Folkers, a reputable, experienced, board-certified plastic surgeon. He has been in the community practicing plastic surgery for 15 years and currently the Chief of Plastic Surgery at Broadlawns Medical Center helping people in all arenas of life and giving them access to Plastic surgery solutions. He specializes in cosmetic, reconstructive, and hand surgery. The variety of surgeries that he is experienced in is valuable to the community and meaningful to him. His desire is to use his skills for the good of others and the glory of God.</p>
            </div>

           
        </div>
    </section>


    {/* TEXT FIRST PIC SEC */}
        <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
            {/* Left: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">Business Manager</span>
            <h2 id="philo-title" className="philo-title">
                Janet Calhoun
            </h2>
            <p className="philo-text">Janet's passion for cosmetic and medical skin health began in 1988 as she worked with her brother in his facial plastic surgery practice. She obtained her esthetics license from the Aveda Institute. Advanced certifications in laser, microneedling, and chemical peels at NIMA. She earned her BA degree in business management at William Penn University and has owned her own skin studio and medical spa. She is delighted to work with this team of providers.</p>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src="/assets/images/images/DSC_2023.jpg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>
        </div>
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
                <img src="/assets/images/images/DSC_1914.jpg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>

            {/* rihgt: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">RN, LE</span>
            <h2 id="philo-title" className="philo-title">
                Beth Pohl
            </h2>
            <p className="philo-text">Beth Pohl is a Registered Nurse and Licensed Esthetician. Her passion is creating confidence at any age and with nearly 20 years under her belt — she's quite good at it! She offers a comprehensive menu of injectable services to address concerns of the aging face. Whether it's lines and wrinkles or loss of volume she works with you to create a treatment plan that feels natural and effective.</p>
            </div>

           
        </div>
    </section>

    {/* TEXT FIRST PIC SEC */}
        <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
            {/* Left: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">RN</span>
            <h2 id="philo-title" className="philo-title">
                Lexi Majors
            </h2>
            <p className="philo-text">Lexi Majors is a Registered Nurse and graduate of Washburn University, where she earned her Bachelor of Science in Nursing in 2015. Lexi combines her medical expertise with a deep passion for holistic wellness. Her approach bridges traditional healthcare and natural, integrative therapies—empowering clients to enhance their confidence and beauty in a way that feels aligned and authentic.</p>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src="/assets/images/images/DSC_1960.jpg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>
        </div>
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
                <img src="/assets/images/images/marriah1.jpeg" alt="Spa reception with serene, warm tones" />
            </div>
            </div>

            {/* rihgt: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">LE</span>
            <h2 id="philo-title" className="philo-title">
                Marriah Kiesau
            </h2>
            <p className="philo-text">Marriah Kiesau is a licensed esthetician with over six years of experience, known for her holistic yet results-driven approach to skin health. She specializes in luxurious, hands-on facials that focus on repairing the skin’s barrier, promoting lymphatic drainage, and restoring the skin’s natural glow. Her intuitive touch and commitment to personalized care create a luxurious experience that leaves clients feeling renewed, restored, and confident in their skin.</p>
            </div>

           
        </div>
    </section>

        
        {/* <Stats /> */}

        <Footer />


        </>
    );
}