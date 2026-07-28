import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { areas } from "@/lib/areas";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "Bay Area Landscaping Service Areas | Visionable Landscaping",
  description:
    "Visionable Landscaping serves Fremont, Newark, Milpitas, Union City, Hayward, San Ramon, Dublin, Pleasanton, Danville, Walnut Creek, Concord, and nearby Bay Area communities.",
  openGraph: {
    title: "Bay Area Landscaping Service Areas | Visionable Landscaping",
    description:
      "Find Visionable Landscaping service areas across Fremont, the East Bay, South Bay, and the I-680 corridor.",
    url: `${BASE_URL}/areas`,
  },
  alternates: {
    canonical: "/areas",
  },
};

const areasItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Visionable Landscaping Service Areas",
  itemListElement: areas.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `Landscaping in ${area.name}, CA`,
    url: `${BASE_URL}/areas/${area.slug}`,
  })),
};

export default function AreasIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasItemListSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-br from-primary to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-4">
              Local Landscaping Service Areas
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl">
              Landscaping across Fremont, the East Bay, and the I-680 corridor
            </h1>
            <p className="text-green-100 text-lg leading-relaxed max-w-3xl mb-8">
              Visionable Landscaping is based in Fremont and serves homeowners across nearby Bay Area communities with pavers, artificial turf, pergolas, fence and gate installation, irrigation and drainage, landscape design, outdoor lighting, retaining walls, and complete backyard remodels.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:510-755-5616"
                className="bg-accent text-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                (510) 755-5616
              </a>
              <Link
                href="/#contact"
                className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-stone-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                    <MapPin className="w-4 h-4" />
                    {area.county} County · {area.region}
                  </div>
                  <h2 className="text-2xl text-stone-900 mb-3 group-hover:text-primary transition-colors">
                    Landscaping in {area.name}, CA
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-5">{area.metaDescription}</p>
                  <span className="text-primary font-semibold inline-flex items-center gap-1">
                    View {area.name} Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Ready to talk about your yard?</h2>
            <p className="text-white/80 text-lg mb-8">
              Call Visionable Landscaping or request a free consultation for your Bay Area outdoor living project.
            </p>
            <Link
              href="/#contact"
              className="bg-white text-primary hover:bg-stone-100 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Share Your Vision <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
