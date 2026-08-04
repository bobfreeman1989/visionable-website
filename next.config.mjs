/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // The post was retitled to drop the year stamp; the old URL is indexed.
        source: "/blog/5-landscaping-trends-2024",
        destination: "/blog/silicon-valley-backyard-landscaping-trends",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
