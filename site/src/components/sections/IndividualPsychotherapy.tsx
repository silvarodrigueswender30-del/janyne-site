import Image from "next/image";
import { homeContent } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function IndividualPsychotherapy() {
  return (
    <section id="psicoterapia" className="psychotherapy-section section-block bg-background-primary" aria-labelledby="psychotherapy-heading">
      <Container>
        <div className="psychotherapy-grid psychotherapy-grid--photo">
          <div className="psychotherapy-visual">
            <Card variant="floating" className="psychotherapy-floating">
              <p className="type-eyebrow text-text-secondary">Atendimento principal</p>
              <p className="type-heading-sm mt-2 text-text-primary">Online</p>
            </Card>
            <div className="psychotherapy-image-stage">
              <Image
                src="/images/psychotherapy/janyne-online.avif"
                alt="Janyne Porfirio em pé segurando um notebook"
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="psychotherapy-image-cutout"
              />
              <div className="psychotherapy-mobile-note">
                <p className="type-eyebrow text-text-secondary">Escuta e diálogo</p>
                <p className="type-heading-sm mt-2 text-text-primary">A partir da sua experiência.</p>
                <p className="type-body-sm mt-3 text-text-secondary">Fenomenológico-Existencial</p>
              </div>
            </div>
          </div>
          <div className="psychotherapy-copy">
            <Eyebrow>Psicoterapia individual</Eyebrow>
            <h2 id="psychotherapy-heading" className="type-heading-xl mt-3 max-w-[18ch] text-text-primary">Um processo construído a partir da sua própria experiência.</h2>
            <p className="type-body-lg mt-4 max-w-[52ch] text-text-secondary">O acompanhamento acontece principalmente online, em um espaço de escuta e diálogo orientado pela abordagem Fenomenológico-Existencial. O atendimento presencial poderá ocorrer mediante disponibilidade e alinhamento individual.</p>
            <Card variant="information" className="mt-6">
              <p className="type-heading-sm text-text-primary">Presencial</p>
              <p className="type-body-sm mt-2 text-text-secondary">Mediante disponibilidade e alinhamento individual.</p>
            </Card>
            {homeContent.hero.secondaryCta.href ? <a className="type-button mt-6 inline-flex text-text-primary underline decoration-accent-primary decoration-2 underline-offset-4" href={homeContent.hero.secondaryCta.href}>Falar sobre o atendimento</a> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
