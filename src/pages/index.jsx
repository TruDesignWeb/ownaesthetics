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
import TestimonialShowcase from '../components/testimonial-showcase';
import SocialMedia from '../components/social-media';


const featureCards = [
    {
      imageSrc: '/assets/images/images/istock-salt1.jpg',
      altText: 'Salt Facial',
      captionText: 'Salt Facial',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Salt Facial</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: '/services/saltfacial',
    },{
      imageSrc: '/assets/images/images/aquafirme4.jpg',
      altText: 'AquaFiirmeXS',
      captionText: 'AquaFiirmeXS',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">AquaFirmeXS</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'services/aquafirme',
      },
    {
      imageSrc: '/assets/images/images/nouva4.jpg',
      altText: 'NOUVADerm™ Laser Treatment',
      captionText: 'NOUVADerm™ Laser Treatment',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '400px',
      imageWidth: '350px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">NOUVADerm™ Laser Treatment</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      link: 'services/nouvaderm',
      }];


      const testimonials = [
  {
    text: "I’ve been seeing Beth for four years now, and she’s the best of the best. She does my Botox as well as my lip filler, and I’ve always been so impressed with the experience. She’s professional, gentle, and so talented.",
    author: "Allie",
    date: "Aug 7, 2025",
  },
  {
    text:
      "If you really want to know about a surgeon, ask an OR nurse. I am an RN and have worked in the OR for 25+ years. I've worked with countless surgeons and, when it came time for me to need the services of one for reconstructive and plastic surgery, I chose Dr. Folkers. He is friendly, compassionate, took all the time necessary to explain procedures and answer all my questions, and did an excellent job on my surgery. I am confident I made the right choice and would recommend him to anyone.",
    author: "Anonymous",
    date: "Jul 22, 2017",
  },
];
      

export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner />


    <div className="content-wrapper" id="content">
        
                <Features
                  title="Featured Services"
                  cards={featureCards}
                   // Optional: for different styles variant=""
                />
                <ShowcaseSection 
                reverse={true}
          eyebrow=""
          buttonLink="services/saltfacials"
          title="Our Vision"
          text="Own Aesthetics is a medical spa born from a desire to serve those who want to Own their Aesthetic. We desire to serve those who embrace life’s journey while enhancing that experience. With knowledgeable expertise, we offer the best and latest options for skin health, sorting trends from reliable solutions."
          buttonLabel="Learn More"
          imageSrc="/assets/images/christmas-staff.jpeg"
          imageAlt="MRI imaging suite"
          backgroundColor={"#133550"}
              />

                <ShowcaseSection 
          eyebrow="Facial Treatments"
          title="NEW Salt Facials"
          text="Experience the ultimate skin rejuvenation with Salt Facials. This exfoliating treatment combines the power of sea salt,
                skincare, and technology to detoxify, hydrate, and renew your skin, leaving you with a smooth, glowing, and refreshed complexion."
          buttonLabel="Learn More"
          imageSrc="/assets/images/images/istock-salt1.jpg"
          imageAlt="MRI imaging suite"
          backgroundColor={"#9B5B3E"}
              />

        <TestimonialShowcase
          testimonials={testimonials}
          initialCount={2}
          buttonLabel="View More Testimonials"
          />

                <SocialMedia />
        </div>
        {/* <Journey
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
        /> */}


        {/* <Membership /> */}

        


        {/* <Stats
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
        /> */}

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
        
      

      <Footer />
    </>
  );
}
