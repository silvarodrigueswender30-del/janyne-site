import Image from "next/image";
import { homeContent } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function About() {
  const { about } = homeContent;
  return (
    <section id="sobre" className="about-section section-block">
      <Container>
        <div className="about-grid">
          <div className="about-copy">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="type-heading-xl mt-3 max-w-[20ch] text-text-primary">{about.title}</h2>
            <p className="type-body-md mt-4 max-w-[60ch] text-text-secondary">{about.body}</p>
            <div className="about-cards mt-6">
              {about.cards.map((card) => (
                <Card key={card} variant="information">
                  <p className="type-heading-sm text-text-primary">{card}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-stage">
              <Image
                src="/images/about/janyne-about.avif"
                alt="Janyne Porfirio em pé ao lado de uma poltrona"
                width={1086}
                height={1448}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="about-image-cutout"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
