import { homeContent } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function Hero() {
  const { hero } = homeContent;
  return <section id="inicio" className="hero-section canvas-dark"><Container><div className="hero-grid">
    <div className="hero-copy"><Eyebrow className="hero-eyebrow"><span className="eyebrow-accent" aria-hidden="true" />{hero.eyebrow}</Eyebrow><h1 className="type-display-lg mt-3 max-w-[17ch] text-text-inverse">{hero.title}</h1><p className="type-body-lg mt-4 max-w-[52ch] text-text-inverse">{hero.body}</p><div className="mt-6 flex flex-wrap gap-4"><Button asChild canvas="dark" href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>{hero.secondaryCta.href ? <Button asChild canvas="dark" variant="secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Button> : null}</div></div>
    <div className="hero-visual"><ImageFrame ratio="4:5" label="Placeholder neutro para a fotografia principal"><span className="type-caption text-text-secondary">JP-HERO-01 · placeholder de desenvolvimento</span></ImageFrame><Card variant="floating" className="hero-profile"><p className="type-heading-sm">Janyne Porfirio</p><p className="type-body-sm mt-2 text-text-secondary">Psicóloga</p></Card><Card variant="floating" className="hero-approach"><p className="type-eyebrow text-text-secondary">Abordagem</p><p className="type-body-sm mt-2">Fenomenológico-Existencial</p></Card></div>
  </div></Container></section>;
}
