"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import * as m from "motion/react-m";
import { useInView, useReducedMotion } from "motion/react";
import MotionRoot, { ease } from "@/components/motion/MotionRoot";

// Steps 1 and 4 are the same Los Altos yard, so the section opens on the
// starting point and closes on the finished build. Steps 2 and 3 use finished
// project photos as stand-ins until we have a real 3D render and a
// mid-build shot; the alt text describes what is actually in frame.
const steps = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "We visit your home, see the space, and learn what matters to you — weekend cookouts? A quiet morning coffee spot? Somewhere the kids won’t want to leave?",
    timeline: "1-2 hours",
    src: "/photos/before-after/case-1-before-1280.webp",
    alt: "Los Altos backyard before the project, bare and unfinished",
  },
  {
    num: "02",
    title: "See It Before It’s Real",
    desc: "3D renderings of your future yard. Move things around, try layouts, change materials. Your vision becomes something you can walk through, usually within 1–2 weeks of the visit.",
    timeline: "1-2 weeks",
    src: "/photos/portfolio/p02.webp",
    alt: "Pergola lounge with pavers and turf in a finished Bay Area backyard",
  },
  {
    num: "03",
    title: "Watch It Come to Life",
    desc: "Our own crew builds it — on schedule, to the agreed price, with daily photo updates. Most builds take 2–6 weeks. Your vision, taking shape.",
    timeline: "2-6 weeks",
    src: "/photos/portfolio/p10.webp",
    alt: "Finished porcelain paver patio",
  },
  {
    num: "04",
    title: "Live In It",
    desc: "Final walkthrough, care guide, and warranty. Then invite everyone over. The best test of any outdoor space is the first gathering.",
    timeline: "Day 1",
    src: "/photos/before-after/case-1-after-1280.webp",
    alt: "The same Los Altos backyard after the build, with pergola, composite deck and sectional",
  },
];

const STEP_MS = 5000;

export default function Process() {
  return (
    <section id="process" className="py-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            From Vision to &ldquo;Come Over for Dinner&rdquo;
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Four steps from the yard you have to the outdoor space you&apos;ve been picturing.
          </p>
        </div>
        <MotionRoot>
          <Steps />
        </MotionRoot>
      </div>
    </section>
  );
}

function Steps() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const baseId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const playing = autoplay && inView && !paused && !reduceMotion;

  function go(i: number) {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  }

  // Walk through the steps on a timer while the section is on screen; a
  // click hands control to the visitor for good.
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go((active + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  });

  return (
    <div
      ref={rootRef}
      className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Fixed 4:3 stage: its size never follows the accordion, so switching only repaints the photo */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 lg:order-2">
        {/* Every step stays mounted underneath so its photo is cached before it wipes in */}
        {steps.map((s, i) => (
          <Image
            key={s.num}
            src={s.src}
            alt=""
            aria-hidden="true"
            fill
            className={`object-cover ${i === prev ? "" : "opacity-0"}`}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ))}
        <m.div
          key={active}
          className="absolute inset-0"
          initial={prev === null ? false : { clipPath: "inset(0% 0% 0% 100%)", scale: 1.08 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image
            src={steps[active].src}
            alt={steps[active].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 pointer-events-none" />
        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3 text-white" aria-hidden="true">
          <span className="text-sm font-medium tabular-nums">
            {steps[active].num} / 0{steps.length}
          </span>
          <span className="text-lg font-heading">{steps[active].title}</span>
        </div>
      </div>

      <ol className="flex flex-col gap-3 lg:order-1">
        {steps.map((s, i) => {
          const open = i === active;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-button-${i}`;
          return (
            <li
              key={s.num}
              className={`relative overflow-hidden rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300 ${
                open ? "bg-background border-primary/30 shadow-md" : "bg-background/60 border-stone-200 hover:border-primary/30"
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => {
                    setAutoplay(false);
                    go(i);
                  }}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                      open ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="text-lg text-stone-900">{s.title}</span>
                </button>
              </h3>
              {/* Collapsed panels stay in the DOM so every step's copy is still indexable */}
              <m.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!open}
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pl-[4.25rem]">
                  <p className="text-sm text-stone-500 mb-4 leading-relaxed">{s.desc}</p>
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {s.timeline}
                  </span>
                </div>
              </m.div>
              {/* Autoplay progress: restarts with each step, freezes while paused */}
              {open && autoplay && !reduceMotion && (
                <m.div
                  key={`${active}-${playing}`}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: playing ? 1 : 0 }}
                  transition={{ duration: playing ? STEP_MS / 1000 : 0, ease: "linear" }}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
