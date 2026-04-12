import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './exosomes.css';

export default function Exosomes() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="EXO|E® Skin Revitalizing Complex"
                subtitle="Discover the Power of EXO|E®: A Revolutionary Skin Revitalizing Complex for Radiant, Youthful Skin"
            />

            <section id="exosomes-services">
                <div className="exosomes-content-wrapper">
                    <h1 className="exosomes-title exosomes-animated">
                        {/* EXO|E® Skin Revitalizing Complex */}
                    </h1>

                    <div className="exosomes-main-content">
                        <div className="exosomes-image-gallery">
                            <img src="/assets/images/images/IMG_8380.JPG" alt="EXO|E Before & After 1"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/15.png" alt="EXO|E Before & After 2"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/ex3.png" alt="EXO|E Before & After 3"/>
                        </div>

                        <div className="exosomes-content-text exosomes-animated">
                            <p>
                                Exosome therapy is an advanced treatment designed to support skin repair, improve treatment
                                recovery, and enhance overall results. Using plant-based ingredients, this system helps calm
                                the skin, reduce inflammation, and promote a smoother, healthier appearance.<br/><br/>
                                This treatment is often used alongside other aesthetic services, typically our laser or facial
                                treatments, to improve outcomes and minimize downtime. It works by supporting your skin&apos;s
                                natural ability to restore and renew - helping you heal faster and see more refined results.<br/><br/>
                                The process includes three steps designed to prepare, treat, and support your skin. First, the
                                skin is hydrated and prepped to optimize treatment. Next, targeted ingredients are applied to
                                help improve skin function and recovery. Finally, continued support helps maintain results and
                                keep skin balanced and resilient.<br/><br/>
                                This gentle, water-based system is suitable for sensitive skin and is ideal for anyone looking to
                                enhance results while maintaining a natural, healthy look.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
