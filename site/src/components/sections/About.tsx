import { homeContent } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function About() { const { about } = homeContent; return <section id="sobre" className="section-block bg-background-primary"><Container><div className="about-grid"><div className="about-copy"><Eyebrow>{about.eyebrow}</Eyebrow><h2 className="type-heading-xl mt-3 max-w-[20ch] text-text-primary">{about.title}</h2><p className="type-body-md mt-4 max-w-[60ch] text-text-secondary">{about.body}</p><div className="about-cards mt-6">{about.cards.map((card) => <Card key={card} variant="information"><p className="type-heading-sm text-text-primary">{card}</p></Card>)}</div></div><div className="about-image"><ImageFrame ratio="3:4" label="Placeholder neutro para a fotografia sobre Janyne"><span className="type-caption text-text-secondary">JP-ABOUT-02 · placeholder de desenvolvimento</span></ImageFrame></div></div></Container></section>; }
