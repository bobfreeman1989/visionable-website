"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as m from "motion/react-m";
import { featuredServices, secondaryServices, type ServiceItem } from "@/content/services";
import MotionRoot, { ease } from "@/components/motion/MotionRoot";

const services = [...featuredServices, ...secondaryServices];

/**
 * Home Services block. `alts` holds each service photo's alt text, looked up
 * on the server so the whole gallery catalogue stays out of the client bundle.
 */
export default function ServiceShowcase({ alts }: { alts: string[] }) {
  return (
    <>
      <MotionRoot>
        <ServiceStage alts={alts} />
      </MotionRoot>
      <ServiceCards alts={alts} />
    </>
  );
}

/**
 * Desktop: a list of services beside one large photo. Hovering or focusing a
 * row swaps the photo and its caption; clicking goes to the service page.
 * Rows never change size, so hover can't shift a different row under the
 * cursor.
 */
function ServiceStage({ alts }: { alts: string[] }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>();

  function go(i: number) {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  }

  function hoverTo(i: number) {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => go(i), 80);
  }

  const current = services[active];

  return (
    <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6">
      <ul className="grid grid-rows-6 gap-2" onMouseLeave={() => clearTimeout(hoverTimer.current)}>
        {services.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title}>
              <Link
                href={s.link ?? "#contact"}
                onMouseEnter={() => hoverTo(i)}
                onFocus={() => go(i)}
                aria-current={on ? "true" : undefined}
                className={`group flex h-full items-center gap-4 rounded-xl border px-5 transition-[background-color,border-color,box-shadow,opacity] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  on
                    ? "bg-white border-primary/30 shadow-md"
                    : "bg-white/50 border-stone-200 opacity-70 hover:opacity-100"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    on ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  <s.Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-lg text-stone-900">{s.title}</h3>
                <ArrowRight
                  className={`ml-auto h-4 w-4 text-primary transition-[opacity,transform] duration-300 ${
                    on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
        {/* Every photo stays mounted underneath so it's cached before it wipes in */}
        {services.map((s, i) => (
          <Image
            key={s.title}
            src={s.photo}
            alt=""
            aria-hidden="true"
            fill
            className={`object-cover ${i === prev ? "" : "opacity-0"}`}
            sizes="60vw"
          />
        ))}
        <m.div
          key={active}
          className="absolute inset-0"
          initial={prev === null ? false : { clipPath: "inset(0% 0% 0% 100%)", scale: 1.08 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
          transition={{ duration: 0.7, ease }}
        >
          <Image src={current.photo} alt={alts[active]} fill className="object-cover" sizes="60vw" />
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 pointer-events-none" />

        <m.div
          key={`caption-${active}`}
          className="absolute bottom-0 left-0 right-0 p-7 text-white"
          initial={prev === null ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          {current.tag && (
            <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              {current.tag}
            </span>
          )}
          <p className="font-heading text-2xl">{current.title}</p>
          <p className="mt-2 max-w-xl text-white/85 leading-relaxed">{current.desc}</p>
        </m.div>
      </div>
    </div>
  );
}

/** Below lg: a swipeable row of photo cards, one per service. */
function ServiceCards({ alts }: { alts: string[] }) {
  return (
    <ul className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2">
      {services.map((s, i) => (
        <li key={s.title} className="w-[80vw] sm:w-[45vw] shrink-0 snap-start">
          <ServiceCard service={s} alt={alts[i]} />
        </li>
      ))}
    </ul>
  );
}

function ServiceCard({ service: s, alt }: { service: ServiceItem; alt: string }) {
  return (
    <Link
      href={s.link ?? "#contact"}
      className="block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/3]">
        <Image src={s.photo} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 80vw, 45vw" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <s.Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h3 className="text-lg text-stone-900">{s.title}</h3>
        </div>
        <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
      </div>
    </Link>
  );
}
