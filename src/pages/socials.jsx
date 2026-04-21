// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './socials.css';

import Banner2 from '../components/banner2';

const featureCards = [
    {
      imageSrc: '/assets/images/images/facebook-icon.png',
      altText: 'Facebook',
      captionText: 'Facebook',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '250px',
      imageWidth: '250px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Facebook</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'https://www.facebook.com/p/Own-Aesthetics-61576022630962/'
    },{
      imageSrc: '/assets/images/images/instagram-icon.png',
      altText: 'Instagram',
      captionText: 'Instagram',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '250px',
      imageWidth: '250px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Instagram</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'https://www.instagram.com/ownaestheticsdsm/'
      },{
      imageSrc: '/assets/images/images/googleplay.png',
      altText: 'Google',
      captionText: 'Google',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '250px',
      imageWidth: '250px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Google</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'https://www.google.com/maps/place/Own+Aesthetics+PLC/@41.5868727,-94.9654378,9z/data=!4m10!1m2!2m1!1sown+aesthetics!3m6!1s0x87ec2183bd08ca1d:0x769a96c0fa498807!8m2!3d41.5868727!4d-93.8118733!15sCg5vd24gYWVzdGhldGljc5IBC21lZGljYWxfc3BhqgFLEAEqEiIOb3duIGFlc3RoZXRpY3MoADIfEAEiGxQYyzhi_LQcyRViqag_cSExnuB2n5YyK36nMDISEAIiDm93biBhZXN0aGV0aWNz4AEA!16s%2Fg%2F11mdb849vx?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D'
      }
    ];

export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner2 
        image = "/assets/images/images/someimagestotry1/daniel-j-schwarz-UK-EzGvEZIk-unsplash.jpg"
        title = "Socials"
        subtitle= "Join our socials for our latest info"
        variant = ""
    />


        <Features
          title="Follow Us!"
          cards={featureCards}
        
        />

      <Footer />
    </>
  );
}
