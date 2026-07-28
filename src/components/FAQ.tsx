"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homepageFaqs } from "@/content/faq";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-stone-500">
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="space-y-3">
          {homepageFaqs.map((f, i) => (
              <div key={i} className="border border-stone-200 rounded-xl overflow-hidden bg-white">
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
                    <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  {/* Collapsed answers stay in the HTML so they remain crawlable,
                      but visibility:hidden drops them out of the accessibility
                      tree so a screen reader follows the accordion state. */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      openIdx === i
                        ? "grid-rows-[1fr] opacity-100 visible"
                        : "grid-rows-[0fr] opacity-0 invisible"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-stone-600 leading-relaxed">{f.a}</div>
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
