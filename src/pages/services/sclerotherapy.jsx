import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './sclerotherapy.css';

export default function Sclerotherapy() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Sclerotherapy - Spider Veins"
                subtitle="Say Goodbye to Spider Veins: Sclerotherapy for Smooth, Clear Legs"
            />

            <section id="sclerotherapy-services">
                <div className="sclerotherapy-container">
                    <h1 className="sclerotherapy-title sclerotherapy-animated">
                        {/* Sclerotherapy - Spider Veins */}
                    </h1>
                    <div className="sclerotherapy-row">
                        <div className="sclerotherapy-services-text sclerotherapy-service-boxes sclerotherapy-animated">
                            <p>
                                Sclerotherapy is a minimally invasive treatment designed to improve the appearance of spider
                                veins, most often found on the legs. Using a fine needle, a specialized solution is injected into
                                the vein, causing it to collapse and gradually be reabsorbed by the body. The result is smoother,
                                clearer-looking skin with a more even tone.<br/><br/>
                                <strong>Treatment Area:</strong> Legs<br/><br/>
                                <strong>Sessions:</strong> 45 min. - 1hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
