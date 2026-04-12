import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import "./cellenis.css";

export default function Cellenis() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title="Cellenis® Derma PRP/PRF"
        subtitle="Rejuvenate Your Skin with Cellenis® Derma PRP/PRF: A Natural Approach to Radiant, Youthful Skin"
      />

      <section id="cellenis-services">
        <div className="cellenis-container">
          <h1 className="cellenis-title cellenis-animated">
            {/* Cellenis® Derma PRP */}
          </h1>
          <div className="cellenis-row">
            <div className="cellenis-image-gallery">
              <img
                src="/assets/images/prfbefore+after.jpeg"
                alt="Cellenis Before & After"
              />
            </div>
            <div className="cellenis-services-text cellenis-service-boxes cellenis-animated">
              <p>
                Cellenis® Derma PRP is a skin rejuvenation treatment that uses
                Platelet-Rich Plasma (PRP) derived from the patient&apos;s blood to
                stimulate collagen production and improve skin texture. The
                process begins with a small blood draw, which is then spun in a
                centrifuge to separate the PRP. The concentrated plasma contains
                abundant growth factors, which are injected into targeted areas
                to promote healing and regeneration. Cellenis® Derma PRP can
                treat areas such as the face, neck, hands, and décolletage,
                helping to reduce fine lines, wrinkles, and scars. Results can
                last up to 18 months.
                <br />
                <br />
                <strong>Treatment Area:</strong> Upper Face, Lower Face
                <br />
                <br />
                <strong>Sessions:</strong> 30 min - 1 hr.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
