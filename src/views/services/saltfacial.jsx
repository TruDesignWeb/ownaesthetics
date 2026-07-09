import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import Link from "next/link";
export default function SaltFacial() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
                title="SaltFacial® Skin Renewal Therapy"
                subtitle="Experience the Power of Sea Salt in Our Medical-Grade Facial Treatment"
            />

            <section id="saltfacial-services" className="svc-section grain-pattern-bg [background:linear-gradient(135deg,_#f8f9fa_0%,_#e9ecef_100%)] [padding:80px_0_120px] [position:relative] [overflow:hidden]">
                <div className="[margin:0_auto] [padding:0_20px]">
                    <div className="[font-size:48px] [font-weight:700] [margin-bottom:60px] [text-align:center] [font-family:montserrat] [color:#2c3e50] [text-shadow:0_2px_4px_rgba(0,0,0,0.1)] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[bottom:-15px] [&::after]:[left:50%] [&::after]:[transform:translateX(-50%)] [&::after]:[width:100px] [&::after]:[height:4px] [&::after]:[background:linear-gradient(90deg,_#9ead93,_#bd725b)] [&::after]:[border-radius:2px] [animation:saltfacial-appear_linear] [animation-timeline:view()] [animation-range:entry_0%_cover_40%] max-[768px]:[font-size:36px]">
                        {/* SaltFacial® Skin Renewal Therapy */}
                    </div>

                    <div className="saltfacial-main-content [display:grid] [grid-template-columns:1fr_1.2fr] [gap:60px] [align-items:start] [margin-bottom:40px] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:40px]">
                        <div className="saltfacial-image-gallery [display:grid] [grid-template-columns:1fr_1fr] [gap:20px] [position:sticky] [top:100px] [&_img]:[width:100%] [&_img]:[height:280px] [&_img]:[object-fit:cover] [&_img]:[border-radius:20px] [&_img]:[box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [&_img]:[transition:all_0.4s_ease] [&_img]:[border:3px_solid_#fff] [&_img:hover]:[transform:translateY(-10px)_scale(1.02)] [&_img:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.15)] [&_img:first-child]:[grid-column:1_/_-1] [&_img:first-child]:[height:320px] [&_img:first-child]:[object-position:0_-15px] max-[768px]:[position:static] max-[768px]:[grid-template-columns:1fr] max-[768px]:[order:-1] max-[768px]:[&_img:first-child]:[grid-column:1]">
                            <img src="/assets/images/images/salt-b4+after[1].webp" alt="Salt Facial Before & After 1"/>
                            <img src="/assets/images/images/salt-b4+after[2].webp" alt="Salt Facial Before & After 2"/>
                            <img src="/assets/images/images/salt-b4+after[3].webp" alt="Salt Facial Before & After 3"/>
                        </div>

                        <div className="saltfacial-content-text [background:linear-gradient(145deg,_#ffffff,_#f8f9fa)] [padding:50px] [border-radius:25px] [box-shadow:0_20px_40px_rgba(0,0,0,0.1),_inset_0_1px_0_rgba(255,255,255,0.6)] [font-family:montserrat] [font-size:18px] [line-height:1.8] [color:#34495e] [position:relative] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[width:5px] [&::before]:[height:100%] [&::before]:[background:linear-gradient(180deg,_#9ead93,_#bd725b)] max-[768px]:[padding:30px]">
                            <p className="[font-size:1.55rem] [font-weight:700] [line-height:1.5] [color:#2c3e50]"><strong>Beautiful Skin Head to Toe</strong></p>

                            <p>This three-part medical-grade facial uses sea salt, ultrasound, and LED light therapy to gently resurface, exfoliate, cleanse, hydrate, and heal the skin.</p>

                            <p>After extensive research into the most effective skincare treatments, the SaltFacial® medical device was designed to unite sea salt resurfacing, ultrasound technology, and LED phototherapy. Together, these treatments gently detoxify the skin, improve blood circulation, and encourage collagen production.</p>

                            <p><b>Why Sea Salt?</b></p>

                            <p>Sea salt draws and retains moisture at the cellular level. Its inherent antibacterial, antimicrobial, and anti-inflammatory properties render it a safe natural exfoliant. Proper application enhances skin permeability for heightened absorption of other topicals.</p>

                            <p>The SaltFacial is safe and effective for many different skin types. It can help improve the appearance of acne, redness, age spots, sun damage, fine lines, and wrinkles. Ask about adding Exosomes or topical platelet-rich plasma (PRP) for additional regenerative benefits!</p>

                            <ServiceHighlightBox
                                summary="Ask about adding Exosomes or topical platelet-rich plasma (PRP) for additional regenerative benefits."
                                treatmentAreas={["Face", "Body"]}
                                sessions="45 minutes - 1 hour"
                                price="$300"
                            />
                            <p>
                                Want a broader breakdown of pricing, timing, and how this treatment fits into a long-term skin plan?{" "}
                                <Link href="/services/saltfacial-guide">Read our SaltFacial guide.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
