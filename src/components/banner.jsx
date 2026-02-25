
// File: src/components/Banner.jsx
import React from 'react';
import '../styles/banner.css';
import MagnetButton from './magneticbutton';

export default function Banner() {

  
  return (
    <div className="banner">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/assets/videos/ownbannervideo.mp4" type="video/mp4" />
          {/* https://vuphufywuazudv7y.public.blob.vercel-storage.com/ownbannervideo.mp4 */}
          {/*https://k5xcne8zxjnniehu.public.blob.vercel-storage.com/TotalHealthConstructionVideo.mp4*/}
        </video>
        {/* https://vuphufywuazudv7y.public.blob.vercel-storage.com/ownbannervideo.mp4 */}
          {/*https://k5xcne8zxjnniehu.public.blob.vercel-storage.com/TotalHealthConstructionVideo.mp4*/}
        
        <div className="video-overlay" />
      </div>
      <div className="banner-content">
        {/* <h1>Welcome to Total Health</h1> */}
        <img className="banner-logo" src = "\assets\images\OWN Branding\OWN Final Logos\Print CMYK\Primary Logo\PNG\OWN_Primary Logo_CMYK_White.png" />
        <p className = "banner-text">Experience cutting-edge treatments with all star doctors</p>
        {/* className="flex justify-center items-center h-screen bg-gray-200" */}
        <a href="#content"><div className="banner-btn" style={{ perspective: 1000 }}>
            <MagnetButton href = "#content" size="px-15 py-9 text-3xl" shape="rounded-xl">Explore Now</MagnetButton>
            </div></a>
      </div>
    </div>
  );
}