// File: src/pages/Home
import React from 'react';
import Navbar from '../components/navbar';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/animations.css';

import Banner2 from '../components/banner2';
import SocialMedia from '../components/social-media';
import { link } from 'framer-motion/client';
import { Helmet } from 'react-helmet';



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
      link: '/services/aquafirme',
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
      link: '/services/nouvaderm'
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
      link: '/services/antiwrinkle',
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
      link: '/services/kybella',
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
      link: '/services/sclerotherapy',
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
      link: '/services/juvederm',
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
      link: '/services/sculptra',
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
      link: '/services/cellenis',
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
      link: '/services/hairtreatments'
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
      link: '/services/chemicalpeels',
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
      link: '/services/facials',
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
      link: '/services/exosomes',
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
      link: '/services/saltfacial',
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
      link: '/services/skinpen',
    },
    
    
    ];



export default function About(){
    useRevealOnScroll()
    return(
        <>
                  <Helmet>
            <title>Services | Own Aesthetics</title>
            <meta
              name="description"
              content="Explore the full range of medical‑grade services at Own Aesthetics – from injectables to laser treatments, tailored to help you look and feel your best."
            />
            <meta
              name="keywords"
              content="med spa services, botox, fillers, laser, aquafirmexs, skincare treatments, own aesthetics"
            />

            <meta property="og:title" content="Own Aesthetics Services" />
            <meta
              property="og:description"
              content="Discover our comprehensive menu of expert-led treatments designed to rejuvenate and enhance your natural beauty."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ownaesthetics.com/services" />
            <meta
              property="og:image"
              content="https://ownaesthetics.com/assets/clinic.jpg"
            />

            <link rel="canonical" href="https://ownaesthetics.com/services" />

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Own Aesthetics",
                url: "https://ownaesthetics.com",
                logo: "https://ownaesthetics.com/assets/logo.png",
                image: "https://ownaesthetics.com/assets/clinic.jpg",
                description:
                  "Own Aesthetics provides expert skincare, injectables and med spa treatments in West Des Moines.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "7601 Office Plaza Dr. N Norwood 1, Suite 115",
                  addressLocality: "West Des Moines",
                  addressRegion: "IA",
                  postalCode: "50266",
                  addressCountry: "US",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-515-672-1860",
                  contactType: "Customer Service",
                  email: "info@ownaesthetics.com",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Monday",
                    opens: "00:00",
                    closes: "23:59",
                    description: "by appointment only",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Tuesday",
                    opens: "10:00",
                    closes: "17:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Wednesday",
                    opens: "10:00",
                    closes: "19:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Thursday",
                    opens: "10:00",
                    closes: "19:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Friday",
                    opens: "10:00",
                    closes: "17:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "00:00",
                    closes: "23:59",
                    description: "By appointment only",
                  },
                ],
                sameAs: [
                  "https://www.instagram.com/ownaesthetics",
                  "https://www.facebook.com/ownaesthetics",
                ],
              })}
            </script>
          </Helmet>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
            title = "Services"
            subtitle= "Reveal your best self with our expert-led, medical-grade treatments designed to rejuvenate, restore, and enhance your natural beauty."
            variant = ""
        />
        


        <Features
            title=""
            cards={featureCards}
            variant="" // Optional: for different styles
        />

        <SocialMedia />

        <Footer />


        </>
    );
}