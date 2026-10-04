"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { portfolioProjects, type PortfolioProject } from "@/content/gallery";
import MotionRoot, { ease } from "@/components/motion/MotionRoot";

const categories = ["All", "Hardscaping", "Landscaping", "Outdoor Living"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<{ id: string; thumb: string } | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === active),
    [active]
  );
  const openProject = open ? portfolioProjects.find((p) => p.id === open.id) ?? null : null;

  return (
    <section id="portfolio" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Our Recent Projects</h2>
            <p className="text-stone-500 max-w-2xl">
              Browse our work across the Bay Area, from San Jose and Sunnyvale to Fremont and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <MotionRoot>
          {/* Uniform 4:3 grid; cards that survive a filter slide to their new slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((p, i) => (
                <m.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                  // Phones get the first six; twelve full-width cards was two
                  // screens of scrolling before the visitor reached anything else.
                  className={i >= 6 ? "hidden sm:block" : undefined}
                >
                  {/* First pass through the viewport: cards rise in, staggered by column */}
                  <m.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease, delay: (i % 3) * 0.08 }}
                  >
                    <m.div
                      layoutId={`portfolio-${p.id}`}
                      style={{ borderRadius: 12 }}
                      className="group relative overflow-hidden"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={p.src}
                          alt={`${p.alt}, ${p.location}, CA`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="text-white text-lg">{p.title}</h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                            {p.location}, CA
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            // Reuse the thumbnail already on screen so the lightbox
                            // never morphs an empty frame while the large file loads.
                            const img = e.currentTarget.parentElement?.querySelector("img");
                            setOpen({ id: p.id, thumb: img?.currentSrc ?? "" });
                          }}
                          aria-label={`View larger photo: ${p.title}, ${p.location}`}
                          aria-haspopup="dialog"
                          className="absolute inset-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-accent-light"
                        />
                      </div>
                    </m.div>
                  </m.div>
                </m.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {openProject && open && (
              <Lightbox project={openProject} thumb={open.thumb} onClose={() => setOpen(null)} />
            )}
          </AnimatePresence>
        </MotionRoot>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
          >
            See every project, grouped by type
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Lightbox({
  project,
  thumb,
  onClose,
}: {
  project: PortfolioProject;
  thumb: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [sharp, setSharp] = useState(false);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      // The close button is the dialog's only control, so Tab stays on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-lightbox-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
    >
      <m.div
        className="absolute inset-0 bg-stone-950/85 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <m.div
        layoutId={`portfolio-${project.id}`}
        style={{ borderRadius: 16 }}
        transition={{ duration: 0.55, ease }}
        // Width is capped by viewport height too, so the whole 4:3 photo fits
        className="relative w-full max-w-[min(64rem,calc(85vh*4/3))] overflow-hidden bg-stone-900 shadow-2xl"
      >
        <div className="relative aspect-[4/3] w-full">
          {thumb && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <Image
            src={project.src}
            alt={`${project.alt}, ${project.location}, CA`}
            fill
            loading="eager"
            onLoad={() => setSharp(true)}
            className={`object-cover transition-opacity duration-300 ${sharp ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        </div>
        {/* layout="position" undoes the parent's scale so the caption doesn't stretch mid-morph */}
        <m.div
          layout="position"
          className="absolute bottom-0 left-0 right-0 p-5 sm:p-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4, ease } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          <h3 id="portfolio-lightbox-title" className="text-white text-xl sm:text-2xl">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            {project.location}, CA
          </div>
        </m.div>
      </m.div>
      {/* Outside the morphing frame, so it never scales with the photo */}
      <m.button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </m.button>
    </div>
  );
}
