import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  buildCanonicalUrl,
} from "./siteSeo";

// Builds a Next.js Metadata object with a self-referencing canonical on
// https://www.ownaesthetics.com plus Open Graph and Twitter cards.
export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}) {
  const canonical = buildCanonicalUrl(path);

  const metadata = {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };

  if (noindex) {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}
