import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './kybella.css';


export default function Kybella() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
                image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
                title="Kybella®"
                subtitle="Sculpt Your Profile with Kybella® - The Only FDA-Approved Injectable for Double Chin Reduction"
            />

            <section id="kybella-services">
                <div className="kybella-container">
                    <h1 className="kybella-title kybella-animated">
                        {/* Kybella® */}
                    </h1>
                    <div className="kybella-row">
                        <div className="kybella-services-text kybella-service-boxes kybella-animated">
                            <p>
                                KYBELLA® is the only FDA-approved injectable treatment for adults that destroys fat cells to
                                gradually improve the appearance and profile of moderate to severe fat below the chin
                                (submental fat), also called “double chin.”<br/><br/>
                                The deoxycholic acid in Kybella disrupts the fat cell&#39;s membrane, causing them to be broken
                                down and naturally eliminated by the body. This gradually reduces submental fat, leading to a
                                more defined chin line and a smoother, more sculpted profile. The results are generally
                                permanent as the destroyed fat cells do not regenerate.<br/><br/>
                                Multiple treatments may be needed to achieve the desired results, with some patients seeing
                                noticeable improvements after just a few sessions.<br/><br/>
                                Treatment Area:<br/><br/>
                                Neck<br/><br/>
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