
// File: src/components/Banner.jsx
import React from 'react';
import '../styles/banner.css';
import MagnetButton from './magneticbutton';

export default function Banner() {
  return (
    <div className="banner">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://k5xcne8zxjnniehu.public.blob.vercel-storage.com/TotalHealthConstructionVideo.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
      <div className="banner-content">
        {/* <h1>Welcome to Total Health</h1> */}
        <img className="banner-logo" src = "/assets/images/TotalHealthLogo_VerticalWhite.png"/>
        <p className = "banner-text">Experience cutting-edge treatments with all star doctors</p>
        {/* className="flex justify-center items-center h-screen bg-gray-200" */}
        <a href="#"><div className="banner-btn" style={{ perspective: 1000 }}>
            <MagnetButton size="px-15 py-9 text-3xl" shape="rounded-xl">Explore Now</MagnetButton>
            </div></a>
      </div>
    </div>
  );
}