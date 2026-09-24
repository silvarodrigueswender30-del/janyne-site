"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export type MotionParams = {
  y: [number, number];
  x: [number, number];
  rotation: [number, number];
  duration: number;
  delay?: number;
};

interface FloatingMotionProps {
  children: React.ReactNode;
  className?: string;
  mobile: MotionParams;
  tablet: MotionParams;
  desktop: MotionParams;
}

export function FloatingMotion({
  children,
  className,
  mobile,
  tablet,
  desktop,
}: FloatingMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const applyMotion = (params: MotionParams) => {
        if (!containerRef.current) return;
        gsap.fromTo(
          containerRef.current,
          { y: params.y[0], x: params.x[0], rotation: params.rotation[0] },
          {
            y: params.y[1],
            x: params.x[1],
            rotation: params.rotation[1],
            duration: params.duration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: params.delay || 0,
          }
        );
      };

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => applyMotion(mobile));
      mm.add("(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => applyMotion(tablet));
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => applyMotion(desktop));
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
