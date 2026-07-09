import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function HairTreatments() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="Hair Wellness & Restoration"
                subtitle="Revitalize Your Hair with Our Specialized Hair Wellness & Restoration Treatments"
            />

            <section id="hairtreatments-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#hairtreatments-services_&]:[font-size:42px] [#hairtreatments-services_&]:[font-weight:600] [#hairtreatments-services_&]:[text-align:center] [#hairtreatments-services_&]:[margin-bottom:40px] [#hairtreatments-services_&]:[color:#2d2d2d] [#hairtreatments-services_&]:[letter-spacing:0.5px] [animation:hairtreatments-fadeUp_0.8s_ease_forwards]">
                        {/* Hair Wellness & Restoration */}
                    </div>
                    <div className="hairtreatments-row [#hairtreatments-services_&]:[display:flex] [#hairtreatments-services_&]:[justify-content:center]">
                        <div className="hairtreatments-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:hairtreatments-fadeUp_0.8s_ease_forwards]">
                            <p>
                                Hair changes over time, but there are affordable, non-surgical, specialized solutions available. These treatments and protocols range from
                                in-office treatments using microneedling, peptides, PRP, exosomes, or biologics with take-home
                                applications to comprehensively support hair and scalp health. We also offer effective hair care
                                products and regimens to improve hair growth.
                            </p>
                            <ServiceHighlightBox
                                summary="Scalp-focused support designed to encourage healthier, stronger hair growth."
                                treatmentAreas={["Scalp"]}
                                sessions="45 min- 1 hr."
                                price="$3000 and up"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
