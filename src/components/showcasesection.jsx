import "../styles/showcasesection.css";

export default function ShowcaseSection({eyebrow,
  title,
  text,
  buttonLabel,
  imageSrc,
  imageAlt,
  reverse = false}){
  return (
<section className="feature-section">
      <div className={`feature-wrapper ${reverse ? "reverse" : ""}`}>
        {/* Text Card */}
        <div className="feature-card">
          {eyebrow && (
            <span className="feature-eyebrow">{eyebrow}</span>
          )}
          <h2>{title}</h2>
          <p>{text}</p>
          {buttonLabel && (
            <button className="feature-button">
              {buttonLabel}
            </button>
          )}
        </div>

        {/* Image */}
        <div className="feature-image">
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
