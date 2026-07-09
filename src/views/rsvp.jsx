"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CustomCursor from "../components/customcursor";
import Banner2 from "../components/banner2";
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
  const searchParams = useSearchParams();
  const prefilledEmail = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    firstName: searchParams.get("firstName") || "",
    lastName: searchParams.get("lastName") || "",
    email: prefilledEmail,
    phoneNumber: searchParams.get("phoneNumber") || "",
    currentClient: "Yes",
    interest: interestOptions[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      firstName: searchParams.get("firstName") || "",
      lastName: searchParams.get("lastName") || "",
      email: searchParams.get("email") || "",
      phoneNumber: searchParams.get("phoneNumber") || "",
    }));
  }, [searchParams]);

  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <Banner2
        image="/assets/images/images/istock-brownplant.webp"
        title="OWN Aesthetics Turns One"
        subtitle="You're Invited to Our Glow-Up Birthday Bash"
        variant=""
      />

      <main className="[background:#fffdf0]">
        <section className="[padding:clamp(3.5rem,_7vw,_6rem)_1.5rem] max-[768px]:[padding-left:1rem] max-[768px]:[padding-right:1rem]">
          <div className="[max-width:1200px] [margin:0_auto] [display:grid] [grid-template-columns:1.1fr_0.9fr] [gap:clamp(2rem,_5vw,_4rem)] [align-items:stretch] max-[900px]:[grid-template-columns:1fr]">
            <div className="">
              <span className="[display:inline-block] [margin-bottom:1rem] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b]">Celebrate With Us</span>
              <h2 className="[font-size:clamp(2rem,_3.6vw,_3.2rem)] [line-height:1.15] [font-weight:600] [color:#111] [margin-bottom:1.25rem]">
                Join us for an exclusive evening of beauty, skin expertise, and
                celebration
              </h2>
              <p className="[font-size:1.05rem] [line-height:1.75] [color:#2b2b2b] [margin-bottom:1rem] [max-width:680px]">
                We&apos;re so grateful for our incredible community - and we
                can&apos;t wait to celebrate you.
              </p>
              <p className="[font-size:1.05rem] [line-height:1.75] [color:#2b2b2b] [margin-bottom:1rem] [max-width:680px]">
                Whether you&apos;re a client or new to Own Aesthetics, this is
                the perfect time to connect, learn, and indulge in your skin.
              </p>
            </div>

            <div className="[background:linear-gradient(180deg,_#133550_0%,_#244760_100%)] [color:white] [border-radius:18px] [padding:clamp(2rem,_4vw,_3rem)] [box-shadow:0_20px_50px_rgba(19,_53,_80,_0.18)] [align-self:center] [&_h3]:[font-size:clamp(1.8rem,_3vw,_2.5rem)] [&_h3]:[font-weight:500] [&_h3]:[margin-bottom:1.25rem] max-[768px]:[padding:1.5rem]">
              <p className="[font-size:0.8rem] [letter-spacing:0.22em] [text-transform:uppercase] [color:rgba(241,_241,_194,_0.82)] [margin-bottom:0.75rem]">Event Details</p>
              <h3>Glow-Up Birthday Bash</h3>
              <ul className="[list-style:none] [display:grid] [gap:0.9rem] [padding:0] [margin:0] [&_li]:[font-size:1.02rem] [&_li]:[line-height:1.6] [&_li]:[padding-bottom:0.9rem] [&_li]:[border-bottom:1px_solid_rgba(255,_255,_255,_0.15)] [&_li:last-child]:[border-bottom:none] [&_li:last-child]:[padding-bottom:0]">
                <li>Thursday, April 30th</li>
                <li>4-7 pm</li>
                <li>Total Health Experience</li>
                <li>7601 Office Plaza Dr. | Norwood Bldg. 1 | Suite 115</li>
                <li>West Des Moines, Iowa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="[background:#9b5b3e] [padding:clamp(2rem,_5vw,_4rem)_1.5rem] [text-align:center] max-[768px]:[padding-left:1rem] max-[768px]:[padding-right:1rem]">
          <div className="[max-width:860px] [margin:0_auto] [background:#faf7f2] [border-radius:26px]">
            <div className="[padding:2rem] max-[768px]:[padding:1.5rem]">
              <h3 className="[font-size:clamp(1.8rem,_3vw,_2.4rem)] [color:#333] [margin-bottom:0.75rem]">
                This event is more than a celebration
              </h3>
              <p className="[font-size:1.05rem] [color:#555] [line-height:1.7]">
                It&apos;s your opportunity to:
              </p>
            </div>
          </div>
        </section>

        <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background:#f9f4ef] [padding:clamp(3rem,_6vw,_5rem)_1.5rem] max-[768px]:[padding-left:1rem] max-[768px]:[padding-right:1rem]">
          <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:1.5rem] max-[900px]:[grid-template-columns:1fr]">
            {celebrationPerks.map((perk) => (
              <article className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background:white] [border:1px_solid_rgba(19,_53,_80,_0.08)] [border-radius:18px] [box-shadow:0_10px_25px_rgba(0,_0,_0,_0.04)] [&_p]:[color:#2b2b2b] [&_p]:[line-height:1.7] [&_p]:[font-size:1rem]" key={perk}>
                <p>{perk}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [padding:clamp(3.5rem,_7vw,_6rem)_1.5rem] [background:#ebe1d2] max-[768px]:[padding-left:1rem] max-[768px]:[padding-right:1rem]">
          <div className="[max-width:1200px] [margin:0_auto] [display:grid] [grid-template-columns:1.1fr_0.9fr] [gap:clamp(2rem,_5vw,_4rem)] [align-items:stretch] max-[900px]:[grid-template-columns:1fr]">
            <div className="">
              <span className="[display:inline-block] [margin-bottom:1rem] [letter-spacing:0.18em] [text-transform:uppercase] [font-size:0.875rem] [color:#6b6b6b]">Reserve Your Spot</span>
              <h2 className="[font-size:clamp(2rem,_3.6vw,_3.2rem)] [line-height:1.15] [font-weight:600] [color:#111] [margin-bottom:1.25rem]">Celebrate with the Own community</h2>
              <p className="[font-size:1.05rem] [line-height:1.75] [color:#2b2b2b] [margin-bottom:1rem] [max-width:680px]">
                Bring a guest and receive special rewards.
              </p>
              <p className="[font-size:1.05rem] [line-height:1.75] [color:#2b2b2b] [margin-bottom:1rem] [max-width:680px]">
                Post on social media, follow on socials, and receive more
                rewards.
              </p>
            </div>

            <div className="[background:#f7f1e8] [border-radius:18px] [padding:clamp(1.75rem,_4vw,_2.5rem)] [box-shadow:0_16px_40px_rgba(0,_0,_0,_0.06)] max-[768px]:[padding:1.5rem]">
              {submitted && (
                <p className="[background:rgba(160,_173,_147,_0.18)] [border:1px_solid_rgba(160,_173,_147,_0.55)] [color:#1f3424] [border-radius:12px] [padding:0.9rem_1rem] [margin-bottom:1rem]">
                  Thanks for RSVPing. Your confirmation has been sent.
                </p>
              )}

              <form
                className="[display:flex] [flex-direction:column] [gap:1rem] [&_input]:[width:100%] [&_input]:[padding:0.95rem_1rem] [&_input]:[border:1px_solid_#d7cec2] [&_input]:[border-radius:10px] [&_input]:[font-size:1rem] [&_input]:[background:white] [&_input]:[color:#2b2b2b] [&_select]:[width:100%] [&_select]:[padding:0.95rem_1rem] [&_select]:[border:1px_solid_#d7cec2] [&_select]:[border-radius:10px] [&_select]:[font-size:1rem] [&_select]:[background:white] [&_select]:[color:#2b2b2b] [&_input:focus]:[outline:none] [&_input:focus]:[border-color:#9e9c8d] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:[border-color:#9e9c8d] [&_select:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)]"
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="d2c03bfd-17bb-4683-b096-fc7df9822b38"
                />
                {/*Janet: d2c03bfd-17bb-4683-b096-fc7df9822b38 
                  Truman: b0ca7a60-ef74-4f6b-adc2-8c50339be692*/}
                <input
                  type="hidden"
                  name="subject"
                  value="RSVP: Own Aesthetics Turns One"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Own Aesthetics RSVP"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="rsvp-form-row [display:grid] [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:1rem] max-[900px]:[grid-template-columns:1fr]">
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

                <div className="rsvp-form-row [display:grid] [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:1rem] max-[900px]:[grid-template-columns:1fr]">
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

                <div className="[display:flex] [flex-direction:column] [gap:0.55rem] [&_label]:[font-size:0.95rem] [&_label]:[color:#39434d]">
                  <label htmlFor="currentClient">
                    Are you a current client?
                  </label>
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

                <div className="[display:flex] [flex-direction:column] [gap:0.55rem] [&_label]:[font-size:0.95rem] [&_label]:[color:#39434d]">
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

                <button type="submit" className="[border:none] [border-radius:999px] [padding:0.95rem_1.5rem] [background:linear-gradient(135deg,_#133550_0%,_#35586d_100%)] [color:white] [font-size:1rem] [cursor:pointer] [transition:transform_0.25s_ease,_box-shadow_0.25s_ease] [&:hover]:[transform:translateY(-1px)] [&:hover]:[box-shadow:0_12px_24px_rgba(19,_53,_80,_0.18)]">
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
