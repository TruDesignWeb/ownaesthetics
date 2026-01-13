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
import Register from '../components/register';
import Login from '../components/login';
import ShowcaseSection from '../components/showcasesection';


const featureCards = [
    {
      imageSrc: '/assets/images/images/woman-doing-self-care-treatment-indoors.jpg',
      altText: 'Injectables',
      captionText: 'Injectables',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Injectables</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: '/Podcasts',
    },{
      imageSrc: '/assets/images/images/istock-skinpen.jpg',
      altText: 'Sclerotherapy',
      captionText: 'Sclerotherapy',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Sclerotherapy</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'Podcasts',
      },
    {
      imageSrc: '/assets/images/images/close-up-woman-getting-lip-filler-with-injection.jpg',
      altText: 'Microneedling',
      captionText: 'Microneedling',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Microneedling</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'Podcasts',
      }];

export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner />



      <div className="content-wrapper">
        
        <Features
          title="Featured Services"
          cards={featureCards}
          variant="" // Optional: for different styles
        />
        
        <ShowcaseSection 
  eyebrow="Advanced Imaging"
  title="Precision-Focused Diagnostic Care"
  text="Innovative Radiology combines cutting-edge imaging technology with board-certified specialists to deliver accurate, timely diagnoses."
  buttonLabel="Learn More"
  imageSrc="/assets/images/images/almost-naked.jpg"
  imageAlt="MRI imaging suite"
  backgroundColor={"#fffcd8"}
      />

        

        <Journey
            title="Start Your Path to Wellness"
            subtitle="Personalized healthcare solutions designed to help you thrive."
            ctaText="Get Started Today"
            variant="light-theme"
            ctaLink = "/Podcasts"
            features={[
              {
                title: 'Advanced Testing',
                description: 'Gain insights through our comprehensive diagnostics.',
                className: 'advanced-testing',
                link: 'Podcasts',
              },
              {
                title: 'Tailored Programs',
                description: 'Receive custom plans based on your unique biology.',
                className: 'tailored-programs',
                link: 'Podcasts',
              },
              {
                title: 'Cutting-Edge Therapies',
                description: 'Access the latest regenerative medicine solutions.',
                className: 'cutting-edge-therapies',
                link: 'Podcasts',
              },
            ]}
        />

        <Membership />

        


        <Stats
          title="Our Impact"
          stats={[
            { target: 120, label: 'Employees' },
            { target: 99, label: '% Recovery Rate' },
            { target: 3000, label: 'Patients Helped' },
            { target: 20, label: 'Years in Operation' }
          ]}
          variant="dark-theme"
        />
        
        

        <Outcomes
          variant = "about"
          label="FEATURED BENEFITS"
          title="What You’ll Gain"
          introText="Our holistic approach promotes wellness from within, leading to lasting benefits such as:"
          outcomes={[
            {
              icon: '💪',
              title: 'Stronger Immunity',
              description: 'Fortified defenses against illness and faster recovery times.',
            },
            {
              icon: '🧘',
              title: 'Mental Clarity',
              description: 'Reduced stress and improved focus and decision-making.',
            },
            {
              icon: '🍽️',
              title: 'Better Digestion',
              description: 'Healthier gut and improved nutrient absorption.',
            },
            {
              icon: '💪',
              title: 'Stronger Immunity',
              description: 'Fortified defenses against illness and faster recovery times.',
            },
            {
              icon: '🧘',
              title: 'Mental Clarity',
              description: 'Reduced stress and improved focus and decision-making.',
            },
            {
              icon: '🍽️',
              title: 'Better Digestion',
              description: 'Healthier gut and improved nutrient absorption.',
            },
            {
              icon: '💪',
              title: 'Stronger Immunity',
              description: 'Fortified defenses against illness and faster recovery times.',
            },
            {
              icon: '🧘',
              title: 'Mental Clarity',
              description: 'Reduced stress and improved focus and decision-making.',
            },
            {
              icon: '🍽️',
              title: 'Better Digestion',
              description: 'Healthier gut and improved nutrient absorption.',
            },
          ]}
        />

        {/* <Register />
        <Login /> */}


        {/* <InfiniteScroll
          items={[
          { content: "Truman" },
          { content: <p>Vasi</p> },
          { content: "Vasi" },
          { content: <p>Truman</p> }
          ]}
          isTilted={true}
          tiltDirection='right'
          autoplay={true}
          autoplaySpeed={0.2}
          autoplayDirection="down"
          pauseOnHover={true}
        />       */}
        
      </div>

      <Footer />
    </>
  );
}
