import { Link, useParams } from "react-router-dom";
import Banner3 from "../components/banner3";
import CustomCursor from "../components/customcursor";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import { locationPages } from "../lib/landingPages";
import "./seo-landing.css";

function buildLocationSchema(page) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://ownaesthetics.com/locations/${page.slug}#business`,
        name: "Own Aesthetics",
        url: `https://ownaesthetics.com/locations/${page.slug}`,
        telephone: "+1-515-672-1860",
        description: page.intro,
        address: {
          "@type": "PostalAddress",
          streetAddress: "7601 Office Plaza Dr N Suite 115",
          addressLocality: "West Des Moines",
          addressRegion: "IA",
          postalCode: "50266",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: page.city,
          containedInPlace: {
            "@type": "State",
            name: page.state,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://ownaesthetics.com/locations/${page.slug}#faq`,
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function LocationLandingPage() {
  const { citySlug } = useParams();
  const page = locationPages[citySlug];

  if (!page) {
    return (
      <>
        <Navbar />
        <main className="seo-page seo-page--missing">
          <div className="seo-page__shell">
            <h1>Location page not found</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const schema = buildLocationSchema(page);
  const canonicalUrl = `https://ownaesthetics.com/locations/${page.slug}`;

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={`/locations/${page.slug}`}
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      {/* <CustomCursor /> */}
      <Navbar />
      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
      />

      <main className="seo-page seo-page--location">
        <div className="seo-page__shell">
          <div className="seo-page__header">
            <h1 className="seo-page__title">{page.h1}</h1>
            <p className="seo-page__lede">{page.intro}</p>
          </div>

          <div className="seo-page__layout">
            <article className="seo-page__content">
              <section className="seo-page__section">
                {page.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <section className="seo-page__section">
                <h2>Questions From {page.city} Patients</h2>
                <div className="seo-page__faq-grid">
                  {page.faqs.map((item) => (
                    <article className="seo-page__faq-card" key={item.question}>
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="seo-page__section">
                <h2>Explore Related Pages</h2>
                <div className="seo-page__links">
                  {page.relatedLinks.map((link) => (
                    <Link
                      className="seo-page__link-pill"
                      key={link.to}
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            <aside className="seo-page__aside">
              <div className="seo-page__card">
                <h2>Office Details</h2>
                <p>Own Aesthetics</p>
                <p>7601 Office Plaza Dr N Suite 115</p>
                <p>West Des Moines, IA 50266</p>
                <p>515-672-1860</p>
              </div>

              <div className="seo-page__card">
                <h2>Hours</h2>
                <p>Tuesday: 10 AM-5 PM</p>
                <p>Wednesday: 10 AM-7 PM</p>
                <p>Thursday: 10 AM-5 PM</p>
                <p>Friday: 9 AM-5 PM</p>
                <p>Saturday: By appointment only</p>
              </div>

              <div className="seo-page__card">
                <h2>Start Here</h2>
                <p>
                  If you are not sure which treatment to book first, a skincare
                  analysis or consultation is the easiest way to compare
                  options.
                </p>
                <Link className="seo-page__link-button" to="/contact">
                  Request an appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
