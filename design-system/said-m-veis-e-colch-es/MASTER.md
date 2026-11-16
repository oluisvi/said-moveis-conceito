# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Said Móveis e Colchões
**Generated:** 2026-11-16 12:59:01
**Category:** Home Decoration & Interior Design

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#78716C` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#A8A29E` | `--color-secondary` |
| On Secondary | `#000000` | `--color-on-secondary` |
| Accent/CTA | `#D97706` | `--color-accent` |
| On Accent/CTA | `#000000` | `--color-on-accent` |
| Background | `#FAF5F2` | `--color-background` |
| Foreground | `#0F172A` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Card Foreground | `#0F172A` | `--color-card-foreground` |
| Muted | `#F6F6F6` | `--color-muted` |
| Muted Foreground | `#475569` | `--color-muted-foreground` |
| Border | `#EEEDED` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#78716C` | `--color-ring` |

**Color Notes:** Interior warm grey + gold accent

### Typography

- **Heading Font:** Rubik
- **Body Font:** Nunito Sans
- **Mood:** ecommerce, clean, shopping, product, retail, conversion
- **Google Fonts:** [Rubik + Nunito Sans](https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #D97706;
  color: #000000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F172A;
  border: 2px solid #78716C;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FAF5F2;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #78716C;
  outline: none;
  box-shadow: 0 0 0 3px #78716C20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Minimalism & Swiss Style

**Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential

**Best For:** Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools

**Key Effects:** Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

### Page Pattern

**Pattern Name:** Scroll-Triggered Storytelling

- **Conversion Strategy:** Keep the narrative understandable without scroll-driven effects. Use progress indicator. Mobile: simplify animations. Keep DOM reading order complete; disable parallax and scroll-scrub under reduced motion. Pause scroll animation when offscreen or hidden and render each chapter in its final readable state under reduced motion.
- **CTA Placement:** End of each chapter (mini) + Final climax CTA
- **Section Order:** Intro hook > Chapter 1 (problem) > Chapter 2 (journey) > Chapter 3 (solution) > Climax CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Excessive decoration

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile


## Direção autoral confirmada — substitui os padrões genéricos acima

O arquivo foi gerado por busca automatizada e a seção acima é somente uma sugestão inicial. Para esta vitrine, aplicar os tokens e regras abaixo, definidos a partir da Said, da cena ilustrativa e do objetivo local de visita/contato:

### Paleta

| Papel | Token | Cor |
|---|---|---|
| Petróleo estrutural | `--petrol` | `#18383B` |
| Petróleo profundo | `--petrol-deep` | `#10292C` |
| Tinta | `--ink` | `#182C2E` |
| Papel quente | `--paper` | `#F2EEE5` |
| Papel claro | `--paper-light` | `#FAF8F2` |
| Argila / ligação | `--clay` | `#C45D3E` |
| Folha | `--leaf` | `#687660` |
| Linha de costura / luz | `--sun` | `#E7B54D` |

### Tipografia e composição

- Títulos: Barlow Condensed, maiúsculas curtas, grandes e compactas; evitar parágrafos longos em caixa alta.
- Texto e botões: Manrope; etiquetas e fatos: IBM Plex Mono, pequeno mas legível.
- Largura centralizada e margens largas; hero fotográfico de tela ampla; blocos assimétricos de descoberta e visita; ordenar o conteúdo mobile com contato sempre fácil de alcançar.
- A página usa uma única cena de sala gerada para a apresentação e um diagrama vetorial de localização sem escala. Não repetir a cena como produto ou sugerir que represente a loja/estoque.

### Assinatura e interação

- A “linha de costura” pontilhada, derivada da costura de estofados, atravessa a narrativa visual do aniversário ao convite de contato.
- A escolha por abas entre “Móveis” e “Colchões” é a interação funcional principal; precisa operar por clique e teclado, refletir seleção por ARIA e continuar compreensível sem animação.
- Não usar scroll-scrub, 3D, WebGL ou vídeo em autoplay. A página é uma vitrine de bairro; movimento é mínimo e dispensável.

### Conteúdo confirmado e limites

- Confirmados na ficha do lead: loja de móveis e colchões, Centro de Jacareí, Rua Dr. Lúcio Malta, 205; Instagram `@said.moveis`; WhatsApp público `+55 12 98190-5968`; horários publicados e a comemoração dos 11 anos em novembro de 2026.
- Catálogo, modelos, preços, condições, estoque, política de entrega, fotos de produtos e identidade visual oficial não foram confirmados. Não inventar nem atribuir material conceitual à loja.
- Identificar a peça como estudo independente, não oficial e ainda sem aprovação. Marcar a arte gerada e o diagrama como ilustrativos.

### Qualidade

Contraste legível; foco visível; alvos táteis com ao menos 44px; ordem de leitura correta; no mínimo 375px de viewport; links reais para Instagram, WhatsApp e Maps; `prefers-reduced-motion`; nenhum CTA sem ação.