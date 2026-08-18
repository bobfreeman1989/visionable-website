import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /api/ holds the contact-form handler only and exposes no page content.
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://visionablelandscaping.com/sitemap.xml",
  };
}
