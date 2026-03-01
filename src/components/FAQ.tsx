"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";

const faqs = [
  {
    q: "How much does a landscaping project typically cost?",
    a: "It depends on scope — smaller projects like turf installation start around $5K, while complete backyard transformations range from $20K-$60K+. We give you a detailed, transparent estimate after our free on-site consultation. No hidden fees, ever.",
  },
  {
    q: "How long will my project take?",
    a: "Most projects finish in 2-6 weeks depending on complexity. Artificial turf can be done in days; a full backyard redesign with hardscaping typically takes 3-4 weeks. We lock in a timeline upfront and keep you updated daily.",
  },
  {
    q: "Is the consultation really free?",
    a: "100% free, no strings attached. We come to your property, discuss your goals, take measurements, and follow up with a detailed proposal and 3D renderings. You only pay if you decide to move forward.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We're fully licensed with the California Contractors State License Board and carry comprehensive liability and workers' comp insurance. Your property and our team are always protected.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the I-680 corridor and surrounding communities including Fremont, Newark, Milpitas, Union City, Hayward, San Ramon, Dublin, Pleasanton, Danville, Walnut Creek, and Concord.",
  },
  {
    q: "Do you offer warranties?",
    a: "Absolutely. We warranty both materials and workmanship. Specific terms vary by project and are clearly documented in your contract. We stand behind every project we build.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes! Check our portfolio above or visit our Yelp page with 160+ project photos. We're happy to share examples of projects similar to yours during your free consultation.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-gray-500">
            Everything you need to know before getting started.
          </p>
        </FadeUp>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <motion.span
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 shrink-0"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                {/* Always render answer in DOM for SSR/SEO, use AnimatePresence for animation */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <AnimatePresence initial={false}>
                    {openIdx === i ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{f.a}</div>
                      </motion.div>
                    ) : (
                      /* Hidden but in DOM for SEO crawlers */
                      <div className="sr-only">{f.a}</div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
