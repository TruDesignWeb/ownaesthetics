import Navbar from "../components/navbar";
import Footer from "../components/footer";

const joinUrl = "https://www.joinblvd.com/b/ownaesthetics/widget#/cart/menu/Memberships";

const plans = [
  {
    name: "Silver",
    price: "$179",
    value: "Treatments valued up to $200",
    services: ["Signature Facial + Dermaplane", "Chemical Peel", "AquaFirmeXS with 2 serums"],
  },
  {
    name: "Gold",
    price: "$249",
    value: "Treatments valued up to $400",
    services: ["AquaFirmeXS with 3 serums", "The SaltFacial®", "NOUVADerm™ laser treatment for chest"],
    includes: "Or choose any Silver treatment",
  },
  {
    name: "Platinum",
    price: "$349",
    value: "Treatments valued up to $500",
    services: [
      "AquaFirmeXS with 4 serums",
      "Microneedling",
      "SaltH2O Signature Facial™",
      "NOUVAGlo Micro Laser",
      "NOUVADerm™ laser treatment for chest + hands",
      "NOUVADerm™ laser hair restoration",
    ],
    includes: "Or choose any Silver or Gold treatment",
  },
];

export default function Membership() {
  return (
    <main className="membership-page">
      <Navbar />
      <section className="membership-hero" aria-labelledby="membership-title">
        <div className="membership-hero-copy">
          <p className="membership-kicker">The Own Aesthetics Membership</p>
          <h1 id="membership-title">A treatment to look forward to. Every month.</h1>
          <p className="membership-hero-intro">
            Choose one skin treatment each month, enjoy member pricing on the
            rest, and build a plan around what your skin needs now.
          </p>
          <div className="membership-hero-actions">
            <a className="membership-button membership-button-light" href="#membership-levels">
              Find your level
            </a>
            <span>No enrollment fee</span>
          </div>
          <p className="membership-commitment">
            Starts at $179 per month, with a six-month initial commitment. Then month to month.
          </p>
        </div>
        <div className="membership-hero-photo">
          <img
            src="/assets/images/images/istock-facial_.webp"
            alt="A client receiving a relaxing facial treatment"
          />
          <p>Consistent care, chosen by you.</p>
        </div>
      </section>

      <section className="membership-perks" aria-label="Included with every membership level">
        <div className="membership-perk">
          <strong>3D skin analysis</strong>
          <span>LifeViz imaging to help map your plan</span>
        </div>
        <div className="membership-perk">
          <strong>10% savings</strong>
          <span>Services, add-ons, skincare, Botox® and Dysport®</span>
        </div>
        <div className="membership-perk">
          <strong>$50 off</strong>
          <span>Every syringe of filler</span>
        </div>
      </section>

      <section className="membership-levels" id="membership-levels" aria-labelledby="membership-levels-title">
        <div className="membership-section-heading">
          <p className="membership-kicker">One treatment each month</p>
          <h2 id="membership-levels-title">Choose the care that fits.</h2>
          <p>Every level includes member pricing and the freedom to choose a treatment at your visit.</p>
        </div>
        <div className="membership-plan-grid">
          {plans.map((plan) => (
            <article className="membership-plan" key={plan.name}>
              <div className="membership-plan-heading">
                <h3>{plan.name}</h3>
                <p><strong>{plan.price}</strong><span> / month</span></p>
              </div>
              <p className="membership-plan-choice">Choose one service each month</p>
              <ul>
                {plan.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              {plan.includes && <p className="membership-plan-includes">{plan.includes}</p>}
              <p className="membership-plan-value">{plan.value}</p>
              <a className="membership-button membership-button-dark" href={joinUrl} target="_blank" rel="noopener noreferrer">
                Join {plan.name}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-sharing" aria-labelledby="membership-sharing-title">
        <div className="membership-sharing-mark" aria-hidden="true"><strong>2</strong><span>to share</span></div>
        <div>
          <p className="membership-kicker">Good care is better together</p>
          <h2 id="membership-sharing-title">Pass a treatment along.</h2>
          <p>Every six months, gift up to two of your monthly treatments to a friend or family member.</p>
        </div>
      </section>

      <section className="membership-details" aria-labelledby="membership-details-title">
        <div className="membership-section-heading">
          <p className="membership-kicker">Getting started</p>
          <h2 id="membership-details-title">Simple by design.</h2>
        </div>
        <div className="membership-steps">
          <div><span>Choose</span><p>Pick Silver, Gold, or Platinum.</p></div>
          <div><span>Enroll</span><p>Complete your membership online.</p></div>
          <div><span>Book</span><p>Schedule your first member treatment.</p></div>
        </div>
        <p className="membership-help">
          Not sure which level fits? Call <a href="tel:+15156721860">(515) 672-1860</a> or ask us at your next visit.
        </p>
        <details className="membership-terms">
          <summary>Membership details</summary>
          <p>
            Memberships have a 6-month initial commitment and then renew monthly.
            Monthly treatments do not roll over. Up to two treatments may be
            transferred to a friend or family member every six months. Member
            discounts cannot be combined with volume pricing, promotions, or
            other offers; the better discount applies. If you have questions
            about a situation not covered here, contact our team for help.
          </p>
        </details>
      </section>

      <section className="membership-final-cta" aria-label="Join the Own Aesthetics Membership">
        <p>Make time for the care you want to keep up with.</p>
        <a className="membership-button membership-button-light" href={joinUrl} target="_blank" rel="noopener noreferrer">
          Join the membership
        </a>
      </section>
      <Footer />
    </main>
  );
}