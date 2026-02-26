import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './chemicalpeels.css';


export default function Chemicalpeels() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Chemical Peels"
                subtitle="Reveal Your Radiance with Our Expert Chemical Peels"
            />

            <section id="chemicalpeels-services">
                <div className="chemicalpeels-container">
                    <h1 className="chemicalpeels-title chemicalpeels-animated">
                        {/* Chemical Peels */}
                    </h1>
                    <div className="chemicalpeels-row">
                        <div className="chemicalpeels-services-text chemicalpeels-service-boxes chemicalpeels-animated">
                            <p>
                                We get it, ‘acid’, ‘peel’, and ‘chemical’ can sound a bit scary. Did you know that there is a
                                chemical peel for the most sensitive skin types? You can choose to have no downtime.<br/><br/>
                                Chemical peels are a minimally invasive and affordable way to dramatically improve the
                                appearance of skin. They help diminish the appearance of fine lines and wrinkles. They also
                                work to improve the appearance of discoloration, uneven skin tone, and sun damage because
                                the peel action removes damaged, dead skin. Your skin could look younger and plumper after
                                just seven days.<br/><br/>
                                Treatment Area:<br/><br/>
                                Face<br/><br/>
                                Neck<br/><br/>
                                Décolleté<br/><br/>
                                Back<br/><br/>
                                Sessions: 25 min- 1 hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}