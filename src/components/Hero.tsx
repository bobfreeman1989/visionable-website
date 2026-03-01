"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Shield, Trophy, CheckCircle, Palette } from "lucide-react";

const badges = [
  { Icon: Shield, text: "Licensed & Insured" },
  { Icon: Trophy, text: "15+ Years of Excellence" },
  { Icon: CheckCircle, text: "100% Satisfaction Guarantee" },
  { Icon: Palette, text: "Free Design Consultation" },
];

function AnimOnMount({
  children,
  className,
  animation,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: Record<string, unknown>;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  useEffect(() => setMounted(true), []);

  if (!mounted || prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, ...animation }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();
  const bgY = useTransform(scrollY, [0, 500], [0, prefersReduced ? 0 : 150]);

  return (
    <section ref={ref} className="relative pt-20 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/hero.jpg"
          alt="Bay Area backyard landscape design by Visionable Landscaping"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/80 to-green-950/60" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Rating */}
        <AnimOnMount animation={{ y: 10 }} delay={0.2} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-sm">★</span>
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            5.0 on Google & Yelp
          </span>
        </AnimOnMount>

        <AnimOnMount animation={{ y: 20 }} delay={0.4}>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.1] mb-6">
            Bay Area&apos;s #1 Landscape Design &amp; Build Team.
            <br />
            <span className="text-accent">We Make It Visionable.</span>
          </h1>
        </AnimOnMount>

        <AnimOnMount delay={0.6}>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
            Every great yard starts with a vision. We design it, build it, and guarantee it. 200+ backyards transformed across Fremont, San Jose, Sunnyvale &amp; beyond.
          </p>
        </AnimOnMount>

        {/* CTAs */}
        <AnimOnMount animation={{ y: 10 }} delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Share Your Vision
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              See 200+ Visions Built
            </a>
          </div>
        </AnimOnMount>

        {/* Trust badges - horizontal */}
        <AnimOnMount delay={1.0}>
          <div className="flex flex-wrap gap-6">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/70">
                <b.Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span className="text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </AnimOnMount>
      </div>
    </section>
  );
}
