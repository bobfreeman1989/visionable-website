import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import { blogPreviewPosts } from "@/content/blog-preview";
import { BlogPreviewCard } from "@/components/blog/BlogPreviewCard";

export default function BlogPreview() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl text-stone-900">
              Landscape Design Tips & Inspiration
            </h2>
            <p className="text-stone-500 mt-2">Expert advice from our team.</p>
          </div>
          <Link href="/blog" className="text-primary font-semibold text-sm hover:underline hidden sm:block">
            View All Articles →
          </Link>
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-6">
          {blogPreviewPosts.map((post, index) => (
            <FadeUp key={post.slug} delay={index * 0.1}>
              <BlogPreviewCard post={post} />
            </FadeUp>
          ))}
        </div>

        <Link href="/blog" className="block text-center text-primary font-semibold text-sm mt-6 sm:hidden">
          View All Articles →
        </Link>
      </div>
    </section>
  );
}
