import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export const IconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { canvas?: "light" | "dark"; children: ReactNode }>(function IconButton({ canvas = "light", className, children, "aria-label": ariaLabel, ...props }, ref) {
  return <button ref={ref} aria-label={ariaLabel} className={cn("inline-flex size-11 items-center justify-center radius-token-sm transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", canvas === "dark" ? "text-text-inverse hover:bg-border-subtle-dark focus-visible:ring-focus-ring-dark" : "text-text-secondary hover:bg-accent-surface-soft focus-visible:ring-focus-ring-light", className)} {...props}>{children}</button>;
});
