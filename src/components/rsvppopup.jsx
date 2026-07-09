"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
const STORAGE_KEY = "own-aesthetics-rsvp-popup-dismissed";
const RSVP_POPUP_DELAY = 2500;

export default function RSVPPopup() {
  const router = useRouter();
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
    router.push(`/rsvp${queryString ? `?${queryString}` : ""}`);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="[position:fixed] [inset:0] [z-index:10000] [display:flex] [align-items:center] [justify-content:center] [padding:1.5rem] [background:rgba(10,_20,_30,_0.5)] [backdrop-filter:blur(6px)] [animation:rsvpPopupFadeIn_0.28s_ease] max-[768px]:[align-items:flex-start] max-[768px]:[padding:0.75rem] max-[480px]:[padding:0.5rem]"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="[width:min(980px,_100%)] [max-height:min(90vh,_860px)] [display:grid] [grid-template-columns:1.05fr_0.95fr] [background:#f7f1e8] [border-radius:24px] [overflow:hidden] [box-shadow:0_25px_80px_rgba(0,_0,_0,_0.22)] [position:relative] [animation:rsvpPopupRise_0.32s_ease] max-[900px]:[grid-template-columns:1fr] max-[900px]:[max-width:620px] max-[768px]:[max-height:calc(100vh_-_1.5rem)] max-[768px]:[border-radius:20px] max-[480px]:[max-height:calc(100vh_-_1rem)] max-[480px]:[border-radius:18px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-popup-title"
      >
        <button
          type="button"
          className="[position:absolute] [top:1rem] [right:1rem] [width:2.4rem] [height:2.4rem] [border:none] [border-radius:999px] [background:rgba(255,_255,_255,_0.18)] [color:white] [font-size:1.5rem] [line-height:1] [cursor:pointer] [z-index:2] [&:hover]:[background:rgba(255,_255,_255,_0.28)] max-[768px]:[top:0.7rem] max-[768px]:[right:0.7rem] max-[768px]:[width:2.1rem] max-[768px]:[height:2.1rem] max-[768px]:[font-size:1.25rem]"
          onClick={handleClose}
          aria-label="Close invitation popup"
        >
          ×
        </button>

        <div className="[padding:2.5rem] [background:linear-gradient(180deg,_#133550_0%,_#35586d_100%)] [color:white] [overflow-y:auto] max-[768px]:[padding:1.25rem_1.25rem_1rem] max-[480px]:[padding:1.1rem_1rem_0.9rem]">
          <p className="[font-size:0.75rem] [letter-spacing:0.22em] [text-transform:uppercase] [color:rgba(241,_241,_194,_0.82)] [margin-bottom:0.85rem] max-[768px]:[font-size:0.68rem] max-[768px]:[margin-bottom:0.6rem]">Own Aesthetics</p>
          <h2 id="rsvp-popup-title" className="[font-size:clamp(2rem,_3.4vw,_3rem)] [line-height:1.08] [font-weight:500] [margin-bottom:1rem] max-[768px]:[font-size:1.7rem] max-[768px]:[line-height:1.05] max-[768px]:[margin-bottom:0.7rem] max-[480px]:[font-size:1.45rem]">
            OWN AESTHETICS TURNS ONE
          </h2>
          <p className="[font-size:1.1rem] [line-height:1.6] [color:rgba(255,_255,_255,_0.86)] [margin-bottom:1rem] max-[768px]:[font-size:0.98rem] max-[768px]:[line-height:1.45] max-[768px]:[margin-bottom:0.75rem] max-[480px]:[font-size:0.93rem]">
            You&apos;re invited to our Glow-Up Birthday Bash!
          </p>
          <p className="[font-size:1rem] [line-height:1.7] [color:rgba(255,_255,_255,_0.88)] [margin-bottom:1.5rem] max-[768px]:[font-size:0.92rem] max-[768px]:[line-height:1.45]">
            Celebrate our 1st Anniversary with an exclusive evening of skin and
            beauty, drawings, plus special event-only pricing.
          </p>
          <div className="[display:grid] [gap:0.7rem] [&_p]:[font-size:0.98rem] [&_p]:[line-height:1.5] [&_p]:[padding-bottom:0.7rem] [&_p]:[border-bottom:1px_solid_rgba(255,_255,_255,_0.16)] [&_p:last-child]:[padding-bottom:0] [&_p:last-child]:[border-bottom:none] max-[768px]:[&_p]:[font-size:0.92rem] max-[768px]:[&_p]:[line-height:1.45] max-[768px]:[gap:0.45rem] max-[768px]:[&_p]:[padding-bottom:0.45rem]">
            <p>Thursday, April 30</p>
            <p>4-7 pm</p>
            <p>Total Health Experience</p>
            <p>7601 Office Plaza Dr., Norwood Bldg. 1 | Suite 115</p>
            <p>WDM, IA</p>
          </div>
        </div>

        <form className="[padding:2.5rem] [display:flex] [flex-direction:column] [justify-content:center] [gap:1rem] [background:linear-gradient(180deg,_#f7f1e8_0%,_#ebe1d2_100%)] [overflow-y:auto] max-[768px]:[padding:1rem_1.25rem_1.25rem] max-[768px]:[justify-content:flex-start] max-[768px]:[gap:0.85rem] max-[480px]:[padding:0.9rem_1rem_1rem]" onSubmit={handleSubmit} noValidate>
          <div className="rsvp-popup-form-row [display:grid] [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:1rem] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:0.85rem]">
            <div className="[display:flex] [flex-direction:column] [gap:0.4rem] [&_input]:[width:100%] [&_input]:[padding:0.95rem_1rem] [&_input]:[border:1px_solid_#d7cec2] [&_input]:[border-radius:10px] [&_input]:[font-size:1rem] [&_input]:[background:white] [&_input]:[color:#2b2b2b] [&_input:focus]:[outline:none] [&_input:focus]:[border-color:#9e9c8d] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)] max-[768px]:[&_input]:[padding:0.9rem_0.95rem] max-[768px]:[&_input]:[font-size:0.98rem]">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="[font-size:0.85rem] [color:#9b5b3e]">{errors.firstName}</p>
              )}
            </div>
            <div className="[display:flex] [flex-direction:column] [gap:0.4rem] [&_input]:[width:100%] [&_input]:[padding:0.95rem_1rem] [&_input]:[border:1px_solid_#d7cec2] [&_input]:[border-radius:10px] [&_input]:[font-size:1rem] [&_input]:[background:white] [&_input]:[color:#2b2b2b] [&_input:focus]:[outline:none] [&_input:focus]:[border-color:#9e9c8d] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)] max-[768px]:[&_input]:[padding:0.9rem_0.95rem] max-[768px]:[&_input]:[font-size:0.98rem]">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="[font-size:0.85rem] [color:#9b5b3e]">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="[display:flex] [flex-direction:column] [gap:0.4rem] [&_input]:[width:100%] [&_input]:[padding:0.95rem_1rem] [&_input]:[border:1px_solid_#d7cec2] [&_input]:[border-radius:10px] [&_input]:[font-size:1rem] [&_input]:[background:white] [&_input]:[color:#2b2b2b] [&_input:focus]:[outline:none] [&_input:focus]:[border-color:#9e9c8d] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)] max-[768px]:[&_input]:[padding:0.9rem_0.95rem] max-[768px]:[&_input]:[font-size:0.98rem]">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="[font-size:0.85rem] [color:#9b5b3e]">{errors.email}</p>}
          </div>

          <div className="[display:flex] [flex-direction:column] [gap:0.4rem] [&_input]:[width:100%] [&_input]:[padding:0.95rem_1rem] [&_input]:[border:1px_solid_#d7cec2] [&_input]:[border-radius:10px] [&_input]:[font-size:1rem] [&_input]:[background:white] [&_input]:[color:#2b2b2b] [&_input:focus]:[outline:none] [&_input:focus]:[border-color:#9e9c8d] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(158,_156,_141,_0.16)] max-[768px]:[&_input]:[padding:0.9rem_0.95rem] max-[768px]:[&_input]:[font-size:0.98rem]">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="[border:none] [border-radius:999px] [padding:0.95rem_1.5rem] [background:linear-gradient(135deg,_#133550_0%,_#35586d_100%)] [color:white] [font-size:1rem] [cursor:pointer] [transition:transform_0.25s_ease,_box-shadow_0.25s_ease] [margin-top:0.25rem] [&:hover]:[transform:translateY(-1px)] [&:hover]:[box-shadow:0_12px_24px_rgba(19,_53,_80,_0.18)] max-[768px]:[width:100%] max-[768px]:[padding:0.9rem_1.2rem] max-[768px]:[font-size:0.98rem]">
            Reserve Your Spot
          </button>
        </form>
      </div>
    </div>
  );
}
