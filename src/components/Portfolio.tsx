"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import { MapPin } from "lucide-react";

const categories = ["All", "Hardscaping", "Landscaping", "Outdoor Living"];

const projects = [
  { id: "1",  title: "Paver Patio & Turf",      category: "Hardscaping",    location: "Fremont",      image: "/photos/portfolio/p01.webp" },
  { id: "2",  title: "Custom Hardscape",         category: "Hardscaping",    location: "Union City",   image: "/photos/portfolio/p02.webp" },
  { id: "3",  title: "Backyard Remodel",         category: "Landscaping",    location: "Milpitas",     image: "/photos/portfolio/p03.webp" },
  { id: "4",  title: "Outdoor Living Space",     category: "Outdoor Living", location: "San Ramon",    image: "/photos/portfolio/p04.webp" },
  { id: "5",  title: "Front Yard Design",        category: "Landscaping",    location: "Newark",       image: "/photos/portfolio/p05.webp" },
  { id: "6",  title: "Retaining Wall & Patio",   category: "Hardscaping",    location: "Hayward",      image: "/photos/portfolio/p06.webp" },
  { id: "7",  title: "Pergola & Outdoor Room",   category: "Outdoor Living", location: "Dublin",       image: "/photos/portfolio/p07.webp" },
  { id: "8",  title: "Complete Backyard",         category: "Outdoor Living", location: "Pleasanton",   image: "/photos/portfolio/p08.webp" },
  { id: "9",  title: "Stone Walkway",            category: "Hardscaping",    location: "Danville",     image: "/photos/portfolio/p09.webp" },
  { id: "10", title: "Landscape Lighting",       category: "Outdoor Living", location: "San Jose",     image: "/photos/portfolio/p10.webp" },
  { id: "11", title: "Artificial Turf Install",  category: "Landscaping",    location: "Sunnyvale",    image: "/photos/portfolio/p11.webp" },
  { id: "12", title: "Fountain & Hardscape",     category: "Hardscaping",    location: "Walnut Creek", image: "/photos/portfolio/p12.webp" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  function switchCategory(cat: string) {
    setActive(cat);
    setAnimKey((k) => k + 1);
  }

  return (
    <section id="portfolio" className="py-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our work across the Bay Area — from Fremont to Pleasanton and beyond.
          </p>
        </FadeUp>

        <FadeUp className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => switchCategory(cat)}
              aria-pressed={active === cat}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeUp>

        {/* Uniform 4:3 grid */}
        <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={parseInt(p.id) <= 3}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.location}, CA
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-10">
          <a
            href="https://www.yelp.com/biz/visionable-landscaping-fremont"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View 160+ Photos on Yelp
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
