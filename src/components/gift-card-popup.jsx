"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BOOKING_HASH } from "../lib/booking";

const STORAGE_KEY = "own-gift-card-popup-dismissed-at";
const SHOW_AFTER = 3000;
const SUPPRESS_FOR = 14 * 24 * 60 * 60 * 1000;

export default function GiftCardPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef(null);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (["/membership", "/login", "/register", "/dashboard", "/appointments"].includes(pathname)) {
      return undefined;
    }

    let dismissedAt = 0;
    try {
      dismissedAt = Number(localStorage.getItem(STORAGE_KEY));
    } catch {}
    if (dismissedAt && Date.now() - dismissedAt < SUPPRESS_FOR) return undefined;

    const timer = window.setTimeout(() => setIsOpen(true), SHOW_AFTER);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [dismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="gift-card-popup"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="gift-card-popup-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-card-popup-title"
      >
        <button
          className="gift-card-popup-close"
          type="button"
          onClick={dismiss}
          ref={closeButton}
          aria-label="Close gift card offer"
        >
          <span aria-hidden="true" />
        </button>

        <div className="gift-card-popup-art" aria-hidden="true">
          <div className="gift-card-bonus">
            <span className="gift-card-bonus-label">YOUR BONUS</span>
            <span className="gift-card-bonus-value">+20%</span>
          </div>
          <div className="gift-card-main">
            <div className="gift-card-brand">
              <span className="gift-card-monogram">A</span>
              <span className="gift-card-name">OWN</span>
              <span className="gift-card-subname">AESTHETICS</span>
            </div>
            <span className="gift-card-title">Gift Card</span>
          </div>
        </div>

        <div className="gift-card-popup-copy">
          <p className="gift-card-popup-kicker">BLACK FRIDAY · NOV 23 – 30</p>
          <h2 id="gift-card-popup-title">
            Give a gift card.
            <em>Get 20% back.</em>
          </h2>
          <p className="gift-card-popup-description">
            Buy a gift card in any amount and get a bonus gift card worth 20%.
            Your bonus card is emailed separately within 24 hours.
          </p>
          <a className="gift-card-popup-cta" href={BOOKING_HASH} onClick={dismiss}>
            SHOP GIFT CARDS
          </a>
        </div>
      </section>
    </div>
  );
}
