import { Link, useParams } from "react-router-dom";
import Banner3 from "../components/banner3";
import CustomCursor from "../components/customcursor";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import { coreServicePages } from "../lib/landingPages";
import "./seo-landing.css";
import { SITE_URL } from "../lib/siteSeo";

const BUSINESS_ID = `${SITE_URL}/#business`;

function buildServiceSchema(page) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://ownaesthetics.com/services/${page.slug}#service`,
        name: page.h1,
        url: `https://ownaesthetics.com/services/${page.slug}`,
        serviceType: page.h1,
        description: page.description,
        provider: {
          "@id": BUSINESS_ID,
        },
        areaServed: [
          "Des Moines",
          "West Des Moines",
          "Waukee",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://ownaesthetics.com/services/${page.slug}#faq`,
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

export default function CoreServiceLandingPage() {
  const { serviceSlug } = useParams();
  const page = coreServicePages[serviceSlug];

  if (!page) {
    return (
      <>
        <Navbar />
        <main className="seo-page seo-page--missing">
          <div className="seo-page__shell">
            <h1>Service page not found</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const schema = buildServiceSchema(page);
  const canonicalUrl = `https://ownaesthetics.com/services/${page.slug}`;

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={`/services/${page.slug}`}
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      <CustomCursor />
      <Navbar />
      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg"
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
      />

      <main className="seo-page">
        <div className="seo-page__shell">
          <div className="seo-page__header">
            <h1 className="seo-page__title">{page.h1}</h1>
            <p className="seo-page__lede">{page.description}</p>
          </div>

          <div className="seo-page__layout">
            <article className="seo-page__content">
              <section className="seo-page__section">
                {page.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <section className="seo-page__section">
                <h2>Who This Is For</h2>
                <ul className="seo-page__list">
                  {page.whoFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="seo-page__section">
                <h2>How The Process Works</h2>
                <ol className="seo-page__steps">
                  {page.process.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}:</strong> {step.body}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="seo-page__section">
                <h2>Frequently Asked Questions</h2>
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
                <h2>Related Pages</h2>
                <div className="seo-page__links">
                  {page.relatedLinks.map((link) => (
                    <Link className="seo-page__link-pill" key={link.to} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            <aside className="seo-page__aside">
              <div className="seo-page__card">
                <h2>Quick Facts</h2>
                <div className="seo-page__fact">
                  <span className="seo-page__fact-label">Cost</span>
                  <p>{page.price}</p>
                </div>
                <div className="seo-page__fact">
                  <span className="seo-page__fact-label">Timing</span>
                  <p>{page.duration}</p>
                </div>
              </div>

              <div className="seo-page__card">
                <h2>What Is Included</h2>
                <ul className="seo-page__list seo-page__list--tight">
                  {page.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="seo-page__card">
                <h2>Contact</h2>
                <p>Own Aesthetics</p>
                <p>7601 Office Plaza Dr N Suite 115</p>
                <p>West Des Moines, IA 50266</p>
                <p>515-672-1860</p>
                <Link className="seo-page__link-button" to="/contact">
                  Contact the office
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
