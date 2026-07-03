import Privacy from "../../src/views/privacypolicy";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/privacy"].title,
  description: routeSeo["/privacy"].description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <Privacy />;
}
