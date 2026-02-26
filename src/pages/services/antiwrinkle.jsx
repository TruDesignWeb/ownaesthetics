import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './antiwrinkle.css';


export default function AntiWrinkle() {
    return (
        <>  
        <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title="Anti-Wrinkle Injections"
            subtitle="Smooth and Rejuvenate Your Skin with Our Expert Anti-Wrinkle Injections"
            />

            <section id="antiwrinkle-services">
                <div className="antiwrinkle-container">
                    <h1 className="antiwrinkle-title antiwrinkle-animated">
                        {/* Anti-Wrinkle Injections */}
                    </h1>
                    <div className="antiwrinkle-row">
                        <div className="antiwrinkle-services-text antiwrinkle-service-boxes antiwrinkle-animated">
                            <p>
                                BOTOX ® Cosmetic, Dysport, and other neurotoxins are prescription medicines that are injected
                                into muscles and used to temporarily soften and improve the look of moderate to severe
                                forehead lines, crow’s-feet lines, frown lines between the eyebrows, and vertical bands
                                connecting the jaw and neck (platysma bands) in adults.<br /><br />
                                Treatment results last an average of 3-5 months. It is best to schedule maintenance treatments
                                when you see more movement in your expression lines.<br /><br />
                                Treatment Areas:<br /><br />
                                Upper Face<br /><br />
                                Lower Face<br /><br />
                                Neck<br /><br />
                                Sessions: 30 minutes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}