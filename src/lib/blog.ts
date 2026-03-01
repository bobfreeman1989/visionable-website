import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  featured: boolean;
  contentHtml: string;
  headings: { id: string; text: string; level: number }[];
}

export type BlogPostMeta = Omit<BlogPost, "contentHtml" | "headings">;

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => {
    const slug = f.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, f), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      category: data.category || "General",
      coverImage: data.coverImage || "",
      author: data.author || "Visionable Team",
      featured: data.featured || false,
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

function extractHeadings(markdown: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const text = match[2].replace(/\*\*/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const headings = extractHeadings(content);

  // Add IDs to headings in HTML
  let contentHtml = remark().use(html, { sanitize: false }).processSync(content).toString();
  // Add id attributes to h2 and h3
  headings.forEach((h) => {
    const tag = `h${h.level}`;
    contentHtml = contentHtml.replace(
      new RegExp(`<${tag}>([^<]*${h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*)</${tag}>`),
      `<${tag} id="${h.id}">$1</${tag}>`
    );
  });

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    category: data.category || "General",
    coverImage: data.coverImage || "",
    author: data.author || "Visionable Team",
    featured: data.featured || false,
    contentHtml,
    headings,
  };
}
