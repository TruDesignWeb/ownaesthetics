import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
export default function Skinpen() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="SkinPen® Microneedling"
        subtitle="Beautiful skin - naturally!"
      />

      <section id="skinpen-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="[#skinpen-services_&]:[font-size:42px] [#skinpen-services_&]:[font-weight:600] [#skinpen-services_&]:[text-align:center] [#skinpen-services_&]:[margin-bottom:40px] [#skinpen-services_&]:[color:#2d2d2d] [#skinpen-services_&]:[letter-spacing:0.5px] [animation:skinpen-fadeUp_0.8s_ease_forwards] max-[600px]:[#skinpen-services_&]:[font-size:32px]">
            {/* SkinPen® Microneedling */}
          </div>
          <div className="skinpen-row [#skinpen-services_&]:[display:flex] [#skinpen-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="skinpen-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/skinpenbefore+after.webp"
                alt="SkinPen Before & After"
              />
              <img
                src="/assets/images/SkinPen Before %26 after 1.webp"
                alt="SkinPen before and After"
              />
              <img
                src="/assets/images/Procedure-036_maxWidth_1200_maxHeight_1200_ppi_72.webp"
                alt="SkinPen before and After"
              />
            </div>
            <div className="skinpen-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:skinpen-fadeUp_0.8s_ease_forwards]">
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
                price="$350"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
