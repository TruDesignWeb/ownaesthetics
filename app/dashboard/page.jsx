import Dashboard from "../../src/views/dashboard";
import ProtectedRoute from "../../src/components/protectedroute";
import { routeSeo } from "../../src/lib/siteSeo";
import { buildMetadata } from "../../src/lib/metadata";

export const metadata = buildMetadata({
  title: routeSeo["/dashboard"].title,
  description: routeSeo["/dashboard"].description,
  path: "/dashboard",
  noindex: true,
});

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}
