import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
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
                                <strong>AquaFirmeXS</strong> is safe and effective with zero downtime 
                                creating noticeable improvements, and it is one of the most popular treatments on the market.<br/><br/>
                                The customizable treatment protocols address uneven complexion, acne-prone skin, blemishes, congestion, texture, and tone.
                                The combination of micro-cupping, vibrating massage, and ultrasound provide 
                                a comprehensive treatment to help exfoliate, cleanse, and revitalize the skin.
                                Our plant-based patent-pending serum used with AquaFirmeXS help reenergize the 
                                skin cells by harnessing the body’s own power to fight against the most common 
                                skin concerns.<br/><br/>
                                In addition, AquaFirmeXS provides a unique combination of serums
                                to boost scalp and hair health. The combination of our <strong>DETOXTM</strong> serum and <strong>DE|RIVETM</strong>
                                topical are specifically designed to reduce inflammation and reenergize the hair 
                                follicles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}