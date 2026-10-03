import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import Reveal from "@/components/motion/Reveal";

// Reads the three newest posts straight from the blog, with their cover photos,
// so the homepage teaser stays photography-led and never drifts from /blog.
export default function BlogPreview() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl text-stone-900">
              Landscape Design Tips & Inspiration
            </h2>
            <p className="text-stone-500 mt-2">Project write-ups and planning notes from our crew.</p>
          </div>
          <Link href="/blog" className="text-primary font-semibold text-sm hover:underline hidden sm:inline-flex items-center gap-1">
            View all articles <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden bg-white rounded-2xl border border-stone-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-[transform,box-shadow,border-color] duration-300 h-full"
              >
                {post.coverImage && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-[0.05em] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg text-stone-900 mt-3 leading-snug">{post.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link href="/blog" className="flex justify-center items-center gap-1 text-primary font-semibold text-sm mt-6 sm:hidden">
          View all articles <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
