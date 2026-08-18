import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/sections/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import CTABanner from "@/components/CTABanner";
import ContactCTA from "@/components/ContactCTA";
import { portfolioProjects, photos, extraPhotos, heroForService } from "@/content/gallery";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "Backyard & Landscaping Portfolio | Bay Area | Visionable",
  description:
    "Real Bay Area landscaping projects by Visionable — paver patios, artificial turf, pergolas, outdoor kitchens, retaining walls and full backyard remodels in Fremont, Pleasanton, Dublin, San Ramon and across the I-680 corridor.",
  openGraph: {
    title: "Backyard & Landscaping Portfolio | Bay Area | Visionable",
    description:
      "Paver patios, turf, pergolas, outdoor kitchens and complete backyard remodels — real projects across Fremont and the I-680 corridor.",
    url: `${BASE_URL}/portfolio`,
    images: [{ url: portfolioProjects[0].src }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard & Landscaping Portfolio | Bay Area | Visionable",
    description:
      "Real Bay Area backyard projects — pavers, turf, pergolas, outdoor kitchens and full remodels.",
    images: [portfolioProjects[0].src],
  },
  alternates: { canonical: "/portfolio" },
};

/**
 * The gallery is the point of this page, so every photograph is declared as an
 * ImageObject rather than left as bare <img> markup. `contentUrl` and a real
 * `caption` make the image details explicit and machine-readable.
 */
const galleryPhotos = [
  ...portfolioProjects.map((p) => ({
    src: p.src,
    caption: `${p.caption} — ${p.location}, CA`,
    alt: p.alt,
  })),
  ...[...photos, ...extraPhotos].map((p) => ({
    src: p.src,
    caption: p.caption,
    alt: p.alt,
  })),
];

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${BASE_URL}/portfolio#gallery`,
  url: `${BASE_URL}/portfolio`,
  name: "Visionable Landscaping project portfolio",
  description:
    "Completed landscape design-build projects across Fremont and the Bay Area I-680 corridor.",
  about: { "@id": `${BASE_URL}/#business` },
  associatedMedia: galleryPhotos.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `${BASE_URL}${p.src}`,
    caption: p.caption,
    creditText: "Visionable Landscaping",
    creator: { "@id": `${BASE_URL}/#business` },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/portfolio` },
  ],
};

/**
 * Grouped by category rather than filtered client-side. A filter would hide
 * two-thirds of the page behind a click; sections give each category its own
 * heading, which is both better for a crawler and faster to scan.
 */
const CATEGORIES = [
  {
    name: "Hardscaping" as const,
    heading: "Hardscaping — patios, walkways and retaining walls",
    lede: "Pavers, stone and concrete: the structure a yard is built on. These are the surfaces that decide where everything else goes.",
  },
  {
    name: "Outdoor Living" as const,
    heading: "Outdoor living — pergolas, kitchens and sport courts",
    lede: "Shade, cooking, seating and play. The parts of a build that decide whether the yard actually gets used after it is finished.",
  },
  {
    name: "Landscaping" as const,
    heading: "Landscaping — turf, planting and privacy",
    lede: "Artificial turf, raised beds, screening and planting schemes, designed around Bay Area water use and clay-heavy soil.",
  },
];

export default function PortfolioPage() {
  const heroPhoto = heroForService("complete-backyard-remodel");
  const cityNames = Array.from(new Set(portfolioProjects.map((p) => p.location)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="Completed projects · Fremont & the I-680 corridor"
          title="200+ Bay Area yards, built and photographed"
          lede="Every photograph below is a yard we designed and built with our own crew — no stock imagery, no subcontracted work. Locations are the real ones."
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          ctaHref="#contact"
          above={
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-green-100/80 mb-5"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="text-white font-medium">Portfolio</span>
            </nav>
          }
          facts={[
            { label: "Projects built", value: "200+" },
            { label: "Cities", value: "Fremont to Walnut Creek" },
            { label: "Rated", value: "5.0 on Google & Yelp" },
            { label: "Crew", value: "In-house, no subs" },
          ]}
        />

        {CATEGORIES.map((category, ci) => {
          const items = portfolioProjects.filter((p) => p.category === category.name);
          if (items.length === 0) return null;
          return (
            <section
              key={category.name}
              className={`py-14 md:py-16 ${ci % 2 === 0 ? "bg-background" : "bg-surface"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">{category.heading}</h2>
                <p className="text-stone-600 max-w-2xl mb-9">{category.lede}</p>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((project) => (
                    <li
                      key={project.id}
                      className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={project.src}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg text-stone-900 mb-1">{project.title}</h3>
                        <p className="text-sm text-stone-500">{project.location}, CA</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <BeforeAfter />

        {/* Detail shots — the catalogue beyond the twelve headline projects */}
        <section className="py-14 md:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">Details and finishes</h2>
            <p className="text-stone-600 max-w-2xl mb-9">
              Seat walls, water features, lighting, benches and planting — the parts of a build that
              decide whether a yard reads as finished or as assembled.
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[...photos, ...extraPhotos].map((photo) => (
                <li key={photo.src} className="overflow-hidden rounded-xl bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-3 py-2.5 text-xs text-stone-600 leading-snug">{photo.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cross-links: the reason this page earns its place in the site graph */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">Browse by service</h2>
            <p className="text-stone-600 max-w-2xl mb-8">
              Each service page carries its own gallery, pricing context and the questions
              homeowners ask most about that specific build.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">Browse by city</h2>
            <p className="text-stone-600 max-w-2xl mb-8">
              Projects on this page were built in {cityNames.slice(0, 5).join(", ")} and beyond.
              Pick a city for local work, permitting notes and nearby builds.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors inline-flex items-center gap-1.5"
                >
                  Landscaping in {area.name}
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Your yard could be the next one on this page."
          subtitle="Free consultation, 3D renderings before we break ground, and transparent pricing."
          primaryText="Share Your Vision"
          secondaryText="See Our Process"
          secondaryHref="/#process"
          bgImage="/photos/cta-bg.webp"
        />

        <ContactCTA
          title="Start your project"
          subtitle="Tell us about the space. We'll visit, measure, and follow up with 3D renderings before anything is built."
        />
      </main>
      <Footer />
    </>
  );
}
