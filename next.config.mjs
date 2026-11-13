/**
 * The old template-based service URLs now point at the dedicated pages.
 * Permanent (308) so search engines transfer the old URLs to the new ones.
 */
const moved = {
  "airport-transfers": "/services/airport-transfers",
  "umrah-transportation": "/services/vip-hajj-umrah-transfers",
  ziyarat: "/services/vip-hajj-umrah-transfers",
  chauffeur: "/private-chauffeur-hire",
  "corporate-transportation": "/private-chauffeur-hire",
  "intercity-transfers": "/services/city-to-city-transfer",
  "gcc-transfers": "/gcc",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      // The English services index lives at /en/services; /services alone has no page of its own.
      { source: "/services", destination: "/en/services", permanent: false },
      ...Object.entries(moved).map(([old, to]) => ({
        source: `/:lang(en|ar)/${old}`,
        destination: to,
        permanent: true,
      })),
      // Programmatic location pages were removed.
      { source: "/:lang(en|ar)/locations/:slug", destination: "/:lang", permanent: true },
    ];
  },
};
export default nextConfig;
