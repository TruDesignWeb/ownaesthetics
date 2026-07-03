import Bryan from "../../src/views/bryan";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: "Dr. Bryan Folkers | Own Aesthetics",
  description:
    "Learn about Dr. Bryan Folkers, medical director at Own Aesthetics in West Des Moines.",
  path: "/bryan",
  noindex: true,
});

export default function BryanPage() {
  return <Bryan />;
}
