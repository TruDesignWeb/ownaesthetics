import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './sclerotherapy.css';


export default function Sclerotherapy() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
                title="Sclerotherapy – Spider Veins"
                subtitle="Say Goodbye to Spider Veins: Sclerotherapy for Smooth, Clear Legs"
            />

            <section id="sclerotherapy-services">
                <div className="sclerotherapy-container">
                    <h1 className="sclerotherapy-title sclerotherapy-animated">
                        Sclerotherapy – Spider Veins
                    </h1>
                    <div className="sclerotherapy-row">
                        <div className="sclerotherapy-services-text sclerotherapy-service-boxes sclerotherapy-animated">
                            <p>
                                Sclerotherapy is a minimally invasive medical procedure that treats spider veins, usually on your
                                legs. A small needle injects a special solution into your spider veins. This chemical solution
                                irritates your blood vessel lining, expanding, sticking together, and forming a scar. This closes
                                off your vein, making it look and feel better.<br/><br/>
                                Treatment Area<br/><br/>
                                Legs<br/><br/>
                                Sessions: 45 min. – 1hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}