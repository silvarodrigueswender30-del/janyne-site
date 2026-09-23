import type { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

export function CTASection({ id, eyebrow, heading, body, action, actionHref }: { id?: string; eyebrow?: ReactNode; heading: ReactNode; body?: ReactNode; action: string; actionHref: string | null }) {
  const headingId = id ? `${id}-heading` : undefined;
  return <section id={id} aria-labelledby={headingId} className="canvas-dark section-block final-cta"><Container><div className="site-grid final-cta-grid"><div className="final-cta-content">{eyebrow ? <Eyebrow className="text-text-inverse"><span className="eyebrow-accent" aria-hidden="true" />{eyebrow}</Eyebrow> : null}<h2 id={headingId} className="type-heading-xl mt-3 max-w-[22ch] text-text-inverse">{heading}</h2>{body ? <p className="type-body-lg mt-4 max-w-[52ch] text-text-inverse">{body}</p> : null}{actionHref ? <Button asChild canvas="dark" className="final-cta-action mt-6" href={actionHref}>{action}</Button> : null}</div></div></Container></section>;
}
