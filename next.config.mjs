/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Pre-existing lint debt in the migrated components; `npm run lint` still reports it.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Legacy static-site .html URLs -> clean routes (permanent)
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/reviews.html", destination: "/reviews", permanent: true },
      { source: "/skincare.html", destination: "/skincare", permanent: true },
      { source: "/socials.html", destination: "/socials", permanent: true },
      {
        source: "/cancellationpolicy.html",
        destination: "/cancellation",
        permanent: true,
      },
      {
        source: "/privacypolicy.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/termsofservice.html",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-service.html",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/service2_saltfacial.html",
        destination: "/services/saltfacial",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
