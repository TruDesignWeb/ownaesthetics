import Link from "next/link";
import Banner3 from "../components/banner3";
import CustomCursor from "../components/customcursor";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { coreServicePages } from "../lib/landingPages";
import { SITE_URL } from "../lib/siteSeo";

const BUSINESS_ID = `${SITE_URL}/#business`;

function buildServiceSchema(page) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.ownaesthetics.com/services/${page.slug}#service`,
        name: page.h1,
        url: `https://www.ownaesthetics.com/services/${page.slug}`,
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
        "@id": `https://www.ownaesthetics.com/services/${page.slug}#faq`,
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

export default function CoreServiceLandingPage({ slug }) {
  const page = coreServicePages[slug];

  if (!page) {
    return (
      <>
        <Navbar />
        <main className="[background:#f8f9fa] [color:#444] [padding:80px_0_100px_0] [min-height:55vh]">
          <div className="[margin:0_auto] [max-width:1280px] [padding:0_20px]">
            <h1>Service page not found</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const schema = buildServiceSchema(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* <CustomCursor /> */}
      <Navbar />
      <Banner3
        image="/assets/images/images/sumner-mahaffey-7Y0NshQLohk-unsplash.webp"
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        headingLevel="h2"
      />

      <main className="[background:#f8f9fa] [color:#444] [padding:80px_0_100px_0]">
        <div className="[margin:0_auto] [max-width:1280px] [padding:0_20px]">
          <div className="[margin:0_auto_40px] [max-width:900px] [text-align:center]">
            <h1 className="[color:#2d2d2d] [font-size:42px] [font-weight:600] [letter-spacing:0.5px] [line-height:1.15] [margin:0_0_18px] max-[600px]:[font-size:32px]">{page.h1}</h1>
            <p className="[color:#444] [font-size:20px] [line-height:1.9] [margin:0] max-[600px]:[font-size:18px]">{page.description}</p>
          </div>

          <div className="[align-items:start] [display:grid] [gap:24px] [grid-template-columns:minmax(0,_1.7fr)_minmax(280px,_0.85fr)] max-[992px]:[grid-template-columns:1fr]">
            <article className="[min-width:0]">
              <section className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin-bottom:24px] [padding:40px_50px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_h2]:[font-size:32px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                {page.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <section className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin-bottom:24px] [padding:40px_50px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_h2]:[font-size:32px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>Who This Is For</h2>
                <ul className="[color:#444] [font-size:20px] [line-height:1.9] [margin:0] [padding-left:1.3rem] [&_li]:[margin-bottom:12px] [&_li:last-child]:[margin-bottom:0] max-[600px]:[font-size:18px]">
                  {page.whoFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin-bottom:24px] [padding:40px_50px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_h2]:[font-size:32px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>How The Process Works</h2>
                <ol className="[color:#444] [font-size:20px] [line-height:1.9] [margin:0] [padding-left:1.3rem] [&_li]:[margin-bottom:12px] [&_li:last-child]:[margin-bottom:0] max-[600px]:[font-size:18px]">
                  {page.process.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}:</strong> {step.body}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin-bottom:24px] [padding:40px_50px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_h2]:[font-size:32px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>Frequently Asked Questions</h2>
                <div className="[display:grid] [gap:20px]">
                  {page.faqs.map((item) => (
                    <article className="[border-top:1px_solid_#ececec] [padding-top:20px] [&:first-child]:[border-top:none] [&:first-child]:[padding-top:0] [&_h3]:[color:#2d2d2d] [&_h3]:[font-size:24px] [&_h3]:[font-weight:600] [&_h3]:[line-height:1.35] [&_h3]:[margin:0_0_10px] [&_p]:[margin:0] max-[600px]:[&_h3]:[font-size:22px]" key={item.question}>
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [margin-bottom:24px] [padding:40px_50px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_h2]:[font-size:32px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>Related Pages</h2>
                <div className="[display:flex] [flex-wrap:wrap] [gap:14px]">
                  {page.relatedLinks.map((link) => (
                    <Link className="[color:#444] [display:inline-flex] [font-size:18px] [line-height:1.6] [text-decoration:underline] [text-underline-offset:3px] [transition:opacity_0.2s_ease] [&:hover]:[color:#444] [&:hover]:[opacity:0.7] max-[600px]:[font-size:17px]" key={link.to} href={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            <aside className="[display:grid] [align-content:start] [gap:20px]">
              <div className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [color:#444] [padding:32px_34px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-size:30px] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>Quick Facts</h2>
                <div className="[margin-bottom:18px] [&:last-child]:[margin-bottom:0]">
                  <span className="[color:#2d2d2d] [display:block] [font-size:16px] [font-weight:600] [margin-bottom:8px]">Cost</span>
                  <p>{page.price}</p>
                </div>
                <div className="[margin-bottom:18px] [&:last-child]:[margin-bottom:0]">
                  <span className="[color:#2d2d2d] [display:block] [font-size:16px] [font-weight:600] [margin-bottom:8px]">Timing</span>
                  <p>{page.duration}</p>
                </div>
              </div>

              <div className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [color:#444] [padding:32px_34px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-size:30px] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>What Is Included</h2>
                <ul className="[color:#444] [line-height:1.9] [margin:0] [padding-left:1.3rem] [&_li]:[margin-bottom:12px] [&_li:last-child]:[margin-bottom:0] [font-size:18px] max-[600px]:[font-size:18px]">
                  {page.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="[background:white] [border-radius:12px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.06)] [transition:all_0.4s_ease] [color:#444] [padding:32px_34px] [&:hover]:[box-shadow:0_18px_40px_rgba(0,_0,_0,_0.08)] [&:hover]:[transform:translateY(-4px)] [&_h2]:[color:#2d2d2d] [&_h2]:[font-size:30px] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_18px] [&_p]:[color:#444] [&_p]:[font-size:20px] [&_p]:[line-height:1.9] [&_p]:[margin:0_0_18px] [&_p:last-child]:[margin-bottom:0] max-[992px]:[padding:35px] max-[600px]:[&_p]:[font-size:18px] max-[600px]:[&_h2]:[font-size:28px] max-[600px]:[padding:28px_24px]">
                <h2>Contact</h2>
                <p>Own Aesthetics</p>
                <p>7601 Office Plaza Dr N Suite 115</p>
                <p>West Des Moines, IA 50266</p>
                <p>515-672-1860</p>
                <Link className="[color:#444] [display:inline-flex] [font-size:18px] [line-height:1.6] [text-decoration:underline] [text-underline-offset:3px] [transition:opacity_0.2s_ease] [&:hover]:[color:#444] [&:hover]:[opacity:0.7] max-[600px]:[font-size:17px]" href="/contact">
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
