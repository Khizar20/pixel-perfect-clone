import { useEffect, useRef } from "react";

interface UseInViewAnimationOptions {
  className?: string;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInViewAnimation = (
  options: UseInViewAnimationOptions = {}
) => {
  const { rootMargin = "0px", threshold = 0.2, className = "in-view" } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const node = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add(className);
          } else {
            node.classList.remove(className);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold, className]);

  return elementRef;
};


