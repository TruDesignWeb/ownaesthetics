import { notFound } from "next/navigation";
import LocationLandingPage from "../../../src/views/location-landing";
import { locationPages } from "../../../src/lib/landingPages";
import { buildMetadata } from "../../../src/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(locationPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = locationPages[slug];
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/locations/${slug}`,
  });
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  if (!locationPages[slug]) {
    notFound();
  }
  return <LocationLandingPage slug={slug} />;
}
