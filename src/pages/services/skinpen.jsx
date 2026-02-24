import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './skinpen.css';


export default function Skinpen() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "LifeViz® Infinity Pro Consultation"
            subtitle = "Discover Your Unique Beauty with Our LifeViz® Infinity Pro Consultation"
            />

            <section id = "services">
                <div class = "container">
                    <h1 class = "title servces-animated">SkinPen® Microneedling</h1>
                    <div class = "row">
                        <div class = "col-md-auto services-text service-boxes animated">
                            <p>Beautiful skin – naturally!<br/><br/>
                                Microneedling, also known as collagen induction therapy, is a minimally invasive procedure that
                                uses tiny needles to create controlled punctures in the skin, stimulating the body&#39;s natural
                                healing process to produce more collagen and elastin. This helps reduce wrinkles and fine lines,
                                improve skin tone and texture, treat acne scars, decrease hyperpigmentation, and improve the
                                skin&#39;s overall appearance.<br/><br/>
                                Treatment Areas:<br/><br/>
                                Face<br/><br/>
                                Neck<br/><br/>
                                Chest <br/><br/>
                                Sessions: 1 hour<br/><br/>
                                Designed to work without chemicals, heat, or stress, SkinPen® uses fine needles to create
                                micro-openings in the skin that naturally remodel it. This minimally invasive treatment
                                significantly improves the appearance of acne scars and neck wrinkles. There is little to no
                                downtime. Suggested sessions are 1 to 3 for a more refined skin complexion and 3 to 6 sessions
                                for acne scars. Packages are available.<br/><br/>
                                Optimize your microneedling results by adding topical platelet-rich plasma (PRP) or Exosomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </>
    );
}