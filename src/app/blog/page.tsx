import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Landscaping Blog — Tips & Trends | Visionable Landscaping",
  description:
    "Expert landscaping tips, design trends, and project insights for Bay Area homeowners. Practical advice from Silicon Valley's top-rated design-build team.",
  openGraph: {
    title: "Landscaping Blog — Tips & Trends | Visionable Landscaping",
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
    title: "Landscaping Blog — Tips & Trends | Visionable Landscaping",
    description: "Expert landscaping tips and design inspiration from Silicon Valley's top-rated team.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://visionablelandscaping.com/blog" },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <>
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Landscape Insights
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Expert tips, design inspiration, and project showcases from the Visionable team.
            </p>
          </div>

          <BlogGrid posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
