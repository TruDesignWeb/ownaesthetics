import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './hairtreatments.css';

export default function HairTreatments() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
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
                                products and regimens to improve hair growth.<br/><br/>
                                <strong>Treatment Area:</strong> Head<br/><br/>
                                <strong>Sessions:</strong> 45 min- 1 hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
