import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './sculptra.css';


export default function Sculptra() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Sculptra"
                subtitle="Sculptra: The Original Collagen Stimulator for Natural, Long-Lasting Results"
            />

            <section id="sculptra-services">
                <div className="sculptra-container">
                    <h1 className="sculptra-title sculptra-animated">
                        {/* Sculptra */}
                    </h1>
                    <div className="sculptra-row">
                        <div className="sculptra-services-text sculptra-service-boxes sculptra-animated">
                            <p>
                                Sculptra helps restore your skin’s foundation by stimulating natural collagen production,
                                firming and smoothing the entire cheek region, and tightening the skin along the jawline.
                                Unlike hyaluronic acid fillers, which fill lines, wrinkles, and folds, Sculptra is the original FDA-
                                approved poly-L-lactic acid (PLLA-SCA) collagen stimulator, which can improve skin glow,
                                tightness, and jawline contour for up to two years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}