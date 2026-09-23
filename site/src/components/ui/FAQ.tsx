import type { ReactNode } from "react";
import { Accordion } from "./Accordion";

export function FAQ({ items }: { items: Array<{ question: string; answer: ReactNode }> }) {
  return <div className="faq-list max-w-[720px]">{items.map((item) => <Accordion key={item.question} question={item.question}>{item.answer}</Accordion>)}</div>;
}
