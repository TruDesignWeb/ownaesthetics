import Appointments from "../../src/views/appointments";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/appointments"].title,
  description: routeSeo["/appointments"].description,
  path: "/appointments",
  noindex: true,
});

export default function AppointmentsPage() {
  return <Appointments />;
}
