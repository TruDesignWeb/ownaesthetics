import Socials from "../../src/views/socials";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/socials"].title,
  description: routeSeo["/socials"].description,
  path: "/socials",
});

export default function SocialsPage() {
  return <Socials />;
}
