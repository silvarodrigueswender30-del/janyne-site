# Janyne Porfirio — Home Specification

> Especificação técnica, visual e editorial da Home do site institucional de Janyne Porfirio.
> Este documento define composição, ordem, canvas, grid, responsividade, fotografia, UX, acessibilidade e conteúdo de trabalho da Home.
> Autoridade por domínio: dados confirmados da cliente são soberanos para fatos; `design-system.md` para tokens/componentes/regras visuais; este `home-spec.md` para composição específica da Home; MindTalk é apenas referência estrutural histórica.

---

## 1. Purpose

O objetivo deste documento é permitir que Antigravity, Codex ou outro agente implemente a Home sem precisar retornar ao mockup MindTalk para descobrir como a composição deveria funcionar.

A cadeia de decisão é:

**referência visual → Design System → Home Specification → implementação**

Este arquivo não é código e não deve ser interpretado como autorização para criar novos tokens, cores, variantes de card ou tipografia. Ele descreve como os elementos já aprovados no `design-system.md` são aplicados à Home.

A Home deve comunicar presença, escuta, profundidade, acolhimento, clareza, singularidade, serenidade, maturidade, confiança, proximidade humana e sofisticação discreta. Não deve parecer clínica médica, wellness genérico, página motivacional, site de coach ou reprodução visual do template MindTalk.

---

## 2. Source Hierarchy

A autoridade **não é linear**; é definida por domínio:

| Domínio | Fonte soberana | Regra |
|---|---|---|
| Fatos profissionais e dados da cliente | **Confirmed Client Data** — briefing, respostas e informações explicitamente confirmadas | Nenhum outro documento pode inventar, completar ou substituir fatos ausentes. |
| Tokens, componentes e regras visuais | **`design-system.md`** | Soberano para cores, tokens semânticos, tipografia, spacing, radius, shadows, buttons, cards, iconografia, motion, acessibilidade e regras visuais globais. |
| Composição específica da Home | **`home-spec.md`** | Soberano para ordem, canvas, spans, relações entre seções, comportamento responsivo da Home e aplicação contextual dos componentes. |
| Referência histórica de estrutura | **MindTalk — Blueprint Estrutural / Reverse Engineering Visual** | Apenas referência para compreender origem de princípios compositivos; nunca prevalece sobre dados confirmados, Design System ou Home Spec. |

Regras de conflito:

- fato profissional → prevalece **Confirmed Client Data**;
- token/componente/regra visual → prevalece `design-system.md`;
- composição e responsividade específica da Home → prevalece `home-spec.md`, desde que não viole o Design System;
- o Blueprint MindTalk não decide cor, tipografia, copy, prova social, medida final, breakpoint ou comportamento final da Home.

A implementação não deve retornar ao Blueprint para reinterpretar uma decisão já fechada neste documento.

---

## 3. Known Client Information

Informações tratadas como confirmadas nesta etapa:

- **Nome:** Janyne Porfirio
- **Profissão:** Psicóloga
- **Foco do site:** Psicologia Clínica
- **Abordagem:** Fenomenológico-Existencial
- **Atendimento principal:** Online
- **Atendimento presencial:** poderá ocorrer mediante disponibilidade e alinhamento individual pelo WhatsApp
- Existe experiência acadêmica/clínica orientada pela abordagem existencial.
- Existe experiência profissional em contextos de assistência social e fortalecimento de vínculos.
- O site **não** é institucionalmente sobre CRAS, SUAS ou assistência social.
- O serviço comercial principal é **Psicoterapia / Psicologia Clínica**.

A trajetória em assistência social pode aparecer somente como parte breve do percurso profissional na seção About, sem transformar a página em apresentação institucional dessa área.

---

## 4. Pending Client Information

Nunca inventar nem inferir como definitivo:

- `[CRP A CONFIRMAR]`
- `[PÚBLICO A CONFIRMAR]`
- `[DEMANDAS A CONFIRMAR]`
- `[LOCALIDADE A CONFIRMAR]`
- `[ENDEREÇO A CONFIRMAR]`
- `[HORÁRIOS A CONFIRMAR]`
- `[VALOR A CONFIRMAR]`
- `[DURAÇÃO DA SESSÃO A CONFIRMAR]`
- `[WHATSAPP A CONFIRMAR]`
- `[EMAIL A CONFIRMAR]`
- `[INSTAGRAM A CONFIRMAR]`
- `[ESPECIALIZAÇÕES A CONFIRMAR]`
- `[TÍTULOS ACADÊMICOS A CONFIRMAR]`

Também permanecem proibidos enquanto não documentados: depoimentos, número de pacientes, taxa de satisfação, anos de experiência clínica, taxa de sucesso, estatísticas de resultado e claims terapêuticos.

---

## 5. Home Narrative

A narrativa da página deve progredir em cinco movimentos:

1. **Orientar:** apresentar quem é Janyne, qual é o campo de atuação e como entrar em contato.
2. **Humanizar:** mostrar a pessoa e o percurso profissional sem transformar a Home em currículo.
3. **Gerar identificação sem diagnosticar:** permitir que o visitante reconheça momentos em que a psicoterapia pode fazer sentido, sem atribuir especialidades clínicas ainda não confirmadas.
4. **Explicar o serviço e a abordagem:** primeiro mostrar como é o atendimento; depois explicar a lente Fenomenológico-Existencial em linguagem acessível.
5. **Reduzir incerteza e facilitar o próximo passo:** processo em três etapas, FAQ e contato final.

### Decisão sobre Psicoterapia e Abordagem

As seções **Individual Psychotherapy** e **Phenomenological-Existential Approach** permanecem independentes e consecutivas.

Motivos:

- Psicoterapia responde **o que é oferecido e em qual modalidade**.
- Abordagem responde **como a experiência da pessoa é compreendida dentro do trabalho clínico**.
- A separação evita uma seção excessivamente longa e acadêmica.
- A seção de Abordagem funciona como pausa editorial escura entre a composição fotográfica forte de Psicoterapia e a clareza operacional do Processo.
- Em mobile, cada ideia permanece escaneável sem um bloco de texto excessivo.

---

## 6. Section Order

Ordem definitiva da Home:

1. Header / Navbar
2. Hero
3. Professional Identity Strip
4. About
5. Therapy Relevance / Identification
6. Individual Psychotherapy / Service
7. Phenomenological-Existential Approach
8. Process / How it works
9. FAQ
10. Final CTA
11. Footer

Não inserir seção de depoimentos, reviews, logos de clientes, contadores, estatísticas, “happy clients”, estrelas, antes/depois ou qualquer prova social artificial.

---

## 7. Canvas Map

| Ordem | Seção | Canvas | Surface / tratamento interno | Motivo |
|---:|---|---|---|---|
| 1 | Header sobre Hero | transparente sobre `--background-dark`; scrolled `--surface-nav-scrolled` | sem card | Navbar nasce integrada ao Hero e ganha legibilidade sólida após scroll. |
| 2 | Hero | `--background-dark` | imagem em `ImageFrame`; `card-floating` em Alabaster | Primeiro impacto editorial, alto contraste e contraponto à predominância clara da Home. |
| 3 | Professional Identity Strip | `--background-primary` | sem cards; borders `--border-subtle` | Transição curta e limpa do Hero escuro para a narrativa clara. |
| 4 | About | `--background-primary` | `card-information` | Mantém continuidade com a faixa anterior; a profundidade vem da composição, não de uma nova troca de canvas. |
| 5 | Therapy Relevance | `--background-secondary` | `card-standard` | Mudança suave de ritmo para os temas de identificação, sem recorrer ao escuro. |
| 6 | Individual Psychotherapy | `--background-primary` | `card-floating` + `card-information` | Retorno ao canvas silencioso para uma seção fotográfica forte. |
| 7 | Phenomenological-Existential Approach | `--background-dark` | `card-dark` | Segundo momento editorial escuro; separa serviço de processo e dá peso conceitual sem parede acadêmica. |
| 8 | Process | `--background-primary` | `card-process` | Clareza operacional após o bloco conceitual. |
| 9 | FAQ | `--background-secondary` | Accordion sem card inventado | Diferencia o bloco de dúvidas do Processo preservando a largura editorial definida. |
| 10 | Final CTA | `--background-dark` | `CTASection` | Encerramento forte, sereno e claramente acionável. |
| 11 | Footer | `--background-dark` | sem shadow; `--border-default-dark` | Continuidade com Final CTA; não criar nova quebra visual antes do fim. |

### Regras do mapa de canvas

- Não alternar light/dark seção sim/seção não.
- Rose Clay entra apenas por `--accent-primary`, `--accent-surface-soft` e `--accent-border-soft`.
- Dark Stone aparece como interação principal, `--surface-dark` e hierarquia textual semântica — nunca por HEX direto no componente.
- `--surface-elevated` continua Alabaster; elevação depende de border + shadow.
- Seções dark não são clareadas em mobile.

---

## 8. Header

### Estrutura

- Elemento semântico: `<header>` contendo `<nav aria-label="Navegação principal">`.
- `>=1280px`: altura `72px`; navegação desktop completa `brand | 7 links | CTA`.
- `<1280px`: altura `64px`; somente `brand | hamburger`; os links e CTA ficam no painel mobile/tablet.
- Position: `sticky; top: 0`.
- `z-index: 50`.
- Container: exatamente o container responsivo do §7 do `design-system.md`.
- O header ocupa a largura total; somente o conteúdo interno respeita o container.
- Não criar breakpoint intermediário de navegação entre 1024 e 1280.

### Brand

Até existir logo aprovada, usar wordmark textual:

`Janyne Porfirio`

- Recipe: `type-heading-md`.
- Sobre Hero: `--text-inverse`.
- Scrolled: `--text-primary`.
- Não inventar símbolo, monograma ou ícone de marca.

### Navegação provisória

- Início → `#inicio`
- Sobre → `#sobre`
- Psicoterapia → `#psicoterapia`
- Abordagem → `#abordagem`
- Como funciona → `#como-funciona`
- FAQ → `#faq`
- Contato → `#contato`

Links usam `type-body-md`.

### Estados

**Sobre Hero / dark:**

- background transparente;
- texto `--text-inverse`;
- sem border;
- active = `--text-inverse` + underline `--accent-primary`;
- CTA visual = `Secondary / dark canvas`: transparente, texto e border Alabaster.

**Após scroll / light:**

- background `--surface-nav-scrolled`;
- `border-bottom: 1px solid var(--border-subtle)`;
- texto `--text-primary`;
- active = `--text-primary` + underline `--accent-primary`;
- CTA visual = `Secondary / light canvas`.

Transição: `--duration-normal` + `--easing-standard` apenas para background, border e cor.

### CTA da navbar

Label provisório: `Entrar em contato`.

- Mesmo componente visual: Button `Secondary`; o canvas escolhe o tratamento dark/light acima.
- Semântica: renderizar como `<a>`/`asChild` porque navega para contato/WhatsApp.
- Destino futuro: `[WHATSAPP A CONFIRMAR]`.
- Enquanto a URL não existir, não inserir destino fictício de WhatsApp em produção.

### Painel mobile/tablet — `<1280px`

- Brand à esquerda.
- Icon Button de menu à direita, Lucide `Menu`, 44×44px.
- Painel full-screen `--background-primary`.
- Links `type-heading-md`, `--text-primary`, empilhados com `var(--space-5)`.
- CTA `Primary / light canvas` no rodapé do painel; em `<480px`, `width: 100%`.
- Fechar com Escape, clique em link e botão close.
- Ao abrir: mover foco para o primeiro item útil; ao fechar: devolver foco ao botão que abriu.
- Bloquear scroll do body apenas enquanto o painel estiver aberto.

### Integração com o Hero

O Header continua `sticky`; o Hero é quem cancela o espaço de layout para que sua superfície passe visualmente atrás da navbar:

- `>=1280px`: Hero `margin-top: -72px`; seu `padding-top` inclui `72px` + o spacing próprio da composição.
- `<1280px`: Hero `margin-top: -64px`; seu `padding-top` inclui `64px` + o spacing próprio da composição.
- Header mantém `z-index: 50`; Hero e conteúdo não recebem z-index que ultrapasse a navegação.

---

## 9. Hero

`id="inicio"`

### Função

Apresentar rapidamente campo profissional, proposta de escuta, pessoa e modalidade sem claims de resultado. O Hero deve manter a lógica assimétrica do blueprint — texto à esquerda, fotografia vertical à direita e dois pequenos elementos informativos associados à imagem — sem copiar o visual do template.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Psicologia Clínica`

**H1 — STATUS: PROVISÓRIO**

`Um espaço para compreender sua experiência e olhar para novas possibilidades.`

**Body — STATUS: PROVISÓRIO**

`Na psicoterapia Fenomenológico-Existencial, a escuta parte da sua experiência, da sua história e das possibilidades presentes no modo como você vive e se relaciona.`

**CTA principal — STATUS: PROVISÓRIO**

`Conheça o atendimento`

- Visual: `Primary / dark canvas` — Alabaster + Obsidian.
- Semântica: `<a href="#psicoterapia">` usando o tratamento visual Button (`asChild`/anchor equivalente).

**CTA secundário — STATUS: PROVISÓRIO**

`Falar com Janyne`

- Visual: `Secondary / dark canvas` — transparente, texto e border Alabaster.
- Semântica: `<a>` porque navega para WhatsApp.
- Destino futuro: `[WHATSAPP A CONFIRMAR]`; não criar URL fictícia em produção.

### Wide composition — ≥1024px

- Canvas: `--background-dark`.
- Hero passa visualmente atrás do Header sticky.
- `min-height` estrutural:
  - ≥1440: `760px`;
  - 1280–1439: `720px`;
  - 1024–1279: `680px`.
- Container: Design System.
- Grid: 12 colunas.
- Texto: colunas 1–5.
- Coluna 6 funciona como respiro estrutural dentro do grid.
- Visual: colunas 7–12.
- Gap entre blocos: `var(--space-8)` em ≥1440; `var(--space-7)` em 1024–1439.
- Alinhamento vertical: conteúdo centralizado no espaço útil abaixo da navbar.
- `>=1280px`: `margin-top: -72px`; `padding-top: calc(72px + var(--space-8))`.
- `1024–1279px`: `margin-top: -64px`; `padding-top: calc(64px + var(--space-8))`.
- Padding bottom: `var(--space-9)`.

### Text block

Ordem DOM e visual:

1. Eyebrow
2. H1
3. Body
4. Grupo de CTA

Spacing:

- eyebrow → H1: `var(--space-3)`;
- H1 → body: `var(--space-4)`;
- body → CTA: `var(--space-6)`;
- CTA principal → link secundário: `var(--space-4)`.

H1:

- recipe `type-display-lg`;
- `--text-inverse`;
- max-width `17ch`;
- sem HeadingHighlight no Hero dark.

Body:

- recipe `type-body-lg`;
- `--text-inverse`;
- max-width `52ch`.

Eyebrow:

- recipe `type-eyebrow`;
- texto `--text-inverse`;
- pode receber pequena linha lateral `--accent-primary`; Rose Clay não vira cor do texto.

### Hero image

- Componente: `ImageFrame`.
- Aspect ratio: `4:5`.
- Radius: `var(--radius-lg)`.
- Width: 100% do span 7–12, limitado pelo grid; não definir width em px arbitrário.
- Object-fit: cover.
- Object-position inicial: `center 35%`, sujeito a ajuste de acordo com a foto real e a shot list.
- Default: **sem overlay**, porque o texto não é sobreposto à fotografia.
- `--overlay-image-soft` só pode ser aplicado se a fotografia real precisar de equalização tonal e nunca para “decorar”.
- Shadow da própria imagem: nenhuma; a separação vem do radius e do contraste com o canvas.

### Floating card 01 — perfil

Componente: `card-floating`.

Conteúdo:

- `Janyne Porfirio`
- `Psicóloga`
- `[CRP A CONFIRMAR]`

Posição ≥1024:

- `position: absolute` dentro do wrapper da imagem;
- top: `var(--space-5)`;
- right: `calc(var(--space-4) * -1)`;
- z-index: `10`;
- largura: `min(260px, 70%)`;
- border/shadow/radius: herdados integralmente de `card-floating`.

Tipografia interna:

- nome `type-heading-sm`;
- profissão `type-body-sm`;
- CRP `type-caption` + `--text-muted`.

Enquanto CRP não for confirmado, o placeholder aparece apenas em ambiente de especificação/QA; em publicação final, ocultar a linha em vez de exibir texto de placeholder ao usuário.

### Floating card 02 — abordagem

Componente: `card-floating`.

Conteúdo:

- label: `Abordagem`
- value: `Fenomenológico-Existencial`

Posição ≥1024:

- bottom: `var(--space-5)`;
- left: `calc(var(--space-5) * -1)`;
- z-index: `10`;
- largura: `min(280px, 74%)`.

Sem estrelas, score, avatar group ou estatística.

### Hero mobile / tablet — <1024px

Ordem obrigatória:

**eyebrow → H1 → texto → CTA → fotografia → elementos auxiliares**

- `768–1023px`: uma coluna; floating cards entram no fluxo normal; `margin-top: -64px`; `padding-top: calc(64px + var(--space-7))`.
- `480–767px`: uma coluna; sem elementos absolutos; `margin-top: -64px`; `padding-top: calc(64px + var(--space-7))`.
- `<480px`: uma coluna; sem overlap; CTAs principais `width: 100%`; `margin-top: -64px`; `padding-top: calc(64px + var(--space-7))`.
- não usar CSS `order` para mover foto acima do H1.
- fotografia nunca bloqueia CTA ou texto.
- detalhes completos em §22 Responsive Matrix.

---

## 10. Professional Identity Strip

### Função

Substituir o logo strip/prova social do blueprint por uma faixa editorial factual. Não comunicar popularidade; comunicar contexto profissional confirmado.

### Conteúdo — STATUS: PROVISÓRIO

Itens:

1. `Psicologia Clínica`
2. `Fenomenológico-Existencial`
3. `Atendimento Online`
4. `Presencial mediante disponibilidade`

**Decisão sobre “Rio de Janeiro”:** não utilizar como item nesta versão porque a localidade física definitiva não está confirmada e o serviço principal é online. O quarto item utiliza uma condição já confirmada sem criar impressão de endereço fixo. Se a cliente confirmar cidade/endereço depois, a faixa pode ser revisada sem alterar o layout.

### Visual

- Canvas: `--background-primary`.
- Sem cards grandes.
- Sem ícones por padrão; a força vem de tipografia e separadores.
- Border top e bottom: `1px solid var(--border-subtle)`.
- Desktop min-height estrutural: `88px`.
- Padding block: `var(--space-5)`.
- Grid desktop: 4 itens iguais, cada um 3 colunas.
- Recipe dos itens: `type-label`.
- Cor: `--text-secondary`.
- Separadores verticais entre itens: `--border-subtle`.
- Accent opcional: bullet pequeno puramente decorativo com `--accent-primary`, nunca necessário para compreensão.

### Responsive

- `768–1023px`: grid 2×2.
- `480–767px`: grid 2×2.
- `<480px`: 1 coluna.
- Separadores ficam entre células no 2×2 e passam a horizontais no layout de 1 coluna.

---

## 11. About

`id="sobre"`

### Função

Apresentar pessoa, percurso e visão de cuidado sem transformar a seção em currículo completo.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Sobre Janyne`

**H2 — STATUS: PROVISÓRIO**

`Uma escuta atenta à singularidade de cada experiência.`

**Body — STATUS: PROVISÓRIO**

`Janyne Porfirio atua em Psicologia Clínica a partir da abordagem Fenomenológico-Existencial. Sua trajetória reúne experiências acadêmicas, clínicas e profissionais em contextos de cuidado e fortalecimento de vínculos, contribuindo para uma escuta que considera a pessoa para além de rótulos ou respostas prontas.`

O texto acima é copy de trabalho. Não acrescentar especializações, instituições, títulos ou tempo de carreira sem confirmação.

### Informational cards

Usar somente dois `card-information`:

1. `Formação em Psicologia`
2. `Abordagem Fenomenológico-Existencial`

Não criar terceiro card para “anos”, “pacientes” ou outros dados não confirmados.

### Desktop composition

- Canvas: `--background-primary`.
- Section padding block: `var(--space-10)`.
- 12-col grid.
- Imagem: colunas 1–5.
- Coluna 6: respiro.
- Conteúdo: colunas 7–12.
- Gap visual mínimo entre imagem e conteúdo: `var(--space-7)`.
- Alinhamento: centro vertical entre imagem e bloco textual.

Imagem:

- `ImageFrame`;
- aspect ratio `3:4`;
- radius `var(--radius-lg)`;
- object-position definido pela shot list.

Conteúdo:

- H2 `type-heading-xl`, max `20ch`;
- body `type-body-md`, max `60ch`;
- cards abaixo do body com margin-top `var(--space-6)`;
- cards internos em grid 2 colunas, gap `var(--space-4)`.

HeadingHighlight: permitido apenas em um trecho curto do H2, variante `soft background`, caso a composição final precise de acento. Não é obrigatório.

### Responsive

- `768–1023px`: uma coluna; ordem eyebrow → H2 → body → info cards → imagem; os dois `card-information` formam grid de 2 colunas.
- `480–767px`: uma coluna; mesma ordem; todos os cards de conteúdo em 1 coluna; sem elementos absolutos.
- `<480px`: uma coluna; todos os cards em 1 coluna; sem overlap.
- Texto permanece **antes** da imagem em todos os layouts abaixo de 1024px.

---

## 12. Therapy Relevance

### Função

Substituir “Why Choose Us” por uma seção de identificação. Não comparar Janyne com outros profissionais e não diagnosticar o visitante.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Quando a psicoterapia pode fazer sentido`

**H2 — STATUS: PROVISÓRIO**

`Há momentos em que compreender o que estamos vivendo pode abrir novas formas de seguir.`

**Body — STATUS: PROVISÓRIO**

`Esta seção poderá reunir situações e experiências que a cliente reconhecer como parte de sua prática clínica. Os temas definitivos dependem de confirmação profissional.`

### Cards — STATUS: AGUARDANDO CLIENTE

1. `[TEMA CLÍNICO 01 — A CONFIRMAR]`
2. `[TEMA CLÍNICO 02 — A CONFIRMAR]`
3. `[TEMA CLÍNICO 03 — A CONFIRMAR]`

Não substituir esses placeholders por ansiedade, depressão, trauma, luto, relacionamento, autoestima ou qualquer outra demanda sem confirmação.

### Layout

- Canvas: `--background-secondary`.
- Section padding: `var(--space-10)` desktop / `var(--space-7)` mobile.
- Header da seção: max-width `62ch`.
- Cards: 3 × `card-standard`.
- Desktop: cada card ocupa 4 colunas do grid de 12.
- Gap: `var(--space-5)`.
- Ícones: opcionais e somente decorativos. Se usados, Lucide, container e tokens do Design System. Não escolher ícones específicos antes de os temas serem confirmados.
- Card title: `type-heading-md`.
- Card body futuro: `type-body-sm`.

### Responsive

- `768–1023px`: 2 colunas; cards 1 e 2 dividem a primeira linha; card 3 ocupa full-width na segunda linha.
- `480–767px`: 1 coluna.
- `<480px`: 1 coluna.

Não transformar os cards em links se não existir uma página de destino real.

---

## 13. Individual Psychotherapy

`id="psicoterapia"`

### Função

Explicar a oferta principal de forma concreta e visualmente forte, mantendo o foco em psicoterapia individual e modalidade de atendimento.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Psicoterapia individual`

**H2 — STATUS: PROVISÓRIO**

`Um processo construído a partir da sua própria experiência.`

**Body — STATUS: PROVISÓRIO**

`O acompanhamento acontece principalmente online, em um espaço de escuta e diálogo orientado pela abordagem Fenomenológico-Existencial. O atendimento presencial poderá ocorrer mediante disponibilidade e alinhamento individual.`

**CTA — STATUS: PROVISÓRIO**

`Falar sobre o atendimento`

Destino futuro: `[WHATSAPP A CONFIRMAR]`. Renderizar semanticamente como `<a>` usando visual `Primary / light canvas`; não usar `<button>` para esta navegação.

### Desktop / laptop composition

- Canvas: `--background-primary`.
- `>=1280px`: 12-col grid; Visual = colunas 1–7; Texto = colunas 8–12.
- `1024–1279px`: 12-col grid; Visual = colunas 1–6; Texto = colunas 7–12.
- `<1024px`: uma coluna.
- Gap: `var(--space-7)`.
- Section padding block: `var(--space-10)`.
- Alinhamento vertical em >=1024: center.

### Image

- `ImageFrame`.
- Aspect ratio: `16:9`.
- Radius: `var(--radius-lg)`.
- Não encenar “sessão de terapia” genérica com cliente.
- Preferência para ambiente silencioso, detalhe de consultório/mesa/cadeira/luz natural ou Janyne em contexto profissional sem paciente identificável.

### Floating information

Um único `card-floating` substitui o antigo rating card do blueprint.

Conteúdo:

- label `Atendimento principal`
- value `Online`

Posição ≥1024:

- bottom: `var(--space-5)`;
- left: `var(--space-5)`;
- z-index `10`;
- não ultrapassar 55% da largura da imagem.

Sem estrelas, review, score ou promessa.

### Secondary information block

Abaixo do body, usar `card-information`:

- title: `Presencial`
- body: `Mediante disponibilidade e alinhamento individual.`

Não exibir endereço.

### Typography

- H2: `type-heading-xl`, max `18ch`.
- Body: `type-body-lg`, max `52ch`.
- Information card title: `type-heading-sm`.
- Information card body: `type-body-sm`.

### Responsive — <1024px

- `768–1023px`: uma coluna; ordem eyebrow → H2 → body → CTA → card-information → imagem → floating information; floating passa a `position: static`, largura 100%.
- `480–767px`: uma coluna; todos os cards em 1 coluna; nenhum elemento absoluto.
- `<480px`: uma coluna; nenhum overlap; CTA principal `width: 100%`; floating/info cards em 1 coluna e largura 100%.

---

## 14. Phenomenological-Existential Approach

`id="abordagem"`

### Função

Explicar a abordagem para uma pessoa leiga sem virar aula de filosofia, sem prometer resultado e sem reduzir a pessoa a diagnóstico.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Abordagem Fenomenológico-Existencial`

**H2 — STATUS: PROVISÓRIO**

`Uma forma de olhar para a experiência sem reduzir a pessoa a um rótulo.`

**Body — STATUS: PROVISÓRIO**

`A escuta considera a forma singular como cada pessoa vive sua história, suas relações, escolhas, limites e possibilidades. O processo busca compreender a experiência tal como ela se apresenta, sem partir de respostas prontas ou promessas universais.`

### Editorial principles — STATUS: PROVISÓRIO

Usar três `card-dark`, sem ícones obrigatórios:

1. **Experiência vivida** — `O que você vive e a forma como isso ganha sentido na sua experiência são pontos de partida para a escuta.`
2. **Singularidade** — `A pessoa não é tratada como uma coleção de sintomas nem reduzida a um rótulo.`
3. **Relações, escolhas e possibilidades** — `O diálogo pode considerar vínculos, escolhas, limites e possibilidades presentes na forma de estar no mundo.`

Essas frases são explicativas e provisórias; não são claims de eficácia.

### Layout

- Canvas: `--background-dark`.
- Textos principais: `--text-inverse`.
- Focus: `--focus-ring-dark`.
- Section padding: `var(--space-10)` desktop / `var(--space-7)` mobile.
- Desktop: grid 12 colunas.
- Intro: colunas 1–5.
- Cards: colunas 7–12; coluna 6 funciona como respiro.
- Cards internos: grid 2 colunas.
- Primeiro card ocupa as duas colunas; cards 2 e 3 ocupam uma coluna cada.
- Gap: `var(--space-4)`.
- `card-dark` usa border e nunca shadow.
- Sem fotografia nesta seção. O bloco escuro editorial é a pausa visual.
- Sem HeadingHighlight; Rose Clay entra somente em linha/bullet/underline decorativo curto.

### Responsive

- `768–1023px`: intro full-width; card 1 full-width; cards 2 e 3 em 2 colunas na linha seguinte.
- `480–767px`: intro full-width; todos os cards em 1 coluna; nenhum elemento absoluto.
- `<480px`: todos os cards em 1 coluna; sem overlap.

---

## 15. Process

`id="como-funciona"`

### Função

Reduzir incerteza sobre o primeiro passo sem apresentar a terapia como onboarding de produto.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Como funciona`

**H2 — STATUS: PROVISÓRIO**

`Três etapas para tornar o início mais claro.`

### Steps

**01 — Primeiro contato — STATUS: PROVISÓRIO**

`Você entra em contato para conversar sobre disponibilidade e informações iniciais do atendimento.`

**02 — Primeiro encontro — STATUS: PROVISÓRIO**

`O primeiro encontro abre um espaço de escuta para conhecer sua demanda e compreender como o acompanhamento poderá ser organizado.`

**03 — Processo terapêutico — STATUS: PROVISÓRIO**

`A continuidade é construída nos encontros seguintes, de acordo com o processo e com o que for sendo trabalhado ao longo do acompanhamento.`

### Layout

- Canvas: `--background-primary`.
- Section padding: `var(--space-10)` / mobile `var(--space-7)`.
- Header max-width `62ch`.
- Cards: 3 × `card-process`.
- Desktop: 3 colunas iguais, cada step 4/12.
- Gap: `var(--space-5)`.
- Não usar linha conectora entre cards nesta versão; isso reduz aparência de onboarding SaaS.
- Número: `type-eyebrow` + `--text-secondary`.
- Título: `type-heading-md`.
- Body: `type-body-sm`.
- Ícones Lucide, decorativos e `aria-hidden="true"`:
  - 01: `MessageCircle`
  - 02: `CalendarDays`
  - 03: `Compass`
- Ícones não substituem número ou título.

### Responsividade

- `>=1024px`: 3 cards em linha.
- `768–1023px`: 2 colunas; cards 1 e 2 na primeira linha; card 3 full-width na segunda linha.
- `480–767px`: 1 coluna.
- `<480px`: 1 coluna.

---

## 16. FAQ

`id="faq"`

### Função

Responder dúvidas objetivas sem introduzir informação não confirmada.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Perguntas frequentes`

**H2 — STATUS: PROVISÓRIO**

`Algumas informações antes do primeiro contato.`

### Perguntas e respostas

1. **Como funciona a primeira sessão?** — STATUS: PROVISÓRIO  
   `É um primeiro espaço de escuta e conversa para conhecer sua demanda e compreender como o acompanhamento poderá ser organizado. Detalhes operacionais serão confirmados com a profissional.`

2. **O atendimento é online?** — STATUS: PROVISÓRIO  
   `Sim. O atendimento principal é online.`

3. **Existe atendimento presencial?** — STATUS: PROVISÓRIO  
   `Poderá ocorrer mediante disponibilidade e alinhamento individual pelo WhatsApp.`

4. **Qual é a duração da sessão?** — STATUS: AGUARDANDO CLIENTE  
   `[RESPOSTA DEPENDE DE CONFIRMAÇÃO DA CLIENTE]`

5. **Como funciona o agendamento?** — STATUS: AGUARDANDO CLIENTE  
   `[RESPOSTA DEPENDE DE CONFIRMAÇÃO DA CLIENTE]`

6. **Qual abordagem você utiliza?** — STATUS: PROVISÓRIO  
   `A abordagem é Fenomenológico-Existencial. Na Home, ela é apresentada de forma introdutória na seção “Abordagem”.`

### Layout

- Canvas: `--background-secondary`.
- Grid desktop: intro colunas 1–4; accordion colunas 6–12; coluna 5 como respiro.
- Accordion único, nunca dois lado a lado.
- FAQ max-width interno do accordion: `720px` conforme Design System.
- Header de cada item: `type-heading-sm`.
- Answer: `type-body-md`.
- Border: `--border-subtle`.
- Ícone: Lucide `ChevronDown`, `icon-sm`.
- Motion: rotação/fade usando `--duration-normal`; reduced motion = mudança instantânea.

### Responsive

- `>=1024px`: intro colunas 1–4; coluna 5 como respiro; accordion colunas 6–12.
- `768–1023px`: uma coluna; intro antes do accordion.
- `480–767px`: uma coluna.
- `<480px`: uma coluna.

### Acessibilidade do Accordion

- Trigger = `<button>` real.
- `aria-expanded` e `aria-controls` sincronizados.
- Conteúdo associado com id único.
- Tab navega pelos triggers em ordem natural.
- Enter/Space abre/fecha.
- Não esconder resposta crítica apenas em hover.

---

## 17. Final CTA

`id="contato"`

### Função

Encerrar a narrativa e facilitar contato sem urgência artificial.

### Copy de trabalho

**Eyebrow — STATUS: PROVISÓRIO**

`Primeiro contato`

**H2 — STATUS: PROVISÓRIO**

`Se fizer sentido para você, podemos conversar sobre o início desse processo.`

**Body — STATUS: PROVISÓRIO**

`Entre em contato para conversar sobre disponibilidade e informações do atendimento.`

**CTA — STATUS: PROVISÓRIO**

`Conversar pelo WhatsApp`

Destino: `[WHATSAPP A CONFIRMAR]`.

### Layout

- Canvas: `--background-dark`.
- Componente: `CTASection`.
- Section padding: `var(--space-10)` desktop / `var(--space-7)` mobile.
- Bloco de conteúdo ocupa colunas 3–10 em desktop large; em 1024, colunas 2–11.
- Alinhamento textual: left; o bloco em si fica centralizado no container.
- H2: `type-heading-xl`, `--text-inverse`, max `22ch`.
- Body: `type-body-lg`, `--text-inverse`, max `52ch`.
- CTA margin-top: `var(--space-6)`.
- CTA renderiza como `<a>` para `[WHATSAPP A CONFIRMAR]` usando visual `Primary / dark canvas`; focus `--focus-ring-dark`.
- `<480px`: CTA principal `width: 100%`.
- Detalhe editorial opcional: linha curta `--accent-primary` junto ao Eyebrow.
- Sem countdown, “últimas vagas”, urgência, desconto ou escassez.

---

## 18. Footer

### Estrutura

- Elemento semântico: `<footer>`.
- Canvas: `--background-dark`, contínuo com Final CTA.
- Border top: `1px solid var(--border-default-dark)`.
- Sem box-shadow.
- Padding top: `var(--space-8)`.
- Padding bottom: `var(--space-7)`.

### Desktop grid

12 colunas:

- Brand/info: colunas 1–5.
- Navegação: colunas 7–8.
- Contato: colunas 10–12.
- Colunas 6 e 9 funcionam como respiro.

### Conteúdo

**Brand**

- `Janyne Porfirio`
- `Psicóloga`
- `[CRP A CONFIRMAR]`

**Navegação**

- Sobre
- Psicoterapia
- Abordagem
- Como funciona
- FAQ

**Contato**

- `[WHATSAPP A CONFIRMAR]`
- `[EMAIL A CONFIRMAR]`
- `[LOCALIDADE / ONLINE A CONFIRMAR]`
- Instagram somente se confirmado.

**Legal**

Reservar estrutura para Política de Privacidade e Termos apenas quando as páginas existirem. Não renderizar links falsos.

O aviso sobre serviços de emergência permanece uma decisão futura e não deve ser inventado sem validação jurídica/editorial.

Copyright: ano atual dinâmico + `Janyne Porfirio`.

### Typography

- Brand: `type-heading-md`, `--text-inverse`.
- Links/body: `type-body-sm`, `--text-inverse`.
- Legal: `type-caption` com cor inverse; não usar Earthen Umber em texto pequeno no dark canvas.

### Mobile

Uma coluna. Ordem: brand → navegação → contato → legal. Gap entre blocos `var(--space-7)`; links internos `var(--space-3)`.

---

## 19. Typography Map

| Seção | Eyebrow | Heading | Body | Cards / labels | Max-width | HeadingHighlight |
|---|---|---|---|---|---|---|
| Header | — | brand `type-heading-md` | links `type-body-md` | CTA `type-button` | brand auto | não |
| Hero | `type-eyebrow` | H1 `type-display-lg` | `type-body-lg` | floating: `type-heading-sm` + `type-body-sm` + `type-caption` | H1 `17ch`; body `52ch` | não, por estar em dark canvas |
| Identity Strip | — | — | — | `type-label` | por item | não |
| About | `type-eyebrow` | H2 `type-heading-xl` | `type-body-md` | cards `type-heading-sm` + `type-body-sm` | H2 `20ch`; body `60ch` | opcional soft background, trecho curto |
| Therapy Relevance | `type-eyebrow` | H2 `type-heading-xl` | `type-body-md` | card title `type-heading-md`; body `type-body-sm` | header `62ch`; H2 `22ch` | underline opcional |
| Individual Psychotherapy | `type-eyebrow` | H2 `type-heading-xl` | `type-body-lg` | info `type-heading-sm` + `type-body-sm` | H2 `18ch`; body `52ch` | opcional soft background |
| Approach | `type-eyebrow` | H2 `type-heading-xl` | `type-body-md` | card title `type-heading-md`; body `type-body-sm` | intro `54ch`; H2 `21ch` | não |
| Process | `type-eyebrow` | H2 `type-heading-xl` | `type-body-md` | number `type-eyebrow`; title `type-heading-md`; body `type-body-sm` | header `62ch` | não obrigatório |
| FAQ | `type-eyebrow` | H2 `type-heading-xl` | `type-body-md` | trigger `type-heading-sm` | accordion `720px`; intro `24ch` | não |
| Final CTA | `type-eyebrow` | H2 `type-heading-xl` | `type-body-lg` | CTA `type-button` | H2 `22ch`; body `52ch` | não |
| Footer | — | brand `type-heading-md` | `type-body-sm` | legal `type-caption` | colunas do grid | não |

### Typography constraints

- Nunca usar `text-[...]`, `leading-[...]`, weight arbitrário ou tamanho fora dos recipes `type-*`.
- `Poppins` somente onde os recipes display/heading/UI a definem; `Inter` permanece nos recipes de corpo e caption.
- `Inter` em corpo/interface.
- H1 único no Hero.
- H2 para títulos principais das seções.
- H3 para títulos de cards quando semanticamente apropriado.
- Eyebrow nunca substitui heading semântico.

---

## 20. Component Map

| Seção | Componentes permitidos |
|---|---|
| Header | `Navbar`, `Button Secondary` contextual (dark sobre Hero / light scrolled), `IconButton`, links semânticos |
| Hero | `Section`, `Eyebrow`, `Button Primary / dark canvas`, `Button Secondary / dark canvas`, `ImageFrame`, `FloatingCard` ×2 |
| Professional Identity Strip | `Section`, labels/texto; sem card novo |
| About | `Section`, `SectionHeader`, `Eyebrow`, `HeadingHighlight` opcional, `ImageFrame`, `Card` usando `card-information` ×2 |
| Therapy Relevance | `Section`, `SectionHeader`, `Eyebrow`, `Card` usando `card-standard` ×3 |
| Individual Psychotherapy | `Section`, `SectionHeader`, `Eyebrow`, `HeadingHighlight` opcional, `Button Primary / light canvas`, `ImageFrame`, `FloatingCard`, `Card` usando `card-information` |
| Approach | `Section`, `SectionHeader`, `Eyebrow`, `Card` usando `card-dark` ×3 |
| Process | `Section`, `SectionHeader`, `Eyebrow`, `ProcessStep` ×3 |
| FAQ | `Section`, `SectionHeader`, `Eyebrow`, `FAQ` / `Accordion` |
| Final CTA | `CTASection`, `Eyebrow`, `Button Primary / dark canvas` |
| Footer | `Footer`, links semânticos |

Não criar `BenefitCard`, `ReviewCard`, `RatingCard`, `LogoCard`, `StatsCard` ou outra variante nova só porque existia no blueprint.

---

## 21. Grid & Dimensions

### Global

Container e gutters são exclusivamente os definidos no Design System:

- ≥1440: max 1200px, 12 colunas, gutter 24px.
- 1280–1439: max 1140px, 12 colunas, gutter 24px.
- 1024–1279: max `min(100% - 64px, 960px)`, 12 colunas, gutter 20px.
- 768–1023: 8 colunas, padding 32px, gutter 16px.
- 480–767: 4 colunas, padding 24px, gutter 16px.
- <480: 4 colunas, padding 20px, gutter 12px.

### Header

- Full width externo; container global internamente.
- `>=1280px`: 72px, nav completa.
- `<1280px`: 64px, hamburger + painel.
- Sem breakpoint intermediário e sem padding vertical inventado além da altura e alinhamento central.

### Hero

- ≥1440: texto 1–5; respiro 6; imagem 7–12; min-height 760px; `margin-top: -72px`; `padding-top: calc(72px + space-8)`.
- 1280–1439: mesmo span; min-height 720px; `margin-top: -72px`; `padding-top: calc(72px + space-8)`.
- 1024–1279: texto 1–5; respiro 6; imagem 7–12; min-height 680px; gap `space-7`; `margin-top: -64px`; `padding-top: calc(64px + space-8)`.
- 768–1023: 1 coluna; `margin-top: -64px`; `padding-top: calc(64px + space-7)`.
- <768: 1 coluna; `margin-top: -64px`; `padding-top: calc(64px + space-7)`.
- Image 4:5.
- Overlaps somente `>=1024px`; abaixo disso, auxiliares entram no fluxo.
- Floating profile em >=1024: top `space-5`, right `-space-4`.
- Floating approach em >=1024: bottom `space-5`, left `-space-5`.

### Identity Strip

- Desktop: 4 itens × 3 colunas.
- Min-height 88px.
- Padding block `space-5`.
- Sem overlap.

### About

- Desktop: image 1–5; respiro 6; content 7–12.
- Image 3:4.
- Cards dentro do content: 2 colunas.
- Section padding `space-10`.

### Therapy Relevance

- Header até `62ch`.
- Cards: 1–4, 5–8, 9–12.
- Gap `space-5`.
- Section padding `space-10`.

### Individual Psychotherapy

- `>=1280px`: image 1–7; content 8–12.
- `1024–1279px`: image 1–6; content 7–12.
- `<1024px`: 1 coluna.
- Image 16:9.
- Floating info dentro da imagem, bottom/left `space-5` somente em `>=1024px`; abaixo disso entra no fluxo.
- Section padding `space-10`.

### Approach

- Desktop: intro 1–5; respiro 6; card region 7–12.
- Card region: 2-column internal grid.
- Card 1 spans both columns; card 2 and 3 split equally.
- Gap `space-4`.
- Section padding `space-10`.

### Process

- Header até `62ch`.
- Cards: 3 × 4 colunas.
- Gap `space-5`.
- Section padding `space-10`.

### FAQ

- Intro 1–4; respiro 5; accordion 6–12.
- Accordion max-width 720px.
- Section padding `space-10`.

### Final CTA

- ≥1440: content 3–10.
- 1024–1439: content 2–11.
- Sem card.
- Section padding `space-10`.

### Footer

- Brand 1–5; nav 7–8; contact 10–12.
- Padding top `space-8`; bottom `space-7`.

---

## 22. Responsive Matrix

| Seção | ≥1440 | 1280–1439 | 1024–1279 | 768–1023 | 480–767 | <480 (390 ref.) |
|---|---|---|---|---|---|---|
| Header | 72px; brand + 7 links + CTA | 72px; brand + 7 links + CTA | 64px; hamburger + painel; sem links/CTA na barra | 64px; hamburger + painel | 64px; hamburger + painel | 64px; hamburger + painel; CTA do painel 100% |
| Hero | 12 col; 5 texto + 1 respiro + 6 imagem; cards absolutos; 760px; `mt -72`; `pt 72 + space-8` | mesma estrutura; 720px; `mt -72`; `pt 72 + space-8` | 12 col; 5 + 1 + 6; cards absolutos contidos; 680px; `mt -64`; `pt 64 + space-8` | 1 coluna; texto antes da foto; cards no fluxo; `mt -64`; `pt 64 + space-7` | 1 coluna; cards no fluxo; sem absolute/overlap; Identity/CTA preservam ordem | 1 coluna; todos auxiliares 100%; CTAs principais 100%; sem overlap |
| Identity Strip | 4×1 | 4×1 | 4×1 | 2×2 | 2×2 | 1 coluna; separadores horizontais |
| About | 5 image / 1 respiro / 6 content | igual | 5/1/6 | 1 coluna: texto → cards 2-col → foto | 1 coluna: texto → cards 1-col → foto; sem absolute | 1 coluna; cards 1-col; image 3:4; sem overlap |
| Therapy Relevance | 3 cards iguais | igual | 3 cards iguais | 2 col; terceiro card full-width | 1 col | 1 col |
| Psychotherapy | 7 image / 5 text; floating absoluto | 7 image / 5 text; floating absoluto | 6 image / 6 text; floating absoluto | 1 coluna: texto → info → foto → floating no fluxo | 1 coluna; cards 1-col; sem absolute | 1 coluna; cards 1-col; CTA 100%; sem overlap |
| Approach | intro 5 + respiro + cards 6 | igual | intro 5 + respiro + cards 6 | intro full-width; card 1 full-width; cards 2 e 3 em 2 col | intro full; cards 1 col | todos os cards 1 col; sem overlap |
| Process | 3 cards em linha | igual | 3 cards em linha | 2 col; terceiro card full-width | 1 col | 1 col |
| FAQ | intro 4 + accordion 7 | igual | intro 4 + accordion 7 | 1 coluna; intro antes do accordion | 1 coluna | 1 coluna |
| Final CTA | bloco cols 3–10; Primary dark | cols 2–11; Primary dark | cols 2–11; Primary dark | full-width dentro do grid; texto left | full-width; CTA auto | full-width; CTA 100% |
| Footer | 3 blocos no grid | igual | 3 blocos no grid | 2 col: brand full + nav/contact | 1 col | 1 col |

### Regras adicionais de breakpoint

- Header possui exatamente dois modos: `>=1280px` desktop completo e `<1280px` hamburger/painel.
- `768–1023px`: Hero, About, Psychotherapy e FAQ = 1 coluna; Therapy Relevance e Process = 2 colunas com terceiro item full-width; Approach = intro full-width + card 1 full-width + cards 2/3 em 2 colunas.
- `480–767px`: todos os cards de conteúdo = 1 coluna; Identity Strip = 2×2; Hero, About e Psychotherapy = 1 coluna; nenhum elemento absoluto.
- `<480px`: todos os cards = 1 coluna; Identity Strip = 1 coluna; principais CTAs = `width: 100%`; nenhum overlap.
- Floating cards nunca usam `absolute` abaixo de 1024px nesta Home.
- Nenhuma imagem recebe `display: none` para simplificar mobile.
- Section padding mobile = `var(--space-7)` salvo Header/Identity Strip/Footer, que possuem especificação própria.
- Não criar breakpoint intermediário nem condicionar layout a avaliação subjetiva de encaixe, conforto ou densidade durante a implementação.

---

## 23. Photography Shot List

Todas as fotografias seguem o §15 do Design System: temperatura quente, luz natural, sombras suaves, baixa saturação, textura real, nada hospitalar e nenhuma dramatização de sofrimento.

### JP-HERO-01

- **seção:** Hero
- **orientação:** vertical
- **aspect-ratio:** 4:5
- **sujeito:** Janyne, retrato profissional natural
- **enquadramento:** plano médio / meio corpo; postura relaxada; olhar fora da câmera ou expressão neutra/natural
- **negative space:** moderado nas bordas superior e laterais para acomodar floating cards sem cobrir rosto
- **iluminação:** janela/luz lateral suave
- **temperatura:** warm +5 a +10 dentro da linguagem do Design System
- **uso:** imagem principal do Hero
- **object-position esperado:** `center 35%`, ajustar após foto real
- **o que evitar:** sorriso publicitário, jaleco, pose de coach, fundo clínico branco, mão no queixo, objeto de cérebro, paciente em cena

### JP-ABOUT-02

- **seção:** About
- **orientação:** vertical
- **aspect-ratio:** 3:4
- **sujeito:** Janyne em ambiente profissional/humano
- **enquadramento:** 3/4 de corpo ou plano médio mais aberto; contexto de espaço visível
- **negative space:** pequeno a moderado; imagem não recebe texto sobreposto
- **iluminação:** natural difusa; materiais quentes no ambiente
- **temperatura:** warm +5 a +10
- **uso:** humanização e percurso
- **object-position esperado:** `center center` ou leve deslocamento conforme direção do olhar
- **o que evitar:** fotografia igual ao Hero, certificado falso, estante excessivamente cenográfica, pose frontal corporativa rígida

### JP-PSYCH-03

- **seção:** Individual Psychotherapy
- **orientação:** horizontal
- **aspect-ratio:** 16:9
- **sujeito:** ambiente silencioso de trabalho/escuta ou Janyne em contexto profissional sem paciente identificável
- **enquadramento:** composição ambiental; cadeira, luz, materiais naturais, mesa ou detalhe espacial podem participar
- **negative space:** reservar área inferior/esquerda sem rosto para o `card-floating`
- **iluminação:** natural, suave, fim de tarde ou janela lateral
- **temperatura:** quente, baixa saturação
- **uso:** grande imagem de serviço
- **object-position esperado:** `center center`; se Janyne estiver no quadro, mantê-la fora da área do floating card
- **o que evitar:** duas pessoas encenando terapia, mãos dadas, pessoa chorando, clipboard clínico, divã estereotipado, computador com dados visíveis

### JP-DETAIL-04 — opcional

- **seção:** uso futuro em detalhe editorial; não obrigatório na V1 da Home
- **orientação:** quadrada ou horizontal
- **aspect-ratio:** 1:1 ou 16:9
- **sujeito:** detalhe real do ambiente, textura, caderno fechado, cerâmica, tecido, luz, arquitetura
- **enquadramento:** close ambiental com composição simples
- **negative space:** livre
- **iluminação:** natural
- **temperatura:** quente
- **uso:** somente se uma composição futura justificar; não inserir para preencher espaço
- **object-position esperado:** definido pelo asset
- **o que evitar:** stock genérico de “saúde mental”, textos legíveis em caderno, objetos esotéricos, cérebro, quebra-cabeça

### Regras de tratamento

- Saturation: −10% a −20%.
- Contraste levemente reduzido.
- Grain opcional ≤3%.
- Não modificar características pessoais de Janyne.
- Não gerar paciente fictício para sugerir atendimento real.
- Alt text descreve conteúdo e função, não estética nem palavras-chave forçadas.

---

## 24. Motion & UX

### Global

- `--duration-fast`: hover/underline/nav link.
- `--duration-normal`: navbar state, accordion, focus-adjacent transitions.
- `--duration-slow`: image scale máximo 1.02 quando existir interação justificável.
- Easing: somente tokens do Design System.
- Reveal permitido: opacity + translate ≤8px.
- Nenhum loop, parallax, bounce ou contador animado.
- `prefers-reduced-motion: reduce` remove reveal, transform e transições não essenciais.

### Header

- Transição transparente → `--surface-nav-scrolled` em `duration-normal`.
- Underline de nav em `duration-fast`.
- Mobile menu: fade/translate curto; sem slide exagerado.

### Hero

- Conteúdo pode revelar uma única vez em sequência discreta: eyebrow/H1/body/CTA com diferença mínima de timing; não atrasar acesso ao conteúdo.
- Imagem pode usar fade + translate ≤8px.
- Floating cards não flutuam continuamente e não têm parallax.

### About / Psychotherapy

- Imagens não recebem zoom automático.
- Se forem links no futuro, zoom hover máximo 1.02; atualmente são estáticas e não devem sugerir clique.

### Cards

- Cards não clicáveis não recebem cursor pointer.
- A elevação prevista pelas variantes do Design System pode ser usada de forma sutil, mas não deve ser o único sinal de ação porque os cards desta Home são majoritariamente informativos.
- Nenhum card gira, desliza ou expande em hover.

### FAQ

- Chevron rotaciona em `duration-normal`.
- Painel pode usar transição de altura/opacidade desde que o conteúdo continue acessível e reduced motion tenha fallback instantâneo.

### Links e CTA

- Hover sempre combina cor/underline/border conforme Design System.
- Todo CTA que navega usa `<a>` mesmo quando recebe o tratamento visual `Button`.
- Aplicação obrigatória: Hero `Conheça o atendimento`, Hero/qualquer WhatsApp, Header CTA, Psychotherapy CTA e Final CTA.
- Implementação permitida: `Button asChild`/anchor equivalente; a semântica final continua `<a>`.
- `<button>` somente para ações locais como menu e Accordion.

---

## 25. Accessibility

### Canvas e tokens

| Contexto | Texto principal | Texto secundário | Focus | Accent permitido |
|---|---|---|---|---|
| Alabaster / light | `--text-primary` | `--text-secondary` / `--text-muted` | `--focus-ring-light` | Rose Clay apenas decorativo |
| Muted Linen / secondary | `--text-primary` | `--text-secondary` | `--focus-ring-light` | Rose Clay apenas decorativo |
| Obsidian / dark | `--text-inverse` | `--text-inverse` quando texto pequeno | `--focus-ring-dark` | Rose Clay em underline/border/detalhe, não texto normal |

### Regras obrigatórias

- Único H1 no Hero.
- Ordem de headings sem saltos artificiais.
- Touch targets ≥44×44px.
- Rose Clay nunca como texto pequeno.
- Earthen Umber nunca como caption/eyebrow pequeno sobre Alabaster.
- Floating cards no mobile entram no DOM visualmente na mesma sequência em que são lidos.
- Foco nunca removido sem substituição.
- Links precisam ser distinguíveis por underline/estrutura, não só cor.
- Menu mobile com foco gerenciado e Escape.
- Accordion operável por teclado.
- Nenhuma informação crítica depende de hover.
- Nenhum conteúdo essencial nasce com `aria-hidden`.
- Ícones decorativos `aria-hidden="true"`; ícones funcionais recebem label pelo controle pai.
- Imagens de Janyne: alt objetivo, por exemplo `Janyne Porfirio em ambiente profissional`, evitando “psicóloga acolhedora e transformadora”.
- Imagem puramente ambiental sem função informativa pode usar `alt=""`.
- Reduced motion integral conforme Design System.

### Contraste relevante

- Alabaster/Obsidian: 10.59:1.
- Alabaster/Dark Stone: 6.71:1.
- Primary / light canvas: Dark Stone + Alabaster = 6.71:1 para texto.
- Dark Stone sobre Obsidian = 1.58:1 entre superfície do controle e canvas; portanto proibido como Primary sobre dark canvas.
- Primary / dark canvas: Alabaster + Obsidian = 10.59:1; hover Muted Linen + Obsidian = 8.06:1.
- Secondary / dark canvas: texto/border Alabaster sobre Obsidian = 10.59:1; hover/active mantêm contraste contextual do Design System.
- Não validar Rose Clay como texto por aparência; ele permanece accent.

---

## 26. Semantic HTML

Estrutura recomendada:

```text
<body>
  <header>
    <nav />
  </header>
  <main>
    <section id="inicio" />
    <section aria-label="Identidade profissional" />
    <section id="sobre" aria-labelledby="about-heading" />
    <section aria-labelledby="relevance-heading" />
    <section id="psicoterapia" aria-labelledby="psychotherapy-heading" />
    <section id="abordagem" aria-labelledby="approach-heading" />
    <section id="como-funciona" aria-labelledby="process-heading" />
    <section id="faq" aria-labelledby="faq-heading" />
    <section id="contato" aria-labelledby="contact-heading" />
  </main>
  <footer />
</body>
```

### Heading hierarchy

- Hero: `<h1>`.
- About, Therapy Relevance, Psychotherapy, Approach, Process, FAQ e Final CTA: `<h2>`.
- Card titles: `<h3>` apenas quando pertencem à hierarquia da seção; pequenos labels sem estrutura própria podem ser `<p>`/`span`.
- Footer brand não precisa ser heading se não introduzir conteúdo hierárquico.

### Links vs buttons

`Button` é um **tratamento visual**, não uma obrigação semântica de usar `<button>`. Quando houver navegação, renderizar `<a>` diretamente ou via `asChild`/anchor equivalente.

Usar `<a>` obrigatoriamente para:

- Hero `Conheça o atendimento` → `#psicoterapia`;
- qualquer CTA de WhatsApp, inclusive `Falar com Janyne`;
- Header CTA;
- Psychotherapy CTA;
- Final CTA;
- navegação por âncora;
- Instagram;
- email;
- páginas legais.

Usar `<button>` somente para ações locais sem navegação:

- abrir/fechar menu mobile;
- accordion.

Não renderizar CTA de navegação como `<button>` com `onClick` para simular link.

### Landmarks

- um `<main>` por página;
- `<nav>` com label;
- `<footer>` único;
- não criar `<section>` sem heading/aria-label quando uma `<div>` for semanticamente mais correta.

### Alt text strategy

- Descrever pessoa/ambiente de forma literal.
- Não inserir keyword stuffing.
- Não descrever cores/estilo quando isso não é relevante.
- Floating card não repete no alt da imagem dados que já estão em texto DOM.

---

## 27. Pending Content

Itens que devem permanecer rastreáveis até o briefing final:

| Item | Status | Onde impacta |
|---|---|---|
| CRP | AGUARDANDO CLIENTE | Hero floating card, Footer |
| Público prioritário | AGUARDANDO CLIENTE | Copy geral, SEO futuro, Therapy Relevance |
| Demandas clínicas | AGUARDANDO CLIENTE | 3 cards de Therapy Relevance |
| WhatsApp | AGUARDANDO CLIENTE | Header CTA, Hero link, Psychotherapy CTA, Final CTA, Footer |
| Email | AGUARDANDO CLIENTE | Footer |
| Instagram | AGUARDANDO CLIENTE | Footer |
| Localidade/endereço presencial | AGUARDANDO CLIENTE | Footer e futura informação presencial |
| Horários | AGUARDANDO CLIENTE | FAQ/futuro contato |
| Valor | AGUARDANDO CLIENTE | Não aparece nesta Home enquanto não houver decisão editorial |
| Duração da sessão | AGUARDANDO CLIENTE | FAQ |
| Como funciona o agendamento | AGUARDANDO CLIENTE | FAQ |
| Especializações/títulos | AGUARDANDO CLIENTE | About |
| Fotografias reais | AGUARDANDO PRODUÇÃO/SELEÇÃO | Hero, About, Psychotherapy |
| Política de Privacidade | AGUARDANDO CRIAÇÃO | Footer |
| Termos | AGUARDANDO DECISÃO | Footer |

### Conteúdo que não depende de confirmação adicional para existir estruturalmente

- nome;
- profissão;
- Psicologia Clínica;
- abordagem Fenomenológico-Existencial;
- atendimento principal online;
- possibilidade de presencial mediante disponibilidade/alinhamento;
- processo em três etapas como estrutura de UX, com copy ainda provisória.

Antes da publicação, nenhum placeholder `[... A CONFIRMAR]` pode ficar visível ao visitante. Se o dado não chegar, remover a linha/campo correspondente preservando a composição.

---

## 28. Implementation Rules

1. **Confirmed Client Data** é soberano para fatos profissionais e dados da cliente.
2. `design-system.md` é soberano para tokens, componentes e regras visuais.
3. `home-spec.md` é soberano para composição e responsividade específica da Home.
4. Blueprint MindTalk é apenas referência estrutural histórica e nunca prevalece sobre os três domínios acima.
5. Não reinterpretar a composição; qualquer divergência técnica deve ser documentada antes da implementação.
6. Não criar nova cor.
7. Não criar nova variante de card.
8. Não criar spacing arbitrário.
9. Não criar tipografia arbitrária.
10. Não introduzir gradientes.
11. Não utilizar biblioteca de ícones diferente de Lucide.
12. Não criar conteúdo profissional não confirmado.
13. Não inventar CRP.
14. Não inventar endereço/localidade presencial.
15. Não inventar especialização ou título acadêmico.
16. Não inventar demanda clínica.
17. Não criar depoimentos, reviews ou testemunhos.
18. Não criar estatísticas, contadores ou claims de resultado.
19. Mobile deve seguir esta especificação; não apenas empilhar automaticamente tudo sem respeitar ordem e relações.
20. Floating elements seguem exatamente os breakpoints definidos nesta spec.
21. Qualquer divergência técnica necessária deve ser documentada antes da implementação.
22. Não usar HEX hardcoded dentro de componentes.
23. Não acessar tokens primitivos/derivados quando existir token semântico (`--accent-surface-soft`, `--overlay-image-soft`, etc.).
24. Tipografia usa recipes `type-*`; não montar tamanho/leading/weight à mão.
25. Hero mobile mantém texto antes da fotografia.
26. Rose Clay permanece accent; não vira background de CTA nem texto pequeno.
27. Earthen Umber não é default de caption, label ou eyebrow pequeno.
28. Dark canvas usa `--focus-ring-dark`; light/secondary usa `--focus-ring-light`.
29. `surface-elevated` não vira branco puro.
30. Não reproduzir stats row do MindTalk.
31. Não reproduzir review/rating card do MindTalk.
32. Não criar logos falsos no Professional Identity Strip.
33. Não usar fotografia encenada de terapia para substituir ausência de imagem real.
34. Imagens não podem alterar a ordem semântica no mobile.
35. Não ocultar conteúdo crítico para resolver responsividade.
36. Não criar breakpoints arbitrários fora da matriz sem registrar a justificativa.
37. Tailwind v3/v4 apenas consome as CSS variables do Design System.
38. URLs ainda não confirmadas permanecem parametrizadas/placeholder de implementação e não recebem destinos fictícios em produção.
39. Copy de trabalho pode ser atualizada após briefing sem redesenhar grid/canvas, desde que densidade textual permaneça equivalente.
40. Header: `>=1280px` desktop completo; `<1280px` hamburger/painel, sem breakpoint intermediário.
41. Primary e Secondary são os mesmos componentes com tratamento contextual light/dark; não criar variantes inverse.
42. Todo CTA que navega renderiza como `<a>`/`asChild`; `<button>` somente para ações locais.
43. Regras responsivas são determinísticas conforme §22; a implementação não pode decidir layout por julgamento subjetivo de encaixe, conforto ou densidade.
---

## 29. Home QA Checklist

### Estrutura e narrativa

- [ ] ordem das seções corresponde exatamente à §6?
- [ ] mapa de canvas da §7 foi respeitado?
- [ ] Psicoterapia e Abordagem permanecem seções independentes e consecutivas?
- [ ] H1 é único e está no Hero?
- [ ] headings seguem sequência semântica?
- [ ] nenhum bloco do MindTalk foi copiado literalmente?
- [ ] nenhum stats row, logo strip comercial ou rating card foi reintroduzido?

### Tokens e componentes

- [ ] nenhum HEX hardcoded em componente?
- [ ] nenhum token primitivo/derivado usado quando existe equivalente semântico?
- [ ] nenhum novo card foi inventado?
- [ ] nenhum spacing fora de `--space-1`–`--space-11`?
- [ ] tipografia usa recipes `type-*`?
- [ ] nenhum `text-[...]`, `leading-[...]`, weight ou tracking arbitrário?
- [ ] radius e shadows pertencem ao Design System?
- [ ] ícones são exclusivamente Lucide outline, stroke 1.5?
- [ ] Rose Clay continua somente accent?
- [ ] Earthen Umber não está sendo usado automaticamente como texto pequeno?

### Hero

- [ ] grid 5 + 1 respiro + 6 foi respeitado em desktop large?
- [ ] H1 max-width 17ch?
- [ ] body max-width 52ch?
- [ ] imagem 4:5?
- [ ] floating profile não cobre rosto?
- [ ] floating approach não sai do container visual?
- [ ] floating cards funcionam em 1440?
- [ ] floating cards funcionam em 1280?
- [ ] floating cards continuam contidos em 1024?
- [ ] em 768 deixam `absolute` e entram no fluxo?
- [ ] ordem mobile é eyebrow → H1 → body → CTA → foto → auxiliares?
- [ ] CTA principal do Hero usa `Primary / dark canvas` e CTA WhatsApp usa `Secondary / dark canvas`, ambos como `<a>`?
- [ ] nenhum HeadingHighlight incompatível foi usado no Hero dark?

### Grid / responsive

- [ ] spans de desktop de cada seção correspondem à §21?
- [ ] matrix de 1440 foi validada?
- [ ] matrix de 1280 foi validada?
- [ ] matrix de 1024 foi validada?
- [ ] matrix de 768 foi validada?
- [ ] matrix de 480 foi validada?
- [ ] matrix de 390 foi validada?
- [ ] em 768–1023: Hero/About/Psychotherapy/FAQ são 1 coluna; Relevance/Process são 2 + terceiro full; Approach segue 1 full + 2 col?
- [ ] em 480–767: cards são 1 coluna, Identity Strip 2×2 e não existem elementos absolutos?
- [ ] em <480: cards e Identity Strip são 1 coluna, CTAs principais 100% e não existe overlap?
- [ ] Psychotherapy é 7/5 em >=1280, 6/6 em 1024–1279 e 1 coluna abaixo de 1024?
- [ ] não existem regras responsivas condicionadas a julgamento subjetivo de encaixe, conforto ou densidade?
- [ ] grids assimétricos viram fluxo vertical com texto antes da imagem quando a matriz determina 1 coluna?
- [ ] nenhum conteúdo crítico foi ocultado no mobile?
- [ ] cards não causam overflow horizontal?
- [ ] CTA de 390px mantém touch target e largura confortável?

### Canvas / contraste

- [ ] Hero, Approach, Final CTA e Footer mantêm dark canvas onde especificado?
- [ ] Therapy Relevance e FAQ usam secondary canvas?
- [ ] contraste AA de texto normal foi validado?
- [ ] Primary / light canvas usa Dark Stone + Alabaster?
- [ ] Primary / dark canvas usa Alabaster + Obsidian e nunca Dark Stone sobre Obsidian (1.58:1)?
- [ ] Secondary / light canvas usa texto/border escuros; Secondary / dark usa texto/border Alabaster?
- [ ] focus-visible light usa `--focus-ring-light`?
- [ ] focus-visible dark usa `--focus-ring-dark`?
- [ ] Rose Clay não é texto normal/pequeno?

### Photography

- [ ] Hero usa JP-HERO-01 4:5 ou asset compatível?
- [ ] About usa 3:4?
- [ ] Psychotherapy usa 16:9?
- [ ] object-position foi validado com o asset real?
- [ ] floating card não cobre rosto ou informação essencial?
- [ ] fotos seguem temperatura/saturação do Design System?
- [ ] não há banco de imagens clínico genérico?
- [ ] não há cliente fictício encenando terapia?
- [ ] alt text é factual e não promocional?

### UX e acessibilidade

- [ ] navbar sticky funciona?
- [ ] `>=1280px` mostra nav completa e `<1280px` mostra apenas hamburger/painel?
- [ ] em 1024px os sete links + CTA não permanecem na barra?
- [ ] Hero aplica `margin-top: -72px` em desktop e `-64px` abaixo de 1280, com `padding-top` compensatório?
- [ ] Header mantém `z-index: 50` acima do Hero?
- [ ] estado transparente → scrolled usa os tokens corretos e o Secondary troca dark → light treatment?
- [ ] active link usa texto acessível + underline accent?
- [ ] menu mobile abre/fecha por teclado?
- [ ] Escape fecha menu mobile?
- [ ] foco retorna ao trigger após fechar menu?
- [ ] keyboard navigation funciona em toda a Home?
- [ ] touch targets ≥44×44px?
- [ ] FAQ funciona com Enter/Space?
- [ ] `aria-expanded` do Accordion está correto?
- [ ] reduced-motion elimina transforms/reveals não essenciais?
- [ ] conteúdo crítico não depende de hover?
- [ ] Hero `Conheça o atendimento`, WhatsApp, Header CTA, Psychotherapy CTA e Final CTA são `<a>`/`asChild`, não `<button>`?
- [ ] `<button>` está restrito a ações locais como menu e Accordion?

### Conteúdo

- [ ] nenhum CRP foi inventado?
- [ ] nenhuma demanda clínica foi inventada?
- [ ] nenhum endereço foi inventado?
- [ ] nenhuma especialização/título foi inventado?
- [ ] nenhum valor, horário ou duração foi inventado?
- [ ] nenhum depoimento ou estatística foi criado?
- [ ] nenhum claim de cura/resultado foi criado?
- [ ] placeholders pendentes continuam rastreáveis no código/dados até confirmação?
- [ ] nenhum placeholder é exibido na versão publicada?
- [ ] WhatsApp CTA está preparado para receber a URL definitiva sem alterar layout?

### Validação final antes de implementar/publicar

- [ ] comparar implementação com `design-system.md`?
- [ ] comparar implementação com este `home-spec.md`?
- [ ] blueprint foi usado apenas para contexto estrutural?
- [ ] não existem tokens mencionados que não estejam definidos no Design System?
- [ ] não existem componentes/card variants inexistentes?
- [ ] não existem regras desktop/mobile contraditórias?
- [ ] não existe dependência exagerada de `position: absolute`?
- [ ] Home continua parecendo desenhada para Janyne, não uma troca de conteúdo do MindTalk?

---

**Status deste documento:** arquitetura pronta para implementação; copy de trabalho sujeita à confirmação da cliente nos pontos marcados.
