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
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "Sculptra"
            subtitle = "Sculptra: The Original Collagen Stimulator for Natural, Long-Lasting Results"
            />

            <section id = "services">
                <div class = "container">
                    <h1 class = "title servces-animated">Sculptra</h1>
                    <div class = "row">
                        <div class = "col-md-auto services-text service-boxes animated">
                            <p>Sculptra helps restore your skin’s foundation by stimulating natural collagen production,
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