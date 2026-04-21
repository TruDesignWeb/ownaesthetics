// File: src/pages/Home.jsx
import React from "react";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import CustomCursor from "../components/customcursor";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import "../styles/animations.css";

import Banner2 from "../components/banner2";
import "./about.css";

import { useEffect, useRef, useState } from "react";

export default function About({}) {
  useRevealOnScroll();
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
        const viewportH =
          window.innerHeight || document.documentElement.clientHeight;

        // progress: 0 (top enters) → 1 (bottom leaves)
        const progress = Math.min(
          1,
          Math.max(0, (viewportH - rect.top) / (viewportH + rect.height)),
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
  }, []);

  return (
    <>
      <CustomCursor />

      <Navbar />
      <Banner2
        image="/assets/images/images/istock-brownplant.jpg"
        title="About Us"
        subtitle="We are committed to serving our community as a trusted resource, offering care from well-trained, highly educated practitioners — all under the guidance of Dr. Bryan Folkers, a reputable, double board-certified Plastic and Reconstructive surgeon"
        variant=" about"
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
            <p className="philo-text">
              What makes us different is simple: you. You are unique, valuable,
              and beautiful in your own way. We provide skin health for
              everyone.
              <br />
              <br />
            </p>

            <h2 id="philo-title" className="philo-title-2">
              Total Health Experience
            </h2>
            <p className="philo-text">
              Own Aesthetics is apart of Total Health Experience in West Des
              Moines, Iowa, as it serves as the skin aesthetics division of the
              broader medical practice. Total Health Experience provides
              comprehensive care such as hormone optimization, functional
              wellness, and concierge medicine. Own Aesthetics enhances that
              mission by providing advanced, medical-grade skin aesthetic
              treatments designed to support confidence and overall well-being.
              Together, they combine internal health optimization with expert
              aesthetic care. Backed by a top-tier team of doctors, every
              experience is seamless and elevated.
            </p>
            <a
              href="https://www.totalhealthexperience.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="learn-more-btn">
                Learn More about Total Health Initiative
              </button>
            </a>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/christmas-staff.jpeg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="highlight-wrap">
          <div className="highlight-item">
            <h3 className="highlight-title">Our Mission</h3>
            <p className="highlight-text">
              Own Aesthetics&apos; mission is to partner with you to enhance
              your skin health so that you feel confident to own your aesthetic
              at any age, always.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-title">
        <h2 id="team-title" className="team-title">
          Meet Our Team
        </h2>
      </section>

      {/* PIC FIRST TEXT SEC */}
      <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
          {/* left: image stack with sage frame */}
          <div className="philo-media">
            <div
              className="sage-frame"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_2001.jpg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>

          {/* rihgt: text */}
          <div className="philo-copy">
            <span className="philo-eyebrow">Founder</span>
            <h2 id="philo-title" className="philo-title">
              Dr. Bryan Folkers
            </h2>
            <p className="philo-text">
              Own Aesthetics is led by Dr. Folkers, a board-certified plastic
              surgeon who has served the Des Moines community for over 15 years.
              As Chief of Plastic Surgery at Broadlawns Medical Center, he
              specializes in cosmetic, reconstructive, and hand surgery. His
              work is driven by a commitment to serving others and using his
              skills to honor God.
            </p>
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
            <p className="philo-text">
              Janet&apos;s passion for cosmetic and medical skin health began in
              1988 while working alongside her brother in his facial plastic
              surgery practice. She is a licensed esthetician through the Aveda
              Institute and has completed advanced certifications in laser
              treatments, microneedling, and chemical peels at NIMA. With a BA
              in Business Management from William Penn University, Janet has
              successfully owned both a skin studio and a medical spa. She is
              delighted to share her experience and passion as part of this
              expert team.
            </p>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_2023.jpg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIC FIRST TEXT SEC */}
      <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
          {/* left: image stack with sage frame */}
          <div className="philo-media">
            <div
              className="sage-frame"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_1914.jpg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>

          {/* rihgt: text */}
          <div className="philo-copy">
            <span className="philo-eyebrow">RN, LE</span>
            <h2 id="philo-title" className="philo-title">
              Beth Pohl
            </h2>
            <p className="philo-text">
              Beth is a Registered Nurse and Licensed Esthetician with a passion
              for aesthetic medicine and helping clients feel confident at any
              age. With just under 20 years of experience, she specializes in a
              comprehensive range of injectable services to address concerns of
              the aging face, including lines, wrinkles, and loss of volume.
              Beth works closely with each client to develop personalized
              treatment plans that deliver natural, effective results. She is
              proud to be part of a collaborative team of providers.
            </p>
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
            <p className="philo-text">
              Lexi is a Registered Nurse and graduate of Washburn University,
              where she earned her BS in Nursing in 2015. Lexi combines her
              medical expertise with a deep passion for holistic wellness. Her
              approach bridges traditional healthcare and natural, integrative
              therapies - empowering clients to enhance their confidence and
              beauty in a way that feels aligned and authentic.
            </p>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_1960.jpg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIC FIRST TEXT SEC */}
      <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
          {/* left: image stack with sage frame */}
          <div className="philo-media">
            <div
              className="sage-frame"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/marriah1.jpeg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>

          {/* rihgt: text */}
          <div className="philo-copy">
            <span className="philo-eyebrow">LE</span>
            <h2 id="philo-title" className="philo-title">
              Marriah Kiesau
            </h2>
            <p className="philo-text">
              Marriah is a Licensed Esthetician with over six years of
              experience, known for her holistic yet results-driven approach to
              skin health. She specializes in luxurious, hands-on facials that
              focus on repairing the skin&apos;s barrier, promoting lymphatic
              drainage, and restoring the skin&apos;s natural glow. Her
              intuitive touch and commitment to personalized care create a
              luxurious experience that leaves clients feeling renewed,
              restored, and confident in their skin.
            </p>
          </div>
        </div>
      </section>

      {/* TEXT FIRST PIC SEC */}
      <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
          {/* Left: text */}
          <div className="philo-copy">
            <span className="philo-eyebrow">LE</span>
            <h2 id="philo-title" className="philo-title">
              Jennifer Jensen
            </h2>
            <p className="philo-text">
              We're so excited to welcome Jen to our team! Jen is passionate
              about skin health and has a talent for helping clients feel
              confident and refreshed. Jen brings 15 years of experience and a
              peronalized, results-driven approach to every treatment.
            </p>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
              className="image-card"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/Jenjensen.JPG"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Stats /> */}

      <Footer />
    </>
  );
}
