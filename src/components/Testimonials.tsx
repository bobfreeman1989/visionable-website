"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialReviews } from "@/content/testimonials";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const followsPointer = usePointerScroll(scrollRef);

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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Real Visions. Real Backyards.</h2>
            <p className="text-stone-500 max-w-xl">
              Bay Area families who stopped imagining and started living outdoors.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-600">
              5.0 on Google · {testimonialReviews.length} review excerpts
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          tabIndex={0}
          role="region"
          className={`flex items-start gap-6 overflow-x-auto ${followsPointer ? "" : "snap-x snap-mandatory"} scrollbar-hide pb-4 -mx-4 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl`}
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
      </div>
    </section>
  );
}

/** Width of each edge zone, as a share of the track. */
const EDGE = 0.18;
/** Top speed in px/s, reached only with the pointer right at the edge (~1 card/s). */
const MAX_SPEED = 380;

/**
 * On desktop with a mouse, resting the pointer near either end of the track
 * scrolls it that way; the middle is a dead zone, so reading a card never
 * moves it. Speed ramps up with how deep into the edge zone the pointer is.
 * Touch screens and reduced-motion visitors keep native scrolling with snap.
 * Returns whether it's active, since scroll-snap has to be off while it
 * drives scrollLeft.
 */
function usePointerScroll(ref: React.RefObject<HTMLDivElement>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    const update = () => setActive(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!active || !el) return;
    let velocity = 0; // px/s, negative = towards the first review
    let frame = 0;
    let last = 0;
    let pos = el.scrollLeft;

    function tick(now: number) {
      const dt = last ? Math.min(now - last, 50) / 1000 : 0;
      last = now;
      // Track the position as a float: slow drifts move well under a pixel
      // per frame, which scrollLeft alone would round away.
      const max = el!.scrollWidth - el!.clientWidth;
      pos = Math.min(max, Math.max(0, pos + velocity * dt));
      el!.scrollLeft = pos;
      const atEnd = (velocity < 0 && pos === 0) || (velocity > 0 && pos === max);
      frame = velocity && !atEnd ? requestAnimationFrame(tick) : 0;
    }

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const depth = x < EDGE ? -(EDGE - x) / EDGE : x > 1 - EDGE ? (x - (1 - EDGE)) / EDGE : 0;
      // Squared so the first part of the zone is a gentle drift.
      velocity = Math.sign(depth) * depth * depth * MAX_SPEED;
      if (velocity && !frame) {
        last = 0;
        // Resume from wherever the arrow buttons or a trackpad left it.
        pos = el!.scrollLeft;
        frame = requestAnimationFrame(tick);
      }
    }

    function onLeave() {
      velocity = 0;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [active, ref]);

  return active;
}
