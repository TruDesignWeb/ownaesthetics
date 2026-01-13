import "../styles/showcasesection.css";

export default function ShowcaseSection() {
  return (
    <section className="feature-section">
      <div className="feature-wrapper">
        {/* Text Card */}
        <div className="feature-card">
          <span className="feature-eyebrow">Advanced Imaging</span>
          <h2>Precision-Focused Diagnostic Care</h2>
          <p>
            Innovative Radiology combines state-of-the-art imaging technology
            with board-certified specialists to deliver accurate, timely
            diagnoses. Our non-invasive procedures are designed to support
            confident clinical decisions and improved patient outcomes.
          </p>
          <button className="feature-button">Learn More</button>
        </div>

        {/* Image */}
        <div className="feature-image">
          <img
            src="/assets/images/images/almost-naked.jpg"
            alt="Patient receiving advanced diagnostic imaging"
          />
        </div>
      </div>
    </section>
  );
}
