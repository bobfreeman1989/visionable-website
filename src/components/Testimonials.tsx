"use client";
import { useRef } from "react";
import FadeUp from "@/components/motion/FadeUp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialReviews } from "@/content/testimonials";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: number) {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 400;
    scrollRef.current.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  }

  return (
    <section id="testimonials" className="py-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Real Visions. Real Backyards.</h2>
            <p className="text-stone-500 max-w-xl">
              Bay Area families who stopped imagining and started living outdoors.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-400">
              {testimonialReviews.length} verified review excerpts · scroll for more
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeUp>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-label="Customer testimonials"
        >
          {testimonialReviews.map((review, index) => (
            <div
              key={review.name}
              className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              <TestimonialCard review={review} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
