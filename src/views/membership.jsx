import Navbar from "../components/navbar";
import Footer from "../components/footer";

const joinUrl = "https://www.joinblvd.com/b/ownaesthetics/widget#/cart/menu/Memberships";

const plans = [
  {
    name: "Silver",
    price: "$179",
    value: "Treatment values up to $200",
    services: ["Signature Facial + Dermaplane", "Chemical Peel", "AquaFirmeXS with 2 serums"],
  },
  {
    name: "Gold",
    price: "$249",
    value: "Treatment values up to $400",
    services: ["AquaFirmeXS with 3 serums", "The SaltFacial®", "NOUVADerm™ laser treatment for Chest"],
    includes: "Or choose any Silver treatment",
  },
  {
    name: "Platinum",
    price: "$349",
    value: "Treatment values up to $500",
    services: [
      "AquaFirmeXS with 4 serums",
      "Microneedling",
      "SaltH2O Signature Facial™",
      "NOUVAGlo Micro Laser",
      "NOUVADerm™ laser treatment for Chest + Hands",
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
          <p className="membership-kicker">INTRODUCING</p>
          <h1 id="membership-title">The Own Aesthetics Membership</h1>
          <p className="membership-hero-intro">
            One treatment of your choosing every month, member pricing on everything else, and a skin plan built around you. You asked for it, so we built it with you in mind.
          </p>
          <div className="membership-hero-actions">
            <a className="membership-button membership-button-light" href={joinUrl} target="_blank" rel="noopener noreferrer">
              Join the membership
            </a>
            <span>No enrollment fee</span>
          </div>
          <p className="membership-commitment">
            Three levels from $179/month · No enrollment fee · 6 months, then month to month · Gift up to 2 of your treatments every 6 months
          </p>
        </div>
        <div className="membership-hero-photo">
          <img
            src="/assets/images/images/istock-facial_.webp"
            alt="Own Aesthetics Membership"
          />
          <p>The Own Aesthetics Membership</p>
        </div>
      </section>

      <section className="membership-perks" aria-label="Included with every membership level">
        <div className="membership-perk">
          <strong>3D</strong>
          <span>LifeViz skin analysis to map your plan</span>
        </div>
        <div className="membership-perk">
          <strong>10% off</strong>
          <span>Services and add-ons · Skincare products · Botox® and Dysport®</span>
        </div>
        <div className="membership-perk">
          <strong>$50 off</strong>
          <span>Every syringe of filler</span>
        </div>
      </section>

      <section className="membership-levels" id="membership-levels" aria-labelledby="membership-levels-title">
        <div className="membership-section-heading">
          <p className="membership-kicker">Three levels · One treatment a month</p>
          <h2 id="membership-levels-title">Choose your level</h2>
          <p>Choose one service each month, additional services 10% off</p>
        </div>
        <div className="membership-plan-grid">
          {plans.map((plan) => (
            <article className="membership-plan" key={plan.name}>
              <div className="membership-plan-heading">
                <h3>{plan.name}</h3>
                <p><strong>{plan.price}</strong><span>/month</span></p>
              </div>
              <p className="membership-plan-choice">Choose one service each month, additional services 10% off</p>
              <ul>
                {plan.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              {plan.includes && <p className="membership-plan-includes">{plan.includes}</p>}
              <p className="membership-plan-value">{plan.value}</p>
              <a className="membership-button membership-button-dark" href={joinUrl} target="_blank" rel="noopener noreferrer">
                Join the membership
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-sharing" aria-labelledby="membership-sharing-title">
        <div className="membership-sharing-mark" aria-hidden="true"><strong>2</strong><span>to share</span></div>
        <div>
          <p className="membership-kicker">Great skin is meant to be shared</p>
          <h2 id="membership-sharing-title">Gift a treatment to someone you love.</h2>
          <p>Pass up to 2 of your monthly treatments to a friend or family member every 6 months. Busy month? Your mom, sister or best friend says thank you.</p>
        </div>
      </section>

      <section className="membership-details" aria-labelledby="membership-details-title">
        <div className="membership-section-heading">
          <p className="membership-kicker">Getting started is easy</p>
          <h2 id="membership-details-title">Three steps to your glow plan</h2>
        </div>
        <div className="membership-steps">
          <div><span>01</span><p>Pick your level<br />Silver, Gold or Platinum</p></div>
          <div><span>02</span><p>Complete your enrollment online</p></div>
          <div><span>03</span><p>Book your first member treatment</p></div>
        </div>
        <p className="membership-help">
          Not sure which level fits? Send us a DM, call us at <a href="tel:+15156721860">(515) 672-1860</a>, or ask at your next visit.
        </p>
        <details className="membership-terms">
          <summary>Good to know</summary>
          <p>
            Memberships are a 6-month commitment, then auto renew monthly. Monthly treatments don't roll over, however, you can transfer up to 2 monthly treatments to a friend or family member every 6 months. Member discounts don't combine with volume pricing, promotions or other offers; the better discount applies.
          </p>
          <p>Every situation is a little different. If something comes up that isn't covered here, talk with us. Our team will work with you and makes the final decision on membership questions.</p>
        </details>
      </section>

      <section className="membership-final-cta" aria-label="Join the Own Aesthetics Membership">
        <p>One treatment of your choosing every month, member pricing on everything else, and a skin plan built around you.</p>
        <a className="membership-button membership-button-light" href={joinUrl} target="_blank" rel="noopener noreferrer">
          Join the membership
        </a>
      </section>
      <Footer />
    </main>
  );
}