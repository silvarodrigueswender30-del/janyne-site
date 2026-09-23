# MindTalk — Blueprint Estrutural (Reverse Engineering Visual)

> Referência: imagem de mockup 600×1457px (página desktop longa, tema escuro, nicho psicologia/saúde mental — template "MindTalk"). Todas as cores estão marcadas `reference_only: true`. Medidas não visíveis foram marcadas `estimated`/`inferred` com nível de confiança.
>
> ⚠️ Nota rápida: este é um template comercial (marca d'água "DownloadNewThemes.com" visível no rodapé da imagem). Uso como referência estrutural para inspiração de layout é prática comum, mas vale confirmar se vocês têm licença para replicar com alta fidelidade visual antes de entregar ao cliente final — só a estrutura/ideia de grid não é problema, a reconstrução pixel-a-pixel de um design comercial pode ser.

```json
{
  "analysis_metadata": {
    "reference_image_size": { "width": 600, "height": 1457, "unit": "px" },
    "note": "Dimensão do arquivo de referência, não do site real",
    "inferred_desktop_width": { "value": 1440, "unit": "px", "source": "inferred", "confidence": "medium" },
    "theme": "dark, psychology/mental health institutional site"
  },

  "page_overview": {
    "section_order": [
      "header", "hero", "logo_strip", "about", "why_choose_us",
      "services_single", "process_steps"
    ],
    "background_pattern": {
      "value": "alternância entre fundo grafite (#16171c aprox.) e fundo levemente mais escuro por seção",
      "source": "observed",
      "confidence": "medium"
    }
  },

  "global_layout_system": {
    "viewport_desktop_estimated": { "value": 1440, "unit": "px", "source": "inferred", "confidence": "medium" },
    "container_max_width": { "value": 1200, "unit": "px", "source": "estimated", "confidence": "medium" },
    "side_margin": { "value": 24, "unit": "px", "source": "estimated", "confidence": "low" },
    "grid": "CSS Grid para seções de 2 colunas (texto+imagem), Flexbox para navbar, stats e cards em linha",
    "columns_probable": 12,
    "shared_vertical_axis": {
      "value": "heading e CTA de cada seção alinham à esquerda do container; cards centralizam dentro de sua coluna",
      "source": "observed",
      "confidence": "high"
    }
  },

  "design_tokens": {
    "spacing_scale_px": [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120],
    "spacing_confidence": "medium (escala clássica 4/8, coerente com o ritmo observado entre seções)",
    "radius": {
      "radius_sm": { "value": 8, "unit": "px", "source": "estimated" },
      "radius_md": { "value": 16, "unit": "px", "source": "estimated" },
      "radius_lg": { "value": 24, "unit": "px", "source": "estimated", "note": "imagem hero e imagem de cards grandes" },
      "radius_pill": { "value": 999, "unit": "px", "source": "observed", "note": "botões CTA e badges" }
    },
    "shadows": {
      "shadow_soft": "0 4px 16px rgba(0,0,0,0.25) — cards padrão",
      "shadow_floating": "0 12px 32px rgba(0,0,0,0.35) — cards flutuantes sobre imagem (perfil, avaliação)"
    },
    "colors_reference_only": {
      "page_background": { "hex": "#15161c", "reference_only": true },
      "section_background_alt": { "hex": "#1b1c22", "reference_only": true },
      "card_background": { "hex": "#22232b", "reference_only": true },
      "primary_text": { "hex": "#f5f2ee", "reference_only": true },
      "secondary_text": { "hex": "#a9a8b0", "reference_only": true },
      "accent_highlight": { "hex": "#e8a97c", "reference_only": true, "note": "usado em palavras destacadas do heading e botões primários" },
      "button_text_on_accent": { "hex": "#1a1a1a", "reference_only": true }
    },
    "typography": {
      "display_l": { "role": "H1 hero", "size_px": 48, "line_height": 1.1, "weight": 700, "source": "estimated", "confidence": "medium" },
      "heading_2": { "role": "títulos de seção", "size_px": 34, "line_height": 1.2, "weight": 700, "source": "estimated" },
      "eyebrow": { "role": "rótulo acima do heading", "size_px": 13, "letter_spacing": "0.08em", "uppercase_or_case": "title case observado, não uppercase", "weight": 600, "color": "accent_highlight" },
      "body_m": { "size_px": 15, "line_height": 1.6, "weight": 400, "color": "secondary_text" },
      "button_text": { "size_px": 14, "weight": 600 },
      "stat_number": { "size_px": 28, "weight": 700 }
    },
    "highlight_effect": {
      "description": "Palavra isolada do heading recebe um 'chip' com fundo accent_highlight, padding curto e radius_sm, mesma baseline do texto ao redor",
      "css_approach": "span.highlight { background: var(--accent); padding: 0 8px; border-radius: 8px; box-decoration-break: clone; }",
      "source": "observed",
      "confidence": "high"
    }
  },

  "sections": [
    {
      "section_id": "header",
      "section_name": "Navbar",
      "vertical_order": 1,
      "estimated_height": { "value": 88, "unit": "px", "source": "estimated" },
      "background_type": "solid escuro, possivelmente com leve transparência sobre o hero",
      "content_width": "full-width, conteúdo interno limitado ao container",
      "column_structure": "logo | nav links (centro/direita) | CTA button",
      "alignment": "space-between",
      "primary_content": "logo MindTalk + ícone",
      "secondary_content": "Home, About Us, Our Services, Pages (dropdown)",
      "decorative_elements": "nenhum",
      "relationship_with_next_section": "sobreposta ao hero (hero_background estende atrás da navbar)",
      "sticky_behavior": { "visible_in_reference": false, "recommended_inference": "sticky on scroll com fundo sólido ao rolar" }
    },
    {
      "section_id": "hero",
      "section_name": "Hero",
      "vertical_order": 2,
      "estimated_height": { "value": 620, "unit": "px", "source": "estimated" },
      "background_type": "foto full-bleed com overlay escuro (~60% opacidade)",
      "column_structure": "2 colunas assimétricas: texto (esq, ~45%) + imagem com cards flutuantes (dir, ~50%)",
      "primary_content": "eyebrow 'Welcome To Mindtalk', H1 'The Healthy Mind Is A Wealthy Soul' (Healthy destacado), parágrafo, CTA primário + botão play circular, stats row (25+ / 7.8K+ / 99%)",
      "hero_image": {
        "aspect_ratio": "4:5 aprox., portrait",
        "border_radius": "radius_lg",
        "position": "direita, alinhada ao topo do bloco de texto"
      },
      "hero_layer_stack": [
        "background photo (z:0)",
        "dark overlay (z:1)",
        "text block (z:2)",
        "hero_image (z:2)",
        "floating_profile_card top-right sobre a imagem (z:3)",
        "floating_review_card bottom-left sobre a imagem (z:3)"
      ],
      "floating_elements": [
        {
          "id": "floating_profile_card",
          "content": "avatar + nome 'Emma Watson' + cargo 'Our CEO / Founder'",
          "shape": "pill horizontal, fundo claro contrastando com o hero escuro",
          "position": "top: ~-24px, right: ~16px (transform leve para fora da imagem)",
          "shadow": "shadow_floating"
        },
        {
          "id": "floating_review_card",
          "content": "5 estrelas + avatar group + texto '1000+ Happy Souls'",
          "shape": "card retangular, radius_md, fundo claro",
          "position": "bottom: ~-32px, left: ~-40px",
          "shadow": "shadow_floating"
        }
      ]
    },
    {
      "section_id": "logo_strip",
      "section_name": "Prova social / Trusted by",
      "vertical_order": 3,
      "background_type": "mesmo fundo da página, sem card",
      "primary_content": "texto 'Trusted By 100,245+ Mindtalk Client' centralizado, seguido de 5 logos em linha, baixa opacidade (~50%)",
      "alignment": "center"
    },
    {
      "section_id": "about",
      "section_name": "About / Quality Care",
      "vertical_order": 4,
      "column_structure": "3 blocos: coluna de mini-cards (Vision/Mission) | imagem central portrait | coluna de texto+CTA",
      "cards": ["vision_card", "mission_card"],
      "primary_content": "eyebrow 'About Us', H2 'Quality Care From Quality Experts' (Experts destacado), parágrafo, CTA secundário 'Learn More'",
      "image": { "id": "about_image", "aspect_ratio": "3:4", "border_radius": "radius_lg" }
    },
    {
      "section_id": "why_choose_us",
      "section_name": "Why Choose Us / Benefícios",
      "vertical_order": 5,
      "column_structure": "texto (eyebrow+H2+parágrafo) à esquerda, 3 cards em linha à direita/abaixo",
      "primary_content": "eyebrow 'Why Choose Us', H2 'Getting You Back In Shape' (Back destacado), parágrafo",
      "card_variant": "benefit_card",
      "cards_list": ["Personalized Care", "Free Consultation", "24/7 Good Service"]
    },
    {
      "section_id": "services_single",
      "section_name": "Single Service — Comprehensive Care",
      "vertical_order": 6,
      "column_structure": "imagem grande à esquerda com cards sobrepostos, texto à direita",
      "floating_elements": [
        { "id": "rating_card", "content": "★★★★★ (5/5) + título 'Individual Theraphy & Mental Treatment' + descrição", "position": "top-left sobre a imagem" },
        { "id": "location_badge", "content": "ícone pin + 'Location Here' + endereço", "position": "sobre a borda inferior da imagem" }
      ],
      "image": { "id": "service_image", "aspect_ratio": "16:9 wide", "border_radius": "radius_lg", "content": "mãos sobrepostas, foto de comunidade/apoio" },
      "primary_content": "eyebrow 'Single Services', H2 'Comprehensive Care For Your Mental Health' (Mental Health destacado), parágrafo"
    },
    {
      "section_id": "process_steps",
      "section_name": "Our Process",
      "vertical_order": 7,
      "primary_content": "eyebrow 'Our Process', H2 'Simple Steps To Better Mental Health' (Simple Steps destacado), parágrafo",
      "card_variant": "process_card",
      "cards_list": [
        { "step": "Step 1", "title": "Self Consultation" },
        { "step": "Step 2", "title": "Personalized Plan" },
        { "step": "Step 3", "title": "Ongoing Support" }
      ],
      "layout": "3 colunas iguais, ícone circular + label 'Step N' + título + descrição, provavelmente com linha conectora entre os steps (inferred)"
    }
  ],

  "card_variants": {
    "benefit_card": { "background": "card_background", "padding": "24px", "radius": "radius_md", "icon": "circular container, outline icon", "hover": { "recommended_inference": "leve elevação + accent border" } },
    "floating_profile_card": { "background": "claro (#fff ou #f5f2ee)", "shape": "pill", "shadow": "shadow_floating" },
    "process_card": { "background": "card_background", "layout": "vertical, ícone no topo" },
    "information_card": { "background": "card_background", "used_in": ["vision_card", "mission_card"], "layout": "ícone à esquerda + texto à direita" }
  },

  "iconography": {
    "style": "outline, stroke fino, dentro de container circular com fundo levemente diferente do card",
    "size_estimate_px": 20,
    "possible_library": "Lucide ou Phosphor (sem evidência definitiva)"
  },

  "buttons": {
    "primary": { "shape": "pill (radius_pill)", "background": "accent_highlight", "text_color": "button_text_on_accent", "padding": "14px 28px", "icon": "seta, à direita" },
    "play_button": { "shape": "circular", "background": "outline claro sobre fundo escuro", "size_px": 48 },
    "secondary_learn_more": { "shape": "pill", "background": "accent_highlight", "same_as": "primary" }
  },

  "ux_patterns": {
    "visible_in_reference": ["cards flutuantes sobrepostos à imagem hero", "highlight de palavra no heading", "badges com ícone"],
    "recommended_inference": ["hover elevation em cards", "sticky navbar", "reveal-on-scroll suave", "animated counters nas estatísticas"]
  },

  "responsive_strategy": {
    "desktop_large": ">=1440px — container 1200px",
    "tablet_768_1023": "colunas de 2 viram empilhadas; cards flutuantes do hero passam a ficar dentro do fluxo (não absolutos)",
    "mobile_below_480": "stats em grid 3 colunas compactas ou 1 coluna; nav vira menu hambúrguer; imagens perdem overlap"
  },

  "accessibility": {
    "notes": "H1 único no hero, ordem semântica de headings por seção, contraste do texto secundário sobre fundo escuro deve ser checado (atualmente próximo do limite AA), áreas de toque de botões >=44px, prefers-reduced-motion para qualquer reveal/counter"
  },

  "react_component_architecture": {
    "Page": {},
    "Header": { "props": ["navLinks", "ctaLabel"] },
    "HeroSection": { "children": ["HeroFloatingProfileCard", "HeroFloatingReviewCard", "StatsRow"] },
    "LogoStrip": {},
    "AboutSection": { "children": ["InfoCard (Vision/Mission)"] },
    "WhyChooseUsSection": { "children": ["BenefitCard x3"] },
    "SingleServiceSection": { "children": ["RatingCard", "LocationBadge"] },
    "ProcessSection": { "children": ["ProcessCard x3"] }
  },

  "implementation_notes": [
    "Preservar: composição do hero com cards sobrepostos, alternância de fundo entre seções, grid assimétrico texto+imagem, cards de processo em 3 etapas, efeito de highlight na tipografia.",
    "Cores, fotos, textos e ícones devem ser completamente substituídos pela identidade da Jenny.",
    "Medidas de espaçamento e tipografia são estimativas de boa-fé a partir de uma imagem de 600px de largura — vale validar com um export em resolução maior se precisar de precisão pixel-perfect."
  ],

  "uncertainties": [
    "Largura real do site original não é conhecida (apenas a imagem de referência em 600px).",
    "Comportamento de hover, sticky nav e animações não são observáveis numa imagem estática — todos marcados como inferência.",
    "Fonte tipográfica exata não identificável a partir da imagem; sugerido usar uma sans-serif geométrica similar (ex: Poppins, Sora) mantendo apenas a escala e o ritmo."
  ]
}
```

## IMPLEMENTATION SUMMARY

**1. Mais importante preservar:** hero com cards flutuantes sobrepostos, alternância clara entre fundo escuro e cards elevados, grid assimétrico texto+imagem repetido nas seções About e Serviço, processo em 3 etapas numeradas, o efeito de "chip" destacando uma palavra do heading em cada seção, e o ritmo consistente de espaçamento entre eyebrow → heading → body → CTA.

**2. Fácil de personalizar para a Jenny:** paleta de cores, fotografias (retrato dela, sessões de terapia, ambiente do consultório no Rio), textos/copy, logo, ícones dos cards de benefícios, nome e depoimentos.

**3. Mais difícil de reproduzir:** o posicionamento preciso dos cards flutuantes do hero (exige testar em diferentes tamanhos de tela para não quebrar), e o efeito de overlap da imagem de serviço com o card de avaliação e o badge de localização.

**4. Maior atenção no mobile:** os elementos flutuantes/absolutos do hero e da seção de serviço precisam sair do posicionamento absoluto e entrar no fluxo normal; os 3 cards de benefícios e os 3 steps do processo devem empilhar sem perder a leitura da numeração.

**5. Inconsistências/limitações do mockup:** imagem de referência em baixa largura (600px) limita a precisão de medidas finas (gaps, tamanhos de fonte exatos); não há visão da seção de rodapé nem de estados de hover/erro de formulário.

**6. Confiabilidade das medidas:** alta confiança na estrutura de seções, ordem do conteúdo e padrão de cards (claramente observáveis). Baixa/média confiança em valores exatos de padding, tamanho de fonte em px e espaçamento — todos tratados como estimativas para servir de ponto de partida, não como valores finais.
