# Janyne Porfirio — Design System

> Fonte de verdade visual e técnica para implementação em Next.js + TypeScript + Tailwind CSS.
> Estrutura herdada do blueprint MindTalk (grid, ritmo, componentes). Identidade cromática e tipográfica é própria e não deve remeter ao template original.
> **Autoridade por domínio:** dados confirmados da cliente são soberanos para fatos; este `design-system.md` é soberano para tokens, componentes e regras visuais; `home-spec.md` é soberano para composição específica da Home; o Blueprint MindTalk é apenas referência estrutural histórica e nunca prevalece sobre os três domínios anteriores.

---

## 1. Design Principles

1. **Presença antes de decoração.** Cada elemento existe para dar espaço à leitura e à escuta, não para chamar atenção sobre si mesmo.
2. **Silêncio visual.** Muito espaço em branco (Alabaster), pouca cor, pouco movimento.
3. **Contemporâneo, não corporativo.** Tipografia sans-serif leve guia a hierarquia — não ícones grandes, não gradientes.
4. **Rose Clay é tempero, não prato principal.** Cor de destaque usada com escassez deliberada.
5. **Consistência absoluta via tokens.** Nenhum valor solto: toda cor, espaçamento, raio e sombra vem de um token nomeado.
6. **Acessível por padrão**, nunca como reparo posterior.

## 2. Brand Personality

| Transmitir | Evitar |
|---|---|
| Presença, escuta, profundidade | Estética hospitalar / clínica fria |
| Acolhimento, singularidade | Infantil, wellness genérico |
| Serenidade, maturidade | Romântico, esotérico |
| Confiança, proximidade humana | Cores vibrantes/saturadas |
| Profissionalismo, sofisticação discreta | "Terapia de banco de imagens" |

Tom de voz visual: profissional contemporânea, humana, madura — como um consultório bem iluminado numa tarde de fim de dia, não como um app de bem-estar.

---

## 3. Color Foundation

Paleta oficial — **hex fixos, não alterar**:

| Nome | Hex | Papel emocional |
|---|---|---|
| Alabaster | `#F4EFE8` | Canvas silencioso, base de leitura |
| Muted Linen | `#D8D2C8` | Presença suave, superfícies intermediárias |
| Rose Clay | `#B58E84` | Conexão humana, destaque editorial e detalhe gráfico |
| Earthen Umber | `#8D6F66` | Profundidade emocional, accent editorial secundário |
| Dark Stone | `#5C514C` | Seriedade, força tranquila |
| Obsidian | `#393534` | Âncora, fundo escuro principal |

**Tons derivados** (apenas para estados técnicos — documentados aqui, nunca inventados ad-hoc):

| Token derivado | Base | Hex aproximado | Uso |
|---|---|---|---|
| `rose-clay-hover` | Rose Clay −8% luminosidade | `#A47F74` | estado de accent decorativo, quando necessário |
| `rose-clay-active` | Rose Clay −16% luminosidade | `#93705F` | estado pressed de accent decorativo, quando necessário |
| `rose-clay-10` | Rose Clay a 10% opacidade sobre Alabaster | `rgba(181,142,132,0.10)` | background sutil, highlight editorial |
| `rose-clay-20` | Rose Clay a 20% opacidade | `rgba(181,142,132,0.20)` | border/underline de destaque |
| `obsidian-90` | Obsidian a 90% opacidade | `rgba(57,53,52,0.90)` | overlay de foto no hero |
| `obsidian-60` | Obsidian a 60% opacidade | `rgba(57,53,52,0.60)` | overlay leve |
| `dark-stone-hover` | Dark Stone +6% luminosidade | `#6B5F59` | hover sobre superfícies escuras quando o componente pedir clareamento |
| `dark-stone-active` | intermediário entre Dark Stone e Obsidian | `#4A4340` | active/pressed do botão Primary; contraste ≈ 8.47:1 com Alabaster |
| `alabaster-90` | Alabaster a 90% opacidade | `rgba(244,239,232,0.90)` | navbar sticky sobre foto |

**Surface Elevated:** não existe uma nova cor para elevação. `--surface-elevated` reutiliza Alabaster; diferenciação vem de `border` + `shadow`. Isso mantém a paleta fechada e evita introduzir branco puro.

---


## 4. Semantic Color Tokens

Componentes **nunca** referenciam `roseClay`, `earthenUmber`, `darkStone` ou HEX diretamente para decisões de interface — usam os tokens semânticos abaixo.

```css
--background-primary: var(--alabaster);         /* fundo padrão de página/seções claras */
--background-secondary: var(--muted-linen);     /* seções levemente destacadas dentro do light canvas */
--background-dark: var(--obsidian);             /* seções escuras editoriais (Warm Dark Canvas) */

--surface-primary: var(--alabaster);            /* cards sobre fundo claro */
--surface-secondary: var(--muted-linen);        /* cards secundários / inputs */
--surface-elevated: var(--alabaster);           /* elevação vem de border + shadow, sem branco puro */
--surface-dark: var(--dark-stone);              /* cards sobre fundo escuro */
--surface-nav-scrolled: var(--alabaster-90);    /* navbar sticky translúcida sobre conteúdo/foto */

--text-primary: var(--obsidian);                /* corpo de texto e headings sobre fundo claro */
--text-secondary: var(--dark-stone);            /* texto de apoio, captions, labels e eyebrow sobre claro */
--text-muted: var(--dark-stone);                /* textos pequenos precisam permanecer AA */
--text-inverse: var(--alabaster);               /* texto sobre fundo escuro */

--accent-primary: var(--rose-clay);             /* detalhe gráfico: underline, marker, accent decorativo */
--accent-secondary: var(--earthen-umber);       /* accent editorial secundário; não é default para texto pequeno */
--accent-surface-soft: var(--rose-clay-10);     /* superfície translúcida de highlight/ícone/badge */
--accent-border-soft: var(--rose-clay-20);      /* border/linha suave de accent */

--overlay-image-soft: var(--obsidian-60);       /* overlay fotográfico leve */
--overlay-image-strong: var(--obsidian-90);     /* overlay fotográfico forte para sustentar contraste */

--border-subtle: rgba(57,53,52,0.08);           /* divisores discretos sobre claro */
--border-default: rgba(57,53,52,0.16);          /* cards, inputs */
--border-strong: var(--dark-stone);             /* ênfase */
--border-subtle-dark: rgba(244,239,232,0.08);
--border-default-dark: rgba(244,239,232,0.14);
--border-strong-dark: rgba(244,239,232,0.22);

/* Primary — light canvas (aliases padrão preservados) */
--interactive-primary: var(--dark-stone);
--interactive-primary-hover: var(--obsidian);
--interactive-primary-active: var(--dark-stone-active);
--interactive-primary-text: var(--alabaster);
--interactive-primary-disabled: rgba(92,81,76,0.40);

/* Primary — dark canvas: mesmo componente, tratamento contextual */
--interactive-primary-dark: var(--surface-primary);
--interactive-primary-dark-hover: var(--surface-secondary);
--interactive-primary-dark-active: var(--surface-secondary);
--interactive-primary-dark-text: var(--text-primary);

/* Secondary — tratamentos contextuais do mesmo componente */
--interactive-secondary-light-text: var(--text-primary);
--interactive-secondary-light-border: var(--border-strong);
--interactive-secondary-light-hover: var(--surface-secondary);
--interactive-secondary-light-active: var(--surface-secondary);
--interactive-secondary-dark-text: var(--text-inverse);
--interactive-secondary-dark-border: var(--text-inverse);
--interactive-secondary-dark-hover: var(--border-subtle-dark);
--interactive-secondary-dark-active: var(--border-default-dark);

--focus-ring-light: var(--dark-stone);          /* superfícies claras: ≈ 6.71:1 sobre Alabaster */
--focus-ring-dark: var(--alabaster);            /* superfícies escuras: ≈ 10.59:1 sobre Obsidian */
--focus-ring: var(--focus-ring-light);          /* alias default apenas para light canvas */

--status-error: #B3413A;                        /* cor funcional restrita a erro; nunca decorativa */
```

**Função de cada token, em uma linha:**
- `background-*` — cor de fundo de página/seção inteira.
- `surface-*` — cor de fundo de um componente contido (card, input).
- `text-*` — hierarquia de leitura; tokens destinados a texto pequeno precisam atingir AA no canvas previsto.
- `accent-*` — sinalização gráfica/editorial; `accent-surface-soft` e `accent-border-soft` encapsulam os derivados Rose Clay para que componentes não conheçam tokens físicos.
- `overlay-*` — overlays fotográficos semânticos; componentes nunca referenciam `obsidian-*` diretamente.
- `border-*` — separação visual, do mais discreto ao mais enfático.
- `interactive-*` — estados contextuais de elementos clicáveis; `Primary` e `Secondary` continuam sendo os mesmos componentes, com tratamento `light canvas` ou `dark canvas` conforme a superfície.
- `focus-ring-light` / `focus-ring-dark` — indicadores de foco escolhidos pelo canvas; o alias `--focus-ring` existe somente como default de superfície clara.
- `status-*` — estados funcionais restritos (erro/sucesso), não entram na paleta decorativa.

---


## 5. Color Usage

Proporção-alvo na interface (ajustada da recomendação genérica para reforçar que Rose Clay é escasso):

- **55–60%** Alabaster / Muted Linen (light canvas)
- **18–22%** Obsidian / Dark Stone (warm dark canvas, seções editoriais e interações principais)
- **12–15%** Muted Linen como superfície intermediária; Earthen Umber apenas como accent editorial secundário
- **5–8%** Rose Clay (underline, marker, ícones decorativos, pequenos backgrounds translúcidos, detalhes de border) — **nunca** como cor de fundo de seção inteira nem como background padrão do botão Primary

**Regra dura:** Rose Clay é accent, não superfície interativa principal. Não usar Rose Clay como texto pequeno sobre Alabaster, como texto normal sobre Obsidian ou como preenchimento do botão Primary. Se o design pedir "mais cor", a resposta é mais Dark Stone/Obsidian, não mais Rose Clay.

Earthen Umber não é token automático de captions, labels ou helper text. Em texto, só pode ser utilizado quando tamanho/peso/superfície produzirem contraste compatível com WCAG; em 12–13px sobre Alabaster, usar `--text-secondary`/`--text-muted` (Dark Stone).

O site precisa permanecer legível e sofisticado em escala de cinza — teste: remover toda cor e restar apenas formas e contraste ainda deve parecer intencional.

**Responsabilidade de canvas:** §4–§5 definem **como** os canvases claro, secundário e escuro funcionam e quais tokens são válidos em cada contexto. A especificação de página (`home-spec.md`) define **qual canvas cada seção da Home recebe**. O Design System não deve duplicar o mapa de seções da Home.

---


## 6. Typography

Princípio: **Poppins leve para títulos e interface de destaque + Inter funcional para leitura longa**, sem excesso de personalidade em nenhuma das duas.

- **Display/Headings/UI:** `"Poppins", sans-serif` (Google Fonts) — sans-serif leve, limpa e contemporânea.
- **Sans funcional:** `"Inter", sans-serif` (Google Fonts) — neutra e legível para leitura longa.

```css
--font-display: "Poppins", Arial, sans-serif;
--font-sans: "Inter", -apple-system, sans-serif;
```

### Tokens tipográficos

| Token | Fonte | Tamanho (clamp) | Line-height | Weight | Letter-spacing | Uso |
|---|---|---|---|---|---|---|
| `display-xl` | Poppins | `clamp(2.75rem, 2.2rem + 2.2vw, 4rem)` | 1.05 | 300 | -0.025em | H1 de páginas âncora (raro) |
| `display-lg` | Poppins | `clamp(2.25rem, 1.9rem + 1.6vw, 3.25rem)` | 1.06 | 300 | -0.02em | H1 do hero |
| `heading-xl` | Poppins | `clamp(1.75rem, 1.5rem + 1vw, 2.25rem)` | 1.12 | 300 | -0.018em | H2 de seção |
| `heading-lg` | Poppins | `1.5rem` | 1.18 | 400 | -0.012em | H3, títulos de card destacado |
| `heading-md` | Poppins | `1.25rem` | 1.25 | 400 | -0.01em | títulos de card padrão |
| `heading-sm` | Poppins | `1.0625rem` | 1.35 | 500 | 0 | subtítulos de componente |
| `body-lg` | Inter | `1.0625rem` | 1.65 | 400 | 0 | parágrafo de hero/intro |
| `body-md` | Inter | `0.9375rem` | 1.6 | 400 | 0 | corpo padrão |
| `body-sm` | Inter | `0.8125rem` | 1.55 | 400 | 0 | legendas, notas |
| `eyebrow` | Poppins | `0.75rem` | 1.2 | 500 | 0.075em | rótulo acima de heading |
| `label` | Poppins | `0.8125rem` | 1.3 | 500 | 0 | labels de formulário |
| `caption` | Inter | `0.75rem` | 1.4 | 400 | 0 | metadados |
| `button` | Poppins | `0.875rem` | 1 | 500 | 0.01em | texto de botão |

`max-width` recomendado para blocos de texto: `heading-*` até `20ch`–`24ch`; `body-lg`/`body-md` até `62ch`.

### Contrato de implementação tipográfica

A tabela acima é normativa e possui equivalentes em CSS Variables (§22). Implementação **não** usa tamanhos arbitrários como `text-[37px]`, `leading-[1.13]` ou `font-[530]`. Cada composição tipográfica deve consumir um recipe semântico `type-*`.

```css
.type-display-xl { font-family: var(--font-display); font-size: var(--type-display-xl-size); line-height: var(--type-display-xl-line-height); font-weight: var(--type-display-xl-weight); letter-spacing: var(--type-display-xl-tracking); }
.type-display-lg { font-family: var(--font-display); font-size: var(--type-display-lg-size); line-height: var(--type-display-lg-line-height); font-weight: var(--type-display-lg-weight); letter-spacing: var(--type-display-lg-tracking); }
.type-heading-xl { font-family: var(--font-display); font-size: var(--type-heading-xl-size); line-height: var(--type-heading-xl-line-height); font-weight: var(--type-heading-xl-weight); letter-spacing: var(--type-heading-xl-tracking); }
.type-heading-lg { font-family: var(--font-display); font-size: var(--type-heading-lg-size); line-height: var(--type-heading-lg-line-height); font-weight: var(--type-heading-lg-weight); letter-spacing: var(--type-heading-lg-tracking); }
.type-heading-md { font-family: var(--font-display); font-size: var(--type-heading-md-size); line-height: var(--type-heading-md-line-height); font-weight: var(--type-heading-md-weight); letter-spacing: var(--type-heading-md-tracking); }
.type-heading-sm { font-family: var(--font-display); font-size: var(--type-heading-sm-size); line-height: var(--type-heading-sm-line-height); font-weight: var(--type-heading-sm-weight); letter-spacing: var(--type-heading-sm-tracking); }
.type-body-lg { font-family: var(--font-sans); font-size: var(--type-body-lg-size); line-height: var(--type-body-lg-line-height); font-weight: var(--type-body-lg-weight); letter-spacing: var(--type-body-lg-tracking); }
.type-body-md { font-family: var(--font-sans); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--type-body-md-weight); letter-spacing: var(--type-body-md-tracking); }
.type-body-sm { font-family: var(--font-sans); font-size: var(--type-body-sm-size); line-height: var(--type-body-sm-line-height); font-weight: var(--type-body-sm-weight); letter-spacing: var(--type-body-sm-tracking); }
.type-eyebrow { font-family: var(--font-display); font-size: var(--type-eyebrow-size); line-height: var(--type-eyebrow-line-height); font-weight: var(--type-eyebrow-weight); letter-spacing: var(--type-eyebrow-tracking); }
.type-label { font-family: var(--font-display); font-size: var(--type-label-size); line-height: var(--type-label-line-height); font-weight: var(--type-label-weight); letter-spacing: var(--type-label-tracking); }
.type-caption { font-family: var(--font-sans); font-size: var(--type-caption-size); line-height: var(--type-caption-line-height); font-weight: var(--type-caption-weight); letter-spacing: var(--type-caption-tracking); }
.type-button { font-family: var(--font-display); font-size: var(--type-button-size); line-height: var(--type-button-line-height); font-weight: var(--type-button-weight); letter-spacing: var(--type-button-tracking); }
```

**Regra para IA:** preferir a classe recipe completa (`type-display-lg`, `type-body-md`, etc.) a remontar a composição com utilities independentes. Se o framework exigir utilities, elas devem apontar para os mesmos `--type-*` tokens — nunca para números novos.

---

## 7. Layout & Grid

Ponto de partida do blueprint: viewport 1440px, container ~1200px, grid de 12 colunas.

| Breakpoint | Faixa | Max-width container | Padding inline | Colunas ativas | Gutter |
|---|---|---|---|---|---|
| Desktop large | ≥1440px | 1200px | `clamp(32px, 4vw, 64px)` | 12 | 24px |
| Desktop | 1280–1439px | 1140px | 40px | 12 | 24px |
| Laptop | 1024–1279px | `min(100% - 64px, 960px)` | 32px | 12 | 20px |
| Tablet | 768–1023px | 100% | 32px | 8 (grids assimétricos viram 1–2 col) | 16px |
| Mobile large | 480–767px | 100% | 24px | 4 | 16px |
| Mobile | <480px | 100% | 20px | 4 | 12px |

Os breakpoints acima definem **capacidade de grid**, não uma regra universal de colapso para todas as páginas. A especificação da página é soberana para a mudança estrutural de cada composição. Quando um grid texto+imagem colapsa, a ordem obrigatória é texto antes da imagem e nenhum conteúdo pode ser ocultado para resolver responsividade. Na Home, os colapsos e spans exatos são os definidos em `home-spec.md`.

Usar `clamp()`/`min()`/`max()` para valores contínuos (tipografia, padding) e media queries apenas nos breakpoints estruturais documentados; não criar breakpoints ad-hoc.

---

## 8. Spacing

Escala validada do blueprint (mantida — coerente e suficiente):

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 96px;
--space-11: 120px;
```

### Usos recomendados (obrigatórios — não usar valores fora da escala)

| Relação | Token |
|---|---|
| ícone → texto (inline) | `space-2` (8px) |
| eyebrow → heading | `space-3` (12px) |
| heading → body | `space-4` (16px) |
| body → CTA | `space-6` (32px) |
| card padding | `space-5` (24px) interno |
| gap entre cards de uma linha | `space-5` (24px) |
| grid gap (colunas do hero/about) | `space-7`–`space-8` (48–64px) |
| section padding-block (desktop) | `space-10` (96px) |
| section padding-block (mobile) | `space-7` (48px) |
| ritmo seção-a-seção (margem extra quando muda de canvas light↔dark) | `space-11` (120px) desktop / `space-8` (64px) mobile |

---

## 9. Radius

```css
--radius-sm: 6px;   /* inputs, badges pequenos */
--radius-md: 12px;  /* cards padrão */
--radius-lg: 20px;  /* imagens grandes, cards feature */
--radius-pill: 999px; /* botões, badges de status */
```

Reduzido em relação ao blueprint original (8/16/24) para evitar leitura "app SaaS" — o site deve parecer editorial, não friendly-tech. Nenhum elemento além de botões e badges pequenos usa `radius-pill`.

---

## 10. Shadows

Sombras quentes, nunca pretas puras.

```css
--shadow-xs: 0 1px 2px rgba(57,53,52,0.06);
--shadow-sm: 0 2px 8px rgba(57,53,52,0.08);
--shadow-md: 0 8px 24px rgba(57,53,52,0.10);
--shadow-floating: 0 16px 40px rgba(57,53,52,0.16);
```

Sobre fundo escuro (Obsidian/Dark Stone): **não usar box-shadow** — usar `border: 1px solid rgba(244,239,232,0.10)` para separar cards do fundo. Sombra sobre escuro fica "suja" e reduz a sofisticação.

---

## 11. Borders

```css
--border-subtle: rgba(57,53,52,0.08);   /* separadores editoriais em fundo claro */
--border-default: rgba(57,53,52,0.16);  /* cards claros, inputs */
--border-strong: var(--dark-stone);      /* ênfase pontual, nunca em massa */

--border-subtle-dark: rgba(244,239,232,0.08);
--border-default-dark: rgba(244,239,232,0.14);
--border-strong-dark: rgba(244,239,232,0.22);
```

- Cards claros: `1px solid var(--border-default)`.
- Cards escuros: `1px solid var(--border-default-dark)` (substitui shadow).
- Inputs: `1px solid var(--border-default)`, `focus: 1px solid var(--focus-ring-light)` + anel externo (ver §20).
- Navbar: sem borda até scroll; após scroll, `border-bottom: 1px solid var(--border-subtle)`.
- Floating elements: `1px solid var(--border-subtle)` + `shadow-floating`.
- Separadores editoriais (entre blocos de texto): linha fina `1px`, `var(--border-subtle)`, largura limitada (não full-bleed).
- Em canvas escuro, elementos focáveis usam `--focus-ring-dark`; não reutilizar Earthen Umber como indicador de foco no dark canvas.

---


## 12. Buttons

Touch target mínimo: **44×44px** em todas as variantes. `Primary` e `Secondary` são componentes únicos com tratamento contextual por canvas; **não** criar `ButtonInverse`, `PrimaryInverse`, `SecondaryInverse` ou variantes equivalentes.

| Variante / contexto | Altura | Padding-inline | Radius | Background | Texto / border | Hover | Active | Focus-visible |
|---|---|---|---|---|---|---|---|---|
| Primary / light canvas | 48px | 28px | `radius-pill` | `--interactive-primary` (Dark Stone) | texto `--interactive-primary-text` (Alabaster) | background `--interactive-primary-hover` (Obsidian) | background `--interactive-primary-active` | `2px var(--focus-ring-light)`, offset 2px |
| Primary / dark canvas | 48px | 28px | `radius-pill` | `--interactive-primary-dark` (Alabaster) | texto `--interactive-primary-dark-text` (Obsidian) | background `--interactive-primary-dark-hover` (Muted Linen) | background `--interactive-primary-dark-active`; feedback pressed pode usar `scale(0.98)` com token de motion | `2px var(--focus-ring-dark)`, offset 2px |
| Secondary / light canvas | 48px | 28px | `radius-pill` | transparente | texto `--interactive-secondary-light-text`; border `1px solid var(--interactive-secondary-light-border)` | background `--interactive-secondary-light-hover` | background `--interactive-secondary-light-active` | `2px var(--focus-ring-light)`, offset 2px |
| Secondary / dark canvas | 48px | 28px | `radius-pill` | transparente | texto `--interactive-secondary-dark-text`; border `1px solid var(--interactive-secondary-dark-border)` | background `--interactive-secondary-dark-hover` | background `--interactive-secondary-dark-active` | `2px var(--focus-ring-dark)`, offset 2px |
| Ghost | 44px | 16px | `radius-sm` | transparente | texto contextual acessível; underline `2px var(--accent-primary)` on hover | underline aparece | underline + token textual contextual | anel contextual |
| Icon Button | 44×44px | — | `radius-sm` | transparente | ícone contextual acessível | superfície contextual permitida | superfície contextual permitida | anel contextual |

**Regra de superfície do Primary:** Dark Stone sobre Obsidian apresenta aproximadamente **1.58:1** entre a superfície do controle e o canvas e, portanto, o tratamento `Primary / light canvas` **não pode** ser usado diretamente sobre `--background-dark`. Em dark canvas, o mesmo Primary troca contextualmente para Alabaster + Obsidian; hover usa Muted Linen + Obsidian.

**Regra de superfície do Secondary:** em dark canvas, texto e border usam Alabaster; hover/active usam apenas as superfícies translúcidas semânticas acima, mantendo o contorno e a legibilidade do controle.

**Semântica HTML:** `Button` define **tratamento visual**, não a tag HTML. CTA que navega renderiza como `<a>` (ou `asChild`/anchor equivalente) com aparência de Button. `<button>` fica reservado a ações locais, como abrir/fechar menu, accordion ou outra ação sem navegação.

Ícone (quando presente): `icon-sm` (16px), `gap: var(--space-2)` entre ícone e texto. Rose Clay pode aparecer como pequeno detalhe gráfico opcional no Primary, mas **não** como background nem como cor do texto. Disabled: opacity `0.5`, `pointer-events: none`, sem hover/active.

---


## 13. Cards

Nenhuma seção inventa seu próprio card — usar uma destas variantes:

| Variante | Background | Texto | Border | Radius | Padding | Shadow | Hover |
|---|---|---|---|---|---|---|---|
| `card-standard` | `--surface-primary` | `--text-primary` | `--border-default` | `radius-md` | `space-5` | `shadow-sm` | `shadow-md` |
| `card-soft` | `--surface-secondary` | `--text-primary` | none | `radius-md` | `space-5` | none | background → `--surface-primary` |
| `card-dark` | `--surface-dark` | `--text-inverse` | `--border-default-dark` | `radius-md` | `space-5` | none (usar border) | border → `--border-strong-dark` |
| `card-feature` | `--surface-elevated` | `--text-primary` | `--border-subtle` | `radius-lg` | `space-6` | `shadow-md` | `shadow-floating` + translateY(-2px) |
| `card-floating` | `--surface-elevated` | `--text-primary` | `--border-subtle` | `radius-md` | `space-4` | `shadow-floating` | nenhum (elemento de apoio, não clicável) |
| `card-process` | `--surface-primary` | `--text-primary` | `--border-subtle` | `radius-md` | `space-5` | `shadow-xs` | `shadow-sm` |
| `card-information` | `--surface-secondary` | `--text-primary` | none | `radius-md` | `space-4` | none | background → `--surface-primary` |

Ícone dentro de card: container circular `40px`, background `--accent-surface-soft`. Ícone decorativo pode usar `--accent-primary`; ícone funcional/semântico deve usar `--text-secondary` ou outro token com contraste não textual ≥ 3:1 sobre a superfície.

---


## 14. Iconography

Biblioteca: **Lucide** (outline, stroke consistente, open source).

```css
--icon-sm: 16px;
--icon-md: 20px;
--icon-lg: 28px;
--icon-stroke-width: 1.5;
```

- Cor padrão e ícones funcionais: `--text-secondary` sobre claro / `--text-inverse` sobre escuro.
- Rose Clay (`--accent-primary`) pode aparecer em ícones **decorativos** ou acompanhado por outra indicação acessível; não depender dele sozinho para comunicar estado funcional em Alabaster.
- Container: circular, `40px` (sm/md) ou `56px` (lg), background `--accent-surface-soft` sobre claro / `var(--border-subtle-dark)` sobre escuro.
- Nunca preencher ícone (sempre outline), nunca multicolorido.

---


## 15. Photography

**Buscar:** tons quentes, luz natural, sombras suaves, materiais naturais (madeira, linho, cerâmica), pele real, ambientes silenciosos, textura visível, baixa saturação, mãos/gestos discretos e não performáticos.

**Evitar:** pessoas sorrindo diretamente para a câmera, encenação de "sessão de terapia", mãos dadas genéricas de banco de imagens, ícone de cérebro/quebra-cabeça, silhueta com cérebro, poses de sofrimento dramático, ambientes hospitalares, diversidade artificial forçada.

| Parâmetro | Valor recomendado |
|---|---|
| Saturation | −10% a −20% da imagem original |
| Contrast | levemente reduzido (soft, sem preto puro) |
| Temperature | quente (+5 a +10 no eixo warm) |
| Grain | muito sutil, opcional (≤ 3%) |
| Overlay (hero) | `--overlay-image-soft` a `--overlay-image-strong` conforme necessidade de contraste do texto |
| Object-position | priorizar respiro/negative space no lado onde o texto se sobrepõe |
| Aspect ratio hero | 4:5 (retrato) |
| Aspect ratio about | 3:4 |
| Aspect ratio detalhe/ambiente | 1:1 ou 16:9 conforme composição |

---

## 16. Forms

CTA principal leva ao WhatsApp, mas o sistema de formulário deve existir para contato/newsletter futuros.

| Elemento | Especificação |
|---|---|
| Input | altura 48px, `radius-sm`, `border-default`, background `--surface-primary`, padding-inline `space-4` |
| Textarea | mesmo padrão, min-height 120px |
| Select | mesmo padrão do input + ícone chevron `icon-sm` |
| Label | sempre visível acima do campo, `label` token, `--text-secondary` — **placeholder nunca substitui label** |
| Helper text | `caption`, `--text-muted` (Dark Stone), abaixo do campo |
| Focus em canvas claro | border `--focus-ring-light` + anel externo derivado do mesmo token; indicador deve manter ≥ 3:1 contra a superfície adjacente |
| Focus em canvas escuro | `--focus-ring-dark`; não usar Earthen Umber como ring sobre Obsidian |
| Error | border `--status-error`, mensagem em `caption` usando o mesmo token quando a combinação de contraste for válida; caso contrário, reforçar com ícone + texto de maior contraste |
| Success | border `--border-strong`, ícone check `--text-secondary` |

---


## 17. Navigation

- **Breakpoint único do Header:** `>=1280px` usa navegação desktop completa; `<1280px` usa hamburger + painel mobile/tablet. Não manter os sete links + CTA visíveis na barra em 1024px e não criar breakpoint intermediário para navegação.
- **Desktop navbar (`>=1280px`):** altura `72px`, background transparente sobre o Hero (texto `--text-inverse`), transforma em `--surface-nav-scrolled` + `--border-subtle` ao rolar, `position: sticky; top: 0; z-index: 50`.
- **Compact navbar (`<1280px`):** altura `64px`, brand + Icon Button de menu; painel full-screen `--background-primary`, links empilhados `heading-md`, CTA `Primary / light canvas` no rodapé.
- **Links:** `body-md`, `--text-inverse` sobre hero/escuro ou `--text-primary` no estado scrolled/claro; hover → underline `2px var(--accent-primary)` com `duration-fast`.
- **Active section em canvas claro:** texto `--text-primary` + underline/border permanente `--accent-primary`.
- **Active section em canvas escuro:** texto `--text-inverse` + underline/border `--accent-primary`; Rose Clay não vira texto normal.
- **CTA na navbar:** mesmo `Secondary`; sobre Hero escuro usa `Secondary / dark canvas`; no estado scrolled claro usa `Secondary / light canvas`.
- **Integração Header/Hero:** quando a primeira seção deve passar visualmente atrás do Header sticky, o Hero compensa a altura do Header: `margin-top: -72px` em `>=1280px` e `margin-top: -64px` em `<1280px`, adicionando a mesma altura ao `padding-top` antes do spacing próprio da seção. O `z-index: 50` do Header é preservado.

---


## 18. Motion

Movimento quase imperceptível — reforça calma, nunca chama atenção para si.

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;

--easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
```

Permitido: fade (`opacity`), translate pequeno (≤ 8px), scale sutil (0.98→1), underline, elevação de card (`shadow-sm → shadow-md`), zoom mínimo em imagem no hover (`scale(1.02)`, `duration-slow`).

Proibido: parallax agressivo, bounce/elastic easing, animação decorativa contínua (loops), grandes deslocamentos (>24px).

Toda animação respeita `prefers-reduced-motion: reduce` (fallback: sem transição, mudança instantânea de estado).

---

## 19. Responsive Behavior

Regra geral: **mobile não é o desktop comprimido** e nenhuma decisão estrutural fica condicionada a “se couber”, “se necessário” ou avaliação visual durante a implementação.

- Breakpoints e capacidade de grid vêm de §7; a página define deterministicamente a composição em cada faixa.
- Header: `>=1280px` = navegação desktop completa; `<1280px` = hamburger + painel.
- Na Home, floating cards do Hero e Psicoterapia podem permanecer `absolute` somente em `>=1024px`; abaixo de 1024px entram no fluxo normal.
- Quando Hero, About ou composição equivalente entra em uma coluna, o texto permanece **antes** da imagem.
- Ordem do Hero abaixo de 1024px na Home: **eyebrow → H1 → texto → CTA → fotografia → elementos auxiliares**.
- DOM e apresentação visual mantêm a mesma ordem de leitura; não usar CSS `order` para colocar fotografia antes do H1.
- Em `480–767px`, nenhum elemento da Home permanece absoluto; em `<480px`, não existe overlap e os CTAs principais ocupam 100% da largura disponível conforme `home-spec.md`.
- Seções com canvas escuro mantêm o mesmo tratamento em mobile; não clarear o canvas como solução responsiva.
- Regras específicas de uma página prevalecem sobre exemplos genéricos deste capítulo sem alterar tokens ou componentes.

---


## 20. Accessibility

Contraste calculado pela fórmula WCAG/sRGB (luminância relativa). Critérios: texto normal ≥ **4.5:1**; texto grande ≥ **3:1**; componentes/estados gráficos essenciais ≥ **3:1** quando WCAG 1.4.11 se aplica.

| Combinação | Contraste real | Classificação | Uso permitido |
|---|---:|---|---|
| Obsidian `#393534` / Alabaster `#F4EFE8` | **10.59:1** | AA normal + AA large | ✅ texto normal, headings, ícones funcionais |
| Dark Stone `#5C514C` / Alabaster `#F4EFE8` | **6.71:1** | AA normal + AA large | ✅ texto normal, captions, labels, eyebrow |
| Earthen Umber `#8D6F66` / Alabaster `#F4EFE8` | **3.99:1** | AA large apenas | ⚠️ não usar automaticamente em 12–13px; preferir detalhe editorial/não textual |
| Rose Clay `#B58E84` / Alabaster `#F4EFE8` | **2.56:1** | abaixo de AA large e de 3:1 não textual | ❌ proibido como texto; apenas decoração não essencial |
| Alabaster `#F4EFE8` / Obsidian `#393534` | **10.59:1** | AA normal + AA large | ✅ texto inverse |
| Alabaster `#F4EFE8` / Dark Stone `#5C514C` | **6.71:1** | AA normal + AA large | ✅ texto do Primary |
| Rose Clay `#B58E84` / Obsidian `#393534` | **4.14:1** | AA large apenas | ⚠️ não usar como texto normal; pode servir a detalhe não textual que cumpra 3:1 |
| Alabaster `#F4EFE8` / Rose Clay `#B58E84` | **2.56:1** | abaixo de AA large e de 3:1 não textual | ❌ proibido para texto e controles essenciais |
| Dark Stone `#5C514C` / Obsidian `#393534` | **1.58:1** | abaixo de 3:1 não textual | ❌ superfície do Primary light não pode ser usada sobre dark canvas quando a borda do controle precisa ser percebida |
| Muted Linen `#D8D2C8` / Obsidian `#393534` | **8.06:1** | contraste forte | ✅ hover do Primary dark e superfície clara contextual |

**Primary / light canvas:** `--interactive-primary` = Dark Stone; `--interactive-primary-text` = Alabaster. Contraste textual **6.71:1**; hover Obsidian/Alabaster = **10.59:1**.

**Primary / dark canvas:** usar `--interactive-primary-dark` = Alabaster com `--interactive-primary-dark-text` = Obsidian (**10.59:1**). Hover usa Muted Linen + Obsidian (**8.06:1**). Não usar Dark Stone como superfície do Primary sobre Obsidian por causa do contraste de componente de apenas **1.58:1**.

**Secondary / dark canvas:** background transparente; texto e border Alabaster sobre Obsidian (**10.59:1**); hover/active usam `--interactive-secondary-dark-hover/active`, preservando texto e contorno claros.

**`text-muted` corrigido:** `--text-muted: var(--dark-stone)`. Earthen Umber permanece como accent editorial secundário, não como default de captions/labels pequenos.

**Eyebrow:** por ter 12px, usa `--text-secondary` em canvas claro. Rose Clay/Earthen Umber podem aparecer como linha lateral, bullet, underline curto ou marcador decorativo.

**Focus ring contextual:**
- `--focus-ring-light: var(--dark-stone)` sobre Alabaster ≈ **6.71:1**.
- `--focus-ring-dark: var(--alabaster)` sobre Obsidian ≈ **10.59:1**.
- Muted Linen sobre Obsidian ≈ **8.06:1** e pode ser alternativa visual documentada se necessário.
- Earthen Umber sobre Obsidian ≈ **2.65:1** e **não** deve ser usado como focus indicator nesse canvas.

Demais regras: foco sempre visível (nunca `outline: none` sem substituto), touch targets ≥ 44×44px, hover nunca é a única indicação de interatividade, links distinguíveis do texto ao redor (underline ou peso, não só cor), headings em ordem semântica sem pular níveis, um único H1 por página, navegação 100% operável por teclado, ordem DOM coerente com a leitura visual e `prefers-reduced-motion` respeitado (§18).

---


## 21. Component Tokens

| Componente | Tokens principais |
|---|---|
| `Navbar` | `>=1280px`: 72px + nav completa; `<1280px`: 64px + hamburger/painel; transparent sobre Hero → `--surface-nav-scrolled` ao rolar; `z-index: 50`; CTA = mesmo Secondary com tratamento dark/light contextual |
| `Section` | `padding-block: var(--space-10)` desktop / `var(--space-7)` mobile, `background-*` conforme §4 |
| `SectionHeader` | eyebrow + heading + body, `max-width: 62ch`, `gap: var(--space-4)` |
| `Eyebrow` | token `eyebrow`, texto `--text-secondary`; accent apenas em detalhe gráfico opcional |
| `HeadingHighlight` | ver subseção **HeadingHighlight** abaixo |
| `Button` | ver §12; mesmo Primary/Secondary escolhe tratamento por canvas; visual pode renderizar como `<a>` quando navega |
| `IconButton` | ver §12 |
| `Card` | ver §13 |
| `FloatingCard` | `card-floating`, `position: absolute` (desktop) → `static`/`relative` no mobile, `z-index: 10` |
| `ImageFrame` | `radius-lg`, `overflow: hidden`, `aspect-ratio` conforme §15 |
| `Badge` | `radius-pill`, padding `4px 12px`, `caption` token, background `--accent-surface-soft`, texto `--text-secondary`; Rose Clay fica no tratamento de superfície/detalhe |
| `ProcessStep` | `card-process`, numeração em `eyebrow` com texto AA + ícone circular |
| `Accordion` | header `heading-sm`, `border-bottom: var(--border-subtle)`, ícone chevron rotaciona `duration-normal` |
| `FAQ` | usa `Accordion`, `max-width: 720px` |
| `CTASection` | `background-dark`, texto `--text-inverse`, botão `Primary / dark canvas`; focus `--focus-ring-dark` |
| `Footer` | `background-dark`, `border-top: var(--border-default-dark)`, links `body-sm` |

### HeadingHighlight

Tratamento editorial para destacar uma palavra ou trecho curto dentro de heading sem transformar o destaque em botão, badge, pill ou sticker.

**Variante principal — soft background:**

```css
.heading-highlight {
  color: var(--text-primary);
  background: var(--accent-surface-soft);
  padding-inline: 0.12em;
  border-radius: var(--radius-sm);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
```

**Variante alternativa — underline:**

```css
.heading-highlight--underline {
  color: var(--text-primary);
  text-decoration-line: underline;
  text-decoration-color: var(--accent-primary);
  text-decoration-thickness: 2px;
  text-underline-offset: 0.15em;
}
```

O texto do highlight permanece `--text-primary`; Rose Clay atua como background translúcido ou underline, não como cor textual.

---


## 22. CSS Variables

```css
:root {
  /* Colors — paleta oficial */
  --alabaster: #F4EFE8;
  --muted-linen: #D8D2C8;
  --rose-clay: #B58E84;
  --earthen-umber: #8D6F66;
  --dark-stone: #5C514C;
  --obsidian: #393534;

  /* Colors — derivados */
  --rose-clay-hover: #A47F74;
  --rose-clay-active: #93705F;
  --rose-clay-10: rgba(181,142,132,0.10);
  --rose-clay-20: rgba(181,142,132,0.20);
  --obsidian-90: rgba(57,53,52,0.90);
  --obsidian-60: rgba(57,53,52,0.60);
  --dark-stone-hover: #6B5F59;
  --dark-stone-active: #4A4340;
  --alabaster-90: rgba(244,239,232,0.90);

  /* Colors — semânticos */
  --background-primary: var(--alabaster);
  --background-secondary: var(--muted-linen);
  --background-dark: var(--obsidian);
  --surface-primary: var(--alabaster);
  --surface-secondary: var(--muted-linen);
  --surface-elevated: var(--alabaster);
  --surface-dark: var(--dark-stone);
  --surface-nav-scrolled: var(--alabaster-90);
  --text-primary: var(--obsidian);
  --text-secondary: var(--dark-stone);
  --text-muted: var(--dark-stone);
  --text-inverse: var(--alabaster);
  --accent-primary: var(--rose-clay);
  --accent-secondary: var(--earthen-umber);
  --accent-surface-soft: var(--rose-clay-10);
  --accent-border-soft: var(--rose-clay-20);
  --overlay-image-soft: var(--obsidian-60);
  --overlay-image-strong: var(--obsidian-90);
  --border-subtle: rgba(57,53,52,0.08);
  --border-default: rgba(57,53,52,0.16);
  --border-strong: var(--dark-stone);
  --border-subtle-dark: rgba(244,239,232,0.08);
  --border-default-dark: rgba(244,239,232,0.14);
  --border-strong-dark: rgba(244,239,232,0.22);
  /* Primary — light canvas (aliases padrão) */
  --interactive-primary: var(--dark-stone);
  --interactive-primary-hover: var(--obsidian);
  --interactive-primary-active: var(--dark-stone-active);
  --interactive-primary-text: var(--alabaster);
  --interactive-primary-disabled: rgba(92,81,76,0.40);
  /* Primary — dark canvas */
  --interactive-primary-dark: var(--surface-primary);
  --interactive-primary-dark-hover: var(--surface-secondary);
  --interactive-primary-dark-active: var(--surface-secondary);
  --interactive-primary-dark-text: var(--text-primary);
  /* Secondary — contextual */
  --interactive-secondary-light-text: var(--text-primary);
  --interactive-secondary-light-border: var(--border-strong);
  --interactive-secondary-light-hover: var(--surface-secondary);
  --interactive-secondary-light-active: var(--surface-secondary);
  --interactive-secondary-dark-text: var(--text-inverse);
  --interactive-secondary-dark-border: var(--text-inverse);
  --interactive-secondary-dark-hover: var(--border-subtle-dark);
  --interactive-secondary-dark-active: var(--border-default-dark);
  --focus-ring-light: var(--dark-stone);
  --focus-ring-dark: var(--alabaster);
  --focus-ring: var(--focus-ring-light);
  --status-error: #B3413A;

  /* Typography — families */
  --font-display: "Poppins", Arial, sans-serif;
  --font-sans: "Inter", -apple-system, sans-serif;

  /* Typography — semantic scale */
  --type-display-xl-size: clamp(2.75rem, 2.2rem + 2.2vw, 4rem);
  --type-display-xl-line-height: 1.05;
  --type-display-xl-weight: 300;
  --type-display-xl-tracking: -0.025em;

  --type-display-lg-size: clamp(2.25rem, 1.9rem + 1.6vw, 3.25rem);
  --type-display-lg-line-height: 1.06;
  --type-display-lg-weight: 300;
  --type-display-lg-tracking: -0.02em;

  --type-heading-xl-size: clamp(1.75rem, 1.5rem + 1vw, 2.25rem);
  --type-heading-xl-line-height: 1.12;
  --type-heading-xl-weight: 300;
  --type-heading-xl-tracking: -0.018em;

  --type-heading-lg-size: 1.5rem;
  --type-heading-lg-line-height: 1.18;
  --type-heading-lg-weight: 400;
  --type-heading-lg-tracking: -0.012em;

  --type-heading-md-size: 1.25rem;
  --type-heading-md-line-height: 1.25;
  --type-heading-md-weight: 400;
  --type-heading-md-tracking: -0.01em;

  --type-heading-sm-size: 1.0625rem;
  --type-heading-sm-line-height: 1.35;
  --type-heading-sm-weight: 500;
  --type-heading-sm-tracking: 0;

  --type-body-lg-size: 1.0625rem;
  --type-body-lg-line-height: 1.65;
  --type-body-lg-weight: 400;
  --type-body-lg-tracking: 0;

  --type-body-md-size: 0.9375rem;
  --type-body-md-line-height: 1.6;
  --type-body-md-weight: 400;
  --type-body-md-tracking: 0;

  --type-body-sm-size: 0.8125rem;
  --type-body-sm-line-height: 1.55;
  --type-body-sm-weight: 400;
  --type-body-sm-tracking: 0;

  --type-eyebrow-size: 0.75rem;
  --type-eyebrow-line-height: 1.2;
  --type-eyebrow-weight: 500;
  --type-eyebrow-tracking: 0.075em;

  --type-label-size: 0.8125rem;
  --type-label-line-height: 1.3;
  --type-label-weight: 500;
  --type-label-tracking: 0;

  --type-caption-size: 0.75rem;
  --type-caption-line-height: 1.4;
  --type-caption-weight: 400;
  --type-caption-tracking: 0;

  --type-button-size: 0.875rem;
  --type-button-line-height: 1;
  --type-button-weight: 500;
  --type-button-tracking: 0.01em;

  /* Spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --space-9: 80px; --space-10: 96px; --space-11: 120px;

  /* Radius */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(57,53,52,0.06);
  --shadow-sm: 0 2px 8px rgba(57,53,52,0.08);
  --shadow-md: 0 8px 24px rgba(57,53,52,0.10);
  --shadow-floating: 0 16px 40px rgba(57,53,52,0.16);

  /* Motion */
  --duration-fast: 150ms; --duration-normal: 250ms; --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);

  /* Container */
  --container-max: 1200px;
  --container-padding: clamp(20px, 4vw, 64px);
}
```

---


## 23. Tailwind Implementation

CSS custom properties permanecem a **fonte primária e única dos valores do sistema**. Tailwind consome as mesmas variables; nunca duplica HEX, spacing, radius ou shadow.

A hierarquia obrigatória é:

`paleta/derived colors → CSS variables → semantic tokens → Tailwind utilities/components`

### Tailwind v4

Quando o projeto estiver em Tailwind v4, expor os semantic tokens através de CSS e `@theme inline` quando apropriado:

```css
@theme inline {
  --color-background-primary: var(--background-primary);
  --color-background-secondary: var(--background-secondary);
  --color-background-dark: var(--background-dark);

  --color-surface-primary: var(--surface-primary);
  --color-surface-secondary: var(--surface-secondary);
  --color-surface-elevated: var(--surface-elevated);
  --color-surface-dark: var(--surface-dark);
  --color-surface-nav-scrolled: var(--surface-nav-scrolled);

  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-text-inverse: var(--text-inverse);

  --color-accent-primary: var(--accent-primary);
  --color-accent-secondary: var(--accent-secondary);
  --color-accent-surface-soft: var(--accent-surface-soft);
  --color-accent-border-soft: var(--accent-border-soft);

  --color-overlay-image-soft: var(--overlay-image-soft);
  --color-overlay-image-strong: var(--overlay-image-strong);

  --color-interactive-primary: var(--interactive-primary);
  --color-interactive-primary-hover: var(--interactive-primary-hover);
  --color-interactive-primary-active: var(--interactive-primary-active);
  --color-interactive-primary-text: var(--interactive-primary-text);
  --color-interactive-primary-dark: var(--interactive-primary-dark);
  --color-interactive-primary-dark-hover: var(--interactive-primary-dark-hover);
  --color-interactive-primary-dark-active: var(--interactive-primary-dark-active);
  --color-interactive-primary-dark-text: var(--interactive-primary-dark-text);
  --color-interactive-secondary-light-text: var(--interactive-secondary-light-text);
  --color-interactive-secondary-light-border: var(--interactive-secondary-light-border);
  --color-interactive-secondary-light-hover: var(--interactive-secondary-light-hover);
  --color-interactive-secondary-light-active: var(--interactive-secondary-light-active);
  --color-interactive-secondary-dark-text: var(--interactive-secondary-dark-text);
  --color-interactive-secondary-dark-border: var(--interactive-secondary-dark-border);
  --color-interactive-secondary-dark-hover: var(--interactive-secondary-dark-hover);
  --color-interactive-secondary-dark-active: var(--interactive-secondary-dark-active);

  /* Tipografia — mirrors completos; recipes .type-* continuam preferenciais */
  --text-display-xl: var(--type-display-xl-size);
  --text-display-xl--line-height: var(--type-display-xl-line-height);
  --text-display-xl--font-weight: var(--type-display-xl-weight);
  --text-display-xl--letter-spacing: var(--type-display-xl-tracking);

  --text-display-lg: var(--type-display-lg-size);
  --text-display-lg--line-height: var(--type-display-lg-line-height);
  --text-display-lg--font-weight: var(--type-display-lg-weight);
  --text-display-lg--letter-spacing: var(--type-display-lg-tracking);

  --text-heading-xl: var(--type-heading-xl-size);
  --text-heading-xl--line-height: var(--type-heading-xl-line-height);
  --text-heading-xl--font-weight: var(--type-heading-xl-weight);
  --text-heading-xl--letter-spacing: var(--type-heading-xl-tracking);

  --text-heading-lg: var(--type-heading-lg-size);
  --text-heading-lg--line-height: var(--type-heading-lg-line-height);
  --text-heading-lg--font-weight: var(--type-heading-lg-weight);
  --text-heading-lg--letter-spacing: var(--type-heading-lg-tracking);

  --text-heading-md: var(--type-heading-md-size);
  --text-heading-md--line-height: var(--type-heading-md-line-height);
  --text-heading-md--font-weight: var(--type-heading-md-weight);
  --text-heading-md--letter-spacing: var(--type-heading-md-tracking);

  --text-heading-sm: var(--type-heading-sm-size);
  --text-heading-sm--line-height: var(--type-heading-sm-line-height);
  --text-heading-sm--font-weight: var(--type-heading-sm-weight);
  --text-heading-sm--letter-spacing: var(--type-heading-sm-tracking);

  --text-body-lg: var(--type-body-lg-size);
  --text-body-lg--line-height: var(--type-body-lg-line-height);
  --text-body-lg--font-weight: var(--type-body-lg-weight);
  --text-body-lg--letter-spacing: var(--type-body-lg-tracking);

  --text-body-md: var(--type-body-md-size);
  --text-body-md--line-height: var(--type-body-md-line-height);
  --text-body-md--font-weight: var(--type-body-md-weight);
  --text-body-md--letter-spacing: var(--type-body-md-tracking);

  --text-body-sm: var(--type-body-sm-size);
  --text-body-sm--line-height: var(--type-body-sm-line-height);
  --text-body-sm--font-weight: var(--type-body-sm-weight);
  --text-body-sm--letter-spacing: var(--type-body-sm-tracking);

  --text-eyebrow: var(--type-eyebrow-size);
  --text-eyebrow--line-height: var(--type-eyebrow-line-height);
  --text-eyebrow--font-weight: var(--type-eyebrow-weight);
  --text-eyebrow--letter-spacing: var(--type-eyebrow-tracking);

  --text-label: var(--type-label-size);
  --text-label--line-height: var(--type-label-line-height);
  --text-label--font-weight: var(--type-label-weight);
  --text-label--letter-spacing: var(--type-label-tracking);

  --text-caption: var(--type-caption-size);
  --text-caption--line-height: var(--type-caption-line-height);
  --text-caption--font-weight: var(--type-caption-weight);
  --text-caption--letter-spacing: var(--type-caption-tracking);

  --text-button: var(--type-button-size);
  --text-button--line-height: var(--type-button-line-height);
  --text-button--font-weight: var(--type-button-weight);
  --text-button--letter-spacing: var(--type-button-tracking);
}
```

Os valores continuam definidos em `:root`; `@theme inline` apenas os torna consumíveis pelas utilities do Tailwind v4.

### Tailwind v3

Quando o projeto estiver em Tailwind v3, `theme.extend` aponta para **as mesmas CSS variables**:

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          dark: "var(--background-dark)",
        },
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          elevated: "var(--surface-elevated)",
          dark: "var(--surface-dark)",
          "nav-scrolled": "var(--surface-nav-scrolled)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          "surface-soft": "var(--accent-surface-soft)",
          "border-soft": "var(--accent-border-soft)",
        },
        overlay: {
          "image-soft": "var(--overlay-image-soft)",
          "image-strong": "var(--overlay-image-strong)",
        },
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
        },
        interactive: {
          primary: "var(--interactive-primary)",
          "primary-hover": "var(--interactive-primary-hover)",
          "primary-active": "var(--interactive-primary-active)",
          "primary-text": "var(--interactive-primary-text)",
          "primary-dark": "var(--interactive-primary-dark)",
          "primary-dark-hover": "var(--interactive-primary-dark-hover)",
          "primary-dark-active": "var(--interactive-primary-dark-active)",
          "primary-dark-text": "var(--interactive-primary-dark-text)",
          "secondary-light-text": "var(--interactive-secondary-light-text)",
          "secondary-light-border": "var(--interactive-secondary-light-border)",
          "secondary-light-hover": "var(--interactive-secondary-light-hover)",
          "secondary-light-active": "var(--interactive-secondary-light-active)",
          "secondary-dark-text": "var(--interactive-secondary-dark-text)",
          "secondary-dark-border": "var(--interactive-secondary-dark-border)",
          "secondary-dark-hover": "var(--interactive-secondary-dark-hover)",
          "secondary-dark-active": "var(--interactive-secondary-dark-active)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        "display-xl": ["var(--type-display-xl-size)", { lineHeight: "var(--type-display-xl-line-height)", fontWeight: "var(--type-display-xl-weight)", letterSpacing: "var(--type-display-xl-tracking)" }],
        "display-lg": ["var(--type-display-lg-size)", { lineHeight: "var(--type-display-lg-line-height)", fontWeight: "var(--type-display-lg-weight)", letterSpacing: "var(--type-display-lg-tracking)" }],
        "heading-xl": ["var(--type-heading-xl-size)", { lineHeight: "var(--type-heading-xl-line-height)", fontWeight: "var(--type-heading-xl-weight)", letterSpacing: "var(--type-heading-xl-tracking)" }],
        "heading-lg": ["var(--type-heading-lg-size)", { lineHeight: "var(--type-heading-lg-line-height)", fontWeight: "var(--type-heading-lg-weight)", letterSpacing: "var(--type-heading-lg-tracking)" }],
        "heading-md": ["var(--type-heading-md-size)", { lineHeight: "var(--type-heading-md-line-height)", fontWeight: "var(--type-heading-md-weight)", letterSpacing: "var(--type-heading-md-tracking)" }],
        "heading-sm": ["var(--type-heading-sm-size)", { lineHeight: "var(--type-heading-sm-line-height)", fontWeight: "var(--type-heading-sm-weight)", letterSpacing: "var(--type-heading-sm-tracking)" }],
        "body-lg": ["var(--type-body-lg-size)", { lineHeight: "var(--type-body-lg-line-height)", fontWeight: "var(--type-body-lg-weight)", letterSpacing: "var(--type-body-lg-tracking)" }],
        "body-md": ["var(--type-body-md-size)", { lineHeight: "var(--type-body-md-line-height)", fontWeight: "var(--type-body-md-weight)", letterSpacing: "var(--type-body-md-tracking)" }],
        "body-sm": ["var(--type-body-sm-size)", { lineHeight: "var(--type-body-sm-line-height)", fontWeight: "var(--type-body-sm-weight)", letterSpacing: "var(--type-body-sm-tracking)" }],
        eyebrow: ["var(--type-eyebrow-size)", { lineHeight: "var(--type-eyebrow-line-height)", fontWeight: "var(--type-eyebrow-weight)", letterSpacing: "var(--type-eyebrow-tracking)" }],
        label: ["var(--type-label-size)", { lineHeight: "var(--type-label-line-height)", fontWeight: "var(--type-label-weight)", letterSpacing: "var(--type-label-tracking)" }],
        caption: ["var(--type-caption-size)", { lineHeight: "var(--type-caption-line-height)", fontWeight: "var(--type-caption-weight)", letterSpacing: "var(--type-caption-tracking)" }],
        button: ["var(--type-button-size)", { lineHeight: "var(--type-button-line-height)", fontWeight: "var(--type-button-weight)", letterSpacing: "var(--type-button-tracking)" }],
      },
      spacing: {
        1: "var(--space-1)", 2: "var(--space-2)", 3: "var(--space-3)", 4: "var(--space-4)",
        5: "var(--space-5)", 6: "var(--space-6)", 7: "var(--space-7)", 8: "var(--space-8)",
        9: "var(--space-9)", 10: "var(--space-10)", 11: "var(--space-11)",
      },
      borderRadius: {
        sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)", pill: "var(--radius-pill)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)", sm: "var(--shadow-sm)", md: "var(--shadow-md)", floating: "var(--shadow-floating)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)", normal: "var(--duration-normal)", slow: "var(--duration-slow)",
      },
    },
  },
};
```

Uso em componentes:

- cor/superfície: `className="bg-surface-primary text-text-primary rounded-md shadow-sm"` — nunca `bg-[#F4EFE8]`;
- tipografia preferencial: `className="type-display-lg"`;
- fallback Tailwind quando recipe CSS não puder ser usado: `className="font-display text-display-lg"`.

Nunca usar `text-[37px]`, `leading-[1.13]`, `tracking-[-0.017em]` ou peso arbitrário para reconstruir um token existente.

**Regra:** documentar a estratégia compatível com a versão instalada do Tailwind, mas nunca manter duas fontes de valores. Tailwind referencia os tokens; não os redefine.

---


## 24. AI Implementation Rules

## AI IMPLEMENTATION RULES

1. Nunca criar uma nova cor sem consultar este documento.
2. Nunca usar HEX hardcoded dentro de componentes — sempre tokens semânticos. Cores funcionais restritas também recebem token (`--status-*`).
3. Nunca criar valores arbitrários de spacing; usar apenas `--space-1` a `--space-11`.
4. Usar os tokens existentes sempre que possível; propor extensão só se genuinamente faltar um caso de uso.
5. Não alterar tipografia sem atualizar este Design System primeiro.
6. Não adicionar shadows ou radius fora dos definidos em §9/§10.
7. Não introduzir outra biblioteca de ícones além de Lucide.
8. Não usar gradientes, exceto se explicitamente aprovado aqui (atualmente: nenhum gradiente aprovado).
9. Não usar cores vibrantes/saturadas fora da paleta oficial.
10. Não aumentar saturação ou contraste das fotografias além do especificado em §15.
11. Mobile não pode ser uma versão comprimida do desktop — seguir §19; no hero, texto e H1 permanecem antes da fotografia.
12. Cards absolutos do desktop devem entrar no fluxo normal no mobile.
13. Preservar a hierarquia de heading (um H1 por página, ordem sequencial) e a ordem DOM coerente com a leitura visual.
14. Preservar todas as regras de acessibilidade do §20: `Primary / light canvas` = Dark Stone/Alabaster; `Primary / dark canvas` = Alabaster/Obsidian; Secondary contextual; `text-muted` em Dark Stone e focus ring contextual.
15. Rose Clay é accent editorial: não usar como background do Primary, texto pequeno sobre Alabaster ou texto normal sobre Obsidian.
16. Earthen Umber não é default de caption/label/eyebrow pequeno; usar `--text-secondary`/`--text-muted` nesses casos.
17. Em caso de dúvida visual, consultar este `design-system.md` antes de decidir — não improvisar.
18. Toda nova seção deve reutilizar uma das variantes de card do §13, não criar uma nova.
19. Toda animação nova deve respeitar os tokens de motion do §18 e `prefers-reduced-motion`.
20. CSS Custom Properties são a fonte primária; Tailwind v3/v4 apenas consome os mesmos tokens (§23).
21. `HeadingHighlight` deve seguir a subseção específica de §21; não improvisar badge/sticker.
22. Em canvas escuro, usar `--focus-ring-dark`; em canvas claro, `--focus-ring-light`.
23. Componentes não referenciam tokens físicos/derivados (`--rose-clay-*`, `--obsidian-*`, `--dark-stone`, `--muted-linen`) diretamente; consomem exclusivamente tokens semânticos.
24. `>=1280px` é o único modo de navegação desktop completa; `<1280px` usa hamburger/painel. Não criar breakpoint intermediário para o Header.
25. Button é tratamento visual: navegação usa `<a>`/`asChild`; `<button>` somente para ação local.
26. Tipografia de componente usa os recipes `type-*`/tokens `--type-*`; proibido introduzir `text-[...]`, `leading-[...]`, pesos arbitrários ou tamanhos fora da escala sem atualização deste documento.

---


## 25. Do / Don't

**DO**
- Alabaster como base predominante, Obsidian como contraponto editorial.
- Dark Stone como interação principal quando um fundo sólido precisa sustentar texto pequeno em Alabaster.
- Rose Clay como tempero: underline, marker, pequeno detalhe de border, ícone decorativo e highlight translúcido.
- Earthen Umber como accent editorial secundário, não como default de texto pequeno.
- Poppins leve para heading e interface de destaque, Inter para corpo e leitura longa.
- Fotografia quente, com textura e luz natural.
- Espaço em branco generoso entre seções.
- Cards com borda sutil em vez de sombra pesada.

**DON'T**
- Usar Rose Clay como background do botão Primary ou como texto normal sobre Alabaster/Obsidian.
- Usar Earthen Umber automaticamente em captions, labels, helper texts ou eyebrow de 12–13px.
- Rosa saturado ou fora da paleta.
- Preto puro `#000000` ou branco puro `#FFFFFF` usado extensivamente.
- Gradientes coloridos.
- Glassmorphism exagerado (blur pesado, transparência excessiva).
- Border-radius gigante em tudo (efeito "app").
- Sombras pesadas estilo SaaS (`box-shadow: 0 20px 60px rgba(0,0,0,0.4)`).
- Ícones multicoloridos ou preenchidos.
- Ilustrações de cérebro, quebra-cabeça ou silhueta humana genérica.
- Excesso de cards empilhados sem hierarquia.
- Animação chamativa, parallax agressivo, bounce.

---


## 26. Design QA Checklist

Após implementar cada seção, verificar:

- [ ] Todas as cores de componente usam tokens semânticos (nenhum HEX hardcoded)?
- [ ] Nenhuma cor fora da paleta oficial ou dos derivados/estados funcionais documentados em §3/§4 foi usada?
- [ ] Rose Clay permanece apenas como accent e nunca como background do Primary ou texto pequeno incompatível?
- [ ] Componentes usam `--accent-surface-soft`/`--accent-border-soft` em vez de `--rose-clay-10/20` e `--overlay-image-soft/strong` em vez de `--obsidian-60/90`?
- [ ] Navbar scrolled usa `--surface-nav-scrolled`, nunca `--alabaster-90` diretamente?
- [ ] Nenhum componente referencia diretamente tokens físicos/derivados da paleta quando existe token semântico equivalente?
- [ ] `--text-muted` resolve para Dark Stone em canvas claro e captions/labels/eyebrow pequenos não usam Earthen Umber automaticamente?
- [ ] Spacing pertence exclusivamente à escala `--space-1`–`--space-11`?
- [ ] Tipografia usa os recipes `type-*`/tokens `--type-*` de §6/§22, sem tamanhos, line-heights ou pesos arbitrários?
- [ ] Texto normal tem contraste ≥ 4.5:1; texto grande ≥ 3:1; estados gráficos essenciais ≥ 3:1 quando aplicável?
- [ ] Primary em light canvas usa Dark Stone + Alabaster; Primary em dark canvas usa Alabaster + Obsidian, sem Dark Stone sobre Obsidian (1.58:1)?
- [ ] Secondary em light canvas usa texto/border escuros; em dark canvas usa texto/border Alabaster e hover/active contextuais?
- [ ] Focus-visible usa `--focus-ring-light` em canvas claro e `--focus-ring-dark` em canvas escuro?
- [ ] Radius e shadow pertencem aos sistemas de §9/§10?
- [ ] Ícones são Lucide, outline, `stroke-width: 1.5`, e ícones funcionais não dependem de Rose Clay quando contraste não textual for necessário?
- [ ] Fotografia segue os parâmetros de saturação/temperatura de §15?
- [ ] Componente funciona em 1440px?
- [ ] Funciona em 1280px?
- [ ] Funciona em 1024px com Header em hamburger/painel, sem os sete links + CTA na barra?
- [ ] Funciona em 768px (floating cards saíram do absolute)?
- [ ] Funciona em 390px?
- [ ] No hero mobile a ordem é eyebrow → H1 → texto → CTA → fotografia → auxiliares, sem fotografia antes do H1?
- [ ] H1 único na página, headings em ordem semântica e DOM coerente com a ordem visual?
- [ ] Header usa navegação completa somente em `>=1280px` e hamburger/painel em `<1280px`?
- [ ] Quando o Hero passa atrás do Header, aplica `margin-top: -72px` / `-64px` e compensação correspondente de `padding-top`, preservando `z-index: 50`?
- [ ] CTA que navega renderiza semanticamente como `<a>` mesmo quando usa visual de Button; `<button>` fica restrito a ações locais?
- [ ] Navegação por teclado funciona (tab order, focus visível)?
- [ ] `prefers-reduced-motion` é respeitado?
- [ ] Touch targets ≥ 44×44px em todos os elementos clicáveis?
- [ ] Estado hover é acompanhado de indicação não-cromática (underline/border)?
- [ ] `HeadingHighlight` segue a especificação de §21 e mantém texto em `--text-primary`?
- [ ] `--surface-elevated` usa Alabaster + border/shadow, sem `#FFFFFF`?
- [ ] Tailwind v3/v4 referencia as mesmas CSS variables, inclusive escala tipográfica, sem duplicar valores?
- [ ] Nenhum card foi inventado fora das variantes do §13?
- [ ] Seção segue o funcionamento de canvas definido em §4–§5 e a atribuição de canvas definida no `home-spec.md`, sem alternância arbitrária?
