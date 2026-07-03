import { Suspense } from "react";
import RSVP from "../../src/views/rsvp";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/rsvp"].title,
  description: routeSeo["/rsvp"].description,
  path: "/rsvp",
  noindex: true,
});

export default function RsvpPage() {
  return (
    <Suspense fallback={null}>
      <RSVP />
    </Suspense>
  );
}
