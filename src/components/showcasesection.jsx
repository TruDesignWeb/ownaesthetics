"use client";
import React from 'react';
import Link from "next/link";


export default function ShowcaseSection({eyebrow,
  title,
  text,
  buttonLabel,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse = false, 
  backgroundImage, 
  backgroundColor }) {

    const sectionStyle = {
    backgroundColor: backgroundColor || undefined,
    backgroundImage: backgroundImage
      ? `url(${backgroundImage})`
      : undefined,
    backgroundSize: backgroundImage ? "cover" : undefined,
    backgroundPosition: backgroundImage ? "center" : undefined,
  };
  return (
<section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [padding:3.6rem_1.5rem] [background:transparent] max-[768px]:[padding:2.4rem_1rem]" style={sectionStyle}>
      <div className={`feature-wrapper [max-width:1060px]! [margin:0_auto] [position:relative] [display:grid] [grid-template-columns:1fr_1fr] [align-items:center] [gap:1.4rem] [&.reverse]:[direction:rtl] [&.reverse>*]:[direction:ltr] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:1.5rem] max-[768px]:[&.reverse]:[direction:ltr] ${reverse ? "reverse" : ""}`}>
        {/* Text Card */}
        <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
          {eyebrow && (
            <span className="[display:inline-block] [font-size:0.75rem] [letter-spacing:0.12em] [text-transform:uppercase] [color:#4a6fa5] [margin-bottom:0.75rem]">{eyebrow}</span>
          )}
          <h2>{title}</h2>
          <p>{text}</p>
          {buttonLabel && (
            <Link href={buttonLink || "/"} className="[display:inline-block] [z-index:3] [position:relative]">
            <button className="[background:#1f3a5f] [color:#ffffff] [border:none] [padding:0.62rem_1.2rem] [font-size:0.88rem] [transition:background_0.3s_ease] [&:hover]:[background:#274c77] max-[768px]:[padding:0.65rem_1.25rem] max-[768px]:[font-size:0.85rem]" onClick={() => console.log("clicked")}>
              {buttonLabel}
            </button>
            </Link>
          )}
        </div>

        {/* Image */}
        <div className="[position:relative] [z-index:1] [pointer-events:none] [margin-left:-88px] [overflow:hidden] [border-radius:25px] [.feature-wrapper.reverse_&]:[margin-left:0] [.feature-wrapper.reverse_&]:[margin-right:-88px] [&_img]:[width:100%] [&_img]:[height:auto] [&_img]:[display:block] [&_img]:[transition:transform_0.4s_ease] [&_img]:[pointer-events:none] [.feature-wrapper:hover_&_img]:[transform:scale(1.05)] max-[768px]:[margin-left:0] max-[768px]:[margin-right:0] max-[768px]:[.feature-wrapper.reverse_&]:[margin-left:0] max-[768px]:[.feature-wrapper.reverse_&]:[margin-right:0]">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
