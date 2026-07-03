import CancellationPolicy from "../../src/views/cancellationpolicy";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/cancellation"].title,
  description: routeSeo["/cancellation"].description,
  path: "/cancellation",
});

export default function CancellationPage() {
  return <CancellationPolicy />;
}
