import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './consultation.css';

export default function Consultation() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="LifeViz® Infinity Pro Consultation"
                subtitle="Discover Your Unique Beauty with Our LifeViz® Infinity Pro Consultation"
            />

            <div id="consultation-services">
                <div className="consultation-container">
                    <h1 className="consultation-title consultation-animated">
                        {/* LifeViz® Infinity Pro Consultation */}
                    </h1>
                    <div className="consultation-row">
                        <div className="consultation-services-text consultation-service-boxes consultation-animated">
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
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
