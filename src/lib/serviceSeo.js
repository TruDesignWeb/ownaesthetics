const SITE_URL = "https://ownaesthetics.com";

const PROVIDER = {
  "@type": ["DaySpa", "MedicalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Own Aesthetics",
  url: SITE_URL,
  telephone: "+1-515-672-1860",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7601 Office Plaza Dr N Suite 115",
    addressLocality: "West Des Moines",
    addressRegion: "IA",
    postalCode: "50266",
    addressCountry: "US",
  },
};

const AREA_SERVED = [
  "West Des Moines",
  "Polk County",
  "Des Moines",
  "Urbandale",
  "Grimes",
  "Johnston",
  "Waukee",
  "Dallas County",
  "Warren County",
  "Madison County",
];

export const servicePageConfigs = [
  {
    path: "/services/consultation",
    pageTitle: "LifeViz Infinity Pro Consultation | Own Aesthetics",
    metaDescription:
      "Learn about the LifeViz Infinity Pro Consultation at Own Aesthetics in West Des Moines, including 3D imaging, skin analysis, and personalized treatment planning.",
    name: "LifeViz Infinity Pro Consultation",
    serviceType: "Aesthetic consultation",
    description:
      "Advanced 3D imaging and skin analysis designed to guide a fully personalized treatment plan.",
    offers: [{ name: "LifeViz Infinity Pro Consultation", price: 100 }],
  },
  {
    path: "/services/aquafirme",
    pageTitle: "AquaFirmeXS | Own Aesthetics",
    metaDescription:
      "Explore AquaFirmeXS at Own Aesthetics in West Des Moines, a customizable skin and scalp rejuvenation treatment with little to no downtime.",
    name: "AquaFirmeXS",
    serviceType: "Facial treatment",
    description:
      "No-downtime skin and scalp rejuvenation with customizable treatment protocols.",
    offers: [{ name: "AquaFirmeXS", minPrice: 200, maxPrice: 400 }],
  },
  {
    path: "/services/nouvaderm",
    pageTitle: "NOUVADerm Laser Treatment | Own Aesthetics",
    metaDescription:
      "Learn about NOUVADerm laser treatment at Own Aesthetics in West Des Moines for customized skin revitalization and scalp-support treatments.",
    name: "NOUVADerm Laser Treatment",
    serviceType: "Laser skin resurfacing",
    description:
      "A flexible laser platform designed for customized skin revitalization and scalp-support treatments.",
    offers: [{ name: "NOUVADerm Skin Resurfacing Laser", price: 750 }],
  },
  {
    path: "/services/saltfacial",
    pageTitle: "SaltFacial Skin Renewal Therapy | Own Aesthetics",
    metaDescription:
      "Discover SaltFacial Skin Renewal Therapy at Own Aesthetics in West Des Moines, a three-part facial treatment designed to exfoliate, hydrate, and renew the skin.",
    name: "SaltFacial Skin Renewal Therapy",
    serviceType: "Facial treatment",
    description:
      "A three-part medical-grade facial that exfoliates, detoxifies, hydrates, and renews the skin.",
    offers: [{ name: "SaltFacial Skin Renewal Therapy", price: 300 }],
  },
  {
    path: "/services/antiwrinkle",
    pageTitle: "Anti-Wrinkle Injections | Own Aesthetics",
    metaDescription:
      "Explore anti-wrinkle injections at Own Aesthetics in West Des Moines, including personalized Botox Cosmetic and Dysport treatments for natural-looking results.",
    name: "Anti-Wrinkle Injections",
    serviceType: "Neuromodulator injections",
    description:
      "Personalized neurotoxin treatments designed to soften expression lines with refreshed, natural-looking results.",
    offers: [
      { name: "BOTOX Cosmetic", price: 14, unitText: "unit" },
      { name: "Dysport", price: 14, unitText: "unit" },
    ],
  },
  {
    path: "/services/cellenis",
    pageTitle: "Cellenis Derma PRP/PRF | Own Aesthetics",
    metaDescription:
      "Learn about Cellenis Derma PRP and PRF treatments at Own Aesthetics in West Des Moines for regenerative skin renewal using your own platelet-rich plasma.",
    name: "Cellenis Derma PRP/PRF",
    serviceType: "Regenerative skin treatment",
    description:
      "A natural regenerative treatment that supports skin renewal using platelet-rich plasma and related biologic therapies.",
    offers: [
      { name: "PRF", price: 600 },
      { name: "PRF ezGEL", price: 800 },
    ],
  },
  {
    path: "/services/chemicalpeels",
    pageTitle: "Chemical Peels | Own Aesthetics",
    metaDescription:
      "Explore chemical peels at Own Aesthetics in West Des Moines for refreshed tone, texture, and radiance with little to no downtime.",
    name: "Chemical Peels",
    serviceType: "Chemical peel treatment",
    description:
      "Customized peel options designed to refresh tone, texture, and radiance with little to no downtime.",
    offers: [{ name: "Chemical Peels", price: 150 }],
  },
  {
    path: "/services/exosomes",
    pageTitle: "EXO|E Skin Revitalizing Complex | Own Aesthetics",
    metaDescription:
      "Learn about EXO|E Skin Revitalizing Complex at Own Aesthetics in West Des Moines, a restorative add-on that supports healing and enhances treatment results.",
    name: "EXO|E Skin Revitalizing Complex",
    serviceType: "Skin revitalizing treatment",
    description:
      "A restorative add-on that supports healing, calms inflammation, and enhances treatment results.",
    offers: [{ name: "Exosome Therapy", price: 200 }],
  },
  {
    path: "/services/facials",
    pageTitle: "Customized Facials | Own Aesthetics",
    metaDescription:
      "Explore customized facials at Own Aesthetics in West Des Moines with personalized, results-driven treatments tailored to your skin goals.",
    name: "Customized Facials",
    serviceType: "Facial treatment",
    description:
      "Personalized, results-driven facials tailored to your skin goals.",
    offers: [{ name: "Customized Facials", minPrice: 125, maxPrice: 175 }],
  },
  {
    path: "/services/hairtreatments",
    pageTitle: "Hair Wellness and Restoration | Own Aesthetics",
    metaDescription:
      "Learn about hair wellness and restoration treatments at Own Aesthetics in West Des Moines designed to support healthier, stronger hair growth.",
    name: "Hair Wellness and Restoration",
    serviceType: "Hair restoration treatment",
    description:
      "Scalp-focused support designed to encourage healthier, stronger hair growth.",
    offers: [{ name: "Hair Wellness and Restoration", minPrice: 3000 }],
  },
  {
    path: "/services/juvederm",
    pageTitle: "JUVEDERM Injectable HA Dermal Fillers | Own Aesthetics",
    metaDescription:
      "Explore JUVEDERM injectable HA dermal fillers at Own Aesthetics in West Des Moines for natural-looking facial volume and contour restoration.",
    name: "JUVEDERM Injectable HA Dermal Fillers",
    serviceType: "Dermal filler treatment",
    description:
      "Immediate, natural-looking volume restoration with hyaluronic acid fillers.",
    offers: [{ name: "Derma Fillers", minPrice: 750, maxPrice: 875 }],
  },
  {
    path: "/services/kybella",
    pageTitle: "Kybella | Own Aesthetics",
    metaDescription:
      "Learn about Kybella at Own Aesthetics in West Des Moines, an injectable treatment designed to refine the profile under the chin.",
    name: "Kybella",
    serviceType: "Injectable fat reduction treatment",
    description:
      "A targeted injectable treatment designed to refine the profile under the chin.",
    offers: [{ name: "Kybella", price: 750, unitText: "vial" }],
  },
  {
    path: "/services/sclerotherapy",
    pageTitle: "Sclerotherapy | Own Aesthetics",
    metaDescription:
      "Explore sclerotherapy at Own Aesthetics in West Des Moines, a minimally invasive treatment for smoother, clearer-looking legs.",
    name: "Sclerotherapy",
    serviceType: "Vein treatment",
    description:
      "A minimally invasive treatment for smoother, clearer-looking legs.",
    offers: [{ name: "Sclerotherapy", minPrice: 400, maxPrice: 800 }],
  },
  {
    path: "/services/sculptra",
    pageTitle: "Sculptra | Own Aesthetics",
    metaDescription:
      "Learn about Sculptra at Own Aesthetics in West Des Moines, a collagen-stimulating injectable designed for gradual, long-lasting rejuvenation.",
    name: "Sculptra",
    serviceType: "Collagen-stimulating injectable",
    description:
      "Collagen-stimulating injectable designed for gradual, long-lasting rejuvenation.",
    offers: [{ name: "Sculptra", price: 600, unitText: "vial" }],
  },
  {
    path: "/services/skinpen",
    pageTitle: "SkinPen Microneedling | Own Aesthetics",
    metaDescription:
      "Explore SkinPen microneedling at Own Aesthetics in West Des Moines for collagen support, smoother texture, and natural skin rejuvenation.",
    name: "SkinPen Microneedling",
    serviceType: "Microneedling treatment",
    description:
      "Microneedling treatment designed to support skin renewal, texture improvement, and collagen stimulation.",
    offers: [{ name: "Skin Pen Microneedling", price: 350 }],
  },
  {
    path: "/services/skintypes",
    pageTitle: "Skin Type Solutions | Own Aesthetics",
    metaDescription:
      "Discover Skin Type Solutions at Own Aesthetics in West Des Moines for personalized skincare recommendations based on your Baumann Skin Type.",
    name: "Skin Type Solutions",
    serviceType: "Personalized skincare recommendations",
    description:
      "Personalized skincare recommendations built around your unique Baumann Skin Type.",
  },
];

function buildOfferSchema(offer) {
  if (!offer) return null;

  if (offer.price !== undefined && offer.unitText) {
    return {
      "@type": "Offer",
      name: offer.name,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: String(offer.price),
        unitText: offer.unitText,
      },
    };
  }

  if (offer.price !== undefined) {
    return {
      "@type": "Offer",
      name: offer.name,
      priceCurrency: "USD",
      price: String(offer.price),
    };
  }

  if (offer.minPrice !== undefined || offer.maxPrice !== undefined) {
    return {
      "@type": "Offer",
      name: offer.name,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        ...(offer.minPrice !== undefined
          ? { minPrice: String(offer.minPrice) }
          : {}),
        ...(offer.maxPrice !== undefined
          ? { maxPrice: String(offer.maxPrice) }
          : {}),
      },
    };
  }

  return null;
}

export function getServicePageConfig(pathname) {
  return servicePageConfigs.find((config) => config.path === pathname) || null;
}

export function buildServiceSchema(config) {
  const offers = (config.offers || [])
    .map(buildOfferSchema)
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${config.path}#service`,
    name: config.name,
    url: `${SITE_URL}${config.path}`,
    serviceType: config.serviceType,
    description: config.description,
    provider: PROVIDER,
    areaServed: AREA_SERVED,
  };

  if (offers.length === 1) {
    schema.offers = offers[0];
  } else if (offers.length > 1) {
    schema.offers = offers;
  }

  return schema;
}

export const serviceCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/services#webpage`,
  name: "Services | Own Aesthetics",
  url: `${SITE_URL}/services`,
  description:
    "Explore the medical-grade treatment menu at Own Aesthetics in West Des Moines, from injectables and facials to laser and restorative services.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: servicePageConfigs.map((config, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: config.name,
      url: `${SITE_URL}${config.path}`,
    })),
  },
};
