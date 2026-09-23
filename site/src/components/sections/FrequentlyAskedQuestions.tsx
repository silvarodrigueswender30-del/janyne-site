import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FAQ } from "@/components/ui/FAQ";
import { homeContent } from "@/data/site";

export function FrequentlyAskedQuestions() {
  const items = homeContent.faq.items.flatMap((item) =>
    item.answer ? [{ question: item.question, answer: item.answer }] : [],
  );

  return <section id="faq" aria-labelledby="faq-heading" className="section-block bg-background-secondary"><Container><div className="site-grid faq-grid"><div className="faq-intro"><Eyebrow>{homeContent.faq.eyebrow}</Eyebrow><h2 id="faq-heading" className="type-heading-xl mt-3 max-w-[24ch] text-text-primary">{homeContent.faq.title}</h2></div><div className="faq-accordion"><FAQ items={items} /></div></div></Container></section>;
}
