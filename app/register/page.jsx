import Register from "../../src/components/register";
import GuestRoute from "../../src/components/guestroute";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/register"].title,
  description: routeSeo["/register"].description,
  path: "/register",
  noindex: true,
});

export default function RegisterPage() {
  return (
    <GuestRoute>
      <Register />
    </GuestRoute>
  );
}
