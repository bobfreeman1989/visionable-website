import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ChevronRight, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { areas, getAreaBySlug, faqsForCity } from "@/lib/areas";
import { services } from "@/lib/services";
import { photosForArea, heroForService } from "@/content/gallery";
import PageHero from "@/components/sections/PageHero";
import PhotoGallery from "@/components/sections/PhotoGallery";
import RelatedCards from "@/components/sections/RelatedCards";
import Accordion from "@/components/sections/Accordion";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import ContactCTA from "@/components/ContactCTA";

const BASE_URL = "https://visionablelandscaping.com";

export function generateStaticParams() {
  return areas.map((area) => ({ city: area.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getAreaBySlug(params.city);
  if (!city) return {};

  const photo = photosForArea(city.slug, areas.map((a) => a.slug), 1)[0];

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${BASE_URL}/areas/${city.slug}`,
      images: [{ url: photo.src }],
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

  const allSlugs = areas.map((a) => a.slug);
  // Each city draws a different slice of the catalogue, so eleven pages no
  // longer show a visitor the same eight photographs.
  const cityPhotos = photosForArea(city.slug, allSlugs, 5);
  const heroPhoto = photosForArea(city.slug, allSlugs, 6)[5];

  const nearbyAreas = city.nearbyAreas
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Visionable Landscaping",
    description: `Professional landscaping services in ${city.name}, CA. Hardscaping, paver installation, artificial turf, pergolas, fence and gate installation, irrigation and drainage, outdoor lighting, and complete backyard remodels.`,
    url: `${BASE_URL}/areas/${city.slug}`,
    telephone: "+1-510-755-5616",
    email: "info@visionablelandscaping.com",
    image: `${BASE_URL}${heroPhoto.src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "581 Emerson St",
      addressLocality: "Fremont",
      addressRegion: "CA",
      postalCode: "94539",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${city.name}, CA` },
    priceRange: "$$-$$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Landscaping services in ${city.name}, CA`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} in ${city.name}, CA`,
          description: service.shortDesc,
          areaServed: { "@type": "City", name: `${city.name}, CA` },
          provider: { "@type": "LocalBusiness", name: "Visionable Landscaping" },
          url: `${BASE_URL}/services/${service.slug}`,
        },
      })),
    },
  };

  const cityFaqs = faqsForCity(city);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${BASE_URL}/areas` },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `${BASE_URL}/areas/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-16">
        <PageHero
          eyebrow={`${city.county} County · ${city.region}`}
          title={`Landscaping in ${city.name}, CA`}
          lede={city.heroText}
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          ctaHref="#contact"
          facts={[
            { label: "Based in", value: "Fremont, minutes away" },
            { label: "Projects built", value: "200+ Bay Area yards" },
            { label: "Rated", value: "5.0 on Google & Yelp" },
            { label: "Licensed", value: "CSLB #1101860" },
          ]}
          above={
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-white/70 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <Link href="/areas" className="hover:text-white transition-colors">
                Areas We Serve
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="text-white font-medium">{city.name}</span>
            </nav>
          }
        />

        {/* Local context + a sticky contact rail */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl text-stone-900 mb-6">
                  Why {city.name} homeowners build with us
                </h2>
                <div className="space-y-5">
                  {city.content.map((paragraph, i) => (
                    <p key={i} className="text-stone-600 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {[
                    "CSLB licensed (#1101860) and insured",
                    "5.0 stars on Google and Yelp",
                    "200+ projects completed",
                    "Free 3D design renderings",
                    "In-house crew, no subcontractors",
                    "Materials and workmanship warranty",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-stone-600">
                      <CheckCircle
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="text-lg mb-1">Free consultation in {city.name}</h3>
                  <p className="text-green-100 text-sm mb-5">
                    We visit, measure, and follow up with 3D renderings. You only pay if you build.
                  </p>
                  <div className="space-y-3 text-sm">
                    <a href="tel:+15107555616" className="flex items-center gap-2 hover:underline">
                      <Phone className="w-4 h-4" strokeWidth={1.5} /> (510) 755-5616
                    </a>
                    <a
                      href="mailto:info@visionablelandscaping.com"
                      className="flex items-center gap-2 hover:underline break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                      info@visionablelandscaping.com
                    </a>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                      Serving {city.name} &amp; {city.region}
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    className="mt-5 block text-center bg-white text-primary font-semibold py-3 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>

                <div className="bg-surface rounded-2xl p-6 border border-stone-200">
                  <h3 className="font-semibold text-stone-900 mb-3">Nearby areas</h3>
                  <ul className="space-y-2 text-sm">
                    {nearbyAreas.map((nearby) => (
                      <li key={nearby.slug}>
                        <Link
                          href={`/areas/${nearby.slug}`}
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Landscaping in {nearby.name}
                          <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <PhotoGallery
          photos={cityPhotos}
          title={`Our work around ${city.name}`}
          intro={`Recent builds from ${city.name} and the surrounding ${city.region}.`}
          action={
            <Link
              href="/#portfolio"
              className="text-primary font-semibold inline-flex items-center gap-1.5 hover:underline shrink-0"
            >
              See the full portfolio <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          }
        />

        <RelatedCards
          title={`Landscaping services in ${city.name}`}
          intro="Every service handled in-house, from the first sketch to the final walkthrough."
          className="bg-background"
          columns={3}
          cards={services.map((s) => {
            const photo = heroForService(s.slug);
            return {
              href: `/services/${s.slug}`,
              title: `${s.title} in ${city.name}`,
              blurb: s.shortDesc,
              image: { src: photo.src, alt: photo.alt },
            };
          })}
        />

        <Process />

        <section className="py-14 md:py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">
              Working with us in {city.name}
            </h2>
            <p className="text-stone-600 mb-8">
              What {city.name} homeowners ask before they book a consultation.
            </p>
            <Accordion items={cityFaqs} idPrefix={`city-${city.slug}`} />
          </div>
        </section>

        <Testimonials />

        <CTABanner
          title={`Ready to transform your ${city.name} yard?`}
          subtitle="Free consultation, 3D renderings before we break ground, and transparent pricing."
          primaryText="Share Your Vision"
          primaryHref="#contact"
          secondaryText="See Our Work"
          secondaryHref="/#portfolio"
          bgImage="/photos/cta-bg.webp"
        />

        <ContactCTA
          title={`Book your free ${city.name} consultation`}
          subtitle="Tell us about the yard. We'll visit, measure, and follow up with 3D renderings before anything is built."
          detailsPlaceholder={`What are you picturing for your ${city.name} yard? Rough size, what you want to use it for, anything you already know you want.`}
        />
      </div>
    </>
  );
}
