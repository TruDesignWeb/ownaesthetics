import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner2 from '../../components/banner2';
import Banner3 from '../../components/banner3';
import CustomCursor from '../../components/customcursor';
import './cellenis.css';


export default function Cellenis() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            
            <Banner3
            image="/assets/images/images/nic-y-c-It0vaZdSDDw-unsplash.jpg"
            
            title = "Cellenis® Derma PRP/PRF"
            subtitle = "Rejuvenate Your Skin with Cellenis® Derma PRP/PRF: A Natural Approach to Radiant, Youthful Skin"
            />

            <section id = "services">
                <div class = "container">
                    {/* <h1 class = "title servces-animated">Cellenis® Derma PRP</h1> */}
                    <div class = "row">
                        <div class = "col-md-auto services-text service-boxes animated">
                            <p>Cellenis® Derma PRP is a skin rejuvenation treatment that uses Platelet-Rich Plasma (PRP)
                                derived from the patient’s blood to stimulate collagen production and improve skin texture.
                                The process begins with a small blood draw, which is then spun in a centrifuge to separate the
                                PRP. The concentrated plasma contains abundant growth factors, which are injected into
                                targeted areas to promote healing and regeneration. Cellenis® Derma PRP can treat areas such
                                as the face, neck, hands, and décolletage, helping to reduce fine lines, wrinkles, and scars.
                                Results can last up to 18 months.<br/><br/>
                                
                                Treatment Area:<br/><br/>
                                Upper Face<br/><br/>
                                Lower Face<br/><br/>
                                Sessions: 30 min – 1 hr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </>
    );
}