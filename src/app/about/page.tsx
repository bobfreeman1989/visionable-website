import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Flag, Rocket, MapPin, Trophy, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Visionable Landscaping | Bay Area's Trusted Landscape Team",
  description:
    "Meet the team behind 200+ Bay Area landscape projects. Licensed, insured, and committed to turning your outdoor vision into reality. Serving Fremont, San Jose & beyond.",
};

const pillars = [
  {
    title: "One team, from first sketch to final stone",
    desc: "Design, hardscaping, planting, lighting, and irrigation are handled by our own crew, never a rotating cast of subcontractors. We choose premium materials and sweat the finishing details most builders skip, because those are the details you live with every day.",
    image: "/photos/before-after/case-1-after-1280.webp",
    alt: "A finished Bay Area backyard transformed by the Visionable Landscaping crew",
  },
  {
    title: "Built to live easy, season after season",
    desc: "Climate-appropriate planting, efficient irrigation, and low-maintenance surfaces keep your yard looking its best through a long Bay Area summer. Beautiful landscapes that respect where they sit and hand your weekends back instead of filling them with upkeep.",
    image: "/photos/before-after/case-2-after-1280.webp",
    alt: "A completed low-maintenance landscape designed for the Bay Area climate",
  },
  {
    title: "Honest from estimate to the day you move outside",
    desc: "Clear timelines, locked-in pricing, and proactive updates from the first walk-through to the last. We are fully licensed by the CSLB and insured, and your vision drives every decision, so the finished space feels unmistakably yours.",
    image: "/photos/before-after/case-3-after-1280.webp",
    alt: "A finished outdoor living space built around the homeowner's vision",
  },
];

const milestones = [
  { year: "2009", label: "Founded in Fremont, CA", Icon: Flag },
  { year: "2015", label: "100th project completed", Icon: Rocket },
  { year: "2019", label: "Expanded to full Bay Area coverage", Icon: MapPin },
  { year: "2022", label: "200+ projects milestone", Icon: Trophy },
  { year: "2024", label: "5.0 stars across Google & Yelp", Icon: Star },
];


export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-900 opacity-95" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-semibold mb-3 tracking-wide uppercase text-sm">About Visionable Landscaping</p>
                <h1 className="text-4xl md:text-5xl text-white mb-6 font-heading leading-tight">
                  Turning Visions Into<br />Outdoor Reality
                </h1>
                <p className="text-green-100 text-lg leading-relaxed mb-8">
                  Founded in Fremont over 15 years ago, Visionable Landscaping has grown from a
                  small local crew into one of the Bay Area&apos;s most trusted landscape design and
                  build teams. Our name says it all, we take what you envision and make it real.
                </p>
                <p className="text-green-200 text-sm">
                  CSLB licensed &amp; insured · 15+ years · 200+ Bay Area projects · 5.0 on Google &amp; Yelp
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about.jpg"
                    alt="Visionable Landscaping team at work"
                    width={797}
                    height={977}
                    className="object-cover w-full h-auto max-h-[500px] rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-8 font-heading text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-stone-600 space-y-6">
              <p>Visionable Landscaping started with a simple idea: every homeowner deserves an outdoor space that matches their vision, built by people who genuinely care about the craft.</p>
              <p>Over the past 15+ years, we&apos;ve completed more than 200 projects across the San Francisco Bay Area, from intimate courtyard gardens in Fremont to expansive backyard transformations in San Jose, Pleasanton, and beyond. Each project taught us something new, and every satisfied client reinforced our commitment to quality.</p>
              <p>We&apos;re not a franchise. We&apos;re not a faceless corporation. We&apos;re a local team that lives and works in the communities we serve. When you call Visionable, you&apos;re talking to the people who will actually design and build your space.</p>
              <p>Our approach is straightforward: listen to your vision, design something extraordinary, build it with precision, and stand behind our work. No shortcuts. No subcontractors. Just honest craftsmanship from people who love what they do.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl text-stone-900 mb-4 font-heading">What We Stand For</h2>
              <p className="text-stone-500 text-lg">These aren&apos;t words on a page. They&apos;re the principles behind every project we take on.</p>
            </div>
            <div className="space-y-16 lg:space-y-24">
              {pillars.map((p, i) => (
                <div key={p.title} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 540px, 100vw"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="font-heading text-2xl md:text-3xl text-stone-900 mb-4 leading-snug">{p.title}</h3>
                    <p className="text-stone-600 text-lg leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-12 font-heading text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" />
              <div className="space-y-10">
                {milestones.map((m) => (
                  <div key={m.year} className="relative flex items-start gap-6 pl-2">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                      <m.Icon className="w-4 h-4" />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-sm font-semibold text-accent">{m.year}</p>
                      <p className="text-stone-700 font-medium">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-heading">Ready to Share Your Vision?</h2>
            <p className="text-green-100 mb-8 text-lg">Free consultation. No pressure. Just a conversation about what&apos;s possible.</p>
            <a href="/#contact" className="inline-block bg-accent text-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Share Your Vision
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
