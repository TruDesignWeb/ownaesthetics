"use client";
import "../styles/showcasesection.css";
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
            <Link href={buttonLink || "/"} className="feature-button-link">
            <button className="feature-button" onClick={() => console.log("clicked")}>
              {buttonLabel}
            </button>
            </Link>
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
