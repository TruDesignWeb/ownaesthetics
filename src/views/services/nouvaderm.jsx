
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
export default function NouvaDerm() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />
            
            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="NOUVADerm™ Laser Treatment"
                subtitle="Experience the Power of NOUVADerm™: The Ultimate Laser Treatment for Radiant Skin"
            />

            <section id="nouvaderm-services" className="svc-section [background:#f8f9fa] [padding:80px_0_100px_0]">
                <div className="">
                    <div className="[#nouvaderm-services_&]:[font-size:42px] [#nouvaderm-services_&]:[font-weight:600] [#nouvaderm-services_&]:[text-align:center] [#nouvaderm-services_&]:[margin-bottom:40px] [#nouvaderm-services_&]:[color:#2d2d2d] [#nouvaderm-services_&]:[letter-spacing:0.5px] [animation:nouvaderm-fadeUp_0.8s_ease_forwards] max-[600px]:[#nouvaderm-services_&]:[font-size:32px]">
                        {/* NOUVADerm™ Laser Treatment */}
                    </div>

                    <div className="nouvaderm-main-content [display:flex] [gap:50px] [align-items:center] [justify-content:center] [flex-wrap:wrap] max-[992px]:[flex-direction:column]">
                        <div className="nouvaderm-image-gallery [display:flex] [flex-direction:column] [gap:20px] [&_img]:[width:320px] [&_img]:[border-radius:12px] [&_img]:[object-fit:cover] [&_img]:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [&_img]:[transition:all_0.4s_ease] [&_img:hover]:[transform:translateY(-6px)] [&_img:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.12)] max-[992px]:[flex-direction:row] max-[992px]:[flex-wrap:wrap] max-[992px]:[justify-content:center] max-[992px]:[&_img]:[width:45%] max-[600px]:[&_img]:[width:100%]">
                            <img
                                src="/assets/images/images/IMG_0173.JPG"
                                alt="NOUVADerm Treatment 1"
                            />
                            <img
                                src="/assets/images/images/IMG_0993.JPG"
                                alt="NOUVADerm Treatment 2"
                            />
                            <img
                                src="/assets/images/images/IMG_3219.JPG"
                                alt="NOUVADerm Treatment 3"
                            />
                        </div>

                        <div className="nouvaderm-content-text [max-width:600px] [font-size:19px] [line-height:1.9] [padding:45px_50px] [background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [color:#9f6048] [font-weight:600] [animation:nouvaderm-fadeUp_0.8s_ease_forwards] max-[992px]:[max-width:100%] max-[992px]:[padding:35px]">
                            <p>
                                The <strong>NOUVADerm™ Laser</strong> is designed for flexibility,
                                allowing treatments to be customized to each patient’s unique skin
                                type, condition, and goals.
                                <br /><br />
                                The 7 preset modes include our signature Hair Support mode for scalp
                                treatment and hair support and the three unique{" "}
                                <strong>NOUVAGlo™</strong> modes for skin revitalization, offering
                                many unique procedures.
                                <br /><br />
                                <strong>NOUVADerm™</strong>’s tailored, more targeted approach from
                                head to toe delivers unparalleled results and long-term satisfaction.
                                <br /><br />
                                <strong>FDA Clearance:</strong> NOUVADerm™ is indicated for use in
                                dermatological procedures requiring coagulation of soft tissue,
                                treatment of actinic keratosis, and treatment of benign pigmented
                                lesions such as, but not limited to, lentigos (age spots), solar
                                lentigos (sun spots), and ephelides (freckles).
                            </p>
                            <ServiceHighlightBox
                                summary="A flexible laser platform designed for customized skin revitalization and scalp-support treatments."
                                treatmentAreas={["Face", "Scalp", "Body"]}
                                price="$750"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
