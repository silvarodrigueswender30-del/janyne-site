import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn("type-caption inline-flex radius-token-pill bg-accent-surface-soft px-3 py-1 text-text-secondary", className)} {...props} />; }
