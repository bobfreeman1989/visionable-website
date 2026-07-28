import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "Landscaping Services Bay Area | Visionable Landscaping",
  description:
    "Explore Visionable Landscaping services for Fremont and Bay Area homeowners: paver installation, artificial turf, pergolas, fencing, irrigation, drainage, landscape design, outdoor lighting, retaining walls, and complete backyard remodels.",
  openGraph: {
    title: "Landscaping Services Bay Area | Visionable Landscaping",
    description:
      "Pavers, artificial turf, pergolas, fencing, irrigation, drainage, landscape design, outdoor lighting, retaining walls, and complete backyard remodels from Visionable Landscaping.",
    url: `${BASE_URL}/services`,
  },
  alternates: {
    canonical: "/services",
  },
};

const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Visionable Landscaping Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${BASE_URL}/services/${service.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-br from-primary to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-4">
              Fremont & Bay Area Landscaping Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl">
              Design-build landscaping services for outdoor living spaces that last
            </h1>
            <p className="text-green-100 text-lg leading-relaxed max-w-3xl mb-8">
              Visionable Landscaping handles pavers, artificial turf, pergolas, fence and gate installation, irrigation and drainage, landscape design, hardscaping, outdoor lighting, retaining walls, and complete backyard remodels for homeowners across Fremont and the I-680 corridor.
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
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white border border-stone-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <h2 className="text-2xl text-stone-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-5">{service.shortDesc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary font-semibold inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-stone-900 mb-4">Popular service areas</h2>
            <p className="text-stone-600 max-w-2xl mb-6">
              Based in Fremont, Visionable serves homeowners throughout the East Bay, South Bay, and I-680 corridor.
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  Landscaping in {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Not sure which service fits your yard?</h2>
            <p className="text-white/80 text-lg mb-8">
              Start with a free consultation and 3D design conversation. We will help you choose the right scope before you build.
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
