import Script from "next/script";
import "../src/views/index.css";
import "../src/styles/global.css";
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
