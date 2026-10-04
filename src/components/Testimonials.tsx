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
              5.0 on Google · {testimonialReviews.length} review excerpts · scroll for more
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

/**
 * On desktop with a mouse, the track follows the pointer: its horizontal
 * position over the track maps to the scroll position (left edge = first
 * review, right edge = last), eased so the cards glide rather than jump.
 * Touch screens keep native swipe with snapping. Returns whether it's active,
 * since scroll-snap has to be off while it drives scrollLeft.
 */
function usePointerScroll(ref: React.RefObject<HTMLDivElement>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const update = () => setActive(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!active || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = el.scrollLeft;
    let current = el.scrollLeft;
    let frame = 0;

    function tick() {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.5) current = target;
      el!.scrollLeft = current;
      frame = current === target ? 0 : requestAnimationFrame(tick);
    }

    function onEnter() {
      // Pick up wherever the arrow buttons or a trackpad left it.
      current = el!.scrollLeft;
    }

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      // The outer 12% on each side are dead zones, so the ends are easy to reach.
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left - rect.width * 0.12) / (rect.width * 0.76)));
      target = ratio * (el!.scrollWidth - el!.clientWidth);
      if (reduce) {
        el!.scrollLeft = current = target;
      } else if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    }

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [active, ref]);

  return active;
}
