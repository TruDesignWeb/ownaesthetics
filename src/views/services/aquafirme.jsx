import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function Aquafirme() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="AquaFirmeXS"
                subtitle="Experience the Ultimate Skin Rejuvenation with AquaFirmeXS: A Revolutionary Treatment for Radiant, Youthful Skin"
            />

            <section id="aquafirme-services" className="svc-section [background:#f8f9fa] [padding:90px_0_110px_0]">
                <div className="">
                    <div className="[#aquafirme-services_&]:[text-align:center] [#aquafirme-services_&]:[font-size:42px] [#aquafirme-services_&]:[font-weight:600] [#aquafirme-services_&]:[margin-bottom:60px] [#aquafirme-services_&]:[color:#2d2d2d] [#aquafirme-services_&]:[letter-spacing:0.5px] [animation:aquafirme-fadeUp_0.8s_ease_forwards] max-[600px]:[#aquafirme-services_&]:[font-size:32px]">
                        {/* AquaFirmeXS */}
                    </div>

                    <div className="aquafirme-main-content [display:flex] [gap:50px] [align-items:center] [justify-content:center] [flex-wrap:wrap] max-[992px]:[flex-direction:column]">
                        <div className="aquafirme-image-gallery [display:flex] [flex-direction:column] [gap:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
                            <img src="/assets/images/aquafirme1.webp" alt="AquaFirmeXS Before & After 1"/>
                            <img src="/assets/images/aquafirme2.webp" alt="AquaFirmeXS Before & After 2"/>
                            <img src="/assets/images/images/ABB4D0E0-2BF2-4275-A151-655022AC1C04.JPG" alt="AquaFirmeXS Before & After 3"/>
                        </div>

                        <div className="aquafirme-content-text [max-width:600px] [font-size:19px] [line-height:1.9] [color:#444] [padding:45px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_strong]:[color:#9f6048] [&_strong]:[font-weight:600] [animation:aquafirme-fadeUp_0.8s_ease_forwards] max-[992px]:[max-width:100%] max-[992px]:[padding:35px]">
                            <p>
                                AquaFirmeXS is a safe, effective treatment with no downtime, delivering noticeable
                                improvements and making it one of our most popular services.<br/><br/>
                                This customizable treatment targets uneven complexion, acne-prone skin, congestion, texture,
                                and tone. Using a combination of micro-cupping, vibrating massage, and ultrasound, it
                                exfoliates, deeply cleanses, and revitalizes the skin. A plant-based, patent-pending serum
                                enhances results by supporting the skin&apos;s natural ability to restore and renew.<br/><br/>
                                AquaFirmeXS also supports scalp and hair health. Specialized serums work to reduce
                                inflammation and reenergize hair follicles for healthier, stronger growth.
                            </p>
                            <ServiceHighlightBox
                                summary="No-downtime skin and scalp rejuvenation with customizable treatment protocols."
                                treatmentAreas={["Face", "Scalp"]}
                                price="$200 - $400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
