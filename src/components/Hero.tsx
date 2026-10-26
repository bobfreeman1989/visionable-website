import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { heroBadges } from "@/content/hero";
import { ratingShort } from "@/content/reviews";

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-[88svh] md:min-h-[70vh] lg:min-h-screen flex items-end md:items-center overflow-hidden">
      <div className="absolute inset-0 hero-drift">
        <picture>
          <source srcSet="/hero.webp" media="(min-width: 768px)" type="image/webp" />
          <img
            src="/hero-mobile.webp"
            alt="Dark aluminum pergola over an outdoor lounge on a low deck, with artificial turf and stepping stones"
            className="h-full w-full object-cover object-[50%_40%]"
            width={900}
            height={1200}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      {/* Scrim sits only where the text is: under the copy at the bottom on
          phones, along the left edge from md up, so the build stays visible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-950/70 via-45% to-green-950/0 md:hidden" />
      <div className="absolute inset-0 hidden md:block bg-green-950/30" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-green-950/90 via-green-950/65 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:py-10 w-full">
        <FadeUp delay={0.1} className="inline-flex items-center gap-2 bg-green-900/60 rounded-full px-4 py-2 mb-5 md:mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-accent-light text-sm">★</span>
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">{ratingShort}</span>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.1] mb-4 md:mb-6">
            We Make It <span className="text-accent">Visionable</span>
            <br />
            {/* Keep the brand line while adding clear service and location context. */}
            <span className="block mt-3 text-white/70 text-[clamp(1.1rem,2vw,1.5rem)] font-normal tracking-wide">
              Bay Area landscape design-build — patios, walls, pergolas, lighting.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="hidden sm:block text-white/85 text-lg leading-relaxed max-w-2xl mb-8">
            We design your yard, then our own crew builds it on a fixed-price contract. Based
            in Fremont.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-0 mb-6 sm:mb-8">
            <a
              href="#contact"
              className="bg-accent text-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-[transform,box-shadow] inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Share Your Vision
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#portfolio"
              className="hidden sm:block border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              See 100+ Projects
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="sm:hidden text-xs leading-relaxed text-white/70">
            {heroBadges.map((badge) => badge.text).join(" · ")}
          </p>
          <div className="hidden sm:flex sm:flex-wrap gap-x-6 gap-y-3">
            {heroBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-white/70">
                <badge.Icon className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
