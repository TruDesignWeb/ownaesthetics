"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "own-membership-popup-dismissed-at";
const SHOW_AFTER = 3000;
const SUPPRESS_FOR = 14 * 24 * 60 * 60 * 1000;

function hasVisibleModal() {
  return [...document.querySelectorAll('[aria-modal="true"]')].some((modal) => {
    const style = window.getComputedStyle(modal);
    return style.display !== "none" && style.visibility !== "hidden" && modal.getClientRects().length > 0;
  });
}

export default function MembershipPopup() {
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
      let closedAt = 0;
      try {
        closedAt = Number(localStorage.getItem(STORAGE_KEY));
      } catch {
        closedAt = 0;
      }
      if (closedAt && Date.now() - closedAt < SUPPRESS_FOR) return;

      const openWhenAvailable = () => {
        if (hasVisibleModal()) {
          observer = new MutationObserver(() => {
            if (!hasVisibleModal()) {
              observer.disconnect();
              setIsOpen(true);
            }
          });
          observer.observe(document.body, { attributes: true, childList: true, subtree: true });
          return;
        }
        setIsOpen(true);
      };

      openWhenAvailable();
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
        ".membership-popup a[href], .membership-popup button:not([disabled])",
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
      className="membership-popup"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="membership-popup-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="membership-popup-title"
      >
        <button
          className="membership-popup-close"
          type="button"
          onClick={dismiss}
          ref={closeButton}
          aria-label="Close membership offer"
        >
          ×
        </button>
        <div className="membership-popup-image" role="img" aria-label="Own Aesthetics" />
        <div className="membership-popup-copy">
          <p className="membership-popup-kicker">INTRODUCING</p>
          <h2 id="membership-popup-title">The Own Aesthetics Membership</h2>
          <p>
            Three levels from $179/month<br />No enrollment fee
          </p>
          <Link className="membership-popup-cta" href="/membership" onClick={dismiss}>
            View the Options
          </Link>
          <button className="membership-popup-later" type="button" onClick={dismiss}>
            Maybe later
          </button>
        </div>
      </section>
    </div>
  );
}