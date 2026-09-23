import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ImageFrameProps = { ratio?: "4:5" | "3:4" | "16:9" | "1:1"; children?: ReactNode; className?: string; label?: string };
export function ImageFrame({ ratio = "4:5", children, className, label = "Placeholder de imagem para desenvolvimento" }: ImageFrameProps) {
  const ratioClass = { "4:5": "aspect-4-5", "3:4": "aspect-3-4", "16:9": "aspect-16-9", "1:1": "aspect-square" }[ratio];
  return <div className={cn("radius-token-lg relative flex w-full items-center justify-center overflow-hidden bg-surface-secondary text-center", ratioClass, className)} role={children ? undefined : "img"} aria-label={children ? undefined : label}>{children ?? <span className="type-caption text-text-secondary">{label}</span>}</div>;
}
