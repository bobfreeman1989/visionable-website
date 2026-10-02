import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/sections/PageHero";
import { areas } from "@/lib/areas";
import { photosForArea } from "@/content/gallery";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "South Bay & Peninsula Landscaping Service Areas | Visionable",
  description:
    "Landscape design-build across the South Bay and Peninsula: San Jose, Saratoga, Los Gatos, Cupertino, Sunnyvale, Mountain View, Los Altos, Palo Alto, San Carlos and more.",
  openGraph: {
    title: "South Bay & Peninsula Landscaping Service Areas | Visionable",
    description:
      "Visionable Landscaping service areas across San Jose, the West Valley, Silicon Valley and the Peninsula.",
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
  const allSlugs = areas.map((a) => a.slug);
  const heroPhoto = photosForArea("san-jose", allSlugs, 1)[0];

  // Sorted so neighbouring cities sit together and each card names its region,
  // rather than split into per-region sections: three of the six regions hold a
  // single city, which leaves a three-column grid mostly empty.
  const regionOrder = Array.from(new Set(areas.map((a) => a.region)));
  const sorted = [...areas].sort(
    (a, b) => regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasItemListSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="Local landscaping service areas"
          title="Landscaping across the South Bay and Peninsula"
          lede="From West San Jose and the West Valley to Silicon Valley and the Peninsula. One in-house crew and the same standard, wherever your yard is."
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          facts={[
            { label: "Cities served", value: `${areas.length} and nearby` },
            { label: "Home base", value: "Fremont, CA" },
            { label: "Projects built", value: "200+" },
            { label: "Rated", value: "5.0 on Google & Yelp" },
          ]}
        />

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-9 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="text-3xl md:text-4xl text-stone-900">Cities we serve</h2>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {regionOrder.map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-sm text-stone-700"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((area) => {
                const photo = photosForArea(area.slug, allSlugs, 1)[0];
                return (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <h3 className="absolute inset-x-0 bottom-0 p-4 text-xl text-white">
                        {area.name}, CA
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold mb-2">
                        {area.county} County · {area.region}
                      </p>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                        {area.heroText}
                      </p>
                      <span className="text-primary font-semibold text-sm inline-flex items-center gap-1.5">
                        View {area.name} services
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to talk about your yard?"
          subtitle="Free consultation anywhere in the South Bay and Peninsula. No pressure, just a conversation."
          primaryText="Share Your Vision"
          secondaryText="Browse Services"
          secondaryHref="/services"
          bgImage="/photos/cta-bg.webp"
        />
      </main>
      <Footer />
    </>
  );
}
