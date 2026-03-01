import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";

const BASE = "https://visionable-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...areas.map((a) => ({
      url: `${BASE}/areas/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
