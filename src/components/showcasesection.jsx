import "../styles/showcasesection.css";

export default function ShowcaseSection({eyebrow,
  title,
  text,
  buttonLabel,
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
<section className="feature-section" style={sectionStyle}>
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
