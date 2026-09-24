import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const principles = [
  ["Experiência vivida", "O que você vive e a forma como isso ganha sentido na sua experiência são pontos de partida para a escuta."],
  ["Singularidade", "A pessoa não é tratada como uma coleção de sintomas nem reduzida a um rótulo."],
  ["Relações, escolhas e possibilidades", "O diálogo pode considerar vínculos, escolhas, limites e possibilidades presentes na forma de estar no mundo."],
] as const;

export function Approach() { return <section id="abordagem" className="section-block canvas-dark" aria-labelledby="approach-heading">
      <div className="section-background">
        <Image src="/images/backgrounds/approach-background.avif" alt="" aria-hidden="true" fill className="object-cover object-center" />
      </div>
      <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
      <Container className="section-content"><div className="approach-grid"><div className="approach-intro"><Eyebrow className="text-text-inverse">Abordagem Fenomenológico-Existencial</Eyebrow><h2 id="approach-heading" className="type-heading-xl mt-3 max-w-[21ch] text-text-inverse">Uma forma de olhar para a experiência sem reduzir a pessoa a um rótulo.</h2><p className="type-body-md mt-4 max-w-[54ch] text-text-inverse">A escuta considera a forma singular como cada pessoa vive sua história, suas relações, escolhas, limites e possibilidades. O processo busca compreender a experiência tal como ela se apresenta, sem partir de respostas prontas ou promessas universais.</p></div><div className="approach-cards"><Card variant="dark" className="approach-card-main"><span className="editorial-marker editorial-marker-dark" aria-hidden="true" /><h3 className="type-heading-md mt-5">{principles[0][0]}</h3><p className="type-body-sm mt-4 text-text-inverse">{principles[0][1]}</p></Card><Card variant="dark"><h3 className="type-heading-md">{principles[1][0]}</h3><p className="type-body-sm mt-4 text-text-inverse">{principles[1][1]}</p></Card><Card variant="dark"><h3 className="type-heading-md">{principles[2][0]}</h3><p className="type-body-sm mt-4 text-text-inverse">{principles[2][1]}</p></Card></div></div></Container></section>; }
