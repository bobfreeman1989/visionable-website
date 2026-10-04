"use client";

import { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("./features").then((mod) => mod.default);

/** Shared easing: fast start, long soft settle — no spring wobble on layout. */
export const ease = [0.32, 0.72, 0, 1] as const;

/**
 * Wraps a client island that animates with Motion. Features load async right
 * after hydration (~30 kB kept off the first load); both islands sit well
 * below the fold, so they're in place before anyone reaches them. `strict`
 * makes `motion.*` a runtime error so components use the lighter `m.*`
 * elements, and `reducedMotion="user"` turns transforms off for visitors who
 * asked the OS for less motion (the CSS rule in globals.css can't reach JS
 * animations).
 */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.45, ease }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
