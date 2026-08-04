import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";

const BASE = "https://visionablelandscaping.com";

// Last substantive change to the shared page shell — nav, hero, CTA blocks and
// the contact form. Pages whose content lives in components rather than in a
// data file inherit this date. Bump it when those components change what a page
// says, not when they only change how it looks.
const TEMPLATE_REVISION = "2026-08-01";

/** Latest of a set of YYYY-MM-DD dates. ISO dates sort lexicographically. */
function latest(dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  // A post's own revision date when it has one, otherwise its publication date.
  const postDate = (p: { date: string; updated: string }) => p.updated || p.date;

  // `lastmod` has to be truthful or the whole signal gets discarded, so every
  // date below comes from content — never from `new Date()`, which would claim
  // the entire site changed on every deploy.
  return [
    { url: BASE, lastModified: TEMPLATE_REVISION, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: TEMPLATE_REVISION, changeFrequency: "monthly" as const, priority: 0.7 },
    {
      url: `${BASE}/services`,
      lastModified: latest([TEMPLATE_REVISION, ...services.map((s) => s.updatedAt)]),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE}/areas`,
      lastModified: latest([TEMPLATE_REVISION, ...areas.map((a) => a.updatedAt)]),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE}/blog`,
      lastModified: latest([TEMPLATE_REVISION, ...posts.map(postDate)]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: postDate(p),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...areas.map((a) => ({
      url: `${BASE}/areas/${a.slug}`,
      lastModified: a.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: s.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
