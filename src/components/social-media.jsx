import React from "react";
import "../styles/socialmediastyles.css";

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <p className = "social-media-title">Follow us on Social Media!</p>
            <div className = "icons-container">
                <a href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src = "public\assets\images\images\facebook-icon.png"></img>
                </a>
                <a href="https://www.instagram.com/ownaestheticsdsm/" target="_blank" rel="noopener noreferrer" >
                    <img className="social-media-icon" src = "public\assets\images\images\instagram-icon.png"></img>
                </a>
            </div>
            
        </div>

    );
}

export default SocialMedia;