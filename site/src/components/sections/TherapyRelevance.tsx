import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function TherapyRelevance() {
  return (
    <section className="relevance-section section-block bg-background-secondary section-with-art" aria-labelledby="relevance-heading">
      
      <div className="section-background">
        <Image src="/images/backgrounds/relevance-background-v2.avif" alt="" aria-hidden="true" fill className="object-cover object-center" />
      </div>
      <div className="section-overlay overlay-relevance"
      />
      <div className="bg-noise" />
      <Container className="section-content">
        <div className="relevance-grid relevance-grid--photo">
          <div className="relevance-intro">
            <Eyebrow>{"Quando a psicoterapia pode fazer sentido"}</Eyebrow>
            <h2 id="relevance-heading" className="type-heading-xl mt-3 max-w-[22ch] text-text-primary">
              Há momentos em que compreender o que estamos vivendo pode abrir novas formas de seguir.
            </h2>
          </div>
          <div className="relevance-visual">
            <div className="relevance-image-stage">
              <Image
                src="/images/relevance/janyne-atendimento.avif"
                alt="Janyne Porfirio sentada à mesa durante um momento de atendimento"
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="relevance-image-cutout"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
