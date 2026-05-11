import Link from "next/link";
import type { BlogPreviewPost } from "@/content/blog-preview";

interface BlogPreviewCardProps {
  post: BlogPreviewPost;
}

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-[#FEFEFE] rounded-xl border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
    >
      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
        {post.tag}
      </span>
      <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{post.title}</h3>
      <span className="text-sm text-primary font-medium">Read More →</span>
    </Link>
  );
}
