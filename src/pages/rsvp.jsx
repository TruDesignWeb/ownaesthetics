import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CustomCursor from "../components/customcursor";
import Banner2 from "../components/banner2";
import "./rsvp.css";

const interestOptions = [
  "Skin Treatments",
  "Injectables",
  "Skincare Products",
  "Not Sure / Exploring",
];

const celebrationPerks = [
  "Lock in exclusive event-only pricing not offered outside the event",
  "Discover treatments tailored specifically to your skin goals with mini consults and demos",
  "Enjoy giveaways and special surprises",
  "Experience a fun atmosphere with special beverages and appetizers",
];

export default function RSVP() {
  const [searchParams] = useSearchParams();
  const prefilledEmail = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: prefilledEmail,
    phoneNumber: "",
    currentClient: "Yes",
    interest: interestOptions[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const canonicalUrl = useMemo(() => {
    const email = searchParams.get("email");
    return email
      ? `https://ownaesthetics.com/rsvp?email=${encodeURIComponent(email)}`
      : "https://ownaesthetics.com/rsvp";
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Backend placeholder: replace this local success state with an API call
    // when the RSVP endpoint is ready.
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>RSVP | Own Aesthetics Turns One</title>
        <meta
          name="description"
          content="RSVP for Own Aesthetics Turns One and join us for our Glow-Up Birthday Bash in West Des Moines on Thursday, April 30th from 4-7 pm."
        />
        <meta
          name="keywords"
          content="Own Aesthetics RSVP, glow-up birthday bash, med spa event, West Des Moines event, aesthetics event"
        />
        <meta property="og:title" content="Own Aesthetics Turns One" />
        <meta
          property="og:description"
          content="You're invited to our Glow-Up Birthday Bash. RSVP to join us for beauty, skin expertise, giveaways, and event-only specials."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://ownaesthetics.com/assets/clinic.jpg"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <CustomCursor />
      <Navbar />

      <Banner2
        image="/assets/images/images/istock-brownplant.jpg"
        title="OWN Aesthetics Turns One"
        subtitle="You're Invited to Our Glow-Up Birthday Bash"
        variant=""
      />

      <main className="rsvp-page">
        <section className="rsvp-intro-section">
          <div className="rsvp-intro-wrap">
            <div className="rsvp-intro-copy">
              <span className="rsvp-eyebrow">Celebrate With Us</span>
              <h2 className="rsvp-title">
                Join us for an exclusive evening of beauty, skin expertise, and
                celebration
              </h2>
              <p className="rsvp-text">
                We&apos;re so grateful for our incredible community - and we
                can&apos;t wait to celebrate you.
              </p>
              <p className="rsvp-text">
                Whether you&apos;re a client or new to Own Aesthetics, this is
                the perfect time to connect, learn, and indulge in your skin.
              </p>
            </div>

            <div className="rsvp-event-card">
              <p className="rsvp-card-label">Event Details</p>
              <h3>Glow-Up Birthday Bash</h3>
              <ul className="rsvp-detail-list">
                <li>Thursday, April 30th</li>
                <li>4-7 pm</li>
                <li>Total Health Experience</li>
                <li>7601 Office Plaza Dr. | Norwood Bldg. 1 | Suite 115</li>
                <li>West Des Moines, Iowa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rsvp-highlight-section">
          <div className="rsvp-highlight-wrap">
            <div className="rsvp-highlight-item">
              <h3 className="rsvp-highlight-title">
                This event is more than a celebration
              </h3>
              <p className="rsvp-highlight-text">
                It&apos;s your opportunity to:
              </p>
            </div>
          </div>
        </section>

        <section className="rsvp-perks-section">
          <div className="rsvp-perks-wrap">
            {celebrationPerks.map((perk) => (
              <article className="rsvp-perk-card" key={perk}>
                <p>{perk}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rsvp-form-section">
          <div className="rsvp-form-wrap">
            <div className="rsvp-form-copy">
              <span className="rsvp-eyebrow">Reserve Your Spot</span>
              <h2 className="rsvp-title">Celebrate with the Own community</h2>
              <p className="rsvp-text">
                Bring a guest and receive special rewards.
              </p>
              <p className="rsvp-text">
                Post on social media, follow on socials, and receive more
                rewards.
              </p>
            </div>

            <div className="rsvp-form-panel">
              {submitted && (
                <p className="rsvp-success-message">
                  Thanks for RSVPing. Backend submission is still a placeholder,
                  but your page flow is ready to connect.
                </p>
              )}

              <form className="rsvp-form" onSubmit={handleSubmit}>
                <div className="rsvp-form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="rsvp-form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="rsvp-field-group">
                  <label htmlFor="currentClient">Are you a current client?</label>
                  <select
                    id="currentClient"
                    name="currentClient"
                    value={formData.currentClient}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="rsvp-field-group">
                  <label htmlFor="interest">
                    What are you most interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="rsvp-submit-button">
                  Confirm My Spot
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
