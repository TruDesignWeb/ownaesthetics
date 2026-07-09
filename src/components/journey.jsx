
// File: src/components/Journey.jsx
import React from 'react';
import Link from "next/link";

export default function Journey({
  title = 'Your journey starts here',
  subtitle = 'Unlock personalized insights and advanced solutions to optimize your health and extend your lifespan.',
  ctaText = 'Extend Your Lifespan',
  features = [],
  variant = '',
  ctaLink = '',
}) {
  return (
    <section className={`medical-pattern-bg [background-color:rgba(39,_37,_37)] [overflow:hidden] ${variant}`}>
      <div className="[max-width:1200px] [margin:0_auto] [padding:60px_20px] [display:grid] [grid-template-columns:1fr_1fr] [grid-template-rows:1fr_1fr] [gap:30px] [min-height:100vh]">
        <div className="[display:flex] [flex-direction:column] [justify-content:center] [padding:40px] [position:relative] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[bottom:0] [&::before]:[background:radial-gradient(circle_at_30%_70%,_rgba(59,_130,_246,_0.1)_0%,_transparent_50%)] [&::before]:[pointer-events:none]">
          <h1 className="[font-size:4rem] [font-weight:300] [line-height:1.1] [margin-bottom:30px] [background:linear-gradient(135deg,_#ffffff_0%,_#a0a0a0_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">{title}</h1>
          <p className="[font-size:1.2rem] [line-height:1.6] [margin-bottom:40px] [color:#b0b0b0] [max-width:400px]">{subtitle}</p>
          

          {/* Make the CTA a link (internal by default) */}
          <Link href={ctaLink || "/"} className="[background:transparent] [border:1px_solid_rgba(255,_255,_255,_0.3)] [color:white] [padding:16px_32px] [border-radius:50px] [font-size:1rem] [cursor:inherit] [transition:all_0.3s_ease] [width:fit-content] [backdrop-filter:blur(10px)] [&:hover]:[border-color:rgba(255,_255,_255,_0.6)] [&:hover]:[background:rgba(255,_255,_255,_0.1)] [&:hover]:[transform:translateY(-2px)]">
            {ctaText}
          </Link>
        </div>

        {features.map(({ title, description, className, link }, idx) => {
          const card = (
            <div
              className={`[height:450px] [background:rgba(255,_255,_255,_0.05)] [border-radius:20px] [padding:40px] [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [position:relative] [overflow:hidden] [transition:all_0.3s_ease] [&:hover]:[transform:translateY(-5px)] [&:hover]:[border-color:rgba(255,_255,_255,_0.2)] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[right:0] [&::before]:[width:100px] [&::before]:[height:100px] [&::before]:[background:radial-gradient(circle,_rgba(59,_130,_246,_0.2)_0%,_transparent_70%)] [&::before]:[border-radius:50%] [&::before]:[transform:translate(50%,_-50%)] [background-image:url('/assets/images/milky-way-full-stars-space.webp')] [background-position:center] [background-size:cover] ${className ?? ''}`.trim()}
            >
              <h2 className="[font-size:1.5rem] [font-weight:600] [margin-bottom:16px] [color:white]">{title}</h2>
              <p className="[font-size:1rem] [line-height:1.6] [color:#b0b0b0]">{description}</p>
            </div>
          );
          return link ? (
            <Link key={idx} href={link}>
              {card}
            </Link>
          ) : (
            <React.Fragment key={idx}>{card}</React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
