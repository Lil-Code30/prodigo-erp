"use client";

import { useEffect, useRef, useState } from "react";

const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(target: number, duration = 1600, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(target * EASE_OUT(progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (reduced) {
          setValue(target);
        } else {
          animate();
        }
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  const formatted = value.toFixed(decimals);

  return { ref, formatted };
}
