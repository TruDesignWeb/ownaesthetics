import Reviews from "../../src/views/reviews";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/reviews"].title,
  description: routeSeo["/reviews"].description,
  path: "/reviews",
});

export default function ReviewsPage() {
  return <Reviews />;
}
