import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Flag, BadgeCheck, Award } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import AlternatingFeatures from "@/components/sections/AlternatingFeatures";
import PhotoGallery from "@/components/sections/PhotoGallery";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import { photos, extraPhotos } from "@/content/gallery";

export const metadata: Metadata = {
  title: "About Visionable Landscaping | Bay Area's Trusted Landscape Team",
  description:
    "Meet the team behind 100+ Bay Area landscape projects. Licensed, insured, and committed to turning your outdoor vision into reality.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    title: "One team, from first sketch to final stone",
    body: "Design, hardscaping, planting, lighting, and irrigation are handled by our own crew. We choose premium materials and sweat the finishing details most builders skip, because those are the details you live with every day.",
    bullets: [
      "One point of contact from estimate to walkthrough",
      "Premium materials from trusted Bay Area suppliers",
    ],
    image: {
      src: "/photos/before-after/case-1-after-1280.webp",
      alt: "A finished Bay Area backyard transformed by the Visionable Landscaping crew",
    },
  },
  {
    title: "Built to live easy, season after season",
    body: "Climate-appropriate planting, efficient irrigation, and low-maintenance surfaces keep your yard looking its best through a long Bay Area summer. Beautiful landscapes that respect where they sit and hand your weekends back instead of filling them with upkeep.",
    bullets: [
      "Drought-tolerant planting suited to Bay Area soils",
      "Drip irrigation and zoning that cut water waste",
      "Surfaces chosen for how little they ask of you",
    ],
    image: {
      src: "/photos/before-after/case-2-after-1280.webp",
      alt: "A completed low-maintenance landscape designed for the Bay Area climate",
    },
  },
  {
    title: "Honest from estimate to the day you move outside",
    body: "Clear timelines and proactive updates from the first walk-through to the last. You sign a fixed-price contract. If the site reveals something we could not see, such as buried concrete, we show you and you approve any change in writing before we do it. We are fully licensed by the CSLB and insured, and your vision drives every decision, so the finished space feels unmistakably yours.",
    bullets: [
      "A fixed-price contract, with changes approved in writing",
      "Daily photo updates while the crew is on site",
      "Written workmanship warranty",
    ],
    image: {
      src: "/photos/before-after/case-3-after-1280.webp",
      alt: "A finished outdoor living space built around the homeowner's vision",
    },
  },
];

const milestones = [
  { year: "2022", label: "Visionable Landscaping LLC formed", Icon: Flag },
  { year: "2023", label: "CSLB C-27 license issued (#1101860)", Icon: BadgeCheck },
  { year: "2026", label: "Techo-Bloc Techo-Pro and NDS certified", Icon: Award },
];

export default function AboutPage() {
  const gallery = [...photos.slice(0, 3), ...extraPhotos.slice(0, 2)];

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="About Visionable Landscaping"
          title={
            <>
              Turning visions into
              <br />
              outdoor reality
            </>
          }
          lede="A Fremont-based design-build team with 100+ projects built and a 5.0 rating on Google (26 reviews) and Yelp (6 reviews). We take what you envision and make it real."
          image={{
            src: "/photos/services/bench03.webp",
            alt: "Curved white seat wall with built-in lights around an artificial turf lawn and stamped concrete patio at dusk",
          }}
          facts={[
            { label: "Projects completed", value: "100+" },
            { label: "Rated", value: "5.0 on Google (26) and Yelp (6)" },
            { label: "Certified", value: "Techo-Pro · NDS" },
            { label: "Licensed & insured", value: "CSLB #1101860" },
          ]}
        />

        {/* Our Story */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Our story</h2>
                <p className="text-stone-500">
                  A local team that lives and works in the communities we serve.
                </p>
                <figure className="mt-8 max-w-xs">
                  <Image
                    src="/about.jpg"
                    alt="Kun Huang, founder of Visionable Landscaping"
                    width={797}
                    height={977}
                    sizes="(max-width: 1024px) 320px, 300px"
                    className="rounded-2xl border border-stone-200 bg-stone-100"
                  />
                  <figcaption className="mt-3 text-sm text-stone-500">
                    Kun Huang (Bob), founder and C-27 qualifying individual
                  </figcaption>
                </figure>
              </div>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Visionable Landscaping started with a simple idea: every homeowner deserves an
                  outdoor space that matches their vision, built by people who genuinely care about
                  the craft.
                </p>
                <p>
                  We&apos;ve completed more than 100 projects across the Bay Area,
                  from intimate courtyard gardens in Fremont to complete backyard remodels in San
                  Jose. Our crews bring 15+ years of hands-on experience building Bay
                  Area landscapes.
                </p>
                <p>
                  We are a Techo-Bloc certified Techo-Pro contractor and an NDS certified
                  professional drainage contractor, so the pavers and the water management under
                  them are built to the manufacturers&apos; own installation standards.
                </p>
                <p>
                  When you call Visionable, you&apos;re talking to the people who will actually design and build
                  your space.
                </p>
                <p>
                  Our approach is straightforward: listen to your vision, design something
                  extraordinary, build it with precision, and stand behind our work. Our own crew
                  builds every project, and you deal with the same people from first visit to final
                  walkthrough.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AlternatingFeatures
          features={pillars}
          title="What we stand for"
          intro="The principles behind every project we take on."
          className="bg-surface"
        />

        <PhotoGallery
          photos={gallery}
          title="Recent work"
          intro="A cross-section of what the crew has built across the Bay Area."
          className="bg-background"
        />


        {/* Timeline */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-12 text-center">Our journey</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" aria-hidden="true" />
              <ol className="space-y-10">
                {milestones.map((m) => (
                  <li key={m.label} className="relative flex items-start gap-6 pl-2">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                      <m.Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-sm font-semibold text-accent-dark">{m.year}</p>
                      <p className="text-stone-700 font-medium">{m.label}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Testimonials />

        <CTABanner
          title="Ready to share your vision?"
          subtitle="Free design consultation. No pressure. Just a conversation about what's possible."
          primaryText="Share Your Vision"
          secondaryText="See Our Work"
          secondaryHref="/portfolio"
          bgImage="/photos/cta-bg.webp"
        />
      </main>
      <Footer />
    </>
  );
}
