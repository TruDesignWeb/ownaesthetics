import Home from "../src/views/index";
import { routeSeo } from "../src/lib/siteSeo";
import { buildMetadata } from "../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/"].title,
  description: routeSeo["/"].description,
  path: "/",
});

export default function HomePage() {
  return <Home />;
}
