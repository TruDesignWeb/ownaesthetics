import Login from "../../src/components/login";
import GuestRoute from "../../src/components/guestroute";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/login"].title,
  description: routeSeo["/login"].description,
  path: "/login",
  noindex: true,
});

export default function LoginPage() {
  return (
    <GuestRoute>
      <Login />
    </GuestRoute>
  );
}
