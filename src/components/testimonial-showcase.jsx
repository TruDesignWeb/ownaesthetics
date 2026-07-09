"use client";
import { useState } from "react";
export default function TestimonialShowcase({
  title = "What Clients Say",
  testimonials = [],
  initialCount = 3,
  buttonLabel = "All Testimonials",
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, initialCount);

  return (
    <div className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [display:flex] [flex-direction:column] [align-items:center] [padding:40px] [background:url('/assets/images/testimonialshowcasesvg.svg')]">
      <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [margin-bottom:20px] [color:#333] [&:after]:[content:''] [&:after]:[display:block] [&:after]:[width:60px] [&:after]:[height:4px] [&:after]:[background-color:#3f8570] [&:after]:[margin:10px_auto_0] [&:after]:[border-radius:2px]">{title}</h2>

      <div className="[max-width:1060px]! [display:flex] [gap:20px] [flex-wrap:wrap] [justify-content:center]">
        {visibleTestimonials.map((testimonial, index) => (
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background-color:#fff] [border-radius:8px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] [max-width:300px] [text-align:center] [transition:transform_0.3s_ease] [&:hover]:[transform:translateY(-10px)]" key={index}>
            <p className="[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [line-height:1.6]! [font-style:italic] [color:#555] [margin-bottom:15px]">
              “{testimonial.text}”
            </p>
            <span className="[font-weight:bold] [color:#333]">
              – {testimonial.author}
            </span>
            {testimonial.date && (
              <span className="[display:block] [font-size:0.9em] [color:#888] [margin-top:5px]">
                {testimonial.date}
              </span>
            )}
          </div>
        ))}
      </div>

      {testimonials.length > initialCount && (
        <button
          className="[margin-top:30px] [padding:10px_20px] [background-color:#7e5c2f] [color:#fff] [border:none] [border-radius:5px] [cursor:pointer] [font-size:1em] [transition:background-color_0.3s_ease]"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : buttonLabel}
        </button>
      )}
    </div>
  );
}
