"use client";
import FadeUp from "@/components/motion/FadeUp";

const posts = [
  { title: "Artificial Turf: Pros, Cons & What to Expect", slug: "artificial-turf-pros-cons", tag: "Turf" },
  { title: "How to Choose the Right Pavers for Your Patio", slug: "how-to-choose-pavers", tag: "Hardscaping" },
  { title: "Outdoor Lighting Ideas That Boost Curb Appeal", slug: "outdoor-lighting-ideas", tag: "Lighting" },
];

export default function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Landscape Design Tips & Inspiration
            </h2>
            <p className="text-gray-500 mt-2">Expert advice from our team.</p>
          </div>
          <a href="/blog" className="text-primary font-semibold text-sm hover:underline hidden sm:block">
            View All Articles →
          </a>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.1}>
              <a href={`/blog/${p.slug}`} className="block bg-white rounded-xl border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{p.tag}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{p.title}</h3>
                <span className="text-sm text-primary font-medium">Read More →</span>
              </a>
            </FadeUp>
          ))}
        </div>
        <a href="/blog" className="block text-center text-primary font-semibold text-sm mt-6 sm:hidden">
          View All Articles →
        </a>
      </div>
    </section>
  );
}
