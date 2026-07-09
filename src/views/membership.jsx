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
import { useEffect, useRef, useState } from "react";


export default function About({

     eyebrow = "Philosophy",
  title = "Look and feel your best naturally",
  copy = `We want to help you with your health and wellness at Total Health Initiative, I really like being healthy do you?`,
  image = "/assets/images/milky-way-full-stars-space.webp",
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
        {/* <CustomCursor /> */}
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.webp"
            title = "Membership"
            subtitle= "Meet the team that makes your medical dreams possible"
            variant = ""
        />
        
        <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]" aria-labelledby="philo-title">
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
            {/* Left: text */}
            <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">{eyebrow}</span>
            <h2 id="philo-title" className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]">
                {title}
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">{copy}</p>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]" aria-hidden="true" />
            <div
                className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src={image} alt="Spa reception with serene, warm tones" />
            </div>
            </div>
        </div>
    </section>

        
        <Stats />

        <Footer />


        </>
    );
}