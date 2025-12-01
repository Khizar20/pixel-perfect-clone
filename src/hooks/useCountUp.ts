import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  duration?: number;
  startOnView?: boolean;
}

export const useCountUp = (
  end: number,
  suffix: string = "",
  options: UseCountUpOptions = {}
) => {
  const { duration = 2000, startOnView = true } = options;
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || hasStarted) {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();
    }
  }, [end, duration, startOnView, hasStarted]);

  useEffect(() => {
    if (startOnView && !hasStarted && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHasStarted(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(elementRef.current);

      return () => observer.disconnect();
    }
  }, [startOnView, hasStarted]);

  return { count, elementRef, displayValue: `${count.toLocaleString()}${suffix}` };
};

