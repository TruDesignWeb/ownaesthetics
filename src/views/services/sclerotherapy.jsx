import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function Sclerotherapy() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="Sclerotherapy - Spider Veins"
                subtitle="Say Goodbye to Spider Veins: Sclerotherapy for Smooth, Clear Legs"
            />

            <section id="sclerotherapy-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#sclerotherapy-services_&]:[font-size:42px] [#sclerotherapy-services_&]:[font-weight:600] [#sclerotherapy-services_&]:[text-align:center] [#sclerotherapy-services_&]:[margin-bottom:40px] [#sclerotherapy-services_&]:[color:#2d2d2d] [#sclerotherapy-services_&]:[letter-spacing:0.5px] [animation:sclerotherapy-fadeUp_0.8s_ease_forwards]">
                        {/* Sclerotherapy - Spider Veins */}
                    </div>
                    <div className="sclerotherapy-row [#sclerotherapy-services_&]:[display:flex] [#sclerotherapy-services_&]:[justify-content:center]">
                        <div className="sclerotherapy-services-text [max-width:900px] [width:100%] [font-size:20px] [line-height:1.9] [color:#444] [padding:40px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&_p_strong]:[font-weight:600] [&_p_strong]:[color:#ffffff] [&_p:last-child]:[font-weight:600] [&_p:last-child]:[color:#ffffff] [animation:sclerotherapy-fadeUp_0.8s_ease_forwards]">
                            <p>
                                Sclerotherapy is a minimally invasive treatment designed to improve the appearance of spider
                                veins, most often found on the legs. Using a fine needle, a specialized solution is injected into
                                the vein, causing it to collapse and gradually be reabsorbed by the body. The result is smoother,
                                clearer-looking skin with a more even tone.
                            </p>
                            <ServiceHighlightBox
                                summary="A minimally invasive treatment for smoother, clearer-looking legs."
                                treatmentAreas={["Legs"]}
                                sessions="45 min. - 1hr."
                                price="$400 - $800"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
