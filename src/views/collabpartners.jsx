import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShowcaseSection from "../components/showcasesection";
import Banner3 from "../components/banner3";
import CustomCursor from "../components/customcursor";
import "./collabpartners.css";

export default function ServiceHub() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/skincarebannerimg.webp"
        title="Explore Our Advanced Treatments"
        subtitle="Personalized solutions designed for your unique goals"
        className="collabpartners-banner"
        backgroundPosition="center 18%"
      />

      {/* SECTION 1 */}
      <ShowcaseSection
        eyebrow="Rejuvenation"
        title="AlumierMD "
        text="AlumierMD is a professionally dispensed skincare brand with a rapidly expanding global network of partner clinics. Our mission is to empower you to feel confident and powerful in your own skin. We achieve this by pushing the boundaries of skincare science and combining clinically proven ingredients with advanced technologies that deliver transformative results. Our goal is to connect you to our global community of trusted skincare professionals and unlock your skin's potential with a 360Â° approach to skin health."
        buttonLabel="Shop Now"
        buttonLink="https://www.alumiermd.com?code=28FZHTV9"
        imageSrc="assets\images\images\wetransfer_photos_2025-04-09_1731\PHOTOS\HP 1 AlumierMD Pigmentation.webp"
        reverse={true}
        backgroundColor="#ffffff"
      />

      {/* SECTION 2 */}
      <ShowcaseSection
        eyebrow="Skin Health"
        title="Skin Type Solutions"
        text="Discover your personalized skincare routine based on your unique Baumann Skin TypeÂ®. Take the quiz and unlock targeted treatments."
        buttonLabel="Take the Quiz"
        buttonLink="https://skintypesolutions.com/pages/skin-type-quiz?code=OWNAESTHETICS"
        imageSrc="/assets/images/images/stsimg.webp"
        reverse={false}
        backgroundColor="#f8f9fa"
      />

      <Footer />
    </>
  );
}
