---
theme: ./
title: JYU Theme Demo
download: false
exportFilename: jyu-theme-demo
---

# Welcome to JYU Theme

**University of Jyväskylä** — Slidev Theme

A modern academic theme with navy & gold branding

---

# Agenda

- Brand colors and typography
- Available layouts
- Code highlighting
- Dark mode preview
- Custom components

---
layout: section
---

# Brand Identity

The University of Jyväskylä visual language

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#002957` | Primary text, section backgrounds |
| Gold | `#C29A5B` | Accents, highlights, decorative bars |
| Sand | `#EDE1CE` | Warm backgrounds |
| Orange | `#F1563F` | Links, CTA, emphasis |
| Steel | `#6B7F97` | Secondary text |
| Coral | `#EA9D90` | Warm accents |

---
layout: cover
---

# Typography

Heading: **Aleo** (serif) &nbsp;&middot;&nbsp; Body: **Lato** (sans-serif) &nbsp;&middot;&nbsp; Code: **Fira Code** (monospace)

---
layout: statement
---

# "The best presentations are the ones people actually remember"

---
layout: fact
---

# 16,000+

students at the University of Jyväskylä

---
layout: two-cols
---

# Two Column Layout

Perfect for comparing concepts or pairing text with code.

- Clean and readable
- Balanced proportions
- Responsive spacing

::right::

## Code Example

```python
from university import JYU

def research(topic: str) -> dict:
    """Explore a research topic."""
    return JYU.analyze(topic, method="mixed")

results = research("AI in Education")
print(f"Found {len(results)} insights")
```

---

## Available Layouts

1. **`cover`** — Title slide with gold accent
2. **`section`** — Full navy section divider
3. **`statement`** — Big centered quote
4. **`fact`** — Large number with label
5. **`two-cols`** — Split content layout
6. **`image-right`** — Text left, image right
7. **`end`** — Closing / thanks slide

---
layout: quote
---

<blockquote>
Education is the most powerful weapon which you can use to change the world.
<br><em>— Nelson Mandela</em>
</blockquote>

---

# Image Layout Demo

Content on the left, image or visual element on the right.

Use the `::image::` slot to place images, diagrams, or decorative elements.

---
layout: image-right
---

# Image Right Layout

Content appears on the left while the image slot fills the right column.

::image::

<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:2rem">
  <div style="width:260px;height:260px;border-radius:16px;background:linear-gradient(135deg,#002957,#1a4f8a);display:flex;align-items:center;justify-content:center;color:#C29A5B;font-family:'Aleo',serif;font-size:3rem;font-weight:800;box-shadow:0 8px 32px rgba(0,41,87,0.3)">
    JYU
  </div>
</div>

---
layout: section
---

# Dark Mode Preview

Switch using the theme toggle in the bottom-right corner

---
layout: cover
---

# Light Mode Features

Navy headings, gold accents, and clean typography on a crisp white background.

---
layout: end
---

# Thank You

Questions? **contact@jyu.fi**
