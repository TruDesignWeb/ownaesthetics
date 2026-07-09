// File: src/components/Features.jsx
import React from "react";
import TiltedCard from "./tiltedcard";
import MagneticButton from "./magneticbutton";
import Link from "next/link";

export default function Features({
  title = "Revolutionary Healthcare",
  cards = [],
  variant = "",
}) {
  return (
    <section
      className={`features- [padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [padding:3.8rem_2rem_3.2rem] [background:rgba(230,_225,_191,_0.986)] [position:relative] [overflow:hidden] [min-height:58vh] [display:flex] [flex-direction:column] [justify-content:center] [width:auto] [box-shadow:0_-10px_30px_rgba(0,_0,_0,_0.1),_0_-20px_60px_rgba(0,_0,_0,_0.05)] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[bottom:0] [&::before]:[background-image:url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201440%20600%27%3E%3Crect%20width=%271440%27%20height=%27600%27%20fill=%27%23F7F2EB%27/%3E%3Cpath%20d=%27M0,120%20C300,40%20600,200%20900,120%20C1200,40%201440,160%201440,160%20L1440,440%20C1200,520%20900,380%20600,460%20C300,540%200,420%200,420%20Z%27%20fill=%27%23EBE1D2%27/%3E%3Cpath%20d=%27M0,180%20C400,260%20800,100%201440,220%20L1440,420%20C1000,500%20600,340%200,460%20Z%27%20fill=%27%23A0AD93%27%20fill-opacity=%270.35%27/%3E%3C/svg%3E)] [&::before]:[opacity:1] max-[768px]:[padding:2.4rem_1rem] max-[768px]:[min-height:auto] ${variant}`}
    >
      <div className="[max-width:1060px]! [margin:0_auto] [width:100%] max-[768px]:[width:100%] max-[768px]:[padding:0]">
        <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [-webkit-background-clip:text] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]">
          {title}
        </h2>
        <div className="[display:grid] [grid-template-columns:repeat(3,_minmax(220px,_1fr))] [gap:clamp(1.15rem,_2.5vw,_2rem)] [justify-items:center] [align-items:center] [padding:1rem_0_0] [padding-left:0] [&>a]:[display:flex] [&>a]:[justify-content:center] [&>a]:[width:100%] [&>a>div]:[display:flex] [&>a>div]:[justify-content:center] [&>a>div]:[width:100%] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:0.9rem] max-[768px]:[justify-items:center] max-[768px]:[padding:0] max-[768px]:[padding-left:0]">
          {cards.map((card, idx) =>
            card.link ? (
              <Link key={idx} href={card.link}>
                <TiltedCard {...card} />
              </Link>
            ) : (
              <TiltedCard key={idx} {...card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
