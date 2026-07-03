import Contact from "../../src/views/contact";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/contact"].title,
  description: routeSeo["/contact"].description,
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
