import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './saltfacial.css';


export default function SaltFacial() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
                title="SaltFacial® Skin Renewal Therapy"
                subtitle="Experience the Power of Sea Salt in Our Medical-Grade Facial Treatment"
            />

            <section id="saltfacial-services">
                <div className="saltfacial-content-wrapper">
                    <h1 className="saltfacial-title saltfacial-services-animated">
                        {/* SaltFacial® Skin Renewal Therapy */}
                    </h1>
                    
                    <div className="saltfacial-main-content">
                        <div className="saltfacial-image-gallery">
                            <img src="/assets/images/images/salt-b4+after[1].png" alt="Salt Facial Before & After 1"/>
                            <img src="/assets/images/images/salt-b4+after[2].png" alt="Salt Facial Before & After 2"/>
                            <img src="/assets/images/images/salt-b4+after[3].png" alt="Salt Facial Before & After 3"/>
                        </div>
                        
                        <div className="saltfacial-content-text">
                            <p><strong>Beautiful Skin Head to Toe</strong> with the world's first actual medical-facial device</p>
                            
                            <p>This three-part medical-grade facial uses sea salt, ultrasound, and LED light therapy to gently resurface, exfoliate, cleanse, hydrate, and heal the skin.</p>
                            
                            <p>After extensive research into the most effective skincare treatments, the SaltFacial® medical device was designed to unite sea salt resurfacing, ultrasound technology, and LED phototherapy. Together, these treatments gently detoxify the skin, improve blood circulation, and encourage collagen production.</p>
                            
                            <div className="saltfacial-highlight-section">
                                <p><strong>Add-on PRP or Exosomes</strong> for additional regenerative benefits</p>
                                
                                <p><strong>Treatment Areas:</strong></p>
                                <div className="saltfacial-treatment-areas">
                                    <div className="saltfacial-treatment-area">Face</div>
                                    <div className="saltfacial-treatment-area">Body</div>
                                </div>
                                
                                <p><strong>Sessions:</strong> 45 minutes - 1 hour</p>
                            </div>
                            
                            <p><b>Why Sea Salt?</b></p>
                            
                            <p>Sea salt draws and retains moisture at the cellular level. Its inherent antibacterial, antimicrobial, and anti-inflammatory properties render it a safe natural exfoliant. Proper application enhances skin permeability for heightened absorption of other topicals.</p>
                            
                            <p>Safe and effective for many skin conditions. Improves the appearance of acne, redness, age spots, sun damage, fine lines, and wrinkles.</p>
                            
                            <p><strong>Add Exosomes or PRP for additional regenerative benefits</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}