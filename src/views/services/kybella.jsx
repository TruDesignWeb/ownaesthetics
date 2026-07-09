import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner3 from "../../components/banner3";
import CustomCursor from "../../components/customcursor";
import ServiceHighlightBox from "../../components/servicehighlightbox";
export default function Kybella() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title="Kybella®"
        subtitle="Sculpt Your Profile with Kybella® - The Only FDA-Approved Injectable for Double Chin Reduction"
      />

      <section id="kybella-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
        <div className="">
          <div className="[#kybella-services_&]:[font-size:42px] [#kybella-services_&]:[font-weight:600] [#kybella-services_&]:[text-align:center] [#kybella-services_&]:[margin-bottom:40px] [#kybella-services_&]:[color:#2d2d2d] [#kybella-services_&]:[letter-spacing:0.5px] [animation:kybella-fadeUp_0.8s_ease_forwards] max-[600px]:[#kybella-services_&]:[font-size:32px]">{/* Kybella® */}</div>
          <div className="kybella-row [#kybella-services_&]:[display:flex] [#kybella-services_&]:[justify-content:center] max-[992px]:[flex-direction:column]">
            <div className="kybella-image-gallery [display:flex] [flex-direction:column] [gap:20px] [padding:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
              <img
                src="/assets/images/kybellabefore+after.webp"
                alt="Kybella Before & After"
              />
            </div>
            <div className="kybella-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:kybella-fadeUp_0.8s_ease_forwards]">
              <p>
                KYBELLA® is the only FDA-approved injectable treatment for
                adults that destroys fat cells to gradually improve the
                appearance and profile of moderate to severe fat below the chin
                (submental fat), also called "double chin."
                <br />
                <br />
                The deoxycholic acid in Kybella disrupts the fat cell&apos;s
                membrane, causing them to be broken down and naturally
                eliminated by the body. This gradually reduces submental fat,
                leading to a more defined chin line and a smoother, more
                sculpted profile. The results are generally permanent as the
                destroyed fat cells do not regenerate.
                <br />
                <br />
                Multiple treatments may be needed to achieve the desired
                results, with some patients seeing noticeable improvements after
                just a few sessions.
              </p>
              <ServiceHighlightBox
                summary="A targeted injectable treatment designed to refine the profile under the chin."
                treatmentAreas={["Neck"]}
                sessions="45 min. - 1hr."
                price="$750 per vial"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
