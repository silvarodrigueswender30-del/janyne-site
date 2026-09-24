import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FAQ } from "@/components/ui/FAQ";
import { homeContent } from "@/data/site";

export function FrequentlyAskedQuestions() {
  const items = homeContent.faq.items.flatMap((item) =>
    item.answer ? [{ question: item.question, answer: item.answer }] : [],
  );

  return (
    <section id="faq" aria-labelledby="faq-heading" className="faq-section section-block bg-background-secondary section-with-art">
      
      <div className="section-background">
        <Image src="/images/backgrounds/faq-background-v2.avif" alt="" aria-hidden="true" fill className="object-cover object-center" />
      </div>
      <div className="section-overlay overlay-faq"
      />
      <div className="bg-noise" />
      <Container className="section-content">
        <div className="site-grid faq-grid">
          <div className="faq-intro">
            <Eyebrow>{homeContent.faq.eyebrow}</Eyebrow>
            <h2 id="faq-heading" className="type-heading-xl mt-3 max-w-[24ch] text-text-primary">{homeContent.faq.title}</h2>
            <div className="faq-image-stage">
              <Image
                src="/images/faq/janyne-faq.avif"
                alt="Janyne Porfirio"
                width={1086}
                height={1448}
                sizes="(min-width: 1024px) 33vw, 80vw"
                className="faq-image-cutout"
              />
            </div>
          </div>
          <div className="faq-accordion">
            <FAQ items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
