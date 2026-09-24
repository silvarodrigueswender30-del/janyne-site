"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface FloatingMotionProps {
  children: React.ReactNode;
  className?: string;
  y?: [number, number];
  x?: [number, number];
  rotation?: [number, number];
  duration?: number;
  delay?: number;
}

export function FloatingMotion({
  children,
  className,
  y = [-4, 4],
  x = [-1, 1],
  rotation = [-0.15, 0.15],
  duration = 6.5,
  delay = 0,
}: FloatingMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (!containerRef.current) return;
          gsap.fromTo(
            containerRef.current,
            { y: y[0], x: x[0], rotation: rotation[0] },
            {
              y: y[1],
              x: x[1],
              rotation: rotation[1],
              duration: duration,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: delay,
            }
          );
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
