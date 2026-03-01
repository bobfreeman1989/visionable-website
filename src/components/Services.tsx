"use client";
import { PenTool, Layers, TreePine, Lightbulb, Droplets, Fence } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const services = [
  { Icon: PenTool, title: "Landscape Design", desc: "Custom designs with 3D walkthrough — see your yard before we break ground." },
  { Icon: Layers, title: "Hardscaping", desc: "Premium pavers, patios & retaining walls that last 25+ years.", link: "/blog/how-to-choose-pavers" },
  { Icon: TreePine, title: "Landscaping & Turf", desc: "Lush, green, zero-maintenance turf that saves thousands in water bills.", link: "/blog/artificial-turf-pros-cons" },
  { Icon: Lightbulb, title: "Outdoor Lighting", desc: "Accent, pathway & security lighting that boosts curb appeal and home value.", link: "/blog/outdoor-lighting-ideas" },
  { Icon: Droplets, title: "Irrigation & Drainage", desc: "Smart water management — cut your water bill by up to 40%." },
  { Icon: Fence, title: "Fences & Structures", desc: "Pergolas, fences & gates that add privacy, style, and real value." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Landscape Design & Build Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From the first sketch to the final walkthrough, we handle every detail
            of your landscape transformation in-house.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                {s.link && (
                  <a href={s.link} className="text-sm text-primary font-medium hover:underline">
                    Learn More →
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
