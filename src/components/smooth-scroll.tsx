"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useLenis((lenis) => {
    setProgress(lenis.progress);
  });

  return (
    <div
      aria-hidden="true"
      className="reading-progress"
      style={{
        transform: `scaleX(${progress})`,
        opacity: progress > 0.01 ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    />
  );
}

function RouteScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -30,
            duration: 1.2,
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Scroll to top on page navigation
    if (pathname) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        autoRaf: true,
        anchors: {
          offset: -30,
          duration: 1.2,
        },
      }}
    >
      <ScrollProgressBar />
      <RouteScrollHandler />
      {children}
    </ReactLenis>
  );
}
