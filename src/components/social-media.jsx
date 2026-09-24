import React from "react";

const SocialMedia = () => {
  return (
    <section
      aria-label="Follow us on Social Media"
      className="[display:flex] [flex-direction:column] [gap:16px] [justify-content:center] [align-items:center] [background-color:#e8e0d1] [padding:28px_16px_36px]"
    >
      <p className="[text-align:center] [font-size:1.4em] [font-weight:600] [color:#333] [margin:0]">
        Follow us on Social Media!
      </p>
      <div className="[display:flex] [gap:32px] [justify-content:center] [align-items:center]">
        <a
          href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Own Aesthetics on Facebook"
          className="[display:flex] [flex-direction:column] [align-items:center] [gap:8px] [text-decoration:none] [color:#333] [transition:transform_0.3s] [&:hover]:[transform:translateY(-4px)]"
        >
          <img
            className="[width:64px] [height:64px] [display:block]"
            src="/assets/images/images/facebook-icon.webp"
            alt="Facebook"
          />
          <span className="[font-size:0.95rem] [font-weight:600] [letter-spacing:0.02em]">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/ownaestheticsdsm/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Own Aesthetics on Instagram"
          className="[display:flex] [flex-direction:column] [align-items:center] [gap:8px] [text-decoration:none] [color:#333] [transition:transform_0.3s] [&:hover]:[transform:translateY(-4px)]"
        >
          <img
            className="[width:64px] [height:64px] [display:block]"
            src="/assets/images/images/instagram-icon.webp"
            alt="Instagram"
          />
          <span className="[font-size:0.95rem] [font-weight:600] [letter-spacing:0.02em]">Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;