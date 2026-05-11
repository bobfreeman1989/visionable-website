import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const url = `https://visionablelandscaping.com/blog/${params.slug}`;
  return {
    title: `${post.title} | Visionable Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: url },
  };
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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const allPosts = getBlogPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category))
    .slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-20 pb-20">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10 -mt-16 relative z-10">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || categoryColors.General}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    V
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-400">Visionable Landscaping</p>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-gray-600
                    prose-li:text-gray-600
                    prose-strong:text-gray-800
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-hr:border-gray-200"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* CTA */}
                <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform Your Yard?</h3>
                  <p className="text-gray-500 mb-4">Schedule a free consultation and let&apos;s bring your vision to life.</p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Free Consultation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {post.headings.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                      Table of Contents
                    </h4>
                    <nav className="space-y-2">
                      {post.headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className={`block text-sm text-gray-500 hover:text-primary transition-colors ${
                            h.level === 3 ? "pl-4" : ""
                          }`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Related Posts */}
                {related.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                      Related Posts
                    </h4>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="group block"
                        >
                          {r.coverImage && (
                            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2">
                              <Image
                                src={r.coverImage}
                                alt={r.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="300px"
                              />
                            </div>
                          )}
                          <h5 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                            {r.title}
                          </h5>
                          <p className="text-xs text-gray-400 mt-1">{formatDate(r.date)}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog */}
                <Link
                  href="/blog"
                  className="block text-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  ← Back to all posts
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
