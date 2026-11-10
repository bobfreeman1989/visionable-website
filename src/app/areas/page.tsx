import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/sections/PageHero";
import { areas } from "@/lib/areas";
import { photosForArea } from "@/content/gallery";
import { ratingShort } from "@/content/reviews";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "Bay Area Landscaping Service Areas | Visionable",
  description:
    "Landscape design-build in Los Altos, Los Altos Hills, Palo Alto, Saratoga, Los Gatos, Cupertino, Mountain View, Sunnyvale, San Jose and nearby Bay Area cities.",
  openGraph: {
    title: "Bay Area Landscaping Service Areas | Visionable",
    description:
      "Visionable Landscaping service areas across the Bay Area.",
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
  const heroPhoto = photosForArea("saratoga", allSlugs, 1)[0];


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
          title="Landscaping across the Bay Area"
          lede="Los Altos, Palo Alto, Saratoga and the cities around them. Our own crew and the same standard, wherever your yard is."
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          facts={[
            { label: "Cities served", value: `${areas.length} and nearby` },
            { label: "Home base", value: "Fremont, CA" },
            { label: "Projects built", value: "100+" },
            { label: "Rated", value: ratingShort },
          ]}
        />

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-9 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="text-3xl md:text-4xl text-stone-900">Cities we serve</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => {
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
                        {area.county} County
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
          subtitle="Free design consultation anywhere in the Bay Area. No pressure, just a conversation."
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
