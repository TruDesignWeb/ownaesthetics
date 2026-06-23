import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import { Link } from 'react-router-dom';
import './saltfacial.css';

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

            <section id="saltfacial-services">
                <div className="saltfacial-content-wrapper">
                    <h1 className="saltfacial-title saltfacial-services-animated">
                        {/* SaltFacial® Skin Renewal Therapy */}
                    </h1>

                    <div className="saltfacial-main-content">
                        <div className="saltfacial-image-gallery">
                            <img src="/assets/images/images/salt-b4+after[1].webp" alt="Salt Facial Before & After 1"/>
                            <img src="/assets/images/images/salt-b4+after[2].webp" alt="Salt Facial Before & After 2"/>
                            <img src="/assets/images/images/salt-b4+after[3].webp" alt="Salt Facial Before & After 3"/>
                        </div>

                        <div className="saltfacial-content-text">
                            <p className="saltfacial-intro-title"><strong>Beautiful Skin Head to Toe</strong></p>

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
                                <Link to="/services/saltfacial-guide">Read our SaltFacial guide.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
