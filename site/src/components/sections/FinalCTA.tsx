import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/data/site";

export function FinalCTA() {
  const { finalCta } = homeContent;
  const headingId = "contato-heading";

  return (
    <section id="contato" aria-labelledby={headingId} className="canvas-dark section-block final-cta-section relative overflow-hidden section-with-art">
      
      <div className="section-background">
        <Image src="/images/backgrounds/contact-background.avif" alt="" aria-hidden="true" fill className="object-cover object-center" />
      </div>
      <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
      <Container className="section-content">
        <div className="site-grid final-cta-grid items-stretch lg:items-end">
          <div className="final-cta-content">
            {finalCta.eyebrow ? (
              <Eyebrow className="text-text-inverse">
                <span className="eyebrow-accent" aria-hidden="true" />
                {finalCta.eyebrow}
              </Eyebrow>
            ) : null}
            <h2 id={headingId} className="type-heading-xl mt-3 max-w-[22ch] text-text-inverse">
              {finalCta.title}
            </h2>
            {finalCta.body ? (
              <p className="type-body-lg mt-4 max-w-[45ch] text-text-inverse">
                {finalCta.body}
              </p>
            ) : null}
            {finalCta.actionHref ? (
              <Button asChild canvas="dark" className="final-cta-action mt-6" href={finalCta.actionHref}>
                {finalCta.action}
              </Button>
            ) : null}
          </div>
          <div className="final-cta-visual hidden lg:block">
            <Image
              src="/images/contact/janyne-contact.avif"
              alt="Janyne Porfirio sentada em uma poltrona segurando um caderno"
              width={1122}
              height={1402}
              sizes="(min-width: 1024px) 50vw, 0vw"
              className="final-cta-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
