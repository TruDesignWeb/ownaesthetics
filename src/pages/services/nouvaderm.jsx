import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import ServiceHighlightBox from '../../components/servicehighlightbox';
import './nouvaderm.css';


export default function NouvaDerm() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="NOUVADerm™ Laser Treatment"
                subtitle="Experience the Power of NOUVADerm™: The Ultimate Laser Treatment for Radiant Skin"
            />

            <section id="nouvaderm-services">
                <div className="nouvaderm-content-wrapper">
                    <h1 className="nouvaderm-title nouvaderm-animated">
                        {/* NOUVADerm™ Laser Treatment */}
                    </h1>

                    <div className="nouvaderm-main-content">
                        <div className="nouvaderm-image-gallery">
                            <img
                                src="/assets/images/images/IMG_0173.JPG"
                                alt="NOUVADerm Treatment 1"
                            />
                            <img
                                src="/assets/images/images/IMG_0993.JPG"
                                alt="NOUVADerm Treatment 2"
                            />
                            <img
                                src="/assets/images/images/IMG_3219.JPG"
                                alt="NOUVADerm Treatment 3"
                            />
                        </div>

                        <div className="nouvaderm-content-text nouvaderm-animated">
                            <p>
                                The <strong>NOUVADerm™ Laser</strong> is designed for flexibility,
                                allowing treatments to be customized to each patient’s unique skin
                                type, condition, and goals.
                                <br /><br />
                                The 7 preset modes include our signature Hair Support mode for scalp
                                treatment and hair support and the three unique{" "}
                                <strong>NOUVAGlo™</strong> modes for skin revitalization, offering
                                many unique procedures.
                                <br /><br />
                                <strong>NOUVADerm™</strong>’s tailored, more targeted approach from
                                head to toe delivers unparalleled results and long-term satisfaction.
                                <br /><br />
                                <strong>FDA Clearance:</strong> NOUVADerm™ is indicated for use in
                                dermatological procedures requiring coagulation of soft tissue,
                                treatment of actinic keratosis, and treatment of benign pigmented
                                lesions such as, but not limited to, lentigos (age spots), solar
                                lentigos (sun spots), and ephelides (freckles).
                            </p>
                            <ServiceHighlightBox
                                summary="A flexible laser platform designed for customized skin revitalization and scalp-support treatments."
                                treatmentAreas={["Face", "Scalp", "Body"]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
