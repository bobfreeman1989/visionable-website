"use client";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  suffix: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({ target, suffix, decimals = 0, className = "text-3xl md:text-4xl font-extrabold text-primary" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const duration = 1600;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(eased * target);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className={className}>
      {decimals ? value.toFixed(decimals) : Math.round(value)}{suffix}
    </p>
  );
}
