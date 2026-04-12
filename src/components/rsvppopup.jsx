import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/rsvppopup.css";

const STORAGE_KEY = "own-aesthetics-rsvp-popup-dismissed";
const RSVP_POPUP_DELAY = 2500;

export default function RSVPPopup() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (isDismissed) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, RSVP_POPUP_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    Object.entries(formData).forEach(([key, value]) => {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        params.set(key, trimmedValue);
      }
    });

    return params.toString();
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
    navigate(`/rsvp${queryString ? `?${queryString}` : ""}`);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="rsvp-popup-overlay"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="rsvp-popup-card"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-popup-title"
      >
        <button
          type="button"
          className="rsvp-popup-close"
          onClick={handleClose}
          aria-label="Close invitation popup"
        >
          ×
        </button>

        <div className="rsvp-popup-copy">
          <p className="rsvp-popup-eyebrow">Own Aesthetics</p>
          <h2 id="rsvp-popup-title" className="rsvp-popup-title">
            OWN AESTHETICS TURNS ONE
          </h2>
          <p className="rsvp-popup-subtitle">
            You&apos;re invited to our Glow-Up Birthday Bash!
          </p>
          <p className="rsvp-popup-text">
            Celebrate our 1st Anniversary with an exclusive evening of skin and
            beauty, drawings, plus special event-only pricing.
          </p>
          <div className="rsvp-popup-details">
            <p>Thursday, April 30</p>
            <p>4-7 pm</p>
            <p>Total Health Experience</p>
            <p>7601 Office Plaza Dr., Norwood Bldg. 1 | Suite 115</p>
            <p>WDM, IA</p>
          </div>
        </div>

        <form className="rsvp-popup-form" onSubmit={handleSubmit} noValidate>
          <div className="rsvp-popup-form-row">
            <div className="rsvp-popup-field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="rsvp-popup-error">{errors.firstName}</p>
              )}
            </div>
            <div className="rsvp-popup-field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="rsvp-popup-error">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="rsvp-popup-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="rsvp-popup-error">{errors.email}</p>}
          </div>

          <div className="rsvp-popup-field">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="rsvp-popup-button">
            Reserve Your Spot
          </button>
        </form>
      </div>
    </div>
  );
}
