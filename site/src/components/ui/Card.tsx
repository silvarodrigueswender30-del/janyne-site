import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "standard" | "soft" | "dark" | "feature" | "floating" | "process" | "information";
export function Card({ variant = "standard", className, ...props }: HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }) {
  const styles: Record<CardVariant, string> = {
    standard: "bg-surface-primary text-text-primary border border-border-default padding-token-5 shadow-token-sm hover:shadow-token-md",
    soft: "bg-surface-secondary text-text-primary padding-token-5 hover:bg-surface-primary",
    dark: "bg-surface-dark text-text-inverse border border-border-default-dark padding-token-5 hover:border-border-strong-dark",
    feature: "radius-token-lg bg-surface-elevated text-text-primary border border-border-subtle padding-token-6 shadow-token-md hover:shadow-token-floating hover:-translate-y-0.5",
    floating: "bg-surface-elevated text-text-primary border border-border-subtle padding-token-4 shadow-token-floating",
    process: "bg-surface-primary text-text-primary border border-border-subtle padding-token-5 shadow-token-xs hover:shadow-token-sm",
    information: "bg-surface-secondary text-text-primary padding-token-4 hover:bg-surface-primary",
  };
  return <div className={cn("rounded-md transition-[background-color,border-color,box-shadow,transform] duration-normal ease-standard", styles[variant], className)} {...props} />;
}
