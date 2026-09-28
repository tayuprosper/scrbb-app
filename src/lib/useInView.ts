import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view (and stays true).
 * `rootMargin` shifts the trigger line, e.g. "0px 0px -40% 0px"
 * fires when the element reaches 60% of the way up the screen.
 */
export function useInView<T extends Element>(rootMargin = "0px 0px -15% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, inView]);

  return [ref, inView] as const;
}
