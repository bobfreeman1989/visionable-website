import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/sections/PageHero";
import Process from "@/components/Process";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { heroForService } from "@/content/gallery";
import { serviceFacts } from "@/content/service-facts";

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

/**
 * The three most-requested services get full photographic treatment; the rest
 * are a denser row list. A flat grid of ten identical cards is the template
 * look DESIGN.md explicitly rules out.
 */
const LEAD_SLUGS = ["paver-installation", "artificial-turf", "complete-backyard-remodel"];

export default function ServicesIndexPage() {
  const lead = LEAD_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(
    (s): s is (typeof services)[number] => Boolean(s)
  );
  const rest = services.filter((s) => !LEAD_SLUGS.includes(s.slug));
  const heroPhoto = heroForService("complete-backyard-remodel");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="Fremont & Bay Area landscaping services"
          title="Design-build landscaping for outdoor living spaces that last"
          lede="One in-house team handles pavers, turf, pergolas, fencing, irrigation, drainage, design, lighting, retaining walls, and complete backyard remodels across Fremont and the I-680 corridor."
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          facts={[
            { label: "Projects built", value: "200+" },
            { label: "Rated", value: "5.0 on Google & Yelp" },
            { label: "Licensed", value: "CSLB #1101860" },
            { label: "Consultation", value: "Free, with 3D renderings" },
          ]}
        />

        {/* Lead services — a photograph each */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="text-3xl md:text-4xl text-stone-900">Where most projects start</h2>
              <p className="text-stone-600 max-w-2xl lg:ml-auto lg:text-right">
                Most yards we build begin with one of these, then grow as the design comes together.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {lead.map((service) => {
                const photo = heroForService(service.slug);
                const facts = serviceFacts[service.slug] ?? [];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl text-stone-900 mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-5">{service.shortDesc}</p>
                      {facts.length > 0 && (
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-stone-100 pt-4 mb-5">
                          {facts.slice(0, 2).map((f) => (
                            <div key={f.label}>
                              <dt className="text-xs uppercase tracking-[0.12em] text-stone-500 mb-1">
                                {f.label}
                              </dt>
                              <dd className="text-sm font-medium text-stone-900">{f.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <span className="text-primary font-semibold inline-flex items-center gap-1.5">
                        Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Remaining services — compact rows with a thumbnail */}
        <section className="py-14 md:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">Everything else we build</h2>
            <p className="text-stone-600 max-w-2xl mb-9">
              Handled by the same crew, on the same timeline, whether it is the whole yard or one
              piece of it.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((service) => {
                const photo = heroForService(service.slug);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex gap-5 rounded-2xl border border-stone-200 bg-white p-4 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30"
                  >
                    <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden rounded-xl aspect-[4/3]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="144px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 py-1">
                      <h3 className="text-lg text-stone-900 mb-1.5 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-3 line-clamp-2">
                        {service.shortDesc}
                      </p>
                      <ul className="hidden sm:flex flex-wrap gap-x-4 gap-y-1">
                        {service.benefits.slice(0, 2).map((b) => (
                          <li key={b} className="flex items-center gap-1.5 text-xs text-stone-600">
                            <CheckCircle
                              className="w-3.5 h-3.5 text-primary shrink-0"
                              strokeWidth={1.5}
                            />
                            <span className="truncate max-w-[16rem]">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Process />

        <section className="py-12 bg-background border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl text-stone-900 mb-2">Where we work</h2>
            <p className="text-stone-600 mb-5 max-w-2xl">
              Based in Fremont, serving the East Bay, South Bay, and the I-680 corridor.
            </p>
            <div className="flex flex-wrap gap-2.5">
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

        <CTABanner
          title="Not sure which service fits your yard?"
          subtitle="Start with a free consultation. We will help you choose the right scope before you build."
          primaryText="Share Your Vision"
          secondaryText="See Our Work"
          secondaryHref="/#portfolio"
          bgImage="/photos/cta-bg.webp"
        />
      </main>
      <Footer />
    </>
  );
}
