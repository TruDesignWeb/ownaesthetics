import Services from "../../src/views/services";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/services"].title,
  description: routeSeo["/services"].description,
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}
