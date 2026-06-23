// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/animations.css';

import Banner2 from '../components/banner2';
import './reviews.css';

import { useEffect, useRef, useState } from "react";
import TestimonialShowcase from '../components/testimonial-showcase';

export default function Reviews({

     eyebrow = "Philosophy",
  title = "Look and feel your best naturally",
  copy = `We want to help you with your health and wellness at Total Health Initiative, I really like being healthy do you?`,
  image = "/assets/images/milky-way-full-stars-space.webp",
  thimage = "/assets/images/milky-way-full-stars-space.webp",
  
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

        // progress: 0 (top enters) â†’ 1 (bottom leaves)
        const progress = Math.min(
          1,
          Math.max(0, (viewportH - rect.top) / (viewportH + rect.height))
        );

        // map progress to a small translate range (parallax amount)
        const translate = (progress - 0.5) * 40; // -20px â€¦ +20px
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
    text:
      "Dr. Folkers is the best plastic surgeon and aesthetic expert in the country, in my opinion. I live in LA, very close to Beverly Hills. I bypassed all of Los Angeles and Beverly Hills to choose Dr. Folkers for my procedures. I left LA and flew to Des Moines because Dr. Folkers was in residence there. Not only is he board certified and Chief of Plastic Surgery at a respected medical institution but he has been performing skilled surgeries for 25 years and the results speak for themselves. If you are reading this, rest assured you are in good hands. Donâ€™t lose a second of sleep. Dr. Folkers isnâ€™t just an artist but a Doctor who cares. That combination is nearly impossible to find in todayâ€™s world. It should be added, I loved the Own Aesthetics team. I specifically worked with Janet Calhoun and Lexi Majors. I will be flying to Des Moines again soon to see the Own Aesthetics team Iâ€™ve grown to respect.",
    author: "Dr. Dan",
    date: "",
  },
  {
    text:"I had such a great experience with Beth Pohl at Own Aesthetics in West Des Moines. From start to finish, she was incredibly professional, caring, and attentive. I came in looking for a solution to help soften my expression lines, and Beth took the time to truly understand my goals. She explained the Botox treatment thoroughly, made me feel completely at ease, and delivered beautiful, natural-looking results. Since my appointment, Iâ€™ve received so many compliments on my skinâ€”friends keep telling me how refreshed and radiant I look! I was so impressed with how smooth and natural everything turned out, without ever appearing overdone. Beth has a unique ability to combine medical expertise with a compassionate approach, which is rare to find in this industry. She genuinely cares about her patients and goes above and beyond to make sure youâ€™re happy with your results. If youâ€™re considering Botox or aesthetic treatments in West Des Moines, I highly recommend seeing Beth at Own Aesthetics. Sheâ€™s absolutely wonderful to work with, and I couldnâ€™t be more pleased with my experience and results.",
    author:"Toni",
    date: "",
  },
  {
    text:"Absolutely love my results! Beth and the rest of the staff is so knowledgeable and makes the whole experience comfortable and easy. My Botox looks natural, and my skin has never looked better after the laser treatment! Would recommend 110%",
    author:"Staci",
    date: "",
  },
  {
    text: "Dr. Folkers work exceeded my expectations and I couldn't be happier with the outcome. He is remarkably talented and meticulous about his work. He made me feel very comfortable, was personable, and took his time to answer all of my questions. His nurse, Heidi, and staff were also knowledgeable and compassionate which made for a very positive experience. I will certainly recommend Dr. Folkers to all of my family and friends for their plastic surgery needs.",
    author: "Amber",
    date: "",
  },
  {
    text:
      "If you really want to know about a surgeon, ask an OR nurse. I am an RN and have worked in the OR for 25+ years. I've worked with countless surgeons and, when it came time for me to need the services of one for reconstructive and plastic surgery, I chose Dr. Folkers. He is friendly, compassionate, took all the time necessary to explain procedures and answer all my questions, and did an excellent job on my surgery. I am confident I made the right choice and would recommend him to anyone.",
    author: "Anonymous",
    date: "",
  },
  {
    text:
      "I can't say enough good things about my experience with Dr Folkers, his staff, and the team at Broadlawns Hospital! The care I was given before and after my surgery was amazing. They all took the time to listen to me and provide the information and comfort I needed to get me through it. GREAT, GREAT group of people! I highly recommend!",
    author: "Marianne",
    date: "",
  },
  {
    text:
      "I had 3 procedures done this year, I was very happy with all my results! I'm so glad I did this! The nursing staff was great, friendly, and attentive. Dr Folkers was very down to earth, kind, understanding, and did an excellent job! I would highly recommend him and his team they all are wonderful, such a great experience!",
    author: "Julie",
    date: "",
  },
  {
    text:
      "GREAT, GREAT group of people!",
    author: "Marianne N.",
    date: "",
  },
  {
    text:
      "Dr. Folkers did a wonderful job with my surgery. Him and his staff were able to answer all of my questions, quick to get me in for an appointment if I had any concerns, and very friendly. I'm very happy with both the results of my surgery and my experience!",
    author: "Danielle",
    date: "",
  },
  
];
    return(
        <>
        {/* <CustomCursor /> */}
        
        <Navbar />
        <Banner2 
            image = "/assets/images/images/istock-wheat2.webp"
            title = "Reviews"
            subtitle= ""
            variant = ""
        />

<TestimonialShowcase
  testimonials={testimonials}
  initialCount={6}
  buttonLabel="View More Testimonials"
/>

        <Footer />

        </>
    );
}
