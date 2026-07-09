import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function Sculptra() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="Sculptra®"
                subtitle="Sculptra®: The Original Collagen Stimulator for Natural, Long-Lasting Results"
            />

            <section id="sculptra-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#sculptra-services_&]:[font-size:42px] [#sculptra-services_&]:[font-weight:600] [#sculptra-services_&]:[text-align:center] [#sculptra-services_&]:[margin-bottom:40px] [#sculptra-services_&]:[color:#2d2d2d] [#sculptra-services_&]:[letter-spacing:0.5px] [animation:sculptra-fadeUp_0.8s_ease_forwards]">
                        {/* Sculptra® */}
                    </div>
                    <div className="sculptra-row [#sculptra-services_&]:[display:flex] [#sculptra-services_&]:[justify-content:center]">
                        <div className="sculptra-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:sculptra-fadeUp_0.8s_ease_forwards]">
                            <p>
                                Sculptra® helps restore your skin&apos;s foundation by stimulating natural collagen production,
                                firming and smoothing the entire cheek region, and tightening the skin along the jawline.
                                Unlike hyaluronic acid fillers, which fill lines, wrinkles, and folds, Sculptra® is the original FDA-approved
                                poly-L-lactic acid (PLLA-SCA) collagen stimulator, which can improve skin glow,
                                tightness, and jawline contour for up to two years.
                            </p>
                            <ServiceHighlightBox
                                summary="Collagen-stimulating injectable designed for gradual, long-lasting rejuvenation."
                                treatmentAreas={["Cheeks", "Jawline"]}
                                price="$600 per vial"
                                supportingNote="Results can support skin glow, tightness, and jawline contour for up to two years."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
