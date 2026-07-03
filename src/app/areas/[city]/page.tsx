import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { areas, getAreaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";

const BASE_URL = "https://visionablelandscaping.com";

export function generateStaticParams() {
  return areas.map((area) => ({ city: area.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getAreaBySlug(params.city);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${BASE_URL}/areas/${city.slug}`,
    },
    alternates: {
      canonical: `/areas/${city.slug}`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getAreaBySlug(params.city);
  if (!city) {
    notFound();
    return null;
  }
  const cityName = city.name;

  const nearbyAreas = city.nearbyAreas
    .map((slug) => getAreaBySlug(slug))
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Visionable Landscaping",
    description: `Professional landscaping services in ${city.name}, CA. Hardscaping, paver installation, artificial turf, pergolas, fence and gate installation, irrigation and drainage, outdoor lighting, and complete backyard remodels.`,
    url: `${BASE_URL}/areas/${city.slug}`,
    telephone: "+1-510-755-5616",
    email: "info@visionablelandscaping.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "581 Emerson St",
      addressLocality: "Fremont",
      addressRegion: "CA",
      postalCode: "94539",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${city.name}, CA`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "24",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$-$$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Landscaping services in ${cityName}, CA`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} in ${cityName}, CA`,
          description: service.shortDesc,
          areaServed: {
            "@type": "City",
            name: `${cityName}, CA`,
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Visionable Landscaping",
          },
          url: `${BASE_URL}/services/${service.slug}`,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${BASE_URL}/areas` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${BASE_URL}/areas/${city.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-20">
        {/* Breadcrumbs */}
        <div className="bg-surface border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-stone-400">Areas We Serve</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-stone-900 font-medium">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {city.name}, {city.county} County
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Professional Landscaping in {city.name}, CA
              </h1>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                {city.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="bg-accent text-foreground px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-accent/30 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Share Your Vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:510-755-5616"
                  className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (510) 755-5616
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {city.content.map((paragraph, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}

                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mt-8">
                  <h3 className="text-stone-900 mb-2">See Our Work in the {city.region}</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Browse 200+ project photos from real {city.region} homes on our portfolio and Yelp page.
                  </p>
                  <Link
                    href="/#portfolio"
                    className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    View Portfolio <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="text-lg mb-4">Free Consultation in {city.name}</h3>
                  <div className="space-y-3 text-sm">
                    <a href="tel:510-755-5616" className="flex items-center gap-2 hover:underline">
                      <Phone className="w-4 h-4" /> (510) 755-5616
                    </a>
                    <a href="mailto:info@visionablelandscaping.com" className="flex items-center gap-2 hover:underline">
                      <Mail className="w-4 h-4" /> info@visionablelandscaping.com
                    </a>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Serving {city.name} &amp; {city.region}
                    </div>
                  </div>
                  <Link
                    href="/#contact"
                    className="mt-5 block text-center bg-white text-primary font-semibold py-3 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>

                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-3">Why Visionable?</h4>
                  <ul className="space-y-2.5 text-sm text-stone-600">
                    {[
                      "CSLB Licensed (#1101860)",
                      "5.0 Stars, Google & Yelp",
                      "200+ Projects Completed",
                      "Free 3D Design Renderings",
                      "In-House Crew, No Subs",
                      "Comprehensive Warranty",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-3">Nearby Service Areas</h4>
                  <ul className="space-y-2 text-sm">
                    {nearbyAreas.map((nearby) => nearby && (
                      <li key={nearby.slug}>
                        <Link
                          href={`/areas/${nearby.slug}`}
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Landscaping in {nearby.name} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Recent Projects Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl text-stone-900 mb-2">
                  Our Work in the {city.region}
                </h2>
                <p className="text-stone-500">
                  Real projects from {city.name} and surrounding Bay Area communities.
                </p>
              </div>
              <Link
                href="/#portfolio"
                className="hidden sm:inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
              >
                View All 200+ Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[1, 3, 5, 8, 10, 14, 18, 22].map((n, idx) => (
                <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src={`/portfolio/yelp/yelp-${String(n).padStart(3, "0")}${n <= 30 ? "-" : ""}.jpg`}
                    alt={`Visionable Landscaping project in ${city.name}, ${city.region}, California, photo ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
              >
                View All 200+ Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-stone-900 mb-3">
              Landscaping Services in {city.name}
            </h2>
            <p className="text-stone-500 mb-10 max-w-2xl">
              We offer a full range of design-build landscaping services to {city.name} homeowners.
              Every project is handled in-house from start to finish.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white border border-stone-200 rounded-xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-stone-900 mb-1.5 group-hover:text-primary transition-colors">
                    {s.title} in {city.name}
                  </h3>
                  <p className="text-sm text-stone-500 mb-3">{s.shortDesc}</p>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ready to Transform Your {city.name} Yard?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 200+ Bay Area homeowners who turned their vision into reality.
              Free consultation, transparent pricing, and a yard you will love.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-primary hover:bg-stone-100 px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Share Your Vision
              </Link>
              <a
                href="tel:510-755-5616"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (510) 755-5616
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
