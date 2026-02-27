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
      imageSrc: '/assets/images/own-fb-hom.png',
      altText: 'Facebook',
      captionText: 'Facebook',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Facebook</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'https://www.facebook.com/p/Own-Aesthetics-61576022630962/'
    },{
      imageSrc: '/assets/images/own-insta-hom.png',
      altText: 'Instagram',
      captionText: 'Instagram',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Instagram</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'https://www.instagram.com/ownaestheticsdsm/'
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
          variant="socials" // Optional: for different styles
        />

      

      <Footer />
    </>
  );
}
