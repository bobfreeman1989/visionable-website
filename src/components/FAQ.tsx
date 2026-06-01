"use client";
import { useState } from "react";
import FadeUp from "@/components/motion/FadeUp";

const faqs = [
  {
    q: "How much does an outdoor living project cost?",
    a: "Depends on the vision, a patio and turf setup starts around $5K, while a complete outdoor living space with cooking area, lighting, and seating runs $20K-$60K+. We give you a detailed, transparent estimate after seeing your space. No hidden fees.",
  },
  {
    q: "How long until I can actually use my new yard?",
    a: "Most projects finish in 2-6 weeks. Turf installs can be done in days; a full outdoor transformation typically takes 3-4 weeks. We lock in a timeline upfront and send daily updates.",
  },
  {
    q: "What if I don't have a clear vision yet?",
    a: "Most clients don't, they just know they want to use their backyard more. That's exactly what the design consultation is for. We help you figure out what you want through 3D renderings you can explore and adjust. The vision gets clearer together.",
  },
  {
    q: "Is the consultation really free?",
    a: "100% free. We visit your property, talk about how you want to live outdoors, take measurements, and follow up with a proposal and 3D renderings. You only pay if you decide to build.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Fully licensed with the California Contractors State License Board, with comprehensive liability and workers' comp insurance.",
  },
  {
    q: "What areas do you serve?",
    a: "The I-680 corridor, Fremont, Newark, Milpitas, Union City, Hayward, San Ramon, Dublin, Pleasanton, Danville, Walnut Creek, Concord, and surrounding communities.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. Materials and workmanship, clearly documented in your contract. We stand behind every vision we build.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-stone-500">
            Everything you need to know before getting started.
          </p>
        </FadeUp>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="font-semibold text-stone-900 pr-4">{f.q}</span>
                  <span
                    className={`text-stone-500 shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                                      <div
                      className={`grid transition-all duration-300 ease-out ${openIdx === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 text-stone-600 leading-relaxed">{f.a}</div>
                      </div>
                    </div>
                    {openIdx !== i && <div className="sr-only">{f.a}</div>}
  
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
