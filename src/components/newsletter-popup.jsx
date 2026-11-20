"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import NewsletterForm from "./newsletter-form";

const STORAGE_KEY = "own-newsletter-popup-dismissed-at";
const SHOW_AFTER = 3000;
const SUPPRESS_FOR = 14 * 24 * 60 * 60 * 1000;

function hasVisibleModal() {
  return [...document.querySelectorAll('[aria-modal="true"]')].some((modal) => {
    const style = window.getComputedStyle(modal);
    return style.display !== "none" && style.visibility !== "hidden" && modal.getClientRects().length > 0;
  });
}

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef(null);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      setIsOpen(false);
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (["/membership", "/login", "/register", "/dashboard", "/appointments"].includes(pathname)) {
      return undefined;
    }

    let observer;
    const timer = window.setTimeout(() => {
      let dismissedAt = 0;
      try {
        dismissedAt = Number(localStorage.getItem(STORAGE_KEY));
      } catch {
        dismissedAt = 0;
      }
      if (dismissedAt && Date.now() - dismissedAt < SUPPRESS_FOR) return;

      if (!hasVisibleModal()) {
        setIsOpen(true);
        return;
      }

      observer = new MutationObserver(() => {
        if (!hasVisibleModal()) {
          observer.disconnect();
          setIsOpen(true);
        }
      });
      observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    }, SHOW_AFTER);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dismiss();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = document.querySelectorAll(
        ".newsletter-popup a[href], .newsletter-popup button:not([disabled]), .newsletter-popup input:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
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
      className="newsletter-popup"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="newsletter-popup-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-popup-title"
      >
        <button
          className="newsletter-popup-close"
          type="button"
          onClick={dismiss}
          ref={closeButton}
          aria-label="Close newsletter sign-up"
        >
          ×
        </button>
        <h2 id="newsletter-popup-title">Want to learn more?</h2>
        <p>Enter your information below and we'll get back to you!</p>
        <NewsletterForm compact />
        <button className="newsletter-popup-later" type="button" onClick={dismiss}>
          Maybe later
        </button>
      </section>
    </div>
  );
}
