import Membership from "../../src/views/membership";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/membership"].title,
  description: routeSeo["/membership"].description,
  path: "/membership",
  noindex: true,
});

export default function MembershipPage() {
  return <Membership />;
}
