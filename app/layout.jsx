import Script from "next/script";
import "./globals.css";

import { AuthProvider } from "../src/auth/authcontext";
import PreferWebp from "../src/components/prefer-webp";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_SEO,
  DEFAULT_OG_IMAGE,
} from "../src/lib/siteSeo";
import { BOOKING_HASH, BOULEVARD_BUSINESS_ID } from "../src/lib/booking";

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
          {`(function (window, document) {
            var config = {
              businessId: ${JSON.stringify(BOULEVARD_BUSINESS_ID)},
              hash: ${JSON.stringify(BOOKING_HASH)},
            };

            function initBoulevard() {
              if (!window.blvd || window.__ownBoulevardInitialized) return;
              window.__ownBoulevardInitialized = true;
              window.blvd.init(config);
            }

            var existingScript = document.querySelector('script[src="https://static.joinboulevard.com/injector.min.js"]');
            if (existingScript) {
              existingScript.addEventListener('load', initBoulevard, { once: true });
              initBoulevard();
              return;
            }

            var script = document.createElement('script');
            script.src = 'https://static.joinboulevard.com/injector.min.js';
            script.async = true;
            script.onload = initBoulevard;
            document.head.appendChild(script);
          })(window, document);`}
        </Script>
      </body>
    </html>
  );
}
