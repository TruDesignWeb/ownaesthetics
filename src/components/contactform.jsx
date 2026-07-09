"use client";
import { useState } from "react";
import axios from "axios";
export default function NewsletterSignup({
  title = "Subscribe to our Newsletter",
  subtitle = "Get updates about wellness, promotions, and more.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/newsletter`, { email });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Subscription failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [background:#f7f7f7] [text-align:center] [border-radius:12px] [max-width:600px] [margin:2rem_auto] [box-shadow:0_8px_20px_rgba(0,_0,_0,_0.05)] [&_h2]:[font-size:1.8rem] [&_h2]:[margin-bottom:0.5rem] [&_h2]:[color:#222] [&_p]:[font-size:1rem] [&_p]:[color:#555] [&_p]:[margin-bottom:1.5rem]">
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <form onSubmit={handleSubmit} className="[display:flex] [flex-direction:column] [gap:1rem] [align-items:center] [&_input]:[padding:0.75rem_1rem] [&_input]:[border:1px_solid_#ccc] [&_input]:[border-radius:8px] [&_input]:[font-size:1rem] [&_input]:[width:100%] [&_input]:[max-width:300px] [&_button]:[background-color:#454142] [&_button]:[color:white] [&_button]:[padding:0.75rem_1.5rem] [&_button]:[border:none] [&_button]:[border-radius:8px] [&_button]:[font-size:1rem] [&_button]:[cursor:pointer] [&_button]:[transition:background_0.3s_ease] [&_button:hover]:[background-color:#454142bd]">
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : buttonText}
        </button>
      </form>

      {submitted && <p className="[margin-top:1rem] [color:green] [font-weight:bold]">Thanks for subscribing!</p>}
      {error && <p className="">{error}</p>}
    </div>
  );
}