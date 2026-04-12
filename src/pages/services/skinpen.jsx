import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
import "./skinpen.css";

export default function Skinpen() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title="SkinPen® Microneedling"
        subtitle="Beautiful skin - naturally!"
      />

      <section id="skinpen-services">
        <div className="skinpen-container">
          <h1 className="skinpen-title skinpen-animated">
            {/* SkinPen® Microneedling */}
          </h1>
          <div className="skinpen-row">
            <div className="skinpen-image-gallery">
              <img
                src="/assets/images/skinpenbefore+after.jpeg"
                alt="SkinPen Before & After"
              />
              <img
                src="/assets/images/SkinPen Before & after 1.jpg"
                alt="SkinPen before and After"
              />
              <img
                src="/assets/images/Procedure-036_maxWidth_1200_maxHeight_1200_ppi_72.png"
                alt="SkinPen before and After"
              />
            </div>
            <div className="skinpen-services-text skinpen-service-boxes skinpen-animated">
              <p>
                Microneedling, also known as collagen induction therapy, is a
                minimally invasive procedure that uses tiny needles to create
                controlled punctures in the skin, stimulating the body&apos;s natural
                healing process to produce more collagen and elastin. This helps
                reduce wrinkles and fine lines, improve skin tone and texture,
                treat acne scars, decrease hyperpigmentation, and improve the
                skin&apos;s overall appearance.
                <br />
                <br />
                With little to no downtime, microneedling is a safe and
                effective option for achieving smoother, more refined skin. A
                series of 1 to 3 treatments is recommended for overall skin
                improvement, while 3 to 6 sessions may be needed to address
                acne scarring. Ask about our packages! Results can be further
                enhanced by adding platelet-rich plasma (PRP) or exosomes to
                support healing and optimize outcomes.
              </p>
              <ServiceHighlightBox
                summary="Add platelet-rich plasma (PRP) or exosomes to support healing and optimize outcomes."
                treatmentAreas={["Face", "Neck", "Chest"]}
                sessions="1 hour"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
