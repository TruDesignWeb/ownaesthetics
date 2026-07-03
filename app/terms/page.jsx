import Terms from "../../src/views/termsofservice";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/terms"].title,
  description: routeSeo["/terms"].description,
  path: "/terms",
});

export default function TermsPage() {
  return <Terms />;
}
