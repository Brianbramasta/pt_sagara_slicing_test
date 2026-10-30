import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = "0px",
  delay = 0,
}: UseScrollAnimationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, hasAnimated]);

  return { ref, isVisible };
};