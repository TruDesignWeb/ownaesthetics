import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
import "./juvederm.css";

export default function Juvederm() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title="JUVÉDERM® Injectable HA Dermal Fillers"
        subtitle="Enhance Your Natural Beauty with the JUVÉDERM® Collection of Injectable HA Dermal Fillers"
      />

      <section id="juvederm-services">
        <div className="juvederm-container">
          <h1 className="juvederm-title juvederm-animated">
            {/* Facial Contouring - JUVÉDERM® Collection of Injectable HA Dermal Fillers */}
          </h1>
          <div className="juvederm-row">
            <div className="juvederm-image-gallery">
              <img
                src="/assets/images/fillerbefore+after.jpeg"
                alt="Juvederm Before & After"
              />
              <img
                src="/assets/images/fillerb4+after2.jpeg"
                alt="Juvederm before and After"
              />
              <img
                src="/assets/images/fillerb4+after3.jpeg"
                alt="Juvederm Before and After"
              />
            </div>
            <div className="juvederm-services-text juvederm-service-boxes juvederm-animated">
              <p>
                JUVÉDERM® is a collection of hyaluronic acid (HA) dermal fillers
                designed to restore volume, smooth lines, and enhance facial
                contours. Common treatment areas include the cheeks, lips, and
                nasolabial folds.
                <br />
                <br />
                Hyaluronic acid is a naturally occurring substance in the skin
                that helps maintain hydration and volume. JUVÉDERM® fillers use
                a refined form of HA to create smooth, natural-looking results
                that enhance - rather than change - your features.
                <br />
                <br />
                Results are immediate and can last anywhere from 8 months to 2
                years, depending on the treatment area and product used.
              </p>
              <ServiceHighlightBox
                summary="Immediate, natural-looking volume restoration with hyaluronic acid fillers."
                treatmentAreas={["Cheeks", "Lips", "Nasolabial Folds"]}
                supportingNote="Results can last anywhere from 8 months to 2 years, depending on the treatment area and product used."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
