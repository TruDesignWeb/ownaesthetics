import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function Exosomes() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="EXO|E® Skin Revitalizing Complex"
                subtitle="Discover the Power of EXO|E®: A Revolutionary Skin Revitalizing Complex for Radiant, Youthful Skin"
            />

            <section id="exosomes-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#exosomes-services_&]:[font-size:42px] [#exosomes-services_&]:[font-weight:600] [#exosomes-services_&]:[text-align:center] [#exosomes-services_&]:[margin-bottom:40px] [#exosomes-services_&]:[color:#2d2d2d] [#exosomes-services_&]:[letter-spacing:0.5px] [animation:exosomes-fadeUp_0.8s_ease_forwards] max-[600px]:[#exosomes-services_&]:[font-size:32px]">
                        {/* EXO|E® Skin Revitalizing Complex */}
                    </div>

                    <div className="exosomes-main-content [display:flex] [gap:50px] [align-items:center] [justify-content:center] [flex-wrap:wrap] max-[992px]:[flex-direction:column]">
                        <div className="exosomes-image-gallery [display:flex] [flex-direction:column] [gap:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
                            <img src="/assets/images/images/IMG_8380.JPG" alt="EXO|E Before & After 1"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/15.webp" alt="EXO|E Before & After 2"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/ex3.webp" alt="EXO|E Before & After 3"/>
                        </div>

                        <div className="exosomes-content-text [max-width:600px] [font-size:19px] [line-height:1.9] [color:#444] [padding:45px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_strong]:[color:#9f6048] [&_strong]:[font-weight:600] [animation:exosomes-fadeUp_0.8s_ease_forwards] max-[992px]:[max-width:100%] max-[992px]:[padding:35px]">
                            <p>
                                Exosome therapy is an advanced treatment designed to support skin repair, improve treatment
                                recovery, and enhance overall results. Using plant-based ingredients, this system helps calm
                                the skin, reduce inflammation, and promote a smoother, healthier appearance.<br/><br/>
                                This treatment is often used alongside other aesthetic services, typically our laser or facial
                                treatments, to improve outcomes and minimize downtime. It works by supporting your skin&apos;s
                                natural ability to restore and renew - helping you heal faster and see more refined results.<br/><br/>
                                The process includes three steps designed to prepare, treat, and support your skin. First, the
                                skin is hydrated and prepped to optimize treatment. Next, targeted ingredients are applied to
                                help improve skin function and recovery. Finally, continued support helps maintain results and
                                keep skin balanced and resilient.<br/><br/>
                                This gentle, water-based system is suitable for sensitive skin and is ideal for anyone looking to
                                enhance results while maintaining a natural, healthy look.
                            </p>
                            <ServiceHighlightBox
                                summary="A restorative add-on that supports healing, calms inflammation, and enhances results."
                                treatmentAreas={["Laser Treatments", "Facial Treatments", "Sensitive Skin"]}
                                price="$200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
