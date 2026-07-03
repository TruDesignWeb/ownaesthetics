import { notFound } from "next/navigation";
import CoreServiceLandingPage from "../../../src/views/core-service-landing";
import {
  allServiceSlugs,
  getServiceSeo,
  isCoreServiceSlug,
} from "../../../src/lib/servicesCatalog";
import {
  getServicePageConfig,
  buildServiceSchema,
} from "../../../src/lib/serviceSeo";
import { buildMetadata } from "../../../src/lib/metadata";

import AntiWrinkle from "../../../src/views/services/antiwrinkle";
import Aquafirme from "../../../src/views/services/aquafirme";
import Cellenis from "../../../src/views/services/cellenis";
import ChemicalPeels from "../../../src/views/services/chemicalpeels";
import Consultation from "../../../src/views/services/consultation";
import Exosomes from "../../../src/views/services/exosomes";
import Facials from "../../../src/views/services/facials";
import HairTreatments from "../../../src/views/services/hairtreatments";
import Juvederm from "../../../src/views/services/juvederm";
import Kybella from "../../../src/views/services/kybella";
import NouvaDerm from "../../../src/views/services/nouvaderm";
import SaltFacial from "../../../src/views/services/saltfacial";
import Sclerotherapy from "../../../src/views/services/sclerotherapy";
import Sculptra from "../../../src/views/services/sculptra";
import SkinPen from "../../../src/views/services/skinpen";
import SkinTypes from "../../../src/views/services/skintypes";

const classicServiceComponents = {
  antiwrinkle: AntiWrinkle,
  aquafirme: Aquafirme,
  cellenis: Cellenis,
  chemicalpeels: ChemicalPeels,
  consultation: Consultation,
  exosomes: Exosomes,
  facials: Facials,
  hairtreatments: HairTreatments,
  juvederm: Juvederm,
  kybella: Kybella,
  nouvaderm: NouvaDerm,
  saltfacial: SaltFacial,
  sclerotherapy: Sclerotherapy,
  sculptra: Sculptra,
  skinpen: SkinPen,
  skintypes: SkinTypes,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = getServiceSeo(slug);
  if (!seo) return {};
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  if (isCoreServiceSlug(slug)) {
    return <CoreServiceLandingPage slug={slug} />;
  }

  const Component = classicServiceComponents[slug];
  if (!Component) {
    notFound();
  }

  const config = getServicePageConfig(`/services/${slug}`);
  const schema = config ? buildServiceSchema(config) : null;

  return (
    <>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
      <Component />
    </>
  );
}
