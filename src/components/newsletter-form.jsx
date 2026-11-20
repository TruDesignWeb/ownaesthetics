const WEB3FORMS_KEY = "d2c03bfd-17bb-4683-b096-fc7df9822b38";

export default function NewsletterForm({ compact = false }) {
  if (compact) {
    return (
      <form className="newsletter-popup-form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
        <label className="newsletter-popup-email">
          Your email
          <input type="email" name="email" placeholder="Your email" autoComplete="email" required />
        </label>
        <label className="newsletter-popup-consent">
          <input type="checkbox" name="preferences[]" value="newsletter" required />
          Please add me to your newsletter/special offer email list
        </label>
        <button type="submit">Subscribe</button>
      </form>
    );
  }

  return (
    <div className="newsletter-container [padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background:#f7f7f7] [text-align:center] [border-radius:12px] [max-width:600px] [margin:2rem_auto] [box-shadow:0_8px_20px_rgba(0,_0,_0,_0.05)] [&.newsletter-container_h2]:[font-size:1.8rem] [&.newsletter-container_h2]:[margin-bottom:0.5rem] [&.newsletter-container_h2]:[color:#222] [&.newsletter-container_p]:[font-size:1rem] [&.newsletter-container_p]:[color:#555] [&.newsletter-container_p]:[margin-bottom:1.5rem]">
      <h2><b>Want to learn more?</b></h2>
      <p>Enter your information below and we'll get back to you!</p>
      <form
        className="[display:flex] [flex-direction:column] [gap:1rem] [align-items:center] [&_input]:[padding:0.75rem_1rem] [&_input]:[border:1px_solid_#ccc] [&_input]:[border-radius:8px] [&_input]:[font-size:1rem] [&_input]:[width:100%] [&_input]:[max-width:300px] [&_button]:[background-color:#454142] [&_button]:[color:white] [&_button]:[padding:0.75rem_1.5rem] [&_button]:[border:none] [&_button]:[border-radius:8px] [&_button]:[font-size:1rem] [&_button]:[cursor:pointer] [&_button]:[transition:background_0.3s_ease] [&_button:hover]:[background-color:#454142bd]"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
        <input type="text" placeholder="Your name" name="name" required />
        <input type="email" placeholder="Your email" name="email" autoComplete="email" required />
        <input type="tel" placeholder="Your phone number" name="phone" required />
        <input type="text" placeholder="How can we help?" name="interest" />
        <div className="checkbox-group [display:flex] [flex-direction:column] [gap:10px] [margin:15px_0] [&_label]:[display:flex] [&_label]:[align-items:center] [&_label]:[gap:10px] [&_label]:[color:black] [&_label]:[font-size:14px] [&_label]:[cursor:pointer]">
          <label>
            <input type="checkbox" name="preferences[]" value="newsletter" />
            Please add me to your newsletter/special offer email list
          </label>
          <label>
            <input type="checkbox" name="preferences[]" value="information" />
            I would like more information about a service or product
          </label>
        </div>
        <button type="submit" className="[background:var(--accent-2)] [color:#0e1b15] [border:none] [padding:10px_14px] [border-radius:10px] [font-weight:800] [cursor:pointer] [&:hover]:[filter:brightness(1.05)]">
          Subscribe
        </button>
      </form>
    </div>
  );
}
