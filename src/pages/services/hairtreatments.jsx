import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './hairtreatments.css';

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

            <section id="hairtreatments-services">
                <div className="hairtreatments-container">
                    <h1 className="hairtreatments-title hairtreatments-animated">
                        {/* Hair Wellness & Restoration */}
                    </h1>
                    <div className="hairtreatments-row">
                        <div className="hairtreatments-services-text hairtreatments-service-boxes hairtreatments-animated">
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
