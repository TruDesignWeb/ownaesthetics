
// File: src/components/Banner.jsx
import React from 'react';import MagnetButton from './magneticbutton';

export default function Banner() {

  
  return (
    <div className="[position:fixed] [top:0] [left:0] [width:100%] [height:var(--home-banner-height)] [z-index:1] [background:transparent] [display:flex] [align-items:center] [justify-content:center] [text-align:center] [color:white] [overflow:visible] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(_90deg,_transparent,_rgba(255,_255,_255,_0.2),_transparent_)] [&::before]:[animation:shimmer_3s_infinite] [&::before]:[z-index:2] [&_h1]:[font-size:3.5rem] [&_h1]:[font-weight:bold] [&_h1]:[margin-bottom:1rem] [&_h1]:[text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.3)] [&_h1]:[animation:fadeInUp_1s_ease-out] [&_p]:[font-size:1.5rem] [&_p]:[margin-bottom:2rem] [&_p]:[opacity:0.95] [&_p]:[animation:fadeInUp_1s_ease-out_0.3s_both] max-[600px]:[overflow:hidden] max-[600px]:[&_p]:[font-size:clamp(1.15rem,_6vw,_1.55rem)] max-[600px]:[&_p]:[line-height:1.35] max-[600px]:[&_p]:[margin-bottom:1rem] max-[600px]:[&_p]:[padding-top:0.75rem]">
      <div className="[position:absolute] [top:-200px] [left:0] [width:100%] [height:calc(100%_+_200px)] [z-index:0] [overflow:hidden] [&_video]:[width:100%] [&_video]:[height:100%] [&_video]:[object-fit:cover] max-[900px]:[pointer-events:none]">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          className="[pointer-events:none] [user-select:none]"
        >
          <source src="/assets/videos/ownbannervideo (2).mp4" type="video/mp4" />
          {/* https://vuphufywuazudv7y.public.blob.vercel-storage.com/ownbannervideo.mp4 */}
          {/*https://k5xcne8zxjnniehu.public.blob.vercel-storage.com/TotalHealthConstructionVideo.mp4*/}
        </video>
        {/* https://vuphufywuazudv7y.public.blob.vercel-storage.com/ownbannervideo.mp4 */}
          {/*https://k5xcne8zxjnniehu.public.blob.vercel-storage.com/TotalHealthConstructionVideo.mp4*/}
        
        <div className="[position:absolute] [top:0] [left:0] [width:100%] [height:100%] [background:rgba(0,_0,_0,_0.4)] [z-index:1]" />
      </div>
      <div className="[z-index:3] [margin-top:clamp(40px,_8vh,_100px)] [max-width:800px] [padding-top:clamp(2rem,_5vh,_4rem)] max-[900px]:[margin-top:clamp(24px,_5vh,_56px)] max-[900px]:[padding:1.5rem_1.25rem_0] max-[600px]:[margin-top:2.5rem] max-[600px]:[padding:4.25rem_1rem_1.25rem] max-[600px]:[max-width:92vw]">
        {/* <h1>Welcome to Total Health</h1> */}
        <img className="[width:42%] max-[900px]:[width:min(48%,_300px)] max-[600px]:[width:min(48%,_190px)]" src = "/assets/images/OWN Branding/OWN Final Logos/Print CMYK/Primary Logo/PNG/OWN_Primary Logo_CMYK_White_JustText.png" />
        <p className="[padding-top:clamp(12px,_2vh,_20px)]">where artistry enhances authenticity™</p>
        {/* className="" */}
        <a href="#content"><div className="[display:inline-block] [background:rgba(255,_255,_255,_0.001)] [color:white] [text-decoration:none] [font-size:1.2rem] [font-weight:600] [transition:all_0.3s_ease] [animation:fadeInUp_1s_ease-out_0.6s_both] max-[600px]:[&_button]:[border-radius:14px] max-[600px]:[&_button]:[font-size:1.15rem] max-[600px]:[&_button]:[line-height:1] max-[600px]:[&_button]:[min-width:176px] max-[600px]:[&_button]:[padding:0.9rem_1.4rem]" style={{ perspective: 1000 }}>
            <MagnetButton href="#content">Explore Now</MagnetButton>
            </div></a>
      </div>
    </div>
  );
}
