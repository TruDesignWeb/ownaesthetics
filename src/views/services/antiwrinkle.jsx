import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
export default function AntiWrinkle() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="Anti-Wrinkle Injections"
        subtitle="Smooth and Rejuvenate Your Skin with Our Expert Anti-Wrinkle Injections"
      />

      <section id="antiwrinkle-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="antiwrinkle-main-content [#antiwrinkle-services_&]:[display:flex] [#antiwrinkle-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="antiwrinkle-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/antiwrinklebefore+after.webp"
                alt="Antiwrinkle Before & After"
              />
              <img
                src="/assets/images/antiwrinklebefore+after2.webp"
                alt="Antiwrinkle before and After"
              />
              <img
                src="/assets/images/antiwrinklebefore+after3.webp"
                alt="Antiwrinkle Before and After"
              />
            </div>
            <div className="antiwrinkle-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:antiwrinkle-fadeUp_0.8s_ease_forwards]">
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
                price="BOTOX Cosmetic and Dysport: $14 per unit"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
