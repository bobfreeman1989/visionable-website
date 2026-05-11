import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Shield, Award, Clock, Users, Leaf, Hammer, Rocket, Flag, MapPin, Trophy, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Visionable Landscaping | Bay Area's Trusted Landscape Team",
  description:
    "Meet the team behind 200+ Bay Area landscape projects. Licensed, insured, and committed to turning your outdoor vision into reality. Serving Fremont, San Jose & beyond.",
};

const values = [
  { Icon: Shield, title: "Licensed & Insured", desc: "Fully licensed by the CSLB and insured for your peace of mind. Every project is backed by our commitment to professionalism." },
  { Icon: Award, title: "Quality Craftsmanship", desc: "We don't cut corners. Premium materials, meticulous installation, and finishing touches that make the difference." },
  { Icon: Clock, title: "On Time, On Budget", desc: "Clear timelines, transparent pricing, and proactive communication from start to finish. No surprises." },
  { Icon: Users, title: "Customer First", desc: "Your vision drives every decision. We listen, collaborate, and deliver spaces you'll love for years to come." },
  { Icon: Leaf, title: "Sustainable Design", desc: "Drought-tolerant plants, efficient irrigation, and eco-friendly materials — beautiful landscapes that respect the environment." },
  { Icon: Hammer, title: "Full-Service Team", desc: "Design, hardscaping, softscaping, lighting, irrigation — one team handles it all. No subcontractor runaround." },
];

const milestones = [
  { year: "2009", label: "Founded in Fremont, CA", Icon: Flag },
  { year: "2015", label: "100th project completed", Icon: Rocket },
  { year: "2019", label: "Expanded to full Bay Area coverage", Icon: MapPin },
  { year: "2022", label: "200+ projects milestone", Icon: Trophy },
  { year: "2024", label: "5.0 stars across Google & Yelp", Icon: Star },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "200+", label: "Projects Completed" },
  { value: "5.0", label: "Star Rating" },
  { value: "100%", label: "Satisfaction Rate" },
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                  Turning Visions Into<br />Outdoor Reality
                </h1>
                <p className="text-green-100 text-lg leading-relaxed mb-8">
                  Founded in Fremont over 15 years ago, Visionable Landscaping has grown from a
                  small local crew into one of the Bay Area&apos;s most trusted landscape design and
                  build teams. Our name says it all — we take what you envision and make it real.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-bold text-accent">{s.value}</p>
                      <p className="text-green-200 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
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
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>Visionable Landscaping started with a simple idea: every homeowner deserves an outdoor space that matches their vision, built by people who genuinely care about the craft.</p>
              <p>Over the past 15+ years, we&apos;ve completed more than 200 projects across the San Francisco Bay Area — from intimate courtyard gardens in Fremont to expansive backyard transformations in San Jose, Pleasanton, and beyond. Each project taught us something new, and every satisfied client reinforced our commitment to quality.</p>
              <p>We&apos;re not a franchise. We&apos;re not a faceless corporation. We&apos;re a local team that lives and works in the communities we serve. When you call Visionable, you&apos;re talking to the people who will actually design and build your space.</p>
              <p>Our approach is straightforward: listen to your vision, design something extraordinary, build it with precision, and stand behind our work. No shortcuts. No subcontractors. Just honest craftsmanship from people who love what they do.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">What We Stand For</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">These aren&apos;t just words on a page — they&apos;re the principles that guide every project we take on.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <v.Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-heading text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-10">
                {milestones.map((m) => (
                  <div key={m.year} className="relative flex items-start gap-6 pl-2">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                      <m.Icon className="w-4 h-4" />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-sm font-semibold text-accent">{m.year}</p>
                      <p className="text-gray-700 font-medium">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to Share Your Vision?</h2>
            <p className="text-green-100 mb-8 text-lg">Free consultation. No pressure. Just a conversation about what&apos;s possible.</p>
            <a href="/#contact" className="inline-block bg-accent hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg">
              Share Your Vision
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
