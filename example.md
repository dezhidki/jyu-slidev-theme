---
# Learn more: https://sli.dev
theme: ./
title: JYU Theme Demo
info: |
  Demo slides for the JYU Slidev theme
---

# Welcome to JYU Theme

**University of Jyväskylä** — Slidev Theme Demo

---

# Agenda

- Brand colors and typography
- Layouts
- Code highlighting
- Dark mode
- Custom components

---
layout: section
---

# Brand Identity

The University of Jyväskylä visual language

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#002957` | Primary backgrounds, text |
| Gold | `#C29A5B` | Accents, highlights |
| Sand | `#EDE1CE` | Warm backgrounds |
| Orange | `#F1563F` | Call-to-action, links |
| Steel | `#6B7F97` | Secondary text |
| Coral | `#EA9D90` | Warm accents |

---

## Typography

**Headings**: Aleo — a sturdy, legible serif

**Body text**: Lato — warm, humanist sans-serif

**Code**: Fira Code — developer-friendly monospace

> Good typography makes content readable. Great typography makes it memorable.

---
layout: statement
---

# The best presentations are the ones people remember

---
layout: fact
---

# 16,000+

students

---
layout: two-cols
---

# Two Columns

Left column for your main content, bullet points, and explanations.

- Clean layout
- Responsive design
- Easy to customize

::right::

# Code Example

\`\`\`python
from university import JYU

def research(topic: str) -> str:
    """World-class research."""
    return JYU.explore(topic)

result = research("AI in Education")
print(f"Finding: {result}")
\`\`\`

---
layout: cover
---

# Second Section

Subtitle goes here with additional context

---

# Slidev Features

- **Markdown-based** — Write slides in Markdown
- **Code Highlighting** — Syntax highlighting with Shiki
- **Dark Mode** -- Built-in light/dark toggle
- **Presenter Mode** -- Speaker notes and timer
- **LaTeX** -- Math rendering with KaTeX
- **Diagrams** -- Mermaid, PlantUML support

---

# Inline Code & Math

The function $f(x) = \sum_{i=0}^{n} a_i x^i$ is fundamental.

Use \`code blocks\` for commands:

\`\`\`bash
npx slidev
\`\`\`

---
layout: quote
---

<blockquote>
  Education is the most powerful weapon which you can use to change the world.
  <br><em>— Nelson Mandela</em>
</blockquote>

---
layout: image-right
---

# Image Layout

Place your image on the right side using the \`image-right\` layout.

This creates a clean split between text content and visual media.

::image::

<div style="display:flex;align-items:center;justify-content:center;height:100%">
  <div style="width:300px;height:300px;border-radius:12px;background:var(--jyu-navy);display:flex;align-items:center;justify-content:center;color:white;font-family:Aleo,serif;font-size:3rem">
    JYU
  </div>
</div>

---
layout: section
---

# Thank You!

**Questions?**

contact@jyu.fi