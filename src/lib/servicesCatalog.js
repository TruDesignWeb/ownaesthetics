// Central catalog of every /services/[slug] page on the site.
// Combines the classic service pages (serviceSeo.js) with the long-form
// guide pages (landingPages.js) so routing, static params, metadata, and
// the sitemap all share one source of truth.
import { servicePageConfigs, getServicePageConfig } from "./serviceSeo";
import { coreServicePages } from "./landingPages";

export const classicServiceSlugs = servicePageConfigs.map((config) =>
  config.path.replace(/^\/services\//, ""),
);

export const coreServiceSlugs = Object.keys(coreServicePages);

export const allServiceSlugs = [...classicServiceSlugs, ...coreServiceSlugs];

// Returns { title, description } for any known service slug, or null.
export function getServiceSeo(slug) {
  const classic = getServicePageConfig(`/services/${slug}`);
  if (classic) {
    return {
      title: classic.pageTitle,
      description: classic.metaDescription,
    };
  }
  const core = coreServicePages[slug];
  if (core) {
    return {
      title: core.metaTitle,
      description: core.metaDescription,
    };
  }
  return null;
}

export function isCoreServiceSlug(slug) {
  return Boolean(coreServicePages[slug]);
}
