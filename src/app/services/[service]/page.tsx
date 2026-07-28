import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ChevronRight, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import { areas } from "@/lib/areas";

const BASE_URL = "https://visionablelandscaping.com";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/services/${service.slug}`,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Visionable Landscaping",
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
    },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.name}, CA`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${service.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-20">
        {/* Breadcrumbs */}
        <div className="bg-surface border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-stone-600">Services</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-stone-900 font-medium">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                {service.title}
              </h1>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                {service.heroText}
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
                {service.content.map((paragraph, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}

                {/* Benefits */}
                <div className="mt-8">
                  <h2 className="text-2xl text-stone-900 mb-4">
                    Why Choose Visionable for {service.title}
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-stone-600">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQs */}
                <div className="mt-12">
                  <h2 className="text-2xl text-stone-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                        <h3 className="text-stone-900 mb-2">{faq.q}</h3>
                        <p className="text-stone-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="text-lg mb-4">Free {service.title} Consultation</h3>
                  <div className="space-y-3 text-sm">
                    <a href="tel:510-755-5616" className="flex items-center gap-2 hover:underline">
                      <Phone className="w-4 h-4" /> (510) 755-5616
                    </a>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Serving the I-680 Corridor
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
                  <h4 className="font-bold text-stone-900 mb-3">All Services</h4>
                  <ul className="space-y-2 text-sm">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`inline-flex items-center gap-1 transition-colors ${
                            s.slug === service.slug
                              ? "text-stone-900 font-semibold"
                              : "text-primary hover:underline"
                          }`}
                        >
                          {s.slug === service.slug ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3 h-3" />
                          )}
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-3">Areas We Serve</h4>
                  <ul className="space-y-2 text-sm">
                    {areas.slice(0, 6).map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {area.name} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                    <li className="pt-1">
                      <span className="text-stone-500 text-xs">+ {areas.length - 6} more cities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ready to Make Your {service.title} Vision Real?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 200+ Bay Area homeowners who turned their vision into reality.
              Free consultation, transparent pricing, and results you will love.
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
