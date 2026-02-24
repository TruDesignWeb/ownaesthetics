import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './facials.css';


export default function Facials() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "Customized Facials"
            subtitle = "Experience the Ultimate in Skincare with Our Customized Facials"
            />

            
            <section id = "services">
                <div class = "container">
                    <h1 class = "title servces-animated">Customized Facials</h1>
                    <div class = "row">
                        <div class = "col-md-auto services-text service-boxes animated">
                            <p>A customized facial is a fantastic experience and a great place to start your skin health journey!
                                Once considered a luxury, it is now a treatment that helps educate and experience medical-
                                grade skincare chosen to target your specific concerns. It is all about you and your unique skin.
                                A consultation before the facial helps us understand your goals and evaluate your skin type,
                                which will guide the professional products we choose for your facial. The facial includes a deep
                                cleanse, exfoliation, mask, massage, targeted serums, moisturizer, and sun protection.
                                Facials should be repeated every six weeks to evaluate progress and see the best results.<br/><br/>
                                Treatment Area:<br/><br/>
                                Face<br/><br/>
                                Neck<br/><br/>
                                Decolette<br/><br/>
                                Back<br/><br/>
                                Sessions: 60 min. or 90 min.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </>
    );
}