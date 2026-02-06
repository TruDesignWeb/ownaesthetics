// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';
import Stats from '../components/stats';
import Programs from '../components/programs';
import Membership from '../components/membership-component';
import Outcomes from '../components/outcomes';
import Journey from '../components/journey';
import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/animations.css';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Banner2 from '../components/banner2';
import SocialMedia from '../components/social-media';



const featureCards = [
    {
      imageSrc: '/assets/images/images/istock-consultation.jpg',
      altText: 'Consultation',
      captionText: 'Consultation',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Consultation</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: '/services/consultation',
    },{
      imageSrc: '/assets/images/images/aquafirme4.jpg',
      altText: 'AquaFirmeXS',
      captionText: 'AquaFirmeXS',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">AquaFirmeXS</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'services/aquafirme.jsx',
      },
    {
      imageSrc: '/assets/images/images/nouva4.jpg',
      altText: 'NOUVADerm™ Laser Treatment',
      captionText: 'NOUVADerm™ Laser Treatment',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">NOUVADerm™ Laser Treatment</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'services/nouvaderm.jsx'
      },
    {
    imageSrc: '/assets/images/images/female-patient-receiving-botox-injection-forehead.jpg',
      altText: 'Anti-Wrinkle Injections',
      captionText: 'Anti-Wrinkle Injections',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Anti-Wrinkle Injections</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
    imageSrc: '/assets/images/images/istock-kybella.jpg',
      altText: 'Kybella®',
      captionText: 'Kybella®',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Kybella®</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/woman-doing-self-care-treatment-indoors.jpg',
      altText: 'Sclerotherapy – Spider Veins',
      captionText: 'Sclerotherapy – Spider Veins',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Sclerotherapy – Spider Veins</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    }, 
    {
    imageSrc: '/assets/images/images/hand-with-latex-glove-holding-vaccine-syringe.jpg',
      altText: 'HA Dermal Fillers',
      captionText: 'HA Dermal Fillers',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">HA Dermal Fillers</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/istock-sculptra.jpg',
      altText: 'Sculptra™',
      captionText: 'Sculptra™',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Sculptra™</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/close-up-doctor-checking-smiley-woman.jpg',
      altText: 'PRF/PRF ezGel',
      captionText: 'PRF/PRF ezGel',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">PRF/PRF ezGel</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
    imageSrc: '/assets/images/images/man-fixed.jpg',
      altText: 'Hair Wellness & Restoration',
      captionText: 'Hair Wellness & Restoration',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Hair Wellness & Restoration</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/istock-chem.jpg',
      altText: 'Chemical Peels',
      captionText: 'Chemical Peels',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Chemical Peels</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/istock-facial_.jpg',
      altText: 'Customized Facials',
      captionText: 'Customized Facials',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Customized Facials</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
    imageSrc: '/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/15.png',
      altText: 'EXO|E® Skin Revitalizing Complex',
      captionText: 'EXO|E® Skin Revitalizing Complex',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">EXO|E® Skin Revitalizing Complex</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/istock-salt1.jpg',
      altText: 'SaltFacial® Skin Renewal Therapy',
      captionText: 'SaltFacial® Skin Renewal Therapy',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">SaltFacial® Skin Renewal Therapy</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
        {
    imageSrc: '/assets/images/images/istock-skinpen.jpg',
      altText: 'SkinPen® Microneedling',
      captionText: 'SkinPen® Microneedling',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">SkinPen® Microneedling</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    
    
    ];



export default function About(){
    useRevealOnScroll()
    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.jpg"
            title = "Your Wellness starts here"
            subtitle= "Discover a new path to living with the fountain of youth"
        />
        


        <Features
            title="Services"
            cards={featureCards}
            variant="" // Optional: for different styles
        />

        <SocialMedia />

        <Footer />


        </>
    );
}