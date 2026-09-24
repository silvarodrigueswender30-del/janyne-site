import Image from "next/image";
import { homeContent } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FloatingMotion } from "@/components/ui/FloatingMotion";

export function Hero() {
  const { hero } = homeContent;
  return (
    <section id="inicio" className="hero-section canvas-dark">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <Eyebrow className="hero-eyebrow">
              <span className="eyebrow-accent" aria-hidden="true" />
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="type-display-lg mt-3 max-w-[17ch] text-text-inverse">{hero.title}</h1>
            <p className="type-body-lg mt-4 max-w-[52ch] text-text-inverse">{hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild canvas="dark" href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              {hero.secondaryCta.href ? <Button asChild canvas="dark" variant="secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Button> : null}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-stage">
              <Image src="/images/hero/janyne-hero.avif" alt="Janyne Porfirio sentada em uma poltrona" width={1122} height={1402} sizes="(min-width: 1024px) 50vw, 100vw" priority className="hero-image" />
            </div>
            
            <FloatingMotion 
              className="hero-profile"
              mobile={{ y: [-5, 6], x: [-0.8, 1], rotation: [-0.06, 0.08], duration: 3.8 }}
              tablet={{ y: [-7, 8], x: [-1, 1.5], rotation: [-0.10, 0.14], duration: 3.9 }}
              desktop={{ y: [-8, 9], x: [-1.5, 2], rotation: [-0.12, 0.18], duration: 3.8 }}
            >
              <Card variant="floating" className="glass-dark h-full w-full">
                <p className="type-heading-sm">Janyne Porfirio</p>
                <p className="type-body-sm mt-2 text-text-secondary">Psicóloga</p>
              </Card>
            </FloatingMotion>

            <FloatingMotion 
              className="hero-approach"
              mobile={{ y: [-4, 6], x: [1, -0.8], rotation: [0.06, -0.09], duration: 4.2, delay: 0.5 }}
              tablet={{ y: [-6, 8], x: [1.5, -1], rotation: [0.10, -0.15], duration: 4.3, delay: 0.7 }}
              desktop={{ y: [-7, 10], x: [2, -1], rotation: [0.15, -0.20], duration: 4.4, delay: 0.7 }}
            >
              <Card variant="floating" className="glass-dark h-full w-full">
                <p className="type-eyebrow text-text-secondary">Abordagem</p>
                <p className="type-body-sm mt-2">Fenomenológico-Existencial</p>
              </Card>
            </FloatingMotion>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
