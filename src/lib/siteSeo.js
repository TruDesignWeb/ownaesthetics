export const SITE_URL = "https://ownaesthetics.com";
export const SITE_NAME = "Own Aesthetics";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/own-fb-hom.png`;

export const DEFAULT_SEO = {
  title: "Med Spa in West Des Moines, IA | Own Aesthetics",
  description:
    "Own Aesthetics is a medical spa in West Des Moines offering injectables, facials, laser resurfacing, skincare analysis, and personalized treatment planning.",
};

export const routeSeo = {
  "/": DEFAULT_SEO,
  "/about": {
    title: "About Own Aesthetics | West Des Moines Med Spa Team",
    description:
      "Meet the Own Aesthetics team in West Des Moines and learn about the practice philosophy behind our injectables, skincare, and laser services.",
  },
  "/services": {
    title: "Medical Spa Services | Own Aesthetics",
    description:
      "Explore injectables, facials, chemical peels, laser resurfacing, microneedling, and other medical spa services at Own Aesthetics in West Des Moines.",
  },
  "/contact": {
    title: "Contact Own Aesthetics | West Des Moines, IA",
    description:
      "Contact Own Aesthetics in West Des Moines for appointments, questions, and treatment planning for injectables, facials, laser services, and skincare.",
  },
  "/reviews": {
    title: "Patient Reviews | Own Aesthetics",
    description:
      "Read patient reviews and testimonials for Own Aesthetics in West Des Moines and see what clients say about their treatment experience.",
  },
  "/skincare": {
    title: "Skincare Treatments and Partners | Own Aesthetics",
    description:
      "Explore skincare-focused treatments, Skin Type Solutions, and professional skincare partner offerings at Own Aesthetics.",
  },
  "/socials": {
    title: "Follow Own Aesthetics | Social Media",
    description:
      "Connect with Own Aesthetics on Facebook, Instagram, and Google to follow updates, announcements, and patient-focused skincare content.",
  },
  "/appointments": {
    title: "Request an Appointment | Own Aesthetics",
    description:
      "Send an appointment request to Own Aesthetics in West Des Moines and share what treatment or consultation you are interested in.",
    robots: "noindex,follow",
  },
  "/membership": {
    title: "Membership | Own Aesthetics",
    description:
      "Learn about the Own Aesthetics membership page and upcoming membership information.",
    robots: "noindex,follow",
  },
  "/referring-partners": {
    title: "Referring Partners | Own Aesthetics",
    description:
      "Information for referring partners and future partner resources from Own Aesthetics.",
    robots: "noindex,follow",
  },
  "/rsvp": {
    title: "Event RSVP | Own Aesthetics",
    description:
      "RSVP for an Own Aesthetics event in West Des Moines and reserve your spot for upcoming celebrations and specials.",
    robots: "noindex,follow",
  },
  "/terms": {
    title: "Terms of Service | Own Aesthetics",
    description:
      "Review the terms of service for using the Own Aesthetics website and related services.",
  },
  "/privacy": {
    title: "Privacy Policy | Own Aesthetics",
    description:
      "Read the Own Aesthetics privacy policy and learn how website and contact information is collected, used, and protected.",
  },
  "/cancellation": {
    title: "Cancellation Policy | Own Aesthetics",
    description:
      "Review the Own Aesthetics appointment cancellation, no-show, and late-arrival policy for West Des Moines patients.",
  },
  "/login": {
    title: "Login | Own Aesthetics",
    description:
      "Log in to your Own Aesthetics account.",
    robots: "noindex,follow",
  },
  "/register": {
    title: "Register | Own Aesthetics",
    description:
      "Create an Own Aesthetics account.",
    robots: "noindex,follow",
  },
  "/dashboard": {
    title: "Dashboard | Own Aesthetics",
    description:
      "Access your Own Aesthetics dashboard.",
    robots: "noindex,follow",
  },
};

export function buildCanonicalUrl(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return `${SITE_URL}${normalizedPath}`;
}
