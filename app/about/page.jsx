import About from "../../src/views/about";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/about"].title,
  description: routeSeo["/about"].description,
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
