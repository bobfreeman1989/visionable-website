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
  },
  alternates: { canonical: "https://visionable-website.vercel.app/blog" },
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
