// File: src/pages/Home.jsx
import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Features from "../components/features";
import Stats from "../components/stats";
import Programs from "../components/programs";
import Membership from "../components/membership-component";
import Outcomes from "../components/outcomes";
import Journey from "../components/journey";
import Footer from "../components/footer";
import CustomCursor from "../components/customcursor";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import "../styles/animations.css";
import InfiniteScroll from "../components/infinitescroll";
import TiltedCard from "../components/tiltedcard";
import FluidGlass from "../components/fluidglass";
import Register from "../components/register";
import Login from "../components/login";
import ShowcaseSection from "../components/showcasesection";
import TestimonialShowcase from "../components/testimonial-showcase";
import SocialMedia from "../components/social-media";
import RSVPPopup from "../components/rsvppopup";
import { Link } from "react-router-dom";
import Seo from "../components/seo";

const featureCards = [
  {
    imageSrc: "/assets/images/images/istock-salt1.jpg",
    altText: "The SaltFacial®",
    captionText: "The SaltFacial®",
    containerHeight: "350px",
    containerWidth: "300px",
    imageHeight: "400px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.1,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text">The SaltFacial®</p>,
    backgroundColor: "rgba(0,0,0,0)",
    link: "/services/saltfacial",
  },
  {
    imageSrc: "/assets/images/images/aquafirme4.jpg",
    altText: "AquaFirmeXS",
    captionText: "AquaFirmeXS",
    containerHeight: "350px",
    containerWidth: "300px",
    imageHeight: "400px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.1,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text">AquaFirmeXS</p>,
    backgroundColor: "rgba(0,0,0,0)",
    link: "services/aquafirme",
  },
  {
    imageSrc: "/assets/images/images/nouva4.jpg",
    altText: "NOUVADerm™ Laser Treatment",
    captionText: "NOUVADerm™ Laser Treatment",
    containerHeight: "350px",
    containerWidth: "300px",
    imageHeight: "400px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.1,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: (
      <p className="tilted-card-demo-text">NOUVADerm™ Laser Treatment</p>
    ),
    backgroundColor: "rgba(0,0,0,0)",
    link: "services/nouvaderm",
  },
];

const testimonials = [
  {
    text: "I’ve been seeing Beth for four years now, and she’s the best of the best. She does my Botox as well as my lip filler, and I’ve always been so impressed with the experience. She’s professional, gentle, and so talented.",
    author: "Allie",
    date: "",
  },
  {
    text: "If you really want to know about a surgeon, ask an OR nurse. I am an RN and have worked in the OR for 25+ years. I've worked with countless surgeons and, when it came time for me to need the services of one for reconstructive and plastic surgery, I chose Dr. Folkers. He is friendly, compassionate, took all the time necessary to explain procedures and answer all my questions, and did an excellent job on my surgery. I am confident I made the right choice and would recommend him to anyone.",
    author: "Anonymous",
    date: "",
  },
];

const homepageFaqs = [
  {
    question: "What services do you offer at Own Aesthetics?",
    answers: [
      "Own Aesthetics offers consultations, facials, chemical peels, SaltFacial Skin Renewal Therapy, SkinPen microneedling, AquaFirmeXS, NOUVADerm laser treatment, BOTOX Cosmetic, Dysport, dermal fillers, PRF, PRF ezGEL, Sculptra, Kybella, sclerotherapy, and hair wellness treatments.",
      "Current listed pricing includes consultations at $100, chemical peels at $150, SaltFacial at $300, SkinPen microneedling at $350, and hair wellness starting at $3000.",
    ],
  },
  {
    question: "How much does Botox cost at Own Aesthetics?",
    answers: [
      "BOTOX Cosmetic is listed at $14 per unit. Dysport is also listed at $14 per unit.",
      "Your total cost depends on how many units are used for your treatment area.",
    ],
  },
  {
    question: "What is the price range for facials and skin treatments?",
    answers: [
      "Customized facials are listed at $125 to $175, chemical peels are $150, SaltFacial Skin Renewal Therapy is $300, and AquaFirmeXS ranges from $200 to $400.",
      "SkinPen microneedling is listed at $350 and NOUVADerm Skin Resurfacing Laser is listed at $750.",
    ],
  },
  {
    question: "How long do appointments usually take?",
    answers: [
      "A LifeViz Infinity Pro Consultation takes about 50 to 60 minutes. Anti-wrinkle injections are typically about 30 minutes.",
      "SaltFacial and customized facial appointments are generally about 45 to 60 minutes, depending on the treatment plan.",
    ],
  },
  {
    question: "Do you serve my area if I live near West Des Moines?",
    answers: [
      "Own Aesthetics is based in West Des Moines, Iowa and serves West Des Moines, Des Moines, Urbandale, Grimes, Johnston, Waukee, Polk County, Dallas County, Warren County, and Madison County.",
      "If you are in the western Des Moines metro, you are likely inside the listed service area.",
    ],
  },
  {
    question: "What makes Own Aesthetics different from other med spas?",
    answers: [
      "The practice focuses on skin health, education, and individualized treatment plans instead of trend-driven treatment choices.",
      "Care is provided under the medical direction of Dr. Bryan Folkers, and the team includes a registered nurse, a licensed esthetician, and advanced laser-trained staff.",
    ],
  },
  {
    question: "When are you open for appointments?",
    answers: [
      "Own Aesthetics is closed Monday and Sunday. Hours are Tuesday 10 AM to 5 PM, Wednesday 10 AM to 7 PM, Thursday 10 AM to 5 PM, and Friday 9 AM to 5 PM.",
      "Saturday appointments are available by appointment only.",
    ],
  },
  {
    question: "Where is Own Aesthetics located?",
    answers: [
      "Own Aesthetics is located at 7601 Office Plaza Dr N Suite 115, West Des Moines, IA 50266.",
      "The office phone number is 515-672-1860.",
    ],
  },
  {
    question: "Why would I book a consultation first?",
    answers: [
      "The consultation uses LifeViz Infinity Pro 3D imaging and skin analysis to build a treatment plan around your actual concerns.",
      "It is listed at $100 and helps compare options before you commit to treatments like injectables, laser, or skin renewal services.",
    ],
  },
  {
    question:
      "How do I know which treatment is right for acne, redness, wrinkles, or dry skin?",
    answers: [
      "Own Aesthetics says it works with acne, rosacea, fine lines, wrinkles, age spots, dry skin, and general cosmetic concerns.",
      "A consultation is the most direct way to match those concerns to services like facials, peels, microneedling, injectables, or laser treatment.",
    ],
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DaySpa", "MedicalBusiness"],
      "@id": "https://ownaesthetics.com/#business",
      name: "Own Aesthetics",
      url: "https://ownaesthetics.com",
      telephone: "+1-515-672-1860",
      priceRange: "$$$",
      description:
        "Own Aesthetics is a medical spa in West Des Moines, Iowa focused on skin health, patient education, and individualized aesthetic treatment plans.",
      founder: {
        "@type": "Person",
        name: "Dr. Bryan Folkers",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "7601 Office Plaza Dr N Suite 115",
        addressLocality: "West Des Moines",
        addressRegion: "IA",
        postalCode: "50266",
        addressCountry: "US",
      },
      areaServed: [
        "West Des Moines",
        "Polk County",
        "Des Moines",
        "Urbandale",
        "Grimes",
        "Johnston",
        "Waukee",
        "Dallas County",
        "Warren County",
        "Madison County",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "9",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Tuesday",
            "https://schema.org/Thursday",
          ],
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Wednesday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Friday",
          opens: "09:00",
          closes: "17:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aesthetic Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-consultation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-saltfacial",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-microneedling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-aquafirmexs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-exosome",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@id": "https://ownaesthetics.com/#service-peels" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-facials",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-nouvaderm",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@id": "https://ownaesthetics.com/#service-botox" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-dysport",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-fillers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@id": "https://ownaesthetics.com/#service-prf" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-prf-ezgel",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-sculptra",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-kybella",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-sclerotherapy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@id": "https://ownaesthetics.com/#service-hair-restoration",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://ownaesthetics.com/#faq",
      mainEntity: homepageFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answers.join(" "),
        },
      })),
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-consultation",
      name: "LifeViz Infinity Pro Consultation",
      serviceType: "Aesthetic consultation",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      areaServed: "West Des Moines and surrounding areas",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "100",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-saltfacial",
      name: "SaltFacial Skin Renewal Therapy",
      serviceType: "Facial treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "300",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-microneedling",
      name: "Skin Pen Microneedling",
      serviceType: "Microneedling treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "350",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-aquafirmexs",
      name: "AquaFirmeXS",
      serviceType: "Facial treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "200",
          maxPrice: "400",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-exosome",
      name: "Exosome Therapy",
      serviceType: "Skin treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "200",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-peels",
      name: "Chemical Peels",
      serviceType: "Chemical peel treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "150",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-facials",
      name: "Customized Facials",
      serviceType: "Facial treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "125",
          maxPrice: "175",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-nouvaderm",
      name: "NOUVADerm Skin Resurfacing Laser",
      serviceType: "Laser skin resurfacing",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "750",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-botox",
      name: "BOTOX Cosmetic",
      serviceType: "Neuromodulator injectable",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "14",
          unitText: "unit",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-dysport",
      name: "Dysport",
      serviceType: "Neuromodulator injectable",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "14",
          unitText: "unit",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-fillers",
      name: "Derma Fillers",
      serviceType: "Dermal filler treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "750",
          maxPrice: "875",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-prf",
      name: "PRF",
      serviceType: "Platelet-rich fibrin treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "600",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-prf-ezgel",
      name: "PRF ezGEL",
      serviceType: "Platelet-rich fibrin gel treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "800",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-sculptra",
      name: "Sculptra",
      serviceType: "Biostimulatory injectable treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "600",
          unitText: "vial",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-kybella",
      name: "Kybella",
      serviceType: "Injectable fat reduction treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "750",
          unitText: "vial",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-sclerotherapy",
      name: "Sclerotherapy",
      serviceType: "Vein treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "400",
          maxPrice: "800",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://ownaesthetics.com/#service-hair-restoration",
      name: "Hair Wellness and Restoration",
      serviceType: "Hair restoration treatment",
      provider: { "@id": "https://ownaesthetics.com/#business" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "3000",
        },
        description: "Pricing starts at $3000 and up.",
      },
    },
  ],
};

export default function Home() {
  useRevealOnScroll();
  return (
    <>
      <Seo
        title="Med Spa in West Des Moines, IA | Own Aesthetics"
        description="Own Aesthetics is a medical spa in West Des Moines offering injectables, facials, laser resurfacing, skincare analysis, and personalized treatment planning."
        path="/"
        schema={homepageSchema}
      />
      <CustomCursor />
      <Navbar />
      <RSVPPopup />
      <Banner />

      <div className="content-wrapper" id="content">
        {/* luh comment so i can push sm  */}
        <Features
          title="Featured Services"
          cards={featureCards}
          // Optional: for different styles variant=""
        />
        <ShowcaseSection
          reverse={true}
          eyebrow=""
          buttonLink="about"
          title="Our Vision"
          text="Own Aesthetics is a medical spa born from a desire to serve those who want to Own their Aesthetic. We believe in enhancing your natural evolution, so you feel like your best self through every phase of life. With knowledgeable expertise, we offer the best and latest options for skin health, sorting trends from reliable solutions."
          buttonLabel="Learn More"
          imageSrc="/assets/images/christmas-staff.jpeg"
          imageAlt="MRI imaging suite"
          backgroundColor={"#133550"}
        />

        <ShowcaseSection
          eyebrow="Facial Treatments"
          title="NEW: The SaltFacial®"
          buttonLink="services/saltfacial"
          text="Experience the ultimate skin rejuvenation with the SaltFacial®. This exfoliating treatment combines the power of sea salt,
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

        <section className="homepage-faq" aria-labelledby="homepage-faq-title">
          <div className="homepage-faq__inner">
            <div className="homepage-faq__heading">
              <span className="homepage-faq__eyebrow">FAQ</span>
              <h2 id="homepage-faq-title" className="homepage-faq__title">
                Questions People Ask Before Booking
              </h2>
              <p className="homepage-faq__intro">
                Answers about pricing, timing, location, and what to expect at
                Own Aesthetics in West Des Moines.
              </p>
              <div className="homepage-faq__links">
                <Link className="homepage-faq__link-pill" to="/services/injectables">
                  Injectables
                </Link>
                <Link className="homepage-faq__link-pill" to="/services/facials">
                  Facials
                </Link>
                <Link
                  className="homepage-faq__link-pill"
                  to="/services/nouvaderm-laser-resurfacing"
                >
                  NOUVADerm Laser Resurfacing
                </Link>
                <Link
                  className="homepage-faq__link-pill"
                  to="/services/skincare-analysis"
                >
                  Skincare Analysis
                </Link>
                <Link className="homepage-faq__link-pill" to="/locations/des-moines">
                  Des Moines
                </Link>
                <Link
                  className="homepage-faq__link-pill"
                  to="/locations/west-des-moines"
                >
                  West Des Moines
                </Link>
                <Link className="homepage-faq__link-pill" to="/locations/waukee">
                  Waukee
                </Link>
              </div>
            </div>

            <div className="homepage-faq__grid">
              {homepageFaqs.map((item) => (
                <article className="homepage-faq__card" key={item.question}>
                  <h3 className="homepage-faq__question">
                    <strong>{item.question}</strong>
                  </h3>
                  <div className="homepage-faq__answer">
                    {item.answers.map((answer) => (
                      <p key={answer}>{answer}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
