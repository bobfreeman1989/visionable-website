"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";

const categories = ["All Projects", "Hardscaping", "Landscaping", "Outdoor Living"];

const projects = [
  {
    id: "1",
    title: "Paver Patio & Artificial Turf — Fremont",
    desc: "Complete backyard transformation with premium pavers and low-maintenance artificial turf.",
    tags: ["Pavers", "Artificial Turf"],
    category: "Hardscaping",
    location: "Fremont, CA",
    image: "/portfolio/yelp/yelp-001-.jpg",
  },
  {
    id: "2",
    title: "Custom Hardscape Design — Union City",
    desc: "Modern hardscape with stepping stones, retaining walls, and accent lighting.",
    tags: ["Hardscaping", "Lighting"],
    category: "Hardscaping",
    location: "Union City, CA",
    image: "/portfolio/yelp/yelp-005-.jpg",
  },
  {
    id: "3",
    title: "Backyard Remodel — Milpitas",
    desc: "Full backyard redesign with turf, paver walkways, and native plantings.",
    tags: ["Turf", "Pavers", "Plantings"],
    category: "Landscaping",
    location: "Milpitas, CA",
    image: "/portfolio/yelp/yelp-010-.jpg",
  },
  {
    id: "4",
    title: "Outdoor Living Space — San Ramon",
    desc: "Entertainment-ready patio with fire pit seating and landscape lighting.",
    tags: ["Fire Pit", "Lighting", "Pavers"],
    category: "Outdoor Living",
    location: "San Ramon, CA",
    image: "/portfolio/yelp/yelp-015-.jpg",
  },
  {
    id: "5",
    title: "Front Yard Transformation — Newark",
    desc: "Curb appeal upgrade with drought-tolerant design and premium pavers.",
    tags: ["Drought-Tolerant", "Pavers"],
    category: "Landscaping",
    location: "Newark, CA",
    image: "/portfolio/yelp/yelp-020-.jpg",
  },
  {
    id: "6",
    title: "Retaining Wall & Patio — Hayward",
    desc: "Hillside retaining wall with integrated paver patio and plantings.",
    tags: ["Retaining Wall", "Pavers"],
    category: "Hardscaping",
    location: "Hayward, CA",
    image: "/portfolio/yelp/yelp-025-.jpg",
  },
  {
    id: "7",
    title: "Artificial Turf Installation — Dublin",
    desc: "Premium artificial turf with clean borders and efficient drainage.",
    tags: ["Artificial Turf", "Drainage"],
    category: "Landscaping",
    location: "Dublin, CA",
    image: "/portfolio/yelp/yelp-030-.jpg",
  },
  {
    id: "8",
    title: "Complete Backyard — Pleasanton",
    desc: "Full yard transformation with pavers, turf, lighting, and custom plantings.",
    tags: ["Full Remodel", "Pavers", "Turf"],
    category: "Outdoor Living",
    location: "Pleasanton, CA",
    image: "/portfolio/yelp/yelp-035-.jpg",
  },
  {
    id: "9",
    title: "Modern Paver Driveway — Walnut Creek",
    desc: "Contemporary large-format paver driveway with clean lines and accent borders.",
    tags: ["Driveway", "Pavers"],
    category: "Hardscaping",
    location: "Walnut Creek, CA",
    image: "/portfolio/yelp/yelp-040-.jpg",
  },
  {
    id: "10",
    title: "Landscape Design — Danville",
    desc: "Custom landscape design with native plants and stone pathways.",
    tags: ["Design", "Plantings", "Pathways"],
    category: "Landscaping",
    location: "Danville, CA",
    image: "/portfolio/yelp/yelp-045-.jpg",
  },
  {
    id: "11",
    title: "Outdoor Kitchen Area — Fremont",
    desc: "Built-in barbecue island with paver surround and ambient lighting.",
    tags: ["Outdoor Kitchen", "Lighting"],
    category: "Outdoor Living",
    location: "Fremont, CA",
    image: "/portfolio/yelp/yelp-050-.jpg",
  },
  {
    id: "12",
    title: "Side Yard Makeover — Concord",
    desc: "Functional side yard with artificial turf, pavers, and privacy plantings.",
    tags: ["Side Yard", "Turf", "Pavers"],
    category: "Landscaping",
    location: "Concord, CA",
    image: "/portfolio/yelp/yelp-055-.jpg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All Projects");

  const filtered = active === "All Projects"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See how we&apos;ve transformed yards across the I-680 corridor.
            Real photos from real projects — no stock images.
          </p>
        </FadeUp>

        {/* Category filters */}
        <FadeUp className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeUp>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {p.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
