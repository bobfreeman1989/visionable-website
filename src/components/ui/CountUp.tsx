"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({ target, suffix, decimals = 0, className = "text-3xl md:text-4xl font-extrabold text-primary" }: CountUpProps) {
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const animated = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setValue(0);
  }, []);

  useEffect(() => {
    if (isInView && !animated.current && mounted.current) {
      animated.current = true;
      const duration = 2000;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target]);

  return (
    <p ref={ref} className={className}>
      {decimals ? value.toFixed(decimals) : Math.round(value)}{suffix}
    </p>
  );
}
