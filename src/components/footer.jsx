// File: src/components/Footer.jsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="[padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [background-image:linear-gradient(to_right,_#133550,_#8193a0)] [padding:80px_50px_40px] [text-align:center] [position:relative] [z-index:5]! [box-shadow:0_-10px_30px_rgba(0,_0,_0,_0.1),_0_-20px_60px_rgba(0,_0,_0,_0.05)] max-[768px]:[padding:40px_1rem_20px]">
      <div className="[max-width:1060px]! [margin:0_auto] [display:grid] [grid-template-columns:repeat(auto-fit,_minmax(400px,_1fr))] [gap:40px] [margin-bottom:40px] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:20px] max-[768px]:[margin-bottom:20px]">
        <div className="[:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(a)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(a)]:[line-height:1.6]! [&_h3]:[color:#9e9c8d] [&_h3]:[margin-bottom:20px] [&_h3]:[font-size:1.3rem] [&_h3]:[display:flex] [&_h3]:[align-items:center] [&_h3]:[gap:10px] [&_h3]:[justify-content:center] [&_h3::before]:[content:attr(data-icon)] [&_h3::before]:[font-size:1.5rem] [&_p]:[opacity:0.8] [&_p]:[line-height:1.6] [&_p]:[color:white] [&_p]:[text-decoration:none] [&_p]:[transition:all_0.3s_ease] [&_a:hover]:[color:#00d4ff] [&_a:hover]:[transform:translateX(5px)] max-[768px]:[&_h3]:[font-size:1.1rem] max-[768px]:[&_h3]:[margin-bottom:15px] max-[768px]:[&_h3::before]:[font-size:1.2rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_a]:[font-size:0.9rem]">
          <img
            className="[width:92px] max-[900px]:[width:64px]"
            src="/assets/images/OWN Branding/OWN Final Logos/Print CMYK/Logo Icon/PNG/OWN_Icon_CMYK_Black.png"
          />

          <p>
            7601 Office Plaza Dr. N<br />
            Norwood 1, Suite 115
            <br />
            West Des Moines, IA 50266
          </p>
          <a href="https://www.google.com/maps/place/Own+Aesthetics+PLC/@41.5868727,-94.9654378,9z/data=!4m10!1m2!2m1!1sown+aesthetics!3m6!1s0x87ec2183bd08ca1d:0x769a96c0fa498807!8m2!3d41.5868727!4d-93.8118733!15sCg5vd24gYWVzdGhldGljc5IBC21lZGljYWxfc3BhqgFLEAEqEiIOb3duIGFlc3RoZXRpY3MoADIfEAEiGxQYyzhi_LQcyRViqag_cSExnuB2n5YyK36nMDISEAIiDm93biBhZXN0aGV0aWNz4AEA!16s%2Fg%2F11mdb849vx?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">
            <button type="button" className="[box-shadow:none] [border:none] [margin:10px] [background-image:linear-gradient(to_right,_#bd725b,_#9f6048)] [border-radius:50px] max-[768px]:[margin:8px_5px] max-[768px]:[padding:0.6rem_1.2rem] max-[768px]:[font-size:0.85rem]">
              Directions
            </button>
          </a>
          <p>
            <a
              href="tel:5156721860"
              style={{ textDecoration: "none", color: "white" }}
            >
              (515)-672-1860
            </a>
            <br />
            <a
              href="mailto:info@ownaesthetics.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Email: info@ownaesthetics.com
            </a>
          </p>
          <div className="[align-items:center] [display:flex] [flex-wrap:wrap] [gap:10px] [justify-content:center] [margin-top:18px] [&_a]:[align-items:center] [&_a]:[background:rgba(255,_255,_255,_0.92)] [&_a]:[border:1px_solid_rgba(255,_255,_255,_0.5)] [&_a]:[border-radius:999px] [&_a]:[color:#163041] [&_a]:[display:inline-flex] [&_a]:[gap:8px] [&_a]:[height:40px] [&_a]:[justify-content:center] [&_a]:[opacity:1] [&_a]:[padding:0_14px_0_10px] [&_a]:[text-decoration:none] [&_a]:[transition:background-color_0.2s_ease,_transform_0.2s_ease] [&_a:hover]:[background:white] [&_a:hover]:[color:#163041] [&_a:hover]:[transform:translateY(-1px)] [&_img]:[display:block] [&_img]:[height:20px] [&_img]:[width:20px] [&_span]:[color:#163041] [&_span]:[font-size:0.88rem] [&_span]:[font-weight:700] [&_span]:[line-height:1]" aria-label="Social media links">
            <a
              href="https://www.facebook.com/p/Own-Aesthetics-61576022630962/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Own Aesthetics on Facebook"
            >
              <img src="/assets/images/images/facebook-icon.webp" alt="" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/ownaestheticsdsm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Own Aesthetics on Instagram"
            >
              <img src="/assets/images/images/instagram-icon.webp" alt="" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="[:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(a)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(a)]:[line-height:1.6]! [&_h3]:[color:#9e9c8d] [&_h3]:[margin-bottom:20px] [&_h3]:[font-size:1.5rem] [&_h3]:[display:flex] [&_h3]:[align-items:center] [&_h3]:[gap:10px] [&_h3]:[justify-content:center] [&_h3::before]:[content:attr(data-icon)] [&_h3::before]:[font-size:1.1rem] [&_p]:[opacity:0.8] [&_p]:[line-height:1.6] [&_p]:[color:white] [&_p]:[text-decoration:none] [&_p]:[transition:all_0.3s_ease] [&_p]:[font-size:1rem] [&_a]:[opacity:0.8] [&_a]:[line-height:1.6] [&_a]:[color:white] [&_a]:[text-decoration:none] [&_a]:[transition:all_0.3s_ease] [&_a]:[font-size:1rem] [&_a:hover]:[color:#00d4ff] [&_a:hover]:[transform:translateX(5px)] max-[768px]:[&_h3]:[font-size:1.1rem] max-[768px]:[&_h3]:[margin-bottom:15px] max-[768px]:[&_h3::before]:[font-size:1rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_a]:[font-size:0.9rem]">
          <h3>Hours</h3>
          <p>Mon&nbsp;&nbsp;&nbsp;&nbsp;By appt. only</p>
          <p>Tue&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 5:00pm</p>
          <p>Wed&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 7:00pm</p>
          <p>Thu&nbsp;&nbsp;&nbsp;&nbsp;10:00am – 5:00pm</p>
          <p>Fri&nbsp;&nbsp;&nbsp;&nbsp;9:00am – 5:00pm</p>
          <p>Sat&nbsp;&nbsp;&nbsp;&nbsp;by appt. only</p>
          <p>Sun&nbsp;&nbsp;&nbsp;&nbsp;closed</p>
        </div>
        {/* <div className="[:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(a)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(a)]:[line-height:1.6]! [&_h3]:[color:#9e9c8d] [&_h3]:[margin-bottom:20px] [&_h3]:[font-size:1.5rem] [&_h3]:[display:flex] [&_h3]:[align-items:center] [&_h3]:[gap:10px] [&_h3]:[justify-content:center] [&_h3::before]:[content:attr(data-icon)] [&_h3::before]:[font-size:1.1rem] [&_p]:[opacity:0.8] [&_p]:[line-height:1.6] [&_p]:[color:white] [&_p]:[text-decoration:none] [&_p]:[transition:all_0.3s_ease] [&_p]:[font-size:1rem] [&_a]:[opacity:0.8] [&_a]:[line-height:1.6] [&_a]:[color:white] [&_a]:[text-decoration:none] [&_a]:[transition:all_0.3s_ease] [&_a]:[font-size:1rem] [&_a:hover]:[color:#00d4ff] [&_a:hover]:[transform:translateX(5px)] max-[768px]:[&_h3]:[font-size:1.1rem] max-[768px]:[&_h3]:[margin-bottom:15px] max-[768px]:[&_h3::before]:[font-size:1rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_a]:[font-size:0.9rem]">
          <h3 data-icon="🔬">Research & Innovation</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p>
        </div> */}
        <div className="[:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(a)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(a)]:[line-height:1.6]! [&_h3]:[color:#9e9c8d] [&_h3]:[margin-bottom:20px] [&_h3]:[font-size:1.5rem] [&_h3]:[display:flex] [&_h3]:[align-items:center] [&_h3]:[gap:10px] [&_h3]:[justify-content:center] [&_h3::before]:[content:attr(data-icon)] [&_h3::before]:[font-size:1.1rem] [&_p]:[opacity:0.8] [&_p]:[line-height:1.6] [&_p]:[color:white] [&_p]:[text-decoration:none] [&_p]:[transition:all_0.3s_ease] [&_p]:[font-size:1rem] [&_a]:[opacity:0.8] [&_a]:[line-height:1.6] [&_a]:[color:white] [&_a]:[text-decoration:none] [&_a]:[transition:all_0.3s_ease] [&_a]:[font-size:1rem] [&_a:hover]:[color:#00d4ff] [&_a:hover]:[transform:translateX(5px)] max-[768px]:[&_h3]:[font-size:1.1rem] max-[768px]:[&_h3]:[margin-bottom:15px] max-[768px]:[&_h3::before]:[font-size:1rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_a]:[font-size:0.9rem]">
          {/* <h3 data-icon="🔬">Follow us</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p> */}

          {/* <ContactForm
            title="Join Our Health Community"
            subtitle="Sign up and get the latest wellness tips in your inbox."
            placeholder="you@example.com"
            buttonText="Join Now"
              /> */}
          <div className="newsletter-container [padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background:#f7f7f7] [text-align:center] [border-radius:12px] [max-width:600px] [margin:2rem_auto] [box-shadow:0_8px_20px_rgba(0,_0,_0,_0.05)] [&.newsletter-container_h2]:[font-size:1.8rem] [&.newsletter-container_h2]:[margin-bottom:0.5rem] [&.newsletter-container_h2]:[color:#222] [&.newsletter-container_p]:[font-size:1rem] [&.newsletter-container_p]:[color:#555] [&.newsletter-container_p]:[margin-bottom:1.5rem]">
            <h2>
              <b>Want to learn more?</b>
            </h2>
            <p>Enter your information below and we'll get back to you!</p>

            <form
              className="[display:flex] [flex-direction:column] [gap:1rem] [align-items:center] [&_input]:[padding:0.75rem_1rem] [&_input]:[border:1px_solid_#ccc] [&_input]:[border-radius:8px] [&_input]:[font-size:1rem] [&_input]:[width:100%] [&_input]:[max-width:300px] [&_button]:[background-color:#454142] [&_button]:[color:white] [&_button]:[padding:0.75rem_1.5rem] [&_button]:[border:none] [&_button]:[border-radius:8px] [&_button]:[font-size:1rem] [&_button]:[cursor:pointer] [&_button]:[transition:background_0.3s_ease] [&_button:hover]:[background-color:#454142bd]"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="d2c03bfd-17bb-4683-b096-fc7df9822b38"
              />

              <input
                type="text"
                className=""
                placeholder="Your name"
                name="name"
                required
              />

              <input
                type="email"
                className=""
                placeholder="Your email"
                name="email"
                required
              />

              <input
                type="tel"
                className=""
                placeholder="Your phone number"
                name="phone"
                required
              />

              <input
                type="text"
                className=""
                placeholder="How can we help?"
                name="interest"
              />

              {/* ✅ Checkbox group */}
              <div className="checkbox-group [display:flex] [flex-direction:column] [gap:10px] [margin:15px_0] [&_label]:[display:flex] [&_label]:[align-items:center] [&_label]:[gap:10px] [&_label]:[color:black] [&_label]:[font-size:14px] [&_label]:[cursor:pointer]">
                <label>
                  <input
                    type="checkbox"
                    name="preferences[]"
                    value="newsletter"
                  />
                  Please add me to your newsletter/special offer email list
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="preferences[]"
                    value="information"
                  />
                  I would like more information about a service or product
                </label>
              </div>

              <button type="submit" className="[background:var(--accent-2)] [color:#0e1b15] [border:none] [padding:10px_14px] [border-radius:10px] [font-weight:800] [cursor:pointer] [&:hover]:[filter:brightness(1.05)]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="[border-top:1px_solid_rgba(0,_212,_255,_0.2)] [padding-top:20px] [opacity:0.6] [color:burlywood] max-[768px]:[padding-top:15px] max-[768px]:[font-size:0.85rem]">
        <p>&copy; 2025 Own Aesthetics.</p>
        <Link
          href="/terms"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "15px",
          }}
        >
          Terms of Service
        </Link>
        <Link href="/privacy" style={{ color: "white", textDecoration: "none" }}>
          Privacy Policy
        </Link>
        <Link
          href="/cancellation"
          style={{ color: "white", textDecoration: "none", marginLeft: "15px" }}
        >
          Cancellation Policy
        </Link>
        <div style={{ marginTop: "12px" }}>
          <Link
            href="/services/injectables"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Injectables
          </Link>
          <Link
            href="/services/facials"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Facials
          </Link>
          <Link
            href="/services/nouvaderm-laser-resurfacing"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            NOUVADerm Laser
          </Link>
          <Link
            href="/locations/des-moines"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            Des Moines
          </Link>
          <Link
            href="/locations/west-des-moines"
            style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
          >
            West Des Moines
          </Link>
          <Link
            href="/locations/waukee"
            style={{ color: "white", textDecoration: "none" }}
          >
            Waukee
          </Link>
        </div>
      </div>
    </footer>
  );
}
