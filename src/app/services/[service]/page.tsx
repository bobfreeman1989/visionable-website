import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { services, getServiceBySlug, contactOptionForService } from "@/lib/services";
import { areas } from "@/lib/areas";
import { photosForService, heroForService } from "@/content/gallery";
import { serviceFacts } from "@/content/service-facts";
import PageHero from "@/components/sections/PageHero";
import PhotoGallery from "@/components/sections/PhotoGallery";
import AlternatingFeatures from "@/components/sections/AlternatingFeatures";
import RelatedCards from "@/components/sections/RelatedCards";
import Accordion from "@/components/sections/Accordion";
import BeforeAfter from "@/components/BeforeAfter";
import CTABanner from "@/components/CTABanner";
import ContactCTA from "@/components/ContactCTA";

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
      images: [{ url: heroForService(service.slug).src }],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const facts = serviceFacts[service.slug];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // One ranked pull, partitioned so the hero, the feature rows and the gallery
  // never show the same photograph twice on a page.
  const ranked = photosForService(service.slug, 9);
  const hero = ranked[0];
  const featurePhotos = ranked.slice(1, 4);
  const gallery = ranked.slice(4, 9);

  // Pair each body paragraph with a photo so the explanation sits beside
  // evidence of it rather than running as a column of prose.
  const features = service.content.slice(0, 3).map((paragraph, i) => ({
    title:
      [
        `What ${service.title.toLowerCase()} looks like with Visionable`,
        "How we build it",
        "Choosing the right materials",
      ][i] ?? service.title,
    body: paragraph,
    bullets: i === 0 ? service.benefits.slice(0, 3) : i === 1 ? service.benefits.slice(3, 6) : undefined,
    image: featurePhotos[i % featurePhotos.length] ?? hero,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${BASE_URL}/services/${service.slug}`,
    image: `${BASE_URL}${hero.src}`,
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
    areaServed: areas.map((a) => ({ "@type": "City", name: `${a.name}, CA` })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${BASE_URL}/services/${service.slug}`,
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-16">
        <PageHero
          eyebrow="Bay Area design-build"
          title={service.title}
          lede={service.heroText}
          image={{ src: hero.src, alt: hero.alt }}
          facts={facts}
          ctaHref="#contact"
          above={
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-white/70 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="text-white font-medium">{service.title}</span>
            </nav>
          }
        />

        <AlternatingFeatures features={features} />

        <PhotoGallery
          photos={gallery}
          title={`${service.title} we have built`}
          intro={`Recent ${service.title.toLowerCase()} work across Fremont and the I-680 corridor.`}
          action={
            <Link
              href="/#portfolio"
              className="text-primary font-semibold inline-flex items-center gap-1.5 hover:underline shrink-0"
            >
              See the full portfolio <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          }
        />

        <BeforeAfter />

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">
              {service.title} questions, answered
            </h2>
            <p className="text-stone-600 mb-8">
              The things Bay Area homeowners ask us most before starting.
            </p>
            <Accordion items={service.faqs} idPrefix={`svc-${service.slug}`} />
          </div>
        </section>

        <RelatedCards
          title="Pairs well with"
          intro="Most projects combine two or three of these. We build them as one job, on one timeline."
          cards={related.map((s) => {
            const photo = heroForService(s.slug);
            return {
              href: `/services/${s.slug}`,
              title: s.title,
              blurb: s.shortDesc,
              image: { src: photo.src, alt: photo.alt },
            };
          })}
        />

        <section className="py-12 bg-background border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl text-stone-900 mb-4">
              {service.title} near you
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title={`Ready to make your ${service.title.toLowerCase()} vision real?`}
          subtitle="Free consultation, 3D renderings before we break ground, and transparent pricing."
          primaryText="Share Your Vision"
          primaryHref="#contact"
          secondaryText="See Our Process"
          secondaryHref="/#process"
          bgImage="/photos/cta-bg.webp"
        />

        <ContactCTA
          title={`Start your ${service.title.toLowerCase()} project`}
          subtitle="Tell us about the space. We'll visit, measure, and follow up with 3D renderings before anything is built."
          defaultService={contactOptionForService(service.slug)}
          detailsPlaceholder={`What are you picturing for your ${service.title.toLowerCase()}? Rough size, current condition, anything you already know you want.`}
        />
      </div>
    </>
  );
}
