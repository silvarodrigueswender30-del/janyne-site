import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FloatingMotion } from "@/components/ui/FloatingMotion";

export function IndividualPsychotherapy() {
  return (
    <section id="psicoterapia" className="psychotherapy-section canvas-light section-block">
      <Container>
        <div className="psychotherapy-grid psychotherapy-grid--photo">
          <div className="psychotherapy-visual">
            <FloatingMotion 
              className="psychotherapy-floating"
              mobile={{ y: [-3, 4], x: [-0.5, 0.5], rotation: [0, 0], duration: 3.9, delay: 0.3 }}
              tablet={{ y: [-5, 6], x: [-0.8, 0.8], rotation: [-0.06, 0.08], duration: 4.1, delay: 0.3 }}
              desktop={{ y: [-6, 7], x: [-1, 1], rotation: [-0.08, 0.10], duration: 4.1, delay: 0.3 }}
            >
              <Card variant="floating" className="glass-light h-full w-full">
                <p className="type-eyebrow text-text-secondary">Atendimento principal</p>
                <p className="type-heading-sm mt-2 text-text-primary">Online</p>
              </Card>
            </FloatingMotion>
            <div className="psychotherapy-image-stage">
              <Image
                src="/images/psychotherapy/janyne-online.avif"
                alt="Janyne Porfirio"
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="psychotherapy-image-cutout"
              />
              <div className="psychotherapy-mobile-note">
                <p className="type-heading-sm text-text-primary">ESCUTA E DIÁLOGO</p>
                <p className="type-body-sm mt-1 text-text-secondary">A partir da sua experiência.</p>
                <p className="type-eyebrow mt-3 text-text-secondary">Fenomenológico-Existencial</p>
              </div>
            </div>
          </div>
          <div className="psychotherapy-copy">
            <Eyebrow>
              <span className="eyebrow-accent" aria-hidden="true" />
              Psicoterapia individual
            </Eyebrow>
            <h2 className="type-heading-xl mt-3 md:max-w-[18ch] text-text-primary">
              Um processo construído no seu tempo.
            </h2>
            <div className="type-body-lg mt-4 max-w-[52ch] text-text-secondary flex flex-col gap-4">
              <p>
                Na psicoterapia, trabalhamos a partir das questões que você traz, buscando compreender 
                a forma como você experiencia o mundo. Não há um roteiro pré-definido, mas um espaço de 
                escuta ativa e construção conjunta.
              </p>
              <p>
                O objetivo é ajudar você a reconhecer suas próprias formas de lidar com os desafios e 
                abrir caminhos para viver de maneira mais autêntica e conectada consigo mesmo.
              </p>
            </div>
            
            <Card variant="floating" className="mt-8 max-w-sm">
              <p className="type-eyebrow text-text-secondary">Presencial</p>
              <p className="type-body-sm mt-2 text-text-primary">
                Mediante disponibilidade e alinhamento individual.
              </p>
            </Card>

          </div>
        </div>
      </Container>
    </section>
  );
}
