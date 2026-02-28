import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShowcaseSection from "../components/showcasesection";
import Banner3 from "../components/banner3";
import CustomCursor from "../components/customcursor";
import { Helmet } from "react-helmet-async";

export default function ServiceHub() {
  return (
    <>
          <Helmet>
        <title>Skincare Treatments | Own Aesthetics</title>
        <meta
          name="description"
          content="Explore advanced skincare treatments and personalised solutions at Own Aesthetics. From skin‑type quizzes to professional-grade products, discover what’s right for you."
        />
        <meta
          name="keywords"
          content="skincare treatments, alumiermd, skin type quiz, med spa, own aesthetics"
        />

        <meta property="og:title" content="Skincare Treatments at Own Aesthetics" />
        <meta
          property="og:description"
          content="Learn about our customised skincare services and partner brands designed for your unique goals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ownaesthetics.com/skincare"
        />
        <meta
          property="og:image"
          content="https://ownaesthetics.com/assets/clinic.jpg"
        />

        <link rel="canonical" href="https://ownaesthetics.com/skincare" />

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

      <Banner3
        image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
        title="Explore Our Advanced Treatments"
        subtitle="Personalized solutions designed for your unique goals"
      />

      {/* SECTION 1 */}
      <ShowcaseSection
        eyebrow="Skin Health"
        title="Skin Type Solutions"
        text="Discover your personalized skincare routine based on your unique Baumann Skin Type®. Take the quiz and unlock targeted treatments."
        buttonLabel="Take the Quiz"
        buttonLink="https://skintypesolutions.com/pages/skin-type-quiz?code=OWNAESTHETICS"
        imageSrc="/assets/images/images/stsimg.webp"
        reverse={false}
        backgroundColor="#f8f9fa"
      />

      {/* SECTION 2 */}
      <ShowcaseSection
        eyebrow="Rejuvenation"
        title="AlumierMD "
        text="AlumierMD is a professionally dispensed skincare brand with a rapidly expanding global network of partner clinics. Our mission is to empower you to feel confident and powerful in your own skin. We achieve this by pushing the boundaries of skincare science and combining clinically proven ingredients with advanced technologies that deliver transformative results. Our goal is to connect you to our global community of trusted skincare professionals and unlock your skin's potential with a 360° approach to skin health."
        buttonLabel="Shop Now"
        buttonLink="https://www.alumiermd.com?code=28FZHTV9"
        imageSrc="assets\images\images\wetransfer_photos_2025-04-09_1731\PHOTOS\HP 1 AlumierMD Pigmentation.jpg"
        reverse={true}
        backgroundColor="#ffffff"
      />

      

      <Footer />
    </>
  );
}