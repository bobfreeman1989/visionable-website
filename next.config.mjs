/** @type {import('next').NextConfig} */

// East Bay city pages retired when the site refocused on the South Bay and
// Peninsula (2026-10). Permanent redirects pass their link equity to /areas
// instead of leaving 404s in Google's index.
const retiredCities = [
  "newark",
  "union-city",
  "hayward",
  "san-ramon",
  "dublin",
  "pleasanton",
  "danville",
  "walnut-creek",
  "concord",
];

const nextConfig = {
  async headers() {
    // Inline scripts are needed for the JSON-LD blocks, the deferred gtag
    // loader and Next's own hydration data, hence 'unsafe-inline'. `next dev`
    // also evals its webpack/React Refresh modules, so 'unsafe-eval' is added
    // for the dev server only; production builds never get it.
    const devEval = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${devEval} https://*.googletagmanager.com https://va.vercel-scripts.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com",
      "font-src 'self' data:",
      // Google's documented GA4 endpoints, including the bare analytics.google.com
      // host that the *. wildcard does not cover.
      "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://vitals.vercel-insights.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        // The post was retitled to drop the year stamp; the old URL is indexed.
        source: "/blog/5-landscaping-trends-2024",
        destination: "/blog/silicon-valley-backyard-landscaping-trends",
        permanent: true,
      },
      ...retiredCities.map((slug) => ({
        source: `/areas/${slug}`,
        destination: "/areas",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
