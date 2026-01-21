import { useState } from "react";
import "../styles/testimonialshowcasestyles.css";

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
    <div className="testimonial-showcase-container">
      <h2 className="testimonial-showcase-title">{title}</h2>

      <div className="testimonial-cards-wrapper">
        {visibleTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">
              “{testimonial.text}”
            </p>
            <span className="testimonial-author">
              – {testimonial.author}
            </span>
            {testimonial.date && (
              <span className="testimonial-date">
                {testimonial.date}
              </span>
            )}
          </div>
        ))}
      </div>

      {testimonials.length > initialCount && (
        <button
          className="view-more-testimonials-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : buttonLabel}
        </button>
      )}
    </div>
  );
}
