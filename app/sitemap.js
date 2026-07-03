import { SITE_URL } from "../src/lib/siteSeo";
import { allServiceSlugs } from "../src/lib/servicesCatalog";
import { locationPages } from "../src/lib/landingPages";

const LAST_MODIFIED = new Date("2026-07-03");

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/reviews", changeFrequency: "monthly", priority: 0.7 },
  { path: "/skincare", changeFrequency: "monthly", priority: 0.6 },
  { path: "/socials", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cancellation", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = allServiceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries = Object.keys(locationPages).map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...locationEntries];
}
