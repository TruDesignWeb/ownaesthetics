"use client";
import { useEffect, useState } from "react";
import { BOOKING_HASH } from "../lib/booking";
const STORAGE_KEY = "own-aesthetics-omnilux-popup-dismissed";
const RSVP_POPUP_DELAY = 2500;

export default function RSVPPopup() {
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
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
        className="[width:min(980px,_100%)] [max-height:min(90vh,_860px)] [display:grid] [grid-template-columns:1fr_1fr] [background:#f7f1e8] [border-radius:24px] [overflow:hidden] [box-shadow:0_25px_80px_rgba(0,_0,_0,_0.22)] [position:relative] [animation:rsvpPopupRise_0.32s_ease] max-[900px]:[grid-template-columns:1fr] max-[900px]:[max-width:560px] max-[768px]:[max-height:calc(100vh_-_1.5rem)] max-[768px]:[border-radius:20px] max-[480px]:[max-height:calc(100vh_-_1rem)] max-[480px]:[border-radius:18px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="omnilux-popup-title"
      >
        <button
          type="button"
          className="[position:absolute] [top:1rem] [right:1rem] [width:2.4rem] [height:2.4rem] [border:none] [border-radius:999px] [background:rgba(255,_255,_255,_0.18)] [color:white] [font-size:1.5rem] [line-height:1] [cursor:pointer] [z-index:2] [&:hover]:[background:rgba(255,_255,_255,_0.28)] max-[768px]:[top:0.7rem] max-[768px]:[right:0.7rem] max-[768px]:[width:2.1rem] max-[768px]:[height:2.1rem] max-[768px]:[font-size:1.25rem]"
          onClick={handleClose}
          aria-label="Close announcement popup"
        >
          ×
        </button>

        <div className="[position:relative] [min-height:100%] [background:#e7e3df] max-[900px]:[min-height:230px] max-[768px]:[min-height:190px] max-[480px]:[min-height:160px]">
          <img
            src="/assets/images/omnilux-contour-hero.webp"
            alt="Client holding an illuminated Omnilux Contour LED light therapy mask"
            className="[position:absolute] [inset:0] [width:100%] [height:100%] [object-fit:cover] [object-position:center_28%]"
          />
        </div>

        <div className="[padding:2.5rem] [display:flex] [flex-direction:column] [justify-content:center] [gap:0.35rem] [background:linear-gradient(180deg,_#133550_0%,_#35586d_100%)] [color:white] [overflow-y:auto] max-[768px]:[padding:1.5rem_1.25rem] max-[480px]:[padding:1.25rem_1rem]">
          <img
            src="/assets/images/omnilux-logo-white.webp"
            alt="Omnilux"
            className="[width:150px] [height:auto] [margin-bottom:1.1rem] max-[768px]:[width:128px] max-[768px]:[margin-bottom:0.8rem]"
          />
          <p className="[font-size:0.75rem] [letter-spacing:0.22em] [text-transform:uppercase] [color:rgba(241,_241,_194,_0.82)] [margin-bottom:0.6rem] max-[768px]:[font-size:0.68rem] max-[768px]:[margin-bottom:0.45rem]">
            New at Own Aesthetics
          </p>
          <h2
            id="omnilux-popup-title"
            className="[font-size:clamp(1.8rem,_3vw,_2.6rem)] [line-height:1.1] [font-weight:500] [margin-bottom:0.9rem] max-[768px]:[font-size:1.55rem] max-[768px]:[margin-bottom:0.6rem] max-[480px]:[font-size:1.4rem]"
          >
            We now offer Omnilux&trade; LED Light Therapy
          </h2>
          <p className="[font-size:1.02rem] [line-height:1.65] [color:rgba(255,_255,_255,_0.86)] [margin-bottom:1.6rem] max-[768px]:[font-size:0.94rem] max-[768px]:[line-height:1.5] max-[768px]:[margin-bottom:1.1rem]">
            Clinically proven, medical-grade LED to calm breakouts, boost
            collagen, and reveal a healthier, radiant glow &mdash; now available
            in-office and to take home.
          </p>
          <a
            href={BOOKING_HASH}
            onClick={handleClose}
            className="[display:inline-flex] [align-items:center] [justify-content:center] [text-decoration:none] [border:none] [border-radius:999px] [padding:0.95rem_1.5rem] [background:linear-gradient(135deg,_#f7f1e8_0%,_#ebe1d2_100%)] [color:#133550] [font-size:1rem] [font-weight:600] [cursor:pointer] [transition:transform_0.25s_ease,_box-shadow_0.25s_ease] [&:hover]:[transform:translateY(-1px)] [&:hover]:[box-shadow:0_12px_24px_rgba(0,_0,_0,_0.22)] max-[768px]:[width:100%] max-[768px]:[padding:0.9rem_1.2rem] max-[768px]:[font-size:0.98rem]"
          >
            Book Your Session
          </a>
          <button
            type="button"
            onClick={handleClose}
            className="[margin-top:0.85rem] [background:none] [border:none] [color:rgba(255,_255,_255,_0.62)] [font-size:0.85rem] [cursor:pointer] [align-self:center] [&:hover]:[color:rgba(255,_255,_255,_0.9)]"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
