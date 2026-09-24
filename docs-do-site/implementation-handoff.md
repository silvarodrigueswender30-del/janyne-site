# Janyne - Implementation Handoff

## Current Status
**STRUCTURALLY COMPLETE**

A Home esta estruturalmente completa: Navbar, Hero, Identity Strip, About, Therapy Relevance, Individual Psychotherapy, Approach, Process, FAQ, Final CTA e Footer estao implementados. A proxima fase depende de conteudo confirmado e dos tres assets fotograficos oficiais.

## Environment
- framework: Next.js App Router
- Next version: 16.3.6
- React version: 19.2.8
- Tailwind version: 4.3.3
- package manager: pnpm 11.25.0
- Node: v24.14.0

## Project Path
C:\Users\Teste\Downloads\Janyne-Psicologa\site

## Completed
- Auditada a raiz do projeto sem alteracoes iniciais.
- Localizados documentos principais em `docs-do-site/`.
- Lidos `design-system.md`, `home-spec.md` e `mindtalk-blueprint.md`.
- Confirmado que nao havia Git na raiz antes do scaffold.
- Criado projeto Next.js em `/site` com TypeScript, App Router, Tailwind CSS v4, ESLint e `src/`.
- Configuradas fontes Poppins e Inter via `next/font/google`; Fraunces removida do runtime.
- Implementados tokens globais em `src/app/globals.css`: cores, tokens semanticos, tipografia, spacing, radius, shadows, motion, container, grid e defaults acessiveis.
- Criados recipes tipograficos `type-*`.
- Criadas pastas base: `src/components/ui`, `src/components/layout`, `src/components/sections`, `src/data`, `src/lib`, `src/styles`, `public/images`.
- Criado helper central para WhatsApp sem numero ficticio.
- Criado arquivo central inicial de conteudo em `src/data/site.ts`.
- Removido conteudo visual padrao do starter da Home.
- Instalado `lucide-react` como unica biblioteca de icones.
- Criados `cn`, `Container`, `Section`, `SectionHeader`, `Eyebrow`, `HeadingHighlight`, `Button`, `IconButton`, `Card`, `FloatingCard`, `ImageFrame`, `Badge`, `ProcessStep`, `Accordion`, `FAQ` e `CTASection`.
- `Button` aceita `primary|secondary`, `light|dark` e `asChild`, preservando `<a>` para navegacao e `<button>` para acoes locais.
- `Card` aceita somente `standard|soft|dark|feature|floating|process|information`.
- `Accordion` usa button, `aria-expanded`, `aria-controls`, IDs estaveis, ChevronDown Lucide e suporte nativo a Enter/Espaco.
- Substituida a tela temporaria por showcase de QA sem iniciar a Home.

## STRUCTURAL PENDING

Nenhuma pendencia estrutural.

## CONTENT PENDING
- CRP.
- Publico atendido.
- Demandas clinicas.
- WhatsApp.
- Email.
- Instagram.
- Localidade do atendimento presencial.
- Duracao da sessao.
- Regras de agendamento.
- Horarios, valores e politica de cancelamento.
- Demais dados profissionais que dependem de confirmacao da cliente.

## VISUAL ASSET PENDING
- JP-HERO-01.
- JP-ABOUT-02.
- JP-PSYCH-03.

## Files Created / Modified
- Created: `site/`
- Created: `site/src/data/site.ts`
- Created: `site/src/lib/contact.ts`
- Created: `site/src/components/ui/`
- Created: `site/src/components/layout/`
- Created: `site/src/components/sections/`
- Created: `site/src/styles/`
- Created: `site/public/images/`
- Modified: `site/package.json`
- Modified: `site/src/app/globals.css`
- Modified: `site/src/app/layout.tsx`
- Modified: `site/src/app/page.tsx`
- Modified: `site/pnpm-lock.yaml`
- Created: `site/src/lib/cn.ts`
- Created: `site/src/components/ui/Container.tsx`, `Section.tsx`, `SectionHeader.tsx`, `Eyebrow.tsx`, `HeadingHighlight.tsx`, `Button.tsx`, `IconButton.tsx`, `Card.tsx`, `FloatingCard.tsx`, `ImageFrame.tsx`, `Badge.tsx`, `ProcessStep.tsx`, `Accordion.tsx`, `FAQ.tsx`, `CTASection.tsx`
- Created: `site/src/components/layout/Navbar.tsx`
- Created: `site/src/components/layout/Footer.tsx`
- Created: `site/src/components/sections/Hero.tsx`, `IdentityStrip.tsx`, `About.tsx`
- Created: `site/src/components/sections/TherapyRelevance.tsx`, `IndividualPsychotherapy.tsx`, `Approach.tsx`, `Process.tsx`
- Created: `site/src/components/sections/FrequentlyAskedQuestions.tsx`, `FinalCTA.tsx`
- Created: `site/scripts/capture-checkpoint-3.mjs`
- Created: `site/docs/qa/home-checkpoint-3-1440.png`, `home-checkpoint-3-1280.png`, `home-checkpoint-3-1024.png`, `home-checkpoint-3-768.png`, `home-checkpoint-3-480.png`, `home-checkpoint-3-390.png`, `home-checkpoint-3-results.json`
- Created: `site/docs/qa/home-checkpoint-3-type-refine-1440.png`, `home-checkpoint-3-type-refine-1280.png`, `home-checkpoint-3-type-refine-1024.png`, `home-checkpoint-3-type-refine-768.png`, `home-checkpoint-3-type-refine-480.png`, `home-checkpoint-3-type-refine-390.png`, `home-checkpoint-3-type-refine-results.json`
- Created: `site/docs/qa/home-checkpoint-3-navbar-refine-1440.png`
- Created/updated: `docs-do-site/implementation-handoff.md`
- Modified: `docs-do-site/design-system.md`, `docs-do-site/home-spec.md`

## Important Architecture Decisions
- Todo codigo do website fica exclusivamente em `/site`.
- Tailwind v4 esta instalado; `@theme inline` em `globals.css` consome CSS Custom Properties como fonte unica.
- Componentes devem consumir tokens semanticos, nao HEX.
- Tipografia deve usar recipes `type-*`; evitar reconstrucoes manuais.
- Contatos pendentes ficam parametrizados. WhatsApp retorna `href: null` enquanto nao houver numero confirmado.
- Nenhum dado clinico, CRP, telefone, endereco, estatistica, depoimento ou publico foi inventado.
- Componentes nao usam HEX, sombras, radius ou tipografia fora dos tokens documentados; aspect ratios do ImageFrame sao somente `4:5`, `3:4`, `16:9` e `1:1`.
- Navbar e Hero compartilham o contrato de breakpoint do Design System: desktop completo em `>=1280px`, menu em `<1280px`, Hero atras do header com compensacao de altura.
- WhatsApp continua sem destino; CTA secundario nao exibe URL ficticia enquanto o dado nao foi confirmado.
- Therapy Relevance preserva a logica editorial lateral + cards horizontais, sem inventar temas clinicos.
- Psychotherapy preserva spans da Home Spec com imagem 16:9, floating card Online e information card Presencial.
- Approach usa canvas dark e composicao assimetrica: intro 5 colunas, card principal full e dois cards inferiores.
- Process usa tres `ProcessStep` em regiao horizontal agrupada por grid, sem linha conectora ou nova variante de card.
- Direcao tipografica atual: Poppins para display, headings, eyebrow, labels, buttons e navbar; Inter para body e captions.
- Recipes preservados: display-xl 300/1.05/-0.025em; display-lg 300/1.06/-0.02em; heading-xl 300/1.12/-0.018em; heading-lg 400/1.18/-0.012em; heading-md 400/1.25/-0.01em; heading-sm 500/1.35; body 400; eyebrow 500/0.075em; button 500.
- Headings recebem `text-wrap: balance`; Navbar scrolled usa apenas blur discreto de 8px sobre `surface-nav-scrolled`.
- Micro-ajuste de Navbar: `nav` e Container interno agora usam `height: 100%`, `display: flex`, `align-items: center` e `padding-block: var(--space-2)`, preservando 72/64px totais.
- Causa encontrada: o `h-full` estava sem uma altura resolvida no `nav`, deixando o Container com altura de conteudo e deslocando a faixa visual para o topo.
- `create-next-app` inicializou Git dentro de `/site`; nao ha remote configurado. A raiz do projeto continua sem Git.

## Known Issues
- `pnpm build` precisa de rede porque `next/font/google` baixa Poppins e Inter no build inicial. Com permissao de rede, build passa.
- SVGs padrao do starter ainda existem em `site/public`, mas nao sao usados.
- O indicador inicial `1 Issue` foi um hydration mismatch causado por atributo `data-bry-content-script-syngular="1"` injetado por extensao do navegador no `<html>`, nao pelo projeto. Nao foi mascarado nem desativado.
- Terminal tambem reportou somente fallback de `next/font/google` quando sem acesso a Google Fonts; com rede permitida o build passou. Isso e uma limitacao de ambiente, nao erro de runtime do projeto.
- O primeiro `pnpm build` do Checkpoint 3 teve OOM transitivo durante TypeScript; a repeticao com `NODE_OPTIONS=--max-old-space-size=4096` passou.

## Placeholders Still Pending
- CRP
- WhatsApp
- Email
- Instagram
- Localidade/endereco presencial
- Horarios
- Valor
- Duracao da sessao
- Especializacoes/titulos
- Fotografias reais da Janyne
- Politica de Privacidade / Termos
- Placeholders fotograficos JP-HERO-01, JP-ABOUT-02 e JP-PSYCH-03 continuam neutros na implementacao.

## QA Completed
- `pnpm typecheck` passou.
- `pnpm lint` passou.
- `pnpm build` passou com permissao de rede para buscar fontes Google via Next.
- Confirmado Tailwind v4.3.3.
- Confirmado Next 16.3.6 e React 19.2.8.
- Console do browser: sem erros ou warnings apos reload da showcase.
- Accordion testado por teclado: Enter abriu e Espaco fechou; `aria-expanded` alternou corretamente.
- Viewport ativo do browser (329px) sem overflow horizontal: `scrollWidth` 314px.
- Micro-QA visual do Checkpoint 2 concluido: a captura mostrava divergencia real nos componentes, nao apenas na showcase.
- Corrigido o uso de tokens de radius/padding que estava gerando `border-radius: 0px` nos Buttons e `padding: 0px` nos Cards.
- Computed styles confirmados: Buttons light/dark primary/secondary = `999px`; Cards = padding `24px/32px/16px` e radius `12px/20px` conforme variante.
- Computed typography confirmada: `body-lg`, `body-md` e `body-sm` = weight `400`; `eyebrow` = weight `600`.
- Showcase recebeu uma linha de body em cada variante de Card para tornar surface, padding, border e shadow verificaveis.
- Browser console apos correcao: sem erros ou warnings.
- Checkpoint 3: screenshots geradas em 1440, 1280, 1024, 768, 480 e 390px.
- Todas as larguras: `scrollWidth` igual ao viewport, sem overflow horizontal, H1 e imagem presentes.
- `headerHeight`: 72px em 1440/1280 e 64px em 1024/768/480/390.
- Menu mobile: abrir/fechar por clique e Escape passou em 768/480/390; desktop nao exibiu trigger.
- Reduced motion habilitado no script de screenshot; nenhuma transicao foi necessaria para validar layout.
- Page errors e console errors/warnings: nenhum nas seis larguras.
- Refinamento tipografico: computed styles confirmam Poppins 300 no H1/H2, Poppins 500 em brand/nav/eyebrow, Inter 400 no body; Navbar com 72px desktop e 64px compacta.
- Before/after preservados: screenshots `home-checkpoint-3-*.png` e `home-checkpoint-3-type-refine-*.png`.
- Navbar refinement: computed styles confirmam Header/nav/Container com 72px em 1440/1280, 64px em 1024/768/390, Container flex centralizado e padding vertical de 8px; Hero continua em `margin-top: -72px`/`-64px`.
- Screenshot final de comparacao: `home-checkpoint-3-navbar-refine-1440.png`.
- Console Playwright em 1440px: sem errors, warnings ou page errors.
- Checkpoint 4: QA tecnico em 390px confirmou zero overflow horizontal, um unico H1, cinco H2 ate Process e IDs `psicoterapia`, `abordagem` e `como-funciona` presentes.
- Build do Checkpoint 4 passou na segunda tentativa com `NODE_OPTIONS=--max-old-space-size=4096`; primeira tentativa teve falha transitoria sem diagnostico adicional.
- Nenhuma screenshot foi gerada nesta etapa, conforme instrucao atual de QA manual pelo navegador.

## QA Still Required
- Auditoria visual final depois da substituicao dos tres placeholders fotograficos.
- Validacao editorial final depois do recebimento dos dados da cliente.

## Exact Next Step
Aguardar aprovacao do Checkpoint 5. Nao iniciar imagens, SEO avancado ou preenchimento de dados nao confirmados.

## Last Successful Commands
- `npx create-next-app@latest site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm --yes`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm build`
- `pnpm add lucide-react`
- `pnpm add -D playwright`
- `node scripts/capture-checkpoint-3.mjs`
- `$env:NODE_OPTIONS='--max-old-space-size=4096'; pnpm build`
- `node --max-old-space-size=4096 node_modules/eslint/bin/eslint.js`

Last file altered: `docs-do-site/implementation-handoff.md`.

## Checkpoint 4 Visual Refinement
- Refinamento aplicado somente em Therapy Relevance, Individual Psychotherapy, Approach e Process.
- Therapy Relevance preservou `card-standard` e recebeu uma zona superior neutra com mais respiro vertical, mantendo os temas clínicos como placeholders sem ícones com significado não confirmado.
- Individual Psychotherapy preservou o grid, o slot oficial 16:9 e o conteúdo; a camada `Online` ficou editorial e discreta, sem sombra pesada ou glassmorphism. O card `Presencial` permaneceu informativo.
- Approach preservou canvas escuro, copy e variantes `card-dark`; nenhum tratamento de SaaS ou nova superfície foi introduzido.
- ProcessStep continua usando exclusivamente a variante `process`, mas em desktop os três passos agora formam uma composição horizontal única com ritmo, altura e bordas compartilhadas. Não foi criada nova variante nem linha conectora.
- Ícones continuam exclusivamente Lucide, tamanho 20 e `strokeWidth={1.5}`. O círculo preenchido foi removido dos ProcessStep para manter a iconografia leve.
- O corpo do ProcessStep foi ajustado para `type-body-sm`, conforme o Home Spec. A auditoria no browser confirmou `400` nos corpos de Psicoterapia, Abordagem e Processo; headings permanecem separados dos recipes de body.
- Arquivos modificados: `site/src/components/ui/ProcessStep.tsx`, `site/src/components/sections/TherapyRelevance.tsx`, `site/src/components/sections/Process.tsx`, `site/src/app/globals.css` e este handoff.
- Nenhuma imagem foi baixada ou gerada. Nenhuma captura foi produzida nesta etapa.

## Checkpoint 4 Refinement QA
- Verificacao atual concluida em 23/09/2026 na build de producao local.
- Browser tecnico em 1440x900, 1024x768, 768x1024 e 390x844: zero overflow horizontal e nenhum elemento fora dos limites laterais.
- DOM confirmado com um `main`, um H1, cinco H2, tres `.process-step` e as secoes `psicoterapia`, `abordagem` e `como-funciona` presentes.
- Console do browser sem erros ou warnings; nenhuma imagem sem atributo `alt` foi encontrada.
- Computed styles: todo texto corrido permanece em `400`; os elementos em `500` sao exclusivamente eyebrows e pequenos headings em Poppins, conforme o Design System.
- `pnpm typecheck`, `pnpm lint` e `pnpm build` passaram sem erros nesta verificacao.
- Nenhuma screenshot foi gerada, conforme a instrucao do refinamento.

## Checkpoint 5 - Structural Completion
- FAQ implementado em composicao editorial assimetrica, com introducao nas colunas 1-4 e accordion nas colunas 6-12 em desktop.
- Quatro respostas confirmadas pelo Home Spec sao publicadas. Duracao e agendamento permanecem rastreados como `null` nos dados e nao aparecem para o visitante.
- Final CTA implementado em canvas escuro com copy integral do Home Spec. A acao de WhatsApp permanece omitida enquanto a URL nao estiver configurada.
- Footer implementado como continuidade do CTA, com brand, navegacao real e copyright dinamico. CRP, contato e links legais inexistentes nao sao renderizados.
- Navbar corrigida para os dois modos oficiais: navegacao completa em `>=1280px` e menu em `<1280px`.
- Active state usa underline Rose Clay e `aria-current`; o marcador deriva da altura computada da Navbar e do token de spacing.
- Links de ancora usam uma unica regra de `scroll-margin-top`; todos os destinos da Navbar e do Footer existem.
- Menu mobile fecha por Escape e devolve foco ao trigger; selecao de link preserva o destino do scroll.
- Placeholders clinicos sensiveis deixaram de ser publicados. A secao Therapy Relevance permanece estruturalmente presente, aguardando demandas confirmadas.
- Nenhuma fotografia foi gerada, substituida ou removida. Nenhuma screenshot foi criada neste checkpoint.

## Checkpoint 5 QA
- `pnpm typecheck`, `pnpm lint` e `pnpm build` passaram.
- Browser validado em 1440, 1280, 1024, 768, 480 e 390px sem overflow horizontal.
- DOM final: exatamente um H1, sete H2, `#faq`, `#contato`, Footer e tres ProcessStep.
- Todos os anchors internos resolvem para IDs reais.
- Accordion validado com Space e Enter; `aria-expanded` e regiao associada sincronizados; focus-visible presente.
- Menu mobile validado com Escape, bloqueio/desbloqueio de scroll e retorno de foco.
- Active state e compensacao da Navbar confirmados em `#faq`.
- Console do browser sem erros ou warnings.

## Exact Next Step
Aguardar aprovacao do Checkpoint 5. A Home esta **STRUCTURALLY COMPLETE**; a proxima fase autorizada futuramente sera conteudo confirmado e sistema fotografico.

## Footer Credit
- Adicionado o credito institucional `Desenvolvido por Offdata` na regiao inferior existente do Footer.
- O anchor text e exclusivamente `Offdata` e aponta para `https://www.offdata.digital` em nova aba com `rel="nofollow noopener noreferrer"`.
- Desktop preserva copyright a esquerda e credito a direita; mobile empilha os dois textos na mesma regiao.
- O credito reutiliza `type-caption`, `--text-inverse`, spacing tokens e underline apenas em hover/focus.
- Nenhuma outra secao, conteudo, cor, tipografia ou estrutura da Home foi alterada.
- `pnpm typecheck`, `pnpm lint` e a build de producao passaram.
- Browser validado em 1440 e 390px: sem overflow horizontal e sem erros ou warnings no console.
- `href`, `target="_blank"`, `rel`, `aria-label` e anchor text foram confirmados no DOM.
- Nenhuma screenshot foi gerada.

## Initial GitHub / Vercel Deployment
- Data do deploy: 23/09/2026.
- Repository: `https://github.com/silvarodrigueswender30-del/janyne-site.git`.
- Branch: `main`.
- Commit estrutural: `e404d73b2f15bf2dc6a871f82abe8f74d46730ba` (`feat: complete Janyne website home structure`).
- GitHub push: concluido com sucesso, sem force push; `main` acompanha `origin/main`.
- Vercel team: `silvarodrigueswender30-dels-projects`.
- Vercel project: `janyne-site` (`prj_XRt3X7hSHmEXxlez2LbS6XxZZ5up`).
- Production URL: `https://janyne-site.vercel.app`.
- Framework Preset: Next.js.
- Root Directory: `site`.
- Build status: Ready; build de producao concluida com sucesso pela Vercel.
- Git integration: repositorio GitHub conectado; pushes em `main` alimentam Production.
- Arquivos privados excluidos: `arquivos/`, `Mokap/`, `.env*`, `.vercel/`, `node_modules/`, `.next/`, builds, logs e backup local do Git interno.
- O commit inicial automatico do Create Next App foi preservado no historico do repositorio raiz.

## Hero Photography Integration
- Master utilizado: `imagens/hero1.png` (PNG RGBA com transparencia real), preservado sem alteracoes.
- Dimensoes originais: 1122 x 1402 px.
- Derivado web: `site/public/images/hero/janyne-hero.avif`, 1122 x 1402 px, 131.695 bytes, qualidade 80, com canal alpha preservado (0-255).
- Componente alterado: `site/src/components/sections/Hero.tsx`; o `ImageFrame` foi substituido apenas na Hero por `next/image`, com dimensoes intrinsecas, priority, `contain` e alinhamento inferior.
- CSS alterado: `site/src/app/globals.css`; o palco da imagem permanece transparente, sem background, borda, radius ou sombra.
- Estrutura 5+1+6, copy, CTAs, breakpoints, Navbar e cards flutuantes foram preservados. Os slots About e Psicoterapia nao foram alterados.
- QA tecnico concluido em 1440, 1280, 1024, 768, 480 e 390 px: zero overflow horizontal; imagem completa e proporcional; wrapper transparente, sem borda, radius ou sombra; cards e Navbar preservados; ordem mobile correta; placeholder ausente; priority presente; alt exato; apenas o AVIF da Hero carregado; console sem erros ou warnings.
- `pnpm typecheck`, `pnpm lint` e `pnpm build` passaram. Nenhuma screenshot foi gerada.
`n## Hero Atmospheric Visual Prototype`n- Gradients aplicados: 4 radial-gradients (Rose Clay haze + Earthen Umber density + warm corner lift + left-edge depth) sobre base Obsidian, sem novos HEX fora da paleta oficial.`n- Textura aplicada: SVG fractalNoise data URI (320x320, stitched), pseudo-elemento ::after, opacity 0.025, mix-blend-mode soft-light. Peso zero, sem asset externo.`n- Drop-shadow aplicado: duas camadas (contact + ambient scatter), drop-shadow(0 16px 24px rgba(20,17,16,0.14)) + drop-shadow(0 40px 64px rgba(20,17,16,0.07)).`n- Arquivo alterado: site/src/app/globals.css apenas. Hero.tsx nao alterado.`n- canvas-dark alterado de background para background-color para nao sobrescrever gradients do hero.`n- Responsividade: gradients reposicionados para centro em max-width 1023px (layout empilhado mobile/tablet).`n- QA estrutural: typecheck passou, lint passou. Nenhuma screenshot gerada.`n- Resultado: pronto para avaliacao visual manual em http://127.0.0.1:3000`n- Status: PROTOTIPO - nao propagado para outras secoes. Aguardando aprovacao do usuario.
`n## About Photography Integration (JP-ABOUT-02)`n- Master: imagens/sessao2.png � PNG RGBA, 1086 x 1448 px, alpha 0-255, 1.323.959 bytes. Preservado sem alteracoes.`n- Derivado web: site/public/images/about/janyne-about.avif � 1086 x 1448 px, RGBA, 152.331 bytes, qualidade 82.`n- Componente alterado: site/src/components/sections/About.tsx; ImageFrame placeholder removido; next/image integrado com width/height intrinsecos, contain, bottom align, sizes responsivo.`n- CSS adicionado: site/src/app/globals.css � .about-image-stage (aspect-ratio 3/4, transparente) e .about-image-cutout (contain + bottom).`n- Alt: 'Janyne Porfirio em pe ao lado de uma poltrona'.`n- Canvas Alabaster aparece atraves das areas transparentes. Sem background, border, radius ou shadow no wrapper.`n- Responsividade: mobile ordem DOM preservada (about-copy antes de about-image); 768-1023px ambos full-width; >=1024px about-image col 1-5 / about-copy col 7-12.`n- QA: typecheck passou, lint passou. Nenhuma screenshot gerada.`n- Status: PRONTO PARA AVALIACAO VISUAL MANUAL em http://127.0.0.1:3000`n- Proxima etapa: refinamento atmosf�rico do About (aguardando aprovacao visual do usuario).

## About Atmospheric Refinement (JP-ABOUT-02)
- Escala ajustada: scale(1.20) translateX(-5%) em >=1280px; scale(1.12) translateX(-4%) em 1024-1279px; sem transform em <1024px.
- Posicionamento: transform-origin center bottom preserva alinhamento de pés e poltrona.
- Gradients aplicados: 4 radial-gradients (Rose Clay haze + Muted Linen density + Alabaster bright wash + warm density) sobre base Alabaster.
- Grain aplicado: SVG fractalNoise data URI, opacity 0.018, mix-blend-mode multiply (mais quieto que o Hero).
- Drop-shadow: não aplicado nesta etapa (aguardando avaliação visual).
- about-section class adicionada ao <section>; bg-background-primary removida (substituída pelo gradiente explícito com Alabaster base).
- Gradientes responsivos: @media (max-width: 1023px) reposiciona halo para centro-baixo (acompanha Jenny empilhada).
- Arquivos alterados: site/src/components/sections/About.tsx, site/src/app/globals.css.
- QA: typecheck passou, lint passou, build passou.
- Status: PRONTO PARA AVALIACAO VISUAL MANUAL em http://127.0.0.1:3000
- Proxima etapa: refinamento adicional baseado em feedback visual do usuario.

## Therapy Relevance Photography Integration
- Master: imagens/atendimento.png — PNG RGBA, 1672 x 941 px, alpha 0-255, 1.318.238 bytes. Preservado sem alteracoes.
- Derivado web: site/public/images/relevance/janyne-atendimento.avif — 1672 x 941 px, RGBA, 131.071 bytes, qualidade 82.
- Componente alterado: site/src/components/sections/TherapyRelevance.tsx.
- Classe substituida: relevance-grid--pending -> relevance-grid--photo.
- next/image com dimensoes intrinsecas, contain, right-bottom align, sem priority (abaixo da dobra).
- CSS adicionado: globals.css — relevance-visual, relevance-image-stage (16/9), relevance-image-cutout; grid --photo (texto col 1-5, imagem col 6-12 em >=1024px).
- Alt: Janyne Porfirio sentada a mesa durante um momento de atendimento.
- Canvas Muted Linen da seccao aparece atraves das areas transparentes. Sem background, border ou radius no wrapper.
- Responsividade: <1024px empilha texto-imagem; imagem full-width com aspect-ratio 16/9 e contain.
- QA: typecheck passou, lint passou. Nenhuma screenshot gerada.
- Proxima etapa: refinamento atmosferico da secao (aguardando aprovacao visual).
