import "../styles/testimonialshowcasestyles.css";


export default function TestimonialShowcase() {


    return (
        <div className="testimonial-showcase-container">
            <h2 className="testimonial-showcase-title">What Clients Say</h2>
            <div className="testimonial-cards-wrapper">
                <div className="testimonial-card">
                    <p className="testimonial-text">"I’ve been seeing Beth for four years now, and she’s the best of the best. She does my Botox as well as my lip filler, and I’ve always been so impressed with the experience. She’s professional, gentle, and so talented"</p>
                    <span className="testimonial-author">- Allie</span>
                    <span className="testimonial-date">Aug 7, 2025</span>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-text">"If you really want to know about a surgeon, ask an OR nurse. I am an RN and have worked in the OR for 25+ years. I've worked with countless surgeons and, when it came time for me to need the services of one for reconstructive and plastic surgery, I chose Dr. Folkers. He is friendly, compassionate, took all the time necessary to explain procedures and answer all my questions, and did an excellent job on my surgery. I am confident I made the right choice and would recommend him to anyone."</p>
                    <span className="testimonial-author">- Anonymous</span>
                    <span className="testimonial-date">Jul 22, 2017</span>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-text">"From the moment I walked in, I was treated with kindness and professionalism. The team at OWN Aesthetics is top-notch!"</p>
                    <span className="testimonial-author">- Emily R.</span>
                    <span className="testimonial-date">Aug 7, 2025</span>
                </div>
            </div>
            <button className="view-more-testimonials-button">All Testimonials</button>
        </div>
    );
}