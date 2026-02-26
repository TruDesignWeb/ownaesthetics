import { useState } from "react";
import axios from "axios";
import "../styles/contactform.css";

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

  const API_URL = import.meta.env.VITE_API_URL;

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
    <div className="newsletter-container">
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <form onSubmit={handleSubmit} className="newsletter-form">
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

      {submitted && <p className="thank-you-msg">Thanks for subscribing!</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}