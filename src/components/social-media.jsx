import React from "react";const SocialMedia = () => {
    return (
        <div className="[display:flex] [flex-direction:column] [gap:16px] [justify-content:center] [align-items:center] [background-color:#e8e0d1] [min-height:150px]">
            <p className="[text-align:center] [font-size:1.4em] [padding:4px] [margin-top:12px] [color:#333]">Follow us on Social Media!</p>
            <div className="[margin-bottom:20px] [justify-content:center] [align-items:center]">
                <a href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/" target="_blank" rel="noopener noreferrer">
                    <img className="[width:70px] [height:70px] [transition:transform_0.3s] [&:hover]:[transform:translateY(-8px)]" src = "/assets/images/images/facebook-icon.webp"></img>
                </a>
                <a href="https://www.instagram.com/ownaestheticsdsm/" target="_blank" rel="noopener noreferrer" >
                    <img className="[width:70px] [height:70px] [transition:transform_0.3s] [&:hover]:[transform:translateY(-8px)]" src = "/assets/images/images/instagram-icon.webp"></img>
                </a>
            </div>
            
        </div>

    );
}

export default SocialMedia;