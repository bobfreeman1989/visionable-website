import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import { heroBadges } from "@/content/hero";

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Bay Area backyard landscape design by Visionable Landscaping"
          fill
          priority
          className="hidden md:block object-cover"
          sizes="100vw"
        />
        <Image
          src="/hero-mobile.webp"
          alt="Bay Area backyard landscape design by Visionable Landscaping"
          fill
          priority
          className="md:hidden object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/80 to-green-950/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <FadeUp delay={0.1} className="inline-flex items-center gap-2 bg-green-900/60 rounded-full px-4 py-2 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-accent text-sm">★</span>
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">5.0 on Google & Yelp</span>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.1] mb-6">
            We Make It <span className="text-accent">Visionable</span>
            <br />
            <span className="block mt-3 text-white/70 text-[clamp(1.1rem,2vw,1.5rem)] font-normal tracking-wide">
              Your Backyard. Your Vision. Built for Real Life.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30 hover:shadow-xl"
            >
              Share Your Vision
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              See 200+ Visions Built
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3">
            {heroBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-white/70">
                <badge.Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
