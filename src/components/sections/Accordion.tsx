"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";

interface AccordionProps {
  items: FaqItem[];
  /** Prefix for the generated ids so two accordions can share a page. */
  idPrefix?: string;
}

/**
 * Shared accordion. Collapsed answers stay in the HTML so they remain
 * crawlable, but visibility:hidden drops them out of the accessibility tree so
 * a screen reader follows the open/closed state rather than reading everything.
 */
export default function Accordion({ items, idPrefix = "faq" }: AccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="border border-stone-200 rounded-xl overflow-hidden bg-white">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
            aria-controls={`${idPrefix}-panel-${i}`}
            id={`${idPrefix}-btn-${i}`}
          >
            <span className="font-semibold text-stone-900 pr-4">{item.q}</span>
            <span
              className={`text-stone-500 shrink-0 transition-transform duration-300 ${
                openIdx === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
            </span>
          </button>
          <div id={`${idPrefix}-panel-${i}`} role="region" aria-labelledby={`${idPrefix}-btn-${i}`}>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                openIdx === i
                  ? "grid-rows-[1fr] opacity-100 visible"
                  : "grid-rows-[0fr] opacity-0 invisible"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-stone-600 leading-relaxed">{item.a}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
