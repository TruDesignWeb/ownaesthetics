import React from "react";
import "../styles/socialmediastyles.css";

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <p className = "social-media-title">Follow us on Social Media!</p>
            <a href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                <img src = "/assets/images/images/instagram-icon"></img>
            </a>
            <a href="https://www.instagram.com/ownaestheticsdsm/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                <img src = "/assets/images/images/instagram-icon"></img>

            </a>
        </div>

    );
}

export default SocialMedia;