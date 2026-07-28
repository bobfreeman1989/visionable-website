"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { portfolioProjects } from "@/content/gallery";

const categories = ["All", "Hardscaping", "Landscaping", "Outdoor Living"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === active),
    [active]
  );

  function switchCategory(cat: string) {
    setActive(cat);
    setAnimKey((k) => k + 1);
  }

  return (
    <section id="portfolio" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Our Recent Projects</h2>
            <p className="text-stone-500 max-w-2xl">
              Browse our work across the Bay Area, from Fremont to Pleasanton and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
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

        {/* Uniform 4:3 grid */}
        <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={`${p.alt}, ${p.location}, California, by Visionable Landscaping`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={parseInt(p.id) <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg">{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {p.location}, CA
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
