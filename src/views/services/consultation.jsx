import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function Consultation() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="LifeViz® Infinity Pro Consultation"
                subtitle="Discover Your Unique Beauty with Our LifeViz® Infinity Pro Consultation"
            />

            <div id="consultation-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#consultation-services_&]:[font-size:42px] [#consultation-services_&]:[font-weight:600] [#consultation-services_&]:[text-align:center] [#consultation-services_&]:[margin-bottom:40px] [#consultation-services_&]:[color:#2d2d2d] [#consultation-services_&]:[letter-spacing:0.5px] [animation:consultation-fadeUp_0.8s_ease_forwards]">
                        {/* LifeViz® Infinity Pro Consultation */}
                    </div>
                    <div className="consultation-row [#consultation-services_&]:[display:flex] [#consultation-services_&]:[justify-content:center]">
                        <div className="consultation-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:consultation-fadeUp_0.8s_ease_forwards]">
                            <p>
                                We believe every person is valuable and beautiful in their own skin. Our approach is centered
                                on individualized care - helping you feel empowered, confident, and supported as you embrace
                                the natural process of aging.<br/><br/>
                                Using LifeViz® Infinity Pro 3D imaging, we capture highly detailed images that allow for in-depth
                                skin analysis and fully personalized treatment planning. This system captures highly detailed
                                images of your face or body, allowing us to assess concerns such as wrinkles, volume loss, fat
                                pad shifting, sun damage, enlarged pores, and redness.<br/><br/>
                                Using anatomical reference points, the imaging system creates standardized, comparable
                                photos over time. This allows us to track progress, evaluate results, and refine your treatment
                                plan with precision.<br/><br/>
                                These insights guide a personalized skin analysis and treatment plan tailored specifically to you
                                - ensuring thoughtful, effective, and natural-looking results.
                            </p>
                            <ServiceHighlightBox
                                summary="Advanced 3D imaging and skin analysis designed to guide a fully personalized treatment plan."
                                treatmentAreas={["Face", "Body"]}
                                sessions="50 minutes to 1 hour"
                                price="$100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
