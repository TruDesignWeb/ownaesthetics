import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './chemicalpeels.css';

export default function Chemicalpeels() {
    return (
        <>
            {/* <CustomCursor /> */}
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Chemical Peels"
                subtitle="Reveal Your Radiance with Our Expert Chemical Peels"
            />

            <section id="chemicalpeels-services">
                <div className="chemicalpeels-container">
                    <h1 className="chemicalpeels-title chemicalpeels-animated">
                        {/* Chemical Peels */}
                    </h1>
                    <div className="chemicalpeels-row">
                        <div className="chemicalpeels-services-text chemicalpeels-service-boxes chemicalpeels-animated">
                            <p>
                                Chemical peels are a minimally invasive, effective treatment designed to improve overall skin
                                tone and texture. Formulations can be tailored to all skin types, including sensitive skin, with
                                options that require little to no downtime.<br/><br/>
                                By gently exfoliating the outer layers of skin, chemical peels help reduce the appearance of fine
                                lines, wrinkles, discoloration, and sun damage. This process reveals smoother, brighter, and
                                more even-looking skin, with visible improvement in as little as seven days.
                            </p>
                            <ServiceHighlightBox
                                summary="Customized peel options designed to refresh tone, texture, and radiance with little to no downtime."
                                treatmentAreas={["Face", "Neck", "Decollete", "Back"]}
                                sessions="25 min- 1 hr."
                                price="$150"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
