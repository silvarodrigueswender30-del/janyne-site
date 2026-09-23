import type { ReactNode } from "react";
import { Card } from "./Card";
import { Eyebrow } from "./Eyebrow";

export function ProcessStep({ number, title, children, icon }: { number: string; title: string; children: ReactNode; icon?: ReactNode }) {
  return <Card variant="process" className="process-step"><div className="process-step-meta"><Eyebrow>{number}</Eyebrow>{icon ? <span className="process-step-icon text-text-secondary">{icon}</span> : null}</div><h3 className="type-heading-md text-text-primary">{title}</h3><p className="type-body-sm mt-4 text-text-secondary">{children}</p></Card>;
}
