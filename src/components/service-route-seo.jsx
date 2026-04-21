import { useLocation } from "react-router-dom";
import Seo from "./seo";
import {
  buildServiceSchema,
  getServicePageConfig,
} from "../lib/serviceSeo";
import { coreServicePages } from "../lib/landingPages";

export default function ServiceRouteSeo() {
  const { pathname } = useLocation();
  const coreServicePath = pathname.replace(/^\/services\//, "");
  if (coreServicePages[coreServicePath]) {
    return null;
  }
  const config = getServicePageConfig(pathname);

  if (!config) return null;

  const url = `https://ownaesthetics.com${config.path}`;
  const schema = buildServiceSchema(config);

  return (
    <Seo
      title={config.pageTitle}
      description={config.metaDescription}
      path={config.path}
      canonicalUrl={url}
      schema={schema}
    />
  );
}
