import Skincare from "../../src/views/collabpartners";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/skincare"].title,
  description: routeSeo["/skincare"].description,
  path: "/skincare",
});

export default function SkincarePage() {
  return <Skincare />;
}
