"use client";

import { useEffect, useState, type RefObject } from "react";

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}
