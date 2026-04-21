import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import {
  buildServiceSchema,
  getServicePageConfig,
} from "../lib/serviceSeo";

const DEFAULT_OG_IMAGE =
  "https://ownaesthetics.com/images/OWN%20Branding/OWN%20Final%20Logos/Print%20CMYK/Logo%20Icon/PNG/OWN_Icon_CMYK_Black.png";

export default function ServiceRouteSeo() {
  const { pathname } = useLocation();
  const config = getServicePageConfig(pathname);

  if (!config) return null;

  const url = `https://ownaesthetics.com${config.path}`;
  const schema = buildServiceSchema(config);

  return (
    <Helmet>
      <title>{config.pageTitle}</title>
      <meta name="description" content={config.metaDescription} />
      <meta property="og:title" content={config.pageTitle} />
      <meta property="og:description" content={config.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
