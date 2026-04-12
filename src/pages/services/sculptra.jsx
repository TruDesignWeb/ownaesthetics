import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './sculptra.css';

export default function Sculptra() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Sculptra®"
                subtitle="Sculptra®: The Original Collagen Stimulator for Natural, Long-Lasting Results"
            />

            <section id="sculptra-services">
                <div className="sculptra-container">
                    <h1 className="sculptra-title sculptra-animated">
                        {/* Sculptra® */}
                    </h1>
                    <div className="sculptra-row">
                        <div className="sculptra-services-text sculptra-service-boxes sculptra-animated">
                            <p>
                                Sculptra® helps restore your skin&apos;s foundation by stimulating natural collagen production,
                                firming and smoothing the entire cheek region, and tightening the skin along the jawline.
                                Unlike hyaluronic acid fillers, which fill lines, wrinkles, and folds, Sculptra® is the original FDA-approved
                                poly-L-lactic acid (PLLA-SCA) collagen stimulator, which can improve skin glow,
                                tightness, and jawline contour for up to two years.
                            </p>
                            <ServiceHighlightBox
                                summary="Collagen-stimulating injectable designed for gradual, long-lasting rejuvenation."
                                treatmentAreas={["Cheeks", "Jawline"]}
                                supportingNote="Results can support skin glow, tightness, and jawline contour for up to two years."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
