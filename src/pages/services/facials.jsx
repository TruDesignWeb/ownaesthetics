import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
import "./facials.css";

export default function Facials() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title="Customized Facials"
        subtitle="Experience the Ultimate in Skincare with Our Customized Facials"
      />

      <section id="facials-services">
        <div className="facials-container">
          <h1 className="facials-title facials-animated">
            {/* Customized Facials */}
          </h1>
          <div className="facials-row">
            <div className="facials-image-gallery">
              <img
                src="/assets/images/facialbefore+after.jpeg"
                alt="Facial Before & After"
              />
            </div>
            <div className="facials-services-text facials-service-boxes facials-animated">
              <p>
                Our customized facials are designed to support your skin health
                with a personalized, results-driven approach. Each treatment is
                tailored to your specific concerns, ensuring a thoughtful and
                effective experience.
                <br />
                <br />
                Your appointment begins with a consultation to assess your skin
                and understand your goals. From there, we select
                professional-grade products and techniques to create a treatment
                suited to your needs.
                <br />
                <br />
                Each facial includes a deep cleanse, exfoliation, mask,
                massage, targeted serums, moisturizer, and sun protection -
                working together to improve tone, texture, and overall skin
                health.
                <br />
                <br />
                For optimal results, facials are recommended every six weeks to
                monitor progress and maintain healthy, balanced skin.
              </p>
              <ServiceHighlightBox
                summary="Personalized, results-driven facials tailored to your skin goals."
                treatmentAreas={["Face", "Neck", "Decollete", "Back"]}
                sessions="60 min. or 90 min."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
