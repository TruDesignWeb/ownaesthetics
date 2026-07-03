import Refer from "../../src/views/referringpartners";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/referring-partners"].title,
  description: routeSeo["/referring-partners"].description,
  path: "/referring-partners",
  noindex: true,
});

export default function ReferringPartnersPage() {
  return <Refer />;
}
