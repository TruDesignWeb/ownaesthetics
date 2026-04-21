import { Helmet } from "react-helmet";
import {
  buildCanonicalUrl,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
} from "../lib/siteSeo";

export default function Seo({
  title,
  description,
  path = "/",
  canonicalUrl,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots = "index,follow",
  schema,
}) {
  const resolvedCanonicalUrl = canonicalUrl ?? buildCanonicalUrl(path);
  const resolvedTitle = title ?? SITE_NAME;
  const resolvedDescription = description ?? "";

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      {resolvedDescription ? (
        <meta name="description" content={resolvedDescription} />
      ) : null}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={resolvedTitle} />
      {resolvedDescription ? (
        <meta property="og:description" content={resolvedDescription} />
      ) : null}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedCanonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      {resolvedDescription ? (
        <meta name="twitter:description" content={resolvedDescription} />
      ) : null}
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={resolvedCanonicalUrl} />
      <link rel="alternate" hrefLang="en-US" href={resolvedCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={resolvedCanonicalUrl} />
      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
}
