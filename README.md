# slidev-theme-jyu

JYU (University of Jyväskylä) theme for [Slidev](https://sli.dev/).

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Navy `--jyu-navy` | `#002957` | Primary text, headings (light), backgrounds (dark) |
| Gold `--jyu-gold` | `#C29A5B` | Accents, headings (dark), decorative bars |
| Sand `--jyu-sand` | `#EDE1CE` | Warm backgrounds, alternate bg |
| Orange `--jyu-orange` | `#F1563F` | Links, highlights, call-to-action |
| Steel `--jyu-steel` | `#6B7F97` | Secondary text, subtle elements |
| Coral `--jyu-coral` | `#EA9D90` | Warm accent, tertiary elements |
| Silver `--jyu-silver` | `#B2BFCD` | Muted text, dividers |

## Typography

- **Headings**: Aleo (serif) — from the JYU brand
- **Body**: Lato (sans-serif) — from the JYU brand
- **Code**: Fira Code

## Layouts

- `cover` — Title slide with gold accent bar
- `intro` — Section divider (full navy background)
- `section` — Section header (light bg, gold bar)
- `default` — Standard content slide (left navy stripe)
- `two-cols` — Two-column split
- `three-cols` — Three-column cards
- `statement` — Big centered text
- `quote` — Blockquote with gold left border
- `image-right` — Content left, image right
- `image-left` — Image left, content right
- `end` — Thank you / closing slide

## Usage

```yaml
---
theme: ./path/to/slidev-theme-jyu
title: My Talk
---
```

## Preview

```bash
npm install
npx slidev --open
```

Toggle dark mode in the Slidev UI or set `colorSchema: dark` in frontmatter.
