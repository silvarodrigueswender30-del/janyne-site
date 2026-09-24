import Image from "next/image";
import { CalendarDays, Compass, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProcessStep } from "@/components/ui/ProcessStep";

const steps = [
  { number: "01", title: "Primeiro contato", body: "Você entra em contato para conversar sobre disponibilidade e informações iniciais do atendimento.", icon: MessageCircle },
  { number: "02", title: "Primeiro encontro", body: "O primeiro encontro abre um espaço de escuta para conhecer sua demanda e compreender como o acompanhamento poderá ser organizado.", icon: CalendarDays },
  { number: "03", title: "Processo terapêutico", body: "A continuidade é construída nos encontros seguintes, de acordo com o processo e com o que for sendo trabalhado ao longo do acompanhamento.", icon: Compass },
] as const;

export function Process() { return <section id="como-funciona" className="section-block bg-background-primary" aria-labelledby="process-heading">
      <div className="section-background">
        <Image src="/images/backgrounds/process-background.avif" alt="" aria-hidden="true" fill className="object-cover object-center" />
      </div>
      <div className="section-overlay" style={{ background: 'rgba(255,255,255,0.92)' }} />
      <Container className="section-content"><div className="process-intro"><Eyebrow>Como funciona</Eyebrow><h2 id="process-heading" className="type-heading-xl mt-3 max-w-[24ch] text-text-primary">Três etapas para tornar o início mais claro.</h2></div><div className="process-region mt-8">{steps.map(({ icon: Icon, body, ...step }) => <ProcessStep key={step.number} {...step} icon={<Icon aria-hidden="true" size={20} strokeWidth={1.5} />}>{body}</ProcessStep>)}</div></Container></section>; }
