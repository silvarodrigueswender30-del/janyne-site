import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & { eyebrow?: ReactNode; heading: ReactNode; body?: ReactNode; align?: "left" | "center" };

export function SectionHeader({ eyebrow, heading, body, align = "left", className, ...props }: SectionHeaderProps) {
  return <div className={cn("max-w-[62ch]", align === "center" && "mx-auto text-center", className)} {...props}>
    {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
    <h2 className="type-heading-xl text-text-primary">{heading}</h2>
    {body ? <p className="type-body-md mt-4 max-w-[62ch] text-text-secondary">{body}</p> : null}
  </div>;
}
