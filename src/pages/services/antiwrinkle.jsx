import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
import "./antiwrinkle.css";

export default function AntiWrinkle() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title="Anti-Wrinkle Injections"
        subtitle="Smooth and Rejuvenate Your Skin with Our Expert Anti-Wrinkle Injections"
      />

      <section id="antiwrinkle-services">
        <div className="antiwrinkle-content-wrapper">
          <div className="antiwrinkle-main-content">
            <div className="antiwrinkle-image-gallery">
              <img
                src="/assets/images/antiwrinklebefore+after.jpeg"
                alt="Antiwrinkle Before & After"
              />
              <img
                src="/assets/images/antiwrinklebefore+after2.jpeg"
                alt="Antiwrinkle before and After"
              />
              <img
                src="/assets/images/antiwrinklebefore+after3.jpeg"
                alt="Antiwrinkle Before and After"
              />
            </div>
            <div className="antiwrinkle-services-text antiwrinkle-service-boxes antiwrinkle-animated">
              <p>
                BOTOX ® Cosmetic, Dysport, and other neurotoxins are
                prescription medicines that are injected into muscles and used
                to temporarily soften and improve the look of moderate to severe
                forehead lines, crow&apos;s-feet lines, frown lines between the
                eyebrows, and vertical bands connecting the jaw and neck
                (platysma bands) in adults.
                <br />
                <br />
                Treatment results last an average of 3-5 months. It is best to
                schedule maintenance treatments when you see more movement in
                your expression lines.
              </p>
              <ServiceHighlightBox
                summary="Personalized neurotoxin treatments designed for refreshed, natural-looking results."
                treatmentAreas={["Upper Face", "Lower Face", "Neck"]}
                sessions="30 minutes"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
