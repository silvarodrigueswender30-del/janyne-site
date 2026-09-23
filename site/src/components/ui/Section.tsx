import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & { canvas?: "light" | "secondary" | "dark" };

export function Section({ canvas = "light", className, ...props }: SectionProps) {
  const canvasClass = { light: "bg-background-primary", secondary: "bg-background-secondary", dark: "canvas-dark" }[canvas];
  return <section className={cn("section-block", canvasClass, className)} {...props} />;
}
