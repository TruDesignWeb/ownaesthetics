// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';

import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './socials.css';
import { Helmet } from 'react-helmet-async';

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
    <Helmet>
        <title>Socials | Own Aesthetics</title>
        <meta
          name="description"
          content="Connect with Own Aesthetics on Facebook and Instagram for the latest updates, specials, and skincare tips."
        />
        <meta
          name="keywords"
          content="own aesthetics social media, facebook, instagram, follow us, med spa updates"
        />

        <meta property="og:title" content="Own Aesthetics on Social Media" />
        <meta
          property="og:description"
          content="Follow us on Facebook and Instagram to stay in the loop with news and promotions from Own Aesthetics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ownaesthetics.com/socials" />
        <meta
          property="og:image"
          content="https://ownaesthetics.com/assets/clinic.jpg"
        />

        <link rel="canonical" href="https://ownaesthetics.com/socials" />

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
