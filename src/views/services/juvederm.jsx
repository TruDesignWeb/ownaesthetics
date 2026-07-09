import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
export default function Juvederm() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="JUVÉDERM® Injectable HA Dermal Fillers"
        subtitle="Enhance Your Natural Beauty with the JUVÉDERM® Collection of Injectable HA Dermal Fillers"
      />

      <section id="juvederm-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="[#juvederm-services_&]:[font-size:42px] [#juvederm-services_&]:[font-weight:600] [#juvederm-services_&]:[text-align:center] [#juvederm-services_&]:[margin-bottom:40px] [#juvederm-services_&]:[color:#2d2d2d] [#juvederm-services_&]:[letter-spacing:0.5px] [animation:juvederm-fadeUp_0.8s_ease_forwards] max-[600px]:[#juvederm-services_&]:[font-size:32px]">
            {/* Facial Contouring - JUVÉDERM® Collection of Injectable HA Dermal Fillers */}
          </div>
          <div className="juvederm-row [#juvederm-services_&]:[display:flex] [#juvederm-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="juvederm-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/fillerbefore+after.webp"
                alt="Juvederm Before & After"
              />
              <img
                src="/assets/images/fillerb4+after2.webp"
                alt="Juvederm before and After"
              />
              <img
                src="/assets/images/fillerb4+after3.webp"
                alt="Juvederm Before and After"
              />
            </div>
            <div className="juvederm-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:juvederm-fadeUp_0.8s_ease_forwards]">
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
                price="$750 - $875"
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
