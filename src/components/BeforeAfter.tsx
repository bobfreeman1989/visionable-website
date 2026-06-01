"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

type Pair = {
  id: string;
  label: string;
  location: string;
  beforeSrc: string;
  afterSrc: string;
  afterPosition?: string;
};

const pairs: Pair[] = [
  {
    id: "01",
    label: "Outdoor Living Build",
    location: "Fremont, CA · pergola · composite deck · sectional",
    beforeSrc: "/photos/before-after/case-1-before-1280.webp",
    afterSrc: "/photos/before-after/case-1-after-1280.webp",
    afterPosition: "object-[50%_35%]",
  },
  {
    id: "02",
    label: "Backyard Hardscape",
    location: "East Bay · pavers · grading · planting",
    beforeSrc: "/photos/before-after/case-2-before-1280.webp",
    afterSrc: "/photos/before-after/case-2-after-1280.webp",
  },
  {
    id: "03",
    label: "Custom Sport Court",
    location: "East Bay · modular court · hoop · edging",
    beforeSrc: "/photos/before-after/case-3-before-1280.webp",
    afterSrc: "/photos/before-after/case-3-after-1280.webp",
    afterPosition: "object-[50%_42%]",
  },
];

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const pair = pairs[activeIdx];

  useEffect(() => {
    pairs.forEach((p) => {
      [p.beforeSrc, p.afterSrc].forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    });
  }, []);

  return (
    <section id="before-after" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Before &amp; After
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-900">
              See the yard change before your eyes.
            </h2>
          </div>
          <p className="text-stone-500 max-w-2xl lg:ml-auto lg:text-right">
            Drag the slider to compare the starting point with the finished build. Switch between three recent projects below.
          </p>
        </FadeUp>

        <FadeUp>
          <Comparison key={pair.id} pair={pair} />
        </FadeUp>

        <FadeUp className="mt-6">
          <div className="grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Choose a before and after project">
            {pairs.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                onClick={() => setActiveIdx(i)}
                aria-selected={i === activeIdx}
                className={`rounded-xl border px-4 py-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  i === activeIdx
                    ? "border-primary bg-white ring-1 ring-primary"
                    : "border-stone-200 bg-white text-stone-600 hover:border-primary/60"
                }`}
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Case {p.id}
                </span>
                <span className="mt-1 block font-semibold text-stone-900">{p.label}</span>
                <span className="mt-1 block text-sm text-stone-500">{p.location}</span>
              </button>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Comparison({ pair }: { pair: Pair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    }
    function onUp() {
      draggingRef.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  function onPointerDown(e: React.PointerEvent) {
    draggingRef.current = true;
    setFromClientX(e.clientX);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + step));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPosition(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setPosition(100);
      e.preventDefault();
    }
  }

  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-sm select-none touch-pan-y cursor-ew-resize bg-stone-100"
        role="group"
        aria-roledescription="Before and after comparison"
        aria-label={`Before and after: ${pair.label}`}
      >
        <Image
          src={pair.afterSrc}
          alt={`${pair.label} after Visionable landscaping work`}
          fill
          className={`object-cover ${pair.afterPosition ?? "object-center"}`}
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={pair.id === "01"}
          unoptimized
          draggable={false}
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={pair.beforeSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={pair.id === "01"}
            unoptimized
            draggable={false}
          />
        </div>

        <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
          After
        </span>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)] pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />
        <button
          type="button"
          role="slider"
          aria-label="Before and after image comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)} percent revealed`}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 w-10 h-10 -mt-5 -ml-5 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-ew-resize"
          style={{ left: `${position}%` }}
        >
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </button>
      </div>

      <p className="text-center text-sm text-stone-500 mt-4">
        <span className="font-medium text-stone-700">{pair.label}</span>
        <span className="mx-2 text-stone-300">·</span>
        {pair.location}
        <span className="mx-2 text-stone-300">·</span>
        Drag the handle, or use arrow keys.
      </p>
    </div>
  );
}
