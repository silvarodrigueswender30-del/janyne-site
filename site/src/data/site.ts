import { createWhatsappChannel } from "@/lib/contact";

export const siteNavigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Psicoterapia", href: "#psicoterapia" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const contact = {
  whatsapp: createWhatsappChannel(),
  email: null,
  instagram: null,
  location: null,
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Psicologia Clínica",
    title: "Um espaço para compreender sua experiência e olhar para novas possibilidades.",
    body: "Na psicoterapia Fenomenológico-Existencial, a escuta parte da sua experiência, da sua história e das possibilidades presentes no modo como você vive e se relaciona.",
    primaryCta: { label: "Conheça o atendimento", href: "#psicoterapia" },
    secondaryCta: { label: "Falar com Janyne", href: contact.whatsapp.href },
  },
  identityStrip: [
    "Psicologia Clínica",
    "Fenomenológico-Existencial",
    "Atendimento Online",
    "Presencial mediante disponibilidade",
  ],
  about: {
    eyebrow: "Sobre Janyne",
    title: "Uma escuta atenta à singularidade de cada experiência.",
    body: "Janyne Porfirio atua em Psicologia Clínica a partir da abordagem Fenomenológico-Existencial. Sua trajetória reúne experiências acadêmicas, clínicas e profissionais em contextos de cuidado e fortalecimento de vínculos, contribuindo para uma escuta que considera a pessoa para além de rótulos ou respostas prontas.",
    cards: ["Formação em Psicologia", "Abordagem Fenomenológico-Existencial"],
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Algumas informações antes do primeiro contato.",
    items: [
      {
        question: "Como funciona a primeira sessão?",
        answer: "É um primeiro espaço de escuta e conversa para conhecer sua demanda e compreender como o acompanhamento poderá ser organizado. Detalhes operacionais serão confirmados com a profissional.",
      },
      {
        question: "O atendimento é online?",
        answer: "Sim. O atendimento principal é online.",
      },
      {
        question: "Existe atendimento presencial?",
        answer: "Poderá ocorrer mediante disponibilidade e alinhamento individual pelo WhatsApp.",
      },
      { question: "Qual é a duração da sessão?", answer: null },
      { question: "Como funciona o agendamento?", answer: null },
      {
        question: "Qual abordagem você utiliza?",
        answer: "A abordagem é Fenomenológico-Existencial. Na Home, ela é apresentada de forma introdutória na seção “Abordagem”.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Primeiro contato",
    title: "Se fizer sentido para você, podemos conversar sobre o início desse processo.",
    body: "Entre em contato para conversar sobre disponibilidade e informações do atendimento.",
    action: "Conversar pelo WhatsApp",
    actionHref: contact.whatsapp.href,
  },
} as const;
