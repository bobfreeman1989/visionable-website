"use client";

import { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("./features").then((mod) => mod.default);

/**
 * Wraps a client island that animates with Motion. Features load async, so
 * until they arrive elements render in their `animate` state without motion.
 * `strict` makes `motion.*`
 * a runtime error so components use the lighter `m.*` elements, and
 * `reducedMotion="user"` turns transforms off for visitors who asked the OS
 * for less motion (the CSS rule in globals.css can't reach JS animations).
 */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
