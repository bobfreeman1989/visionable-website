import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import RelatedCards from "@/components/sections/RelatedCards";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";
import { heroForService } from "@/content/gallery";

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
      ...(post.coverImage ? { images: [post.coverImage] } : { images: ["/og-image.jpg"] }),
    },
    alternates: { canonical: url },
  };
}

const categoryColors: Record<string, string> = {
  "Design Tips": "bg-primary/10 text-primary",
  "Maintenance": "bg-primary/10 text-primary",
  "Trends": "bg-primary/10 text-primary",
  "Project Showcase": "bg-primary/10 text-primary",
  "General": "bg-stone-100 text-stone-600",
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

  // The services this post actually talks about, read back off the links in its
  // own body, so the card block below can never drift from the article.
  const mentionedSlugs = Array.from(
    new Set(Array.from(post.contentHtml.matchAll(/href="\/services\/([a-z-]+)"/g), (m) => m[1]))
  );
  const mentionedServices = mentionedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);
  const url = `https://visionablelandscaping.com/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `https://visionablelandscaping.com${post.coverImage}` : "https://visionablelandscaping.com/og-image.jpg",
    datePublished: post.date,
    // Only claim a revision when the body actually changed; a dateModified that
    // just mirrors publication tells Google nothing and hides real refreshes.
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: "Visionable Landscaping",
      url: "https://visionablelandscaping.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Visionable Landscaping",
      logo: {
        "@type": "ImageObject",
        url: "https://visionablelandscaping.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visionablelandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://visionablelandscaping.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main id="main-content" className="pt-16">
        {/* Cover: the headline sits on the photograph rather than below it, so a
            post opens on its subject the way the rest of the site does. */}
        <header className="relative w-full min-h-[380px] md:min-h-[460px] lg:min-h-[540px] flex items-end overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-900" />
          )}
          {/* Same two-part scrim as PageHero: a flat base for bright skies, then
              a bottom-weighted gradient. The dense band runs to 45% because the
              headline block — breadcrumb, meta line and h1 — is taller than a
              single line and the meta sits well above the bottom edge. */}
          <div className="absolute inset-0 bg-green-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 from-10% via-green-950/88 via-45% to-transparent" />

          <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-24">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-white/70 mb-5"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white">
                {post.category}
              </span>
              <span className="text-sm text-white/80">{formatDate(post.date)}</span>
              <span className="text-sm text-white/80">· {post.author}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-white max-w-4xl leading-[1.1]">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10 -mt-16 relative z-10">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-10">
                {/* Author — category, date and headline now live on the cover */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    V
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{post.author}</p>
                    <p className="text-xs text-stone-600">
                      Visionable Landscaping
                      {post.updated && post.updated > post.date && (
                        <>
                          {" · Updated "}
                          <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-headings:font-normal prose-headings:text-stone-900
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-stone-600 prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-stone-600
                    prose-li:text-stone-600
                    prose-strong:text-stone-800
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-hr:border-stone-200"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* CTA */}
                <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
                  <h3 className="text-xl text-stone-900 mb-2">Ready to Transform Your Yard?</h3>
                  <p className="text-stone-600 mb-4">Schedule a free consultation and let&apos;s bring your vision to life.</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Book Consultation
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
                  <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                    <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">
                      Table of Contents
                    </h4>
                    <nav className="space-y-2">
                      {post.headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className={`block text-sm text-stone-500 hover:text-primary transition-colors ${
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
                  <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                    <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">
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
                          <h5 className="text-sm font-semibold text-stone-900 group-hover:text-primary transition-colors line-clamp-2">
                            {r.title}
                          </h5>
                          <p className="text-xs text-stone-600 mt-1">{formatDate(r.date)}</p>
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

        {mentionedServices.length > 0 && (
          <RelatedCards
            title="The services behind this article"
            intro="Everything in this piece is work we build in-house, across Fremont and the I-680 corridor."
            className="bg-surface mt-16"
            cards={mentionedServices.map((s) => {
              const photo = heroForService(s.slug);
              return {
                href: `/services/${s.slug}`,
                title: s.title,
                blurb: s.shortDesc,
                image: { src: photo.src, alt: photo.alt },
              };
            })}
          />
        )}

        <div className="mt-16">
          <CTABanner
            title="Ready to build the yard you keep reading about?"
            subtitle="Free consultation and 3D renderings before anything is built."
            primaryText="Share Your Vision"
            secondaryText="See Our Work"
            secondaryHref="/portfolio"
            bgImage="/photos/cta-bg.webp"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
