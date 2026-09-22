import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.classList.add("is-visible");
    };

    // threshold 0: any visible pixel counts. Tall sections (e.g. chapter blocks on
    // mobile) can never reach a higher ratio when they exceed the viewport height,
    // which left them stuck at opacity: 0 in production.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: "120px 0px" },
    );

    observer.observe(node);

    // Immediate fallback for elements already in/near view on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 120 && rect.bottom > -120) {
      show();
      observer.unobserve(node);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
