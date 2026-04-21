import { useLocation } from "react-router-dom";
import Seo from "./seo";
import { routeSeo } from "../lib/siteSeo";

export default function AppRouteSeo() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.toLowerCase();

  if (
    normalizedPath === "/" ||
    normalizedPath === "/services" ||
    normalizedPath.startsWith("/services/") ||
    normalizedPath.startsWith("/locations/")
  ) {
    return null;
  }

  const config = routeSeo[normalizedPath];

  if (!config) {
    return null;
  }

  return (
    <Seo
      title={config.title}
      description={config.description}
      path={normalizedPath}
      robots={config.robots}
    />
  );
}
