"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  featured: boolean;
}

const categoryColors: Record<string, string> = {
  "Design Tips": "bg-blue-100 text-blue-700",
  "Maintenance": "bg-emerald-100 text-emerald-700",
  "Trends": "bg-purple-100 text-purple-700",
  "General": "bg-gray-100 text-gray-600",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const gridPosts = filtered.filter((p) => p.slug !== featured?.slug || active !== "All");

  return (
    <>
      {/* Hero / Featured Post */}
      {featured && active === "All" && (
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] relative">
              {featured.coverImage ? (
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-400" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[featured.category] || categoryColors.General}`}>
                {featured.category}
              </span>
              <h2 className="text-xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {featured.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mb-3 hidden sm:block">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                  V
                </div>
                <span>{featured.author}</span>
                <span>•</span>
                <span>{formatDate(featured.date)}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-300" />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] || categoryColors.General}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {gridPosts.length === 0 && (
        <p className="text-center text-gray-500 py-12">No posts in this category yet.</p>
      )}
    </>
  );
}
