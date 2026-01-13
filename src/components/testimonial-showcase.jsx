import "../styles/testimonialshowcasestyles.css";


export default function TestimonialShowcase() {


    return (
        <div className="testimonial-showcase-container">
            <h2 className="testimonial-showcase-title">What Clients Say</h2>
            <div className="testimonial-cards-wrapper">
                <div className="testimonial-card">
                    <p className="testimonial-text">"The staff at OWN Aesthetics were incredibly professional and made me feel comfortable throughout my entire visit. Highly recommend!"</p>
                    <span className="testimonial-author">- Sarah M.</span>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-text">"I had an amazing experience with my skincare treatment. The results were fantastic, and I felt truly cared for."</p>
                    <span className="testimonial-author">- James L.</span>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-text">"From the moment I walked in, I was treated with kindness and professionalism. The team at OWN Aesthetics is top-notch!"</p>
                    <span className="testimonial-author">- Emily R.</span>
                </div>
            </div>
        </div>
    );
}