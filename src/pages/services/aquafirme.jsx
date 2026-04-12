import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './aquafirme.css';

export default function Aquafirme() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="AquaFirmeXS"
                subtitle="Experience the Ultimate Skin Rejuvenation with AquaFirmeXS: A Revolutionary Treatment for Radiant, Youthful Skin"
            />

            <section id="aquafirme-services">
                <div className="aquafirme-content-wrapper">
                    <h1 className="aquafirme-title aquafirme-animated">
                        {/* AquaFirmeXS */}
                    </h1>

                    <div className="aquafirme-main-content">
                        <div className="aquafirme-image-gallery">
                            <img src="/assets/images/aquafirme1.png" alt="AquaFirmeXS Before & After 1"/>
                            <img src="/assets/images/aquafirme2.jpeg" alt="AquaFirmeXS Before & After 2"/>
                            <img src="/assets/images/images/ABB4D0E0-2BF2-4275-A151-655022AC1C04.JPG" alt="AquaFirmeXS Before & After 3"/>
                        </div>

                        <div className="aquafirme-content-text aquafirme-animated">
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
