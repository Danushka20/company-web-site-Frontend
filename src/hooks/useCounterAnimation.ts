import { useEffect, useRef, useState } from 'react';

interface CounterItem {
  value: string;
  [key: string]: unknown;
}

interface UseCounterAnimationOptions {
  /** Duration of the animation in milliseconds */
  durationMs?: number;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
}

/**
 * Reusable hook for animating numeric counters when a section scrolls into view.
 *
 * It observes a DOM element via IntersectionObserver and, once visible,
 * animates each counter from 0 to its target value with an ease-out curve.
 *
 * @example
 * const { sectionRef, animatedValues } = useCounterAnimation(stats);
 * // Attach sectionRef to the container element
 * // Use animatedValues[i] + suffix for display
 */
export function useCounterAnimation<T extends CounterItem>(
  items: T[],
  options: UseCounterAnimationOptions = {},
) {
  const { durationMs = 2200, threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = options;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(() => items.map(() => 0));

  // Parse "50+" → { target: 50, suffix: "+" }
  const parseValue = (rawValue: string) => {
    const match = rawValue.match(/^(\d+)(.*)$/);

    if (!match) {
      return { target: 0, suffix: '' };
    }

    return {
      target: Number.parseInt(match[1], 10),
      suffix: match[2],
    };
  };

  // Observe when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated, threshold, rootMargin]);

  // Animate counters once visible
  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const targets = items.map((item) => parseValue(item.value).target);
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, durationMs, items]);

  /** Get the suffix (non-numeric part) for an item at a given index */
  const getSuffix = (index: number) => parseValue(items[index].value).suffix;

  return { sectionRef, animatedValues, getSuffix };
}
