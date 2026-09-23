import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type HeadingHighlightProps = HTMLAttributes<HTMLSpanElement> & { variant?: "soft" | "underline" };

export function HeadingHighlight({ variant = "soft", className, ...props }: HeadingHighlightProps) {
  return <span className={cn("heading-highlight", variant === "underline" && "heading-highlight--underline", className)} {...props} />;
}
