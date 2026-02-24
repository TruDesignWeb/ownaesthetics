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
                title="Skin Type Solutions"
                subtitle="Discover Your Unique Skin Type and Unlock the Secrets to Radiant Skin with Our Personalized Skincare Solutions"
            />

            <section id="skintypesolutions-services">
                <div className="skintypesolutions-content-wrapper">
                    <h1 className="skintypesolutions-title skintypesolutions-animated">
                        About Skin Type Solutions
                    </h1>
                    
                    <div className="skintypesolutions-main-content">
                        <div className="skintypesolutions-image-gallery">
                            <img className="skintypesolutions-first-img" src="/assets/images/images/stsimg.webp" alt="Skin Type Solutions"/>
                            <img src="/assets/images/images/stsfollowupinfo/skntyp.co_ShopOwn.png" alt="Shop Own"/>
                            <img src="/assets/images/images/stsfollowupinfo/skntyp.co_OwnSkinQuiz.png" alt="Skin Quiz"/>
                        </div>
                        
                        <div className="skintypesolutions-content-text">
                            <p>
                                The science-based skin care system develops a personalized skin care routine based on your unique <strong>Baumann Skin Type®</strong>. Get your personalized skincare regimen recommendation by taking the <strong>STS Skin Type Quiz</strong>. Or shop now from a selection of the best dermatologist recommended skincare brands.
                                <br/><br/>

                                <strong>Why should I use Skin Type Solutions?</strong>
                                Get the best treatment possible with our <strong>Own Aesthetics</strong> fine-tuned product lines. After determining your skin type, you will have access to the most suitable moisturizers, eye creams, sunscreens, masks, toners, supplements, serums and more. Your skin will be nourished and protected all year round. <strong>Skin Type Solutions</strong> will provide all the products you need to keep your skin happy, healthy, and beautiful.
                            </p>

                            <div className="skintypesolutions-highlight-section">
                                With <strong>Skin Type Solutions</strong>, you’re getting more than just the right skin care products from high-quality, exclusive brands. Thanks to our extensive resources, you will also receive in-depth explanations about your skin type and why it acts the way it does, expert dietary and lifestyle advice, updates on cosmetic procedures and treatments, and year-round skin care advice.
                            </div>

                            <p>
                                <br/>
                                <strong>Why is the Skin Type Quiz so important?</strong>
                                Before you start your new <strong>Skin Type Solutions</strong> skin care routine, you need to determine your skin type. Did you know that 80% of people don’t know their skin type? Thanks to the revolutionary skin typing system created by Dr. Leslie Baumann, you can discover your true skin type.
                                <br/><br/>
                                <a href="https://skntyp.co/OwnSkinQuiz">
                                    <button type="button" className="btn btn-outline-light">
                                        SkinTypes Quiz
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}