"use client";
// File: src/pages/Home.jsx
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import CustomCursor from "../components/customcursor";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import Banner2 from "../components/banner2";
export default function About({}) {
  useRevealOnScroll();
  const router = useRouter();
  const imgRef = useRef(null);
  const [y, setY] = useState(0);
  const [easterClickCount, setEasterClickCount] = useState(0);

  useEffect(() => {
    if (easterClickCount >= 5) {
      setEasterClickCount(0);
      router.push("/bryan");
    }
  }, [easterClickCount, router]);

  const handleEasterClick = () => {
    setEasterClickCount((prev) => prev + 1);
  };

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
      {/* <CustomCursor /> */}

      <Navbar />
      <Banner2
        image="/assets/images/images/istock-brownplant.webp"
        title="About Us"
        subtitle="We are committed to serving our community as a trusted resource, offering care from well-trained, highly educated practitioners — all under the guidance of Dr. Bryan Folkers, a reputable, double board-certified Plastic and Reconstructive surgeon"
        variant=" about"
      />

      {/* TEXT FIRST PIC SEC */}
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* Left: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              Philosophy
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              What Makes Us Special?
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
              What makes us different is simple: you. You are unique, valuable,
              and beautiful in your own way. We provide skin health for
              everyone.
              <br />
              <br />
            </p>

            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-weight:600] [color:#111] [margin:0_0_1.25rem_0] [font-family:montserrat]"
            >
              Total Health Experience
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
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
              <button className="[display:inline-flex] [align-items:center] [gap:0.5rem] [text-decoration:none] [font-weight:bold] [transition:all_0.3s_ease] [position:relative] [&::after]:[content:'→'] [&::after]:[transition:transform_0.3s_ease] [&:hover]:[color:#3b82f6] [&:hover]:[transform:translateX(5px)] [&:hover::after]:[transform:translateX(5px)] [.epic-card_&]:[color:#fbbf24] [.epic-card_&:hover]:[color:#f59e0b] [margin-top:1.5rem] [padding:0.75rem_1.5rem] [background-color:#a0ad93] [color:white] [border:none] [border-radius:4px] [font-size:1rem] [cursor:pointer]">
                Learn More about Total Health Initiative
              </button>
            </a>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/christmas-staff.webp"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#9b5b3e] [padding:clamp(2rem,_5vw,_4rem)_1.5rem] [text-align:center]">
        <div className="[max-width:1060px]! [padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [margin:0_auto] [background-color:#fafafa] [border-radius:25px]">
          <div className="[margin-bottom:1.5rem] [padding:2rem]">
            <h3 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-weight:700] [color:#333] [margin-bottom:1rem]">
              Our Mission
            </h3>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#555]">
              Own Aesthetics&apos; mission is to partner with you to enhance
              your skin health so that you feel confident to own your aesthetic
              at any age, always.
            </p>
          </div>
        </div>
      </section>

      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#f9f4ef] [padding:clamp(3rem,_6vw,_6rem)_1.5rem]"
        aria-labelledby="team-title"
      >
        <h2
          id="team-title"
          className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-weight:600] [color:#111] [margin-bottom:2rem] [font-family:montserrat] [text-align:center]"
        >
          Meet Our Team
        </h2>
      </section>

      {/* PIC FIRST TEXT SEC */}
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* left: image stack with sage frame */}
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
              onClick={handleEasterClick}
            >
              <img
                src="/assets/images/images/DSC_2001.webp"
                alt="Dr. Bryan Folkers"
              />
            </div>
          </div>

          {/* rihgt: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              Founder
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              Dr. Bryan Folkers
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
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
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* Left: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              Business Manager
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              Janet Calhoun
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
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
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_2023.webp"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIC FIRST TEXT SEC */}
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* left: image stack with sage frame */}
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/beth.png"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>

          {/* rihgt: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              RN, LE
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              Beth Pohl
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
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
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* Left: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              RN
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              Lexi Majors
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
              Lexi is a Registered Nurse and graduate of Washburn University,
              where she earned her BS in Nursing in 2015. Lexi combines her
              medical expertise with a deep passion for holistic wellness. Her
              approach bridges traditional healthcare and natural, integrative
              therapies - empowering clients to enhance their confidence and
              beauty in a way that feels aligned and authentic.
            </p>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/DSC_1960.webp"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIC FIRST TEXT SEC */}
      {/* <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]" aria-labelledby="philo-title">
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* left: image stack with sage frame 
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
              style={{ transform: `translateX(10px)` }}
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
              ref={imgRef}
              style={{ transform: `translateY(${y}px)` }}
            >
              <img
                src="/assets/images/images/marriah1.jpeg"
                alt="Spa reception with serene, warm tones"
              />
            </div>
          </div>

          {/* rihgt: text *
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">LE</span>
            <h2 id="philo-title" className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]">
              Marriah Kiesau
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
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
      </section> */}

      {/* TEXT FIRST PIC SEC */}
      <section
        className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#fffdf0] [padding:clamp(3rem,_6vw,_6rem)_1.5rem] min-[1280px]:[padding-left:2rem] min-[1280px]:[padding-right:2rem]"
        aria-labelledby="philo-title"
      >
        <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:1fr] [align-items:center] [gap:clamp(2rem,_5vw,_4rem)] min-[980px]:[grid-template-columns:1.1fr_1fr]">
          {/* Left: text */}
          <div className="[max-width:680px]">
            <span className="[display:inline-block] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b] [margin-bottom:1rem]">
              LE
            </span>
            <h2
              id="philo-title"
              className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [font-family:montserrat] [font-weight:600] [color:#111] [margin:0_0_1.25rem_0]"
            >
              Jennifer Jensen
            </h2>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [color:#2b2b2b]">
              We're so excited to welcome Jen to our team! Jen is passionate
              about skin health and has a talent for helping clients feel
              confident and refreshed. Jen brings 15 years of experience and a
              peronalized, results-driven approach to every treatment.
            </p>
          </div>

          {/* Right: image stack with sage frame */}
          <div className="[position:relative] [min-height:420px] min-[640px]:[min-height:520px]">
            <div
              className="[position:absolute] [inset:0] [background:#9fb0a6] [border-radius:8px] [transform:translate(6%,_-6%)]"
              aria-hidden="true"
            />
            <div
              className="[position:relative] [width:100%] [height:100%] [border-radius:8px] [overflow:hidden] [box-shadow:0_10px_30px_rgba(0,0,0,.12),_0_20px_60px_rgba(0,0,0,.06)] [will-change:transform] [transition:transform_120ms_linear] [background:#eaeaea] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]"
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
