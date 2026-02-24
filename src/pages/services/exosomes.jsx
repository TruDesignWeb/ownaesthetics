import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './exosomes.css';


export default function Exosomes() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "EXO|E® Skin Revitalizing Complex"
            subtitle = "Discover the Power of EXO|E®: A Revolutionary Skin Revitalizing Complex for Radiant, Youthful Skin"
            />

            <section id = "services">
                <div class="content-wrapper">
                    <h1 class="title services-animated">EXO|E® Skin Revitalizing Complex
                    </h1>
                    
                    <div class="main-content">
                        <div class="image-gallery">
                            <img src="/assets/images/images/IMG_8380.JPG" alt="Salt Facial Before & After 1"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/15.png" alt="Salt Facial Before & After 2"/>
                            <img src="/assets/images/images/exoe_digital_marketing_kit_-_12.11.2023/EXOE Digital Marketing Kit - 12.11.2023/ex3.png" alt="Salt Facial Before & After 3"/>
                            
                        </div>
                        
                        <div class="content-text animated">
                            <p><strong>EXO|E® Skin Revitalizing Complex</strong>
        A complete and perfectly formulated set of active naturally occurring secretory factors from plants: plant factors, liposomes, growth factors, & anti-stressing factors.<br/><br/> <strong>EXO|E®</strong> is a three-step process. This system is chemical-free, water-based, and made in the USA, making it one or the most prized recent skincare lines available. Patients appreciate less downtime and enhanced results enabling them to do more aggressive treatments minimizing social downtime while optimizing procedure results.


        <br/><br/><strong>D|TOX®</strong>
        helps hydrate and prep your skin for your upcoming aesthetic treatment. D|TOX® provides hydration support to your skin when needed.

        <br/><br/>
        <strong>EXO|E®</strong> is a consortia of active plant based secretory factors chosen for perfect compatibility with the skin and leading to targeted results and desired outcomes.


        <br/><br/><strong>RE|PAIR®</strong> reinforces the work of EXO|E® with fourteen additional applications of the full complement of plant factors found in nature's restorative processes—a home run for the skin. RE|PAIR® provides continuous support for sensitive skin.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </>
    );
}