import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './juvederm.css';


export default function Juvederm() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
                title="Facial Contouring - Juvederm Collection of Injectable HA Dermal Fillers"
                subtitle="Enhance Your Natural Beauty with the Juvederm Collection of Injectable HA Dermal Fillers"
            />

            <section id="juvederm-services">
                <div className="juvederm-container">
                    <h1 className="juvederm-title juvederm-animated">
                        {/* Facial Contouring - Juvederm Collection of Injectable HA Dermal Fillers */}
                    </h1>
                    <div className="juvederm-row">
                        <div className="juvederm-services-text juvederm-service-boxes juvederm-animated">
                            <p>
                                Injectable dermal fillers are approved treatments that temporarily add volume to certain areas
                                of the face, including the cheeks, lips, and nasolabial folds. They are made from various
                                substances, but the primary ingredient in most injectable fillers is hyaluronic acid (HA), a water-
                                loving molecule found naturally in the skin. A modified form of HA is the backbone of many
                                clear, colorless, gel-like injectable fillers. The results can last anywhere from 8 months to 2
                                years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}