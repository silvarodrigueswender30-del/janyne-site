"use client";
import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function Accordion({ question, children, defaultOpen = false }: { question: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen); const baseId = useId(); const panelId = `accordion-panel-${baseId.replace(/:/g, "")}`; const triggerId = `accordion-trigger-${baseId.replace(/:/g, "")}`;
  return <div className="border-b border-border-subtle"><h3><button id={triggerId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)} className="type-heading-sm flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring-light focus-visible:ring-offset-2"><span>{question}</span><ChevronDown aria-hidden="true" size={20} strokeWidth={1.5} className={cn("shrink-0 transition-transform duration-normal ease-standard", open && "rotate-180")} /></button></h3><div id={panelId} role="region" aria-labelledby={triggerId} hidden={!open} className="type-body-md pb-4 text-text-secondary">{children}</div></div>;
}
