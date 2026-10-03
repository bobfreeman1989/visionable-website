"use client";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in milliseconds, so a row of cards arrives one by one. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Fades its children up the first time they scroll into view.
 *
 * The hidden starting state only applies under `html.js` (set by an inline
 * script in the root layout), so without JavaScript, or for a crawler that
 * never scrolls, the content is simply visible. Reduced-motion users get the
 * final state immediately (see globals.css).
 */
export default function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      // Trigger a little before the element is fully on screen so nothing
      // looks empty while the visitor is reading the section above it.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // A generic polymorphic ref; all three tags are HTMLElements.
      ref={ref as React.Ref<never>}
      className={`reveal ${className ?? ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
