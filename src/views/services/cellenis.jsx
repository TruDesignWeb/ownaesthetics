import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
export default function Cellenis() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="Cellenis® Derma PRP/PRF"
        subtitle="Rejuvenate Your Skin with Cellenis® Derma PRP/PRF: A Natural Approach to Radiant, Youthful Skin"
      />

      <section id="cellenis-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="[#cellenis-services_&]:[font-size:42px] [#cellenis-services_&]:[font-weight:600] [#cellenis-services_&]:[text-align:center] [#cellenis-services_&]:[margin-bottom:40px] [#cellenis-services_&]:[color:#2d2d2d] [#cellenis-services_&]:[letter-spacing:0.5px] [animation:cellenis-fadeUp_0.8s_ease_forwards] max-[600px]:[#cellenis-services_&]:[font-size:32px]">
            {/* Cellenis® Derma PRP */}
          </div>
          <div className="cellenis-row [#cellenis-services_&]:[display:flex] [#cellenis-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="cellenis-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/prfbefore+after.webp"
                alt="Cellenis Before & After"
              />
            </div>
            <div className="cellenis-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:cellenis-fadeUp_0.8s_ease_forwards]">
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
              </p>
              <ServiceHighlightBox
                summary="A natural regenerative treatment that supports skin renewal using your own platelet-rich plasma."
                treatmentAreas={["Face", "Neck", "Hands", "Decollete"]}
                sessions="30 min - 1 hr."
                price="PRF: $600; PRF ezGEL: $800"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
