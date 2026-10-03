"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialReviews } from "@/content/testimonials";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import Reveal from "@/components/motion/Reveal";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // How much of the strip is on screen, and how far along it the visitor is
  // (both 0 to 1). Drives the progress bar and the disabled arrow states.
  const [viewFraction, setViewFraction] = useState(1);
  const [progress, setProgress] = useState(0);
  const frameRef = useRef(0);

  const measure = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setViewFraction(el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  function onScroll() {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(measure);
  }

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frameRef.current);
    };
  }, [measure]);

  const arrowClass =
    "w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center transition-[color,border-color,opacity]";

  // A pixel of slack absorbs sub-pixel scroll positions at either end.
  const atStart = progress <= 0.005;
  const atEnd = progress >= 0.995 || viewFraction >= 1;

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
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Real Visions. Real Backyards.</h2>
            <p className="text-stone-500 max-w-xl">
              Bay Area families who stopped imagining and started living outdoors.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-600">
              5.0 on Google · {testimonialReviews.length} review excerpts · scroll for more
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              // aria-disabled rather than disabled: a disabled button drops keyboard
              // focus the moment the visitor reaches the end of the strip.
              aria-disabled={atStart}
              className={`${arrowClass} ${atStart ? "opacity-40 cursor-default" : "hover:border-primary hover:text-primary"}`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              // aria-disabled rather than disabled: a disabled button drops keyboard
              // focus the moment the visitor reaches the end of the strip.
              aria-disabled={atEnd}
              className={`${arrowClass} ${atEnd ? "opacity-40 cursor-default" : "hover:border-primary hover:text-primary"}`}
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          tabIndex={0}
          role="region"
          className="flex items-start gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-label="Customer testimonials"
        >
          {testimonialReviews.map((review) => (
            <div
              key={review.name}
              className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>

        {/* Decorative: the arrows and the scrollable region already expose position. */}
        <div className="mt-4 h-0.5 rounded-full bg-stone-200 overflow-hidden" aria-hidden="true">
          <div
            className="h-full rounded-full bg-primary transition-transform duration-150 ease-out"
            style={{
              width: `${viewFraction * 100}%`,
              transform: `translateX(${(progress * (1 - viewFraction) * 100) / Math.max(viewFraction, 0.01)}%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
