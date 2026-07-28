import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/CTABanner";
import { getBlogPosts } from "@/lib/blog";
import { heroForService } from "@/content/gallery";

export const metadata = {
  title: "Landscaping Blog, Tips & Trends | Visionable Landscaping",
  description:
    "Expert landscaping tips, design trends, and project insights for Bay Area homeowners. Practical advice from Silicon Valley's top-rated design-build team.",
  openGraph: {
    title: "Landscaping Blog, Tips & Trends | Visionable Landscaping",
    description: "Expert landscaping tips and design inspiration from Silicon Valley's top-rated team.",
    url: "https://visionablelandscaping.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visionable Landscaping blog and Bay Area backyard project insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Blog, Tips & Trends | Visionable Landscaping",
    description: "Expert landscaping tips and design inspiration from Silicon Valley's top-rated team.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://visionablelandscaping.com/blog" },
};

export default function BlogIndex() {
  const posts = getBlogPosts();
  const featured = posts.find((p) => p.featured);
  const fallback = heroForService("landscape-design");
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="Design notes & project stories"
          title="Landscape insights for Bay Area homeowners"
          lede="What we have learned building 200+ outdoor spaces along the I-680 corridor: materials that hold up, layouts that actually get used, and the questions worth asking before you break ground."
          image={
            featured?.coverImage
              ? { src: featured.coverImage, alt: featured.title }
              : { src: fallback.src, alt: fallback.alt }
          }
          facts={[
            { label: "Articles", value: `${posts.length} published` },
            { label: "Topics", value: categories.slice(0, 2).join(" · ") },
            { label: "Written by", value: "The crew who builds it" },
            { label: "Consultation", value: "Always free" },
          ]}
        />

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogGrid posts={posts} />
          </div>
        </section>

        <CTABanner
          title="Reading is one thing. Standing in it is another."
          subtitle="Book a free consultation and we will show you what your yard could become, in 3D, before anything is built."
          primaryText="Share Your Vision"
          secondaryText="Browse Services"
          secondaryHref="/services"
          bgImage="/photos/cta-bg.webp"
        />
      </main>
      <Footer />
    </>
  );
}
