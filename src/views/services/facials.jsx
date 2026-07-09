import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
import Link from "next/link";
export default function Facials() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="Customized Facials"
        subtitle="Experience the Ultimate in Skincare with Our Customized Facials"
      />

      <section id="facials-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="[#facials-services_&]:[font-size:42px] [#facials-services_&]:[font-weight:600] [#facials-services_&]:[text-align:center] [#facials-services_&]:[margin-bottom:40px] [#facials-services_&]:[color:#2d2d2d] [#facials-services_&]:[letter-spacing:0.5px] [animation:facials-fadeUp_0.8s_ease_forwards] max-[600px]:[#facials-services_&]:[font-size:32px]">
            {/* Customized Facials */}
          </div>
          <div className="facials-row [#facials-services_&]:[display:flex] [#facials-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="facials-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/facialbefore+after.webp"
                alt="Facial Before & After"
              />
            </div>
            <div className="facials-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:facials-fadeUp_0.8s_ease_forwards]">
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
                price="$125 - $175"
              />
              <p>
                Want a broader breakdown of who facials are for, what they include, and how they compare with other skin treatments?{" "}
                <Link href="/services/facials-guide">Read our facials guide.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
