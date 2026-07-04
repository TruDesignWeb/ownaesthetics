import Script from "next/script";

// The old Vite SPA eagerly imported every route into one bundle, so every
// stylesheet loaded globally on every page and pages relied on classes from
// other pages' CSS (e.g. the footer form is styled by contactform.css and
// dashboard.css). Import them all here in the old bundle's cascade order so
// the styling matches the pre-migration site exactly.
import "../src/views/index.css";
import "../src/styles/global.css";
// component styles (in old first-encounter order, starting from the homepage)
import "../src/styles/navbar.css";
import "../src/styles/banner.css";
import "../src/styles/features.css";
import "../src/styles/stats.css";
import "../src/styles/programs.css";
import "../src/styles/membership.css";
import "../src/styles/outcomes.css";
import "../src/styles/aboutoutcomes.css";
import "../src/styles/journey.css";
import "../src/styles/footer.css";
import "../src/styles/contactform.css";
import "../src/styles/customcursor.css";
import "../src/styles/animations.css";
import "../src/styles/infinitescroll.css";
import "../src/styles/tiltedcard.css";
import "../src/styles/register.css";
import "../src/styles/showcasesection.css";
import "../src/styles/testimonialshowcasestyles.css";
import "../src/styles/socialmediastyles.css";
import "../src/styles/rsvppopup.css";
import "../src/styles/banner2.css";
import "../src/styles/banner3.css";
import "../src/styles/servicehighlightbox.css";
// page styles (in the old App.jsx route-import order)
import "../src/views/about.css";
import "../src/views/contact.css";
import "../src/views/dashboard.css";
import "../src/views/collabpartners.css";
import "../src/views/reviews.css";
import "../src/views/appointments.css";
import "../src/views/socials.css";
import "../src/views/referringpartners.css";
import "../src/views/services/antiwrinkle.css";
import "../src/views/services/aquafirme.css";
import "../src/views/services/nouvaderm.css";
import "../src/views/services/saltfacial.css";
import "../src/views/services/cellenis.css";
import "../src/views/services/chemicalpeels.css";
import "../src/views/services/consultation.css";
import "../src/views/services/exosomes.css";
import "../src/views/services/facials.css";
import "../src/views/services/hairtreatments.css";
import "../src/views/services/juvederm.css";
import "../src/views/services/kybella.css";
import "../src/views/services/sclerotherapy.css";
import "../src/views/services/sculptra.css";
import "../src/views/services/skinpen.css";
import "../src/views/terms.css";
import "../src/views/treatments.css";
import "../src/views/privacypolicy.css";
import "../src/views/cancellation.css";
import "../src/views/rsvp.css";
import "../src/views/seo-landing.css";
import { AuthProvider } from "../src/auth/authcontext";
import PreferWebp from "../src/components/prefer-webp";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_SEO,
  DEFAULT_OG_IMAGE,
} from "../src/lib/siteSeo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport = {
  themeColor: "#133550",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        <PreferWebp />
        {/* Boulevard Self-Booking overlay */}
        <Script id="boulevard-booking" strategy="afterInteractive">
          {`(function (a) {
            var b = {
              businessId: 'fa0706b5-be29-4bdb-92d2-2baec823e0fe',
            };

            var c = a.createElement('script');
            var d = a.querySelector('script');

            c.src = 'https://static.joinboulevard.com/injector.min.js';
            c.async = true;
            c.onload = function () {
              blvd.init(b);
            };

            d.parentNode.insertBefore(c, d);
          })(document);`}
        </Script>
      </body>
    </html>
  );
}
