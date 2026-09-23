import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function TherapyRelevance() {
 return <section className="section-block bg-background-secondary" aria-labelledby="relevance-heading"><Container><div className="relevance-grid relevance-grid--pending"><div className="relevance-intro"><Eyebrow>{"Quando a psicoterapia pode fazer sentido"}</Eyebrow><h2 id="relevance-heading" className="type-heading-xl mt-3 max-w-[22ch] text-text-primary">Há momentos em que compreender o que estamos vivendo pode abrir novas formas de seguir.</h2></div></div></Container></section>;
}
