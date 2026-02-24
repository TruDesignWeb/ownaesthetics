import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './hairtreatments.css';


export default function HairTreatments() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "Hair Wellness &amp; Restoration"
            subtitle = "Revitalize Your Hair with Our Specialized Hair Wellness &amp; Restoration Treatments"
            />

            <section id = "services">
                <div class = "container">
                    <h1 class = "title servces-animated">Hair Wellness &amp; Restoration</h1>
                    <div class = "row">
                        <div class = "col-md-auto services-text service-boxes animated">
                            <p>Your hair was terrific in your 20s, but over the years, it’s changed. We get it! Fortunately, there
                                are affordable, non-surgical, specialized solutions. These treatments and protocols range from
                                in-office treatments using microneedling, peptides, PRP, exosomes, or biologics with take-home
                                applications to comprehensively support hair and scalp health. We also offer effective hair care
                                products and regimens to improve hair growth.<br/><br/>
                                Treatment Area:<br/><br/>
                                Head<br/><br/>
                                Sessions: 45 min- 1 hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </>
    );
}