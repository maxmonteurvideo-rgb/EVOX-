# Brand Book — EVOX

## Identity

EVOX est une agence de création de Meta Ads premium pour les artisans, formateurs et agences immobilières. Le service est turnkey : script, tournage, montage. Le site est une landing page sobre, premium, qui inspire confiance immédiatement. Pas de tendance "new gen", pas de dégradés flashy, pas de glassmorphism. L'esthétique est **éditoriale, épurée, haut de gamme**.

---

## Design Principles

1. **Clarté absolue** — Chaque section a un objectif unique. Pas de bruit visuel, pas de décoration gratuite. Le visiteur comprend l'offre en 5 secondes.
2. **Premium par la retenue** — Le luxe se communique par l'espace, la typographie et la précision, jamais par l'accumulation d'effets.
3. **Preuve avant promesse** — Les résultats et le travail parlent. Le copy est factuel, direct, sans superlatifs vides.
4. **Lisibilité totale** — Contrastes forts entre fond clair et texte sombre. Pas de texte gris clair sur fond blanc. Chaque mot est lisible sans effort.

---

## Color Palette

### Backgrounds (tons clairs, blanc cassé)

| Token                | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `--bg-primary`       | `#F8F7F4` | Fond principal du site (blanc cassé chaud)  |
| `--bg-surface`       | `#FFFFFF` | Cards, modales, éléments surélevés          |
| `--bg-section-alt`   | `#F1F0EB` | Sections alternées pour rythme visuel       |
| `--bg-subtle`        | `#E8E6DF` | Hover states, séparateurs subtils           |

### Text & Accent (dégradé bleu foncé)

| Token                | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `--text-primary`     | `#0B1D33` | Titres, texte principal (bleu nuit profond) |
| `--text-secondary`   | `#3D5A80` | Sous-titres, texte secondaire (bleu moyen)  |
| `--text-muted`       | `#8A9AB5` | Labels, captions, metadata                  |
| `--text-light`       | `#B0BEC5` | Placeholders, texte désactivé              |

### Gradient (accent signature)

| Token                | Value                                            | Usage                              |
| -------------------- | ------------------------------------------------ | ---------------------------------- |
| `--gradient-heading`  | `linear-gradient(135deg, #0B1D33 0%, #1A3A5C 40%, #2E6B9E 100%)` | Titres principaux en dégradé |
| `--gradient-accent`   | `linear-gradient(135deg, #1A3A5C 0%, #2E6B9E 100%)` | CTA, éléments d'accentuation    |

### Utility

| Token                | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `--border`           | `#E0DED7` | Bordures de cards et séparateurs            |
| `--border-subtle`    | `#ECEAE3` | Bordures très légères, dividers             |
| `--accent-blue`      | `#2E6B9E` | Liens, icônes actives, éléments interactifs |
| `--accent-blue-hover`| `#1A3A5C` | Hover sur éléments interactifs              |
| `--shadow-sm`        | `0 1px 3px rgba(11,29,51,0.04)` | Ombre légère cards           |
| `--shadow-md`        | `0 4px 16px rgba(11,29,51,0.06)` | Ombre moyenne éléments élevés |
| `--shadow-lg`        | `0 8px 32px rgba(11,29,51,0.08)` | Ombre forte modales/hero      |

### Rules

- Le fond du site est TOUJOURS `--bg-primary` (#F8F7F4), jamais blanc pur sauf pour les cards.
- Aucune couleur vive, saturée ou néon. Toute la palette reste dans les bleus désaturés et les crèmes.
- Le dégradé bleu est EXCLUSIVEMENT réservé aux titres principaux (H1, hero headline) et aux CTA. Ne jamais l'appliquer au body text.
- Le texte body est toujours `--text-primary` (#0B1D33) sur fond clair — contraste minimum WCAG AA.
- Pas de fond sombre. Pas de dark mode. Le site est intégralement en light mode.

---

## Typography

### Fonts

- **Display**: `Neue Haas Display Bold` — Tous les titres, headlines hero, noms de sections. Fichier : `NeueHaasDisplayBold.ttf` dans `public/fonts/`.
- **Body**: `Plus Jakarta Sans` (weights: 300, 400, 500, 600, 700) — Tout le texte courant, navigation, UI, CTA labels. Source : Google Fonts.
- **Mono** (optionnel) : `JetBrains Mono` — Chiffres de stats, données, metrics. Source : Google Fonts.
- **Fallback display** : `Helvetica Neue`, `Helvetica`, `Arial`, sans-serif
- **Fallback body** : `-apple-system`, `BlinkMacSystemFont`, sans-serif

### @font-face

```css
@font-face {
  font-family: 'Neue Haas Display';
  src: url('/fonts/NeueHaasDisplayBold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Type Scale (fluid avec clamp)

| Level     | Font              | Size                               | Line Height | Letter Spacing | Weight |
| --------- | ----------------- | ---------------------------------- | ----------- | -------------- | ------ |
| Hero      | Neue Haas Display | `clamp(2.75rem, 6vw, 5rem)`       | 1.05        | -0.03em        | 700    |
| H1        | Neue Haas Display | `clamp(2rem, 4vw, 3.25rem)`       | 1.1         | -0.02em        | 700    |
| H2        | Neue Haas Display | `clamp(1.5rem, 3vw, 2.25rem)`     | 1.15        | -0.02em        | 700    |
| H3        | Neue Haas Display | `clamp(1.25rem, 2vw, 1.5rem)`     | 1.2         | -0.01em        | 700    |
| Body      | Plus Jakarta Sans | `1rem` (16px)                      | 1.7         | 0              | 400    |
| Body-lg   | Plus Jakarta Sans | `1.125rem` (18px)                  | 1.7         | 0              | 400    |
| Small     | Plus Jakarta Sans | `0.875rem` (14px)                  | 1.6         | 0              | 500    |
| Caption   | Plus Jakarta Sans | `0.75rem` (12px)                   | 1.5         | 0.08em         | 600    |
| Stat      | JetBrains Mono    | `clamp(2rem, 4vw, 3rem)`          | 1.0         | -0.02em        | 700    |

### Heading Gradient

Les titres principaux (Hero, H1) utilisent le dégradé bleu via `background-clip: text` :

```css
.heading-gradient {
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Rules

- Neue Haas Display est UNIQUEMENT pour les titres (Hero, H1, H2, H3). JAMAIS pour du body text, des boutons, ou des labels.
- Neue Haas Display n'est JAMAIS utilisée en dessous de 1.25rem (20px).
- Le body text est TOUJOURS en Plus Jakarta Sans weight 400 (Regular).
- Les captions et labels utilisent Plus Jakarta Sans weight 600, en uppercase avec letter-spacing élargi (0.08em).
- Le texte courant a un max-width de 680px pour la lisibilité.
- Les stats et chiffres utilisent JetBrains Mono pour un aspect technique et crédible.

---

## Spacing System

Base unit : 8px. Tous les espacements utilisent ces tokens sans exception.

| Token        | Value     | Pixels | Usage                               |
| ------------ | --------- | ------ | ----------------------------------- |
| `--space-1`  | `0.25rem` | 4px    | Gaps internes serrés                |
| `--space-2`  | `0.5rem`  | 8px    | Entre éléments liés                 |
| `--space-3`  | `0.75rem` | 12px   | Padding composant petit             |
| `--space-4`  | `1rem`    | 16px   | Padding composant standard          |
| `--space-6`  | `1.5rem`  | 24px   | Groupes de composants               |
| `--space-8`  | `2rem`    | 32px   | Entre blocs de contenu              |
| `--space-12` | `3rem`    | 48px   | Entre sous-sections                 |
| `--space-16` | `4rem`    | 64px   | Padding page, gaps majeurs          |
| `--space-20` | `5rem`    | 80px   | Breathing room sections             |
| `--space-24` | `6rem`    | 96px   | Entre sections majeures             |
| `--space-32` | `8rem`    | 128px  | Hero / grandes respirations         |

### Rules

- Minimum `--space-24` (96px) entre les sections majeures du site.
- Jamais de valeurs arbitraires. Tout est mappé sur un token.
- Le blanc (espace négatif) est un élément de design, pas du vide. En cas de doute, ajouter plus d'espace.
- Padding horizontal de page : `clamp(24px, 5vw, 80px)`.

---

## Border Radius

| Token           | Value  | Usage                           |
| --------------- | ------ | ------------------------------- |
| `--radius-none` | `0px`  | Éléments à angles vifs          |
| `--radius-sm`   | `4px`  | Tags, badges, petits éléments   |
| `--radius-md`   | `8px`  | Cards, inputs                   |
| `--radius-lg`   | `12px` | Cards principales, CTA          |
| `--radius-xl`   | `16px` | Containers, sections highlights |
| `--radius-full` | `999px`| Pills, avatars                  |

### Rules

- Le site utilise des radius modérés. Pas de coins ultra-arrondis (24px+) sur les grandes surfaces.
- Les cards de portfolio utilisent `--radius-md` (8px).
- Les CTA utilisent `--radius-lg` (12px).
- Cohérence : tous les éléments d'un même groupe partagent le même radius.

---

## Components

### CTA Principal

```css
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 14px 32px;
  border-radius: var(--radius-lg);
  background: var(--gradient-accent);
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem; /* 15px */
  letter-spacing: 0.02em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}
.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  filter: brightness(1.1);
}
```

### CTA Secondaire (outline)

```css
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 14px 32px;
  border-radius: var(--radius-lg);
  background: transparent;
  color: var(--text-primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.02em;
  border: 1.5px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
}
.cta-secondary:hover {
  border-color: var(--accent-blue);
  color: var(--accent-blue);
  transform: translateY(-2px);
}
```

### Card

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Section Label (micro-titre au-dessus des H2)

```css
.section-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-blue);
  margin-bottom: var(--space-3);
}
```

### Stat Block

```css
.stat-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1;
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: var(--space-2);
}
```

### Divider

```css
.divider {
  height: 1px;
  background: var(--border);
  width: 100%;
  margin: var(--space-24) 0;
}
```

---

## Motion & Animation

### Principles

- Les animations sont **subtiles et fonctionnelles**. Pas d'effets spectaculaires ou de bounces.
- Chaque animation a un but : guider l'œil, confirmer une interaction, révéler du contenu.
- Durée standard : 300-500ms. Rien en dessous de 150ms, rien au-dessus de 800ms.

### Easing

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --transition-fast: 150ms ease;
  --transition-base: 300ms var(--ease-out);
  --transition-slow: 500ms var(--ease-out);
}
```

### Scroll Reveal

Les éléments apparaissent au scroll avec un fade-up léger :

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Utiliser `IntersectionObserver` avec `threshold: 0.15` pour déclencher `.visible`.

### Rules

- Pas de parallax. Pas de scroll hijacking. Pas d'animations au survol qui bougent le layout.
- Les hover states sont limités à : opacity, translateY(-2px), color change, box-shadow.
- Stagger les reveals de 80ms entre éléments d'un même groupe (cards, stats).
- Pas d'animation sur le texte body. Uniquement sur les titres, cards, images et CTA.

---

## Images & Media

### Thumbnails / Portfolio

- Ratio : 16:9 pour les vidéos, 4:5 pour les créas Meta Ads.
- Border-radius : `--radius-md` (8px).
- Pas de bordure visible sur les images. L'ombre suffit.
- Sur hover : léger scale (1.03) avec `overflow: hidden` sur le container.

```css
.portfolio-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.portfolio-item img {
  transition: transform 0.5s var(--ease-out);
}
.portfolio-item:hover img {
  transform: scale(1.03);
}
```

### Rules

- Toutes les images sont en `object-fit: cover`.
- Pas de filtres CSS sur les images (pas de grayscale, pas de blur).
- Les placeholders d'image utilisent `--bg-section-alt` comme fond.
- Les vidéos embed utilisent un aspect-ratio container, jamais d'iframe brut.

---

## Layout

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px);
}
```

### Grid

- Le layout principal est sur une grille de **12 colonnes** avec un gap de `--space-6` (24px).
- Les sections de contenu ne dépassent jamais `max-width: 1200px`.
- Le texte courant ne dépasse jamais `max-width: 680px`.

### Responsive Breakpoints

| Breakpoint | Value   | Usage             |
| ---------- | ------- | ----------------- |
| Mobile     | `640px` | Stack tout        |
| Tablet     | `768px` | 2 colonnes        |
| Desktop    | `1024px`| Layout complet    |
| Wide       | `1280px`| Max container     |

### Rules

- Mobile-first. Toutes les media queries utilisent `min-width`.
- Sur mobile (<640px), les grilles passent en 1 colonne.
- Le hero est pleine largeur mais le contenu reste dans `.container`.
- Pas de scroll horizontal. Jamais.

---

## Navigation

### Structure

```
Logo (gauche) — [espace] — CTA principal (droite)
```

La nav est minimaliste : logo + un seul CTA. Pas de menu hamburger, pas de liens multiples. C'est une landing page, pas un site multi-pages.

### Style

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: var(--space-4) 0;
  background: rgba(248, 247, 244, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
}
```

### Rules

- La nav est sticky avec un fond semi-transparent + blur au scroll.
- Le logo est le wordmark "EVOX" en Neue Haas Display, couleur `--text-primary`.
- Un seul CTA dans la nav, aligné à droite.
- Pas de liens de navigation. Si nécessaire plus tard, max 3 liens.

---

## Footer

### Structure

Minimaliste. Logo + tagline + liens légaux + réseaux.

### Rules

- Fond : `--bg-section-alt`.
- Texte en `--text-secondary`.
- Pas de footer massif. 1 seul bloc compact.
- Liens réseaux : icônes simples, pas de texte.

---

## Interdictions Absolues

Ces éléments sont **INTERDITS** sur l'ensemble du site :

- ❌ Dégradés multicolores ou arc-en-ciel
- ❌ Glassmorphism / frosted glass / effets blur sur les cards
- ❌ Ombres colorées (box-shadow avec des teintes)
- ❌ Néons, glow effects, text-shadow coloré
- ❌ Coins ultra-arrondis (>16px sur grandes surfaces)
- ❌ Background patterns complexes ou textures lourdes
- ❌ Parallax scrolling ou scroll hijacking
- ❌ Animations de bounce, elastic, ou spring exagérées
- ❌ Emojis dans le copy ou l'interface
- ❌ Icônes colorées ou illustrées (uniquement des icônes ligne simple)
- ❌ Stock photos ou images génériques
- ❌ Plus de 2 couleurs d'accent différentes
- ❌ Fond sombre ou dark mode
- ❌ Texte centré sur plus de 3 lignes (aligner à gauche au-delà)
- ❌ Police custom en dessous de 1.25rem

---

## CSS Variables — Fichier Complet

```css
:root {
  /* Backgrounds */
  --bg-primary: #F8F7F4;
  --bg-surface: #FFFFFF;
  --bg-section-alt: #F1F0EB;
  --bg-subtle: #E8E6DF;

  /* Text */
  --text-primary: #0B1D33;
  --text-secondary: #3D5A80;
  --text-muted: #8A9AB5;
  --text-light: #B0BEC5;

  /* Gradients */
  --gradient-heading: linear-gradient(135deg, #0B1D33 0%, #1A3A5C 40%, #2E6B9E 100%);
  --gradient-accent: linear-gradient(135deg, #1A3A5C 0%, #2E6B9E 100%);

  /* Borders */
  --border: #E0DED7;
  --border-subtle: #ECEAE3;

  /* Accent */
  --accent-blue: #2E6B9E;
  --accent-blue-hover: #1A3A5C;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(11,29,51,0.04);
  --shadow-md: 0 4px 16px rgba(11,29,51,0.06);
  --shadow-lg: 0 8px 32px rgba(11,29,51,0.08);

  /* Typography */
  --font-display: 'Neue Haas Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Type Scale */
  --fs-hero: clamp(2.75rem, 6vw, 5rem);
  --fs-h1: clamp(2rem, 4vw, 3.25rem);
  --fs-h2: clamp(1.5rem, 3vw, 2.25rem);
  --fs-h3: clamp(1.25rem, 2vw, 1.5rem);
  --fs-body: 1rem;
  --fs-body-lg: 1.125rem;
  --fs-small: 0.875rem;
  --fs-caption: 0.75rem;
  --fs-stat: clamp(2rem, 4vw, 3rem);

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 999px;

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --transition-fast: 150ms ease;
  --transition-base: 300ms var(--ease-out);
  --transition-slow: 500ms var(--ease-out);
}
```

Toutes les valeurs du design system sont centralisées ici. Ne JAMAIS utiliser de valeurs en dur dans les composants.

---

## Notes pour l'implémentation

1. Le fichier `NeueHaasDisplayBold.ttf` doit être dans `public/fonts/`.
2. Plus Jakarta Sans et JetBrains Mono sont chargés via Google Fonts (link dans le head).
3. Le site est un one-page. Pas de routing, pas de pages multiples.
4. Framework : Next.js avec Tailwind CSS. Les CSS variables sont définies dans `globals.css` et complètent Tailwind.
5. Chaque section est un composant React séparé.
6. Les images de portfolio sont des placeholders gris (`--bg-section-alt`) tant que le contenu réel n'est pas fourni.
7. Le CTA principal renvoie vers un lien WhatsApp ou Calendly (URL à définir).
8. Le site doit être 100% responsive et fonctionnel sur mobile dès le premier build.
