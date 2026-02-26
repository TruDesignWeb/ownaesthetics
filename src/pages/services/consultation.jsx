import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './consultation.css';


export default function Consultation() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
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
                                Our philosophy is that every person is unique, valuable, and beautiful in their own skin, in their
                                own way. We believe we are unique in our approach to serving you. We want you to feel
                                empowered and encouraged, believing that aging is a good and natural process. We invested in
                                LifeViz® Infinity Pro 3D imaging, the best technology in aesthetic medicine to capture and
                                record the details of your unique beauty. These 3D images allow us to design unique treatment
                                plans and personal skin analysis consultations.<br/><br/>
                                The LifeViz® Infinity Pro imaging system scans your face or body using advanced technology to
                                target skin concerns such as wrinkles, volume loss, fat pad shifting, sun damage, enlarged
                                pores, and redness. This camera enables a unique visualization of facial shapes from any angle.<br/><br/>

                                This advanced technology utilizes anatomical reference points to obtain standardized and
                                comparable pictures throughout visits to evaluate and measure the results of your treatments.
                                
                                <br/><br/>We want you to feel empowered and encouraged, believing that aging is a good and natural
                                process.<br/><br/>
                                Session 50 minutes to 1 hour
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}