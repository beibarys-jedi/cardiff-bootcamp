# 🎨 CSS Fundamentals

### Web Development · 40 min lesson

---

## 📋 Agenda

| #   | Topic                | Time  |
| --- | -------------------- | ----- |
| 1   | What is CSS?         | 3 min |
| 2   | Selectors            | 7 min |
| 3   | Box Model            | 7 min |
| 4   | Colours & Typography | 5 min |
| 5   | Layout: Flexbox      | 8 min |
| 6   | Responsive Design    | 5 min |
| 7   | Live Examples + Q&A  | 5 min |

> **Goal:** By the end, you'll be able to style a real webpage from scratch.

---

## 1. What is CSS?

**CSS** (Cascading Style Sheets) controls the **visual presentation** of HTML elements. Created by Håkon Wium Lie in 1994.

> 💡 Think of it this way: HTML is the skeleton, CSS is the clothing and makeup.

### Three ways to apply CSS

```html
<!-- ❌ Inline — not recommended -->
<p style="color: red; font-size: 18px;">Hello</p>

<!-- 🟡 Internal — OK for quick demos -->
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>

<!-- ✅ External — best practice -->
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

### Why separate CSS from HTML?

```html
<!-- index.html — structure only -->
<article>
  <h1>Welcome to Cardiff</h1>
  <p>The capital city of Wales.</p>
</article>
```

```css
/* style.css — presentation only */
article {
  background: #f0f4ff;
  padding: 20px;
  border-radius: 8px;
}

h1 {
  color: #c8102e;
}
p {
  font-size: 18px;
  line-height: 1.6;
}
```

**Benefits of separation:**

- Change the look of an entire website by editing one file
- HTML stays clean and semantic
- Multiple pages share the same stylesheet
- Teams can work on HTML and CSS independently

---

## 2. CSS Selectors

Selectors are how you "target" the elements you want to style.

### Basic selectors

```css
/* Element selector — applies to ALL <p> tags */
p {
  color: #333333;
  margin-bottom: 16px;
}

/* Class selector — applies to class="card" (reusable!) */
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/* ID selector — applies to id="header" (unique per page!) */
#header {
  background: #c8102e;
  height: 80px;
}
```

### Combinators & pseudo-classes

```css
/* Descendant — targets <a> only inside .nav */
.nav a {
  color: white;
  text-decoration: none;
}

/* Child — targets direct children only */
.menu > li {
  list-style: none;
}

/* Adjacent sibling */
h1 + p {
  font-size: 1.2em; /* first paragraph after h1 */
}

/* Pseudo-class — interactive state */
button:hover {
  background: #007a33;
  cursor: pointer;
}

a:visited {
  color: purple;
}

li:first-child {
  font-weight: bold;
}

input:focus {
  outline: 2px solid #c8102e;
}
```

### Attribute selectors

```css
/* Any element with a "target" attribute */
a[target] {
  color: orange;
}

/* Exact attribute value */
input[type="email"] {
  border-color: #007a33;
}

/* Attribute starts with */
a[href^="https"] {
  color: green;
}

/* Attribute ends with */
a[href$=".pdf"]::after {
  content: " (PDF)";
}
```

---

## 3. Specificity — Who Wins?

When multiple rules target the same element, **specificity** decides the winner.

| Selector                         | Points | Example                     |
| -------------------------------- | ------ | --------------------------- |
| Inline style                     | 1000   | `style="color: red"`        |
| ID                               | 100    | `#header`                   |
| Class / Pseudo-class / Attribute | 10     | `.card`, `:hover`, `[type]` |
| Element / Pseudo-element         | 1      | `p`, `h1`, `::before`       |

```css
p {
  color: black;
} /* 1 point */
.text {
  color: green;
} /* 10 points — wins over p */
#intro {
  color: red;
} /* 100 points — wins over .text */
#intro.text {
  color: purple;
} /* 110 points — wins over #intro alone */
```

```html
<!-- Inline = 1000 points — wins over everything above -->
<p id="intro" class="text" style="color: blue;">Hello</p>
```

> ⚠️ **Avoid `!important`** — it overrides everything and makes debugging a nightmare. It's the nuclear button of CSS.

---

## 4. The CSS Box Model

Every single element on a webpage is a **rectangle** made of four layers:

```
┌─────────────────────────────────────┐
│               MARGIN                │  ← space outside the element
│   ┌─────────────────────────────┐   │
│   │           BORDER            │   │  ← visible border line
│   │   ┌─────────────────────┐   │   │
│   │   │       PADDING       │   │   │  ← space inside the element
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │   CONTENT   │   │   │   │  ← text, image, etc.
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

```css
.box {
  /* Content */
  width: 300px;
  height: 150px;

  /* Padding — inside the border */
  padding: 20px; /* all sides */
  padding: 10px 20px; /* top/bottom  left/right */
  padding: 10px 20px 30px 40px; /* top right bottom left (clockwise) */

  /* Border */
  border: 2px solid #c8102e;
  border-radius: 8px; /* rounded corners */

  /* Margin — outside the border */
  margin: 16px;
  margin: 0 auto; /* center horizontally */
}
```

### The `box-sizing` problem

```css
/* Default behaviour — padding adds to width! */
.box-default {
  width: 300px;
  padding: 20px;
  border: 2px solid red;
  /* Actual rendered width = 300 + 40 (padding) + 4 (border) = 344px 😱 */
}

/* Fix — include padding in the width */
*,
*::before,
*::after {
  box-sizing: border-box; /* Always add this to your projects! */
}

.box-fixed {
  width: 300px;
  padding: 20px;
  border: 2px solid red;
  /* Actual rendered width = 300px ✅ */
}
```

> 💡 Always put `box-sizing: border-box` at the top of every project. 100% of professional developers do this.

---

## 5. Colours & Typography

### Colour formats

```css
.element {
  /* Named colours */
  color: red;
  color: tomato;
  color: cornflowerblue;

  /* Hexadecimal — most common */
  color: #c8102e; /* Cardiff Red */
  color: #007a33; /* Cardiff Green */
  color: #fff; /* shorthand for #ffffff */

  /* RGB */
  color: rgb(200, 16, 46);

  /* HSL — most intuitive for humans */
  /* hue (0-360°), saturation (%), lightness (%) */
  color: hsl(349, 86%, 42%);

  /* Alpha / transparency */
  color: rgba(200, 16, 46, 0.5); /* 50% transparent */
  color: hsla(349, 86%, 42%, 0.8);

  /* Modern syntax (no "a" needed) */
  color: rgb(200 16 46 / 50%);
  color: hsl(349 86% 42% / 80%);
}
```

### Typography

```css
body {
  /* Font stack — fallback chain */
  font-family:
    "Segoe UI",
    Trebuchet MS,
    Arial,
    sans-serif;

  font-size: 16px; /* base size — use rem for accessibility */
  font-size: 1rem; /* relative to root (usually 16px) */

  font-weight: 400; /* normal */
  font-weight: 700; /* bold — numbers: 100 to 900 */

  font-style: italic;

  line-height: 1.6; /* no units! relative to font-size */

  letter-spacing: 0.02em;
  text-align: left; /* left | center | right | justify */
  text-transform: uppercase;
  text-decoration: underline;
}

/* Using Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

h1 {
  font-family: "Inter", sans-serif;
}
```

---

## 6. CSS Variables (Custom Properties)

Define values once, reuse everywhere. Essential for maintainable stylesheets.

```css
/* Define in :root — globally available */
:root {
  --color-primary: #c8102e;
  --color-success: #007a33;
  --color-white: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #6b7280;
  --color-bg: #f9fafb;

  --font-sans: "Segoe UI", Arial, sans-serif;
  --font-mono: "Consolas", "Courier New", monospace;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);

  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
}

/* Use with var() */
.button {
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-sans);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-sm);
}

.button:hover {
  background: var(
    --color-success
  ); /* One word to change brand colour everywhere */
}

/* var() with fallback */
color: var(
  --color-accent,
  #ff6600
); /* uses #ff6600 if --color-accent not defined */
```

---

## 7. Flexbox — Modern Layout

Flexbox arranges items along **one axis** (row or column). Perfect for navigation bars, card rows, and centering.

```
FLEX CONTAINER (parent)
┌──────────────────────────────────────────┐
│  [item 1]  [item 2]  [item 3]  [item 4]  │  ← main axis (row)
└──────────────────────────────────────────┘
     ↕ cross axis (column)
```

### Container properties

```css
.container {
  display: flex;

  /* Direction of main axis */
  flex-direction: row; /* → default */
  flex-direction: row-reverse; /* ← */
  flex-direction: column; /* ↓ */
  flex-direction: column-reverse; /* ↑ */

  /* Main axis alignment */
  justify-content: flex-start; /* |●●●___| */
  justify-content: flex-end; /* |___●●●| */
  justify-content: center; /* |_●●●__| */
  justify-content: space-between; /* |●___●___●| */
  justify-content: space-around; /* |_●__●__●_| */
  justify-content: space-evenly; /* |__●__●__●__| */

  /* Cross axis alignment */
  align-items: stretch; /* fill height — default */
  align-items: flex-start; /* align to top */
  align-items: center; /* align to middle */
  align-items: flex-end; /* align to bottom */

  /* Spacing between items */
  gap: 16px;
  gap: 8px 16px; /* row-gap column-gap */

  /* Wrapping */
  flex-wrap: nowrap; /* default — items can overflow */
  flex-wrap: wrap; /* items wrap to next line */
}
```

### Item properties

```css
.item {
  /* How much the item grows to fill space */
  flex-grow: 1; /* grow equally with siblings */
  flex-grow: 2; /* grow twice as much */
  flex-grow: 0; /* don't grow — default */

  /* How much the item shrinks when space is tight */
  flex-shrink: 1; /* shrink — default */
  flex-shrink: 0; /* never shrink (e.g. logo) */

  /* Base size before growing/shrinking */
  flex-basis: 200px;
  flex-basis: auto; /* use width/height — default */

  /* Shorthand: grow shrink basis */
  flex: 1; /* = flex: 1 1 0 */
  flex: 1 0 200px; /* grow, don't shrink, start at 200px */

  /* Override align-items for this item only */
  align-self: center;
}
```

### Real-world examples

```css
/* Navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  background: #c8102e;
}

.nav-logo {
  flex-shrink: 0; /* logo never squishes */
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

/* Card grid */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 280px; /* grow, shrink, min 280px wide */
  max-width: 400px;
}

/* Perfect centering */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

> 🎮 Practice at: **[flexboxfroggy.com](https://flexboxfroggy.com)**

---

## 8. Responsive Design

Over 60% of web traffic is mobile. Responsive design adapts layouts to screen size.

### Viewport meta tag (required!)

```html
<!-- Always put this in <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Media queries

```css
/* Mobile First — start with mobile styles */
.card-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

/* Tablet — 768px and wider */
@media (min-width: 768px) {
  .card-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-grid .card {
    flex: 1 1 calc(50% - 8px); /* 2 columns */
  }
}

/* Desktop — 1024px and wider */
@media (min-width: 1024px) {
  .card-grid .card {
    flex: 1 1 calc(33.33% - 14px); /* 3 columns */
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Common breakpoints

| Breakpoint | Width  | Device       |
| ---------- | ------ | ------------ |
| `sm`       | 640px  | Large mobile |
| `md`       | 768px  | Tablet       |
| `lg`       | 1024px | Laptop       |
| `xl`       | 1280px | Desktop      |
| `2xl`      | 1536px | Wide screen  |

### Responsive units

```css
.element {
  /* Relative to root font-size (default 16px) */
  font-size: 1.5rem; /* = 24px */

  /* Relative to parent element */
  font-size: 1.2em;

  /* Viewport units */
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  font-size: 4vw; /* scales with screen width */

  /* Percentage */
  width: 50%; /* 50% of parent */

  /* Clamp — min, preferred, max */
  font-size: clamp(1rem, 2.5vw, 2rem);
  width: clamp(200px, 50%, 600px);
}
```

---

## 9. Putting It All Together — Card Component

```html
<!-- HTML -->
<div class="card">
  <div class="card__image-wrapper">
    <img src="cardiff-bay.jpg" alt="Cardiff Bay" class="card__image" />
    <span class="card__tag">Tourism</span>
  </div>
  <div class="card__body">
    <h2 class="card__title">Cardiff Bay</h2>
    <p class="card__text">
      The vibrant waterfront district of Wales' capital city.
    </p>
    <a href="#" class="card__btn">Learn More</a>
  </div>
</div>
```

```css
/* CSS */
:root {
  --red: #c8102e;
  --green: #007a33;
  --white: #ffffff;
}

.card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 360px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card__image-wrapper {
  position: relative;
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* crop image nicely */
  display: block;
}

.card__tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--red);
  color: var(--white);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card__title {
  color: var(--red);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.card__text {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.card__btn {
  display: inline-block;
  background: var(--green);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  transition: background 0.2s ease;
}

.card__btn:hover {
  background: #005a25; /* darker green */
}
```

---

## ✅ Key Takeaways

| Concept          | Key Point                                           |
| ---------------- | --------------------------------------------------- |
| **Selectors**    | Target by tag, `.class`, `#id`, or combinations     |
| **Specificity**  | Inline > ID > Class > Element                       |
| **Box Model**    | margin → border → padding → content                 |
| **`box-sizing`** | Always use `border-box`                             |
| **Variables**    | `--name: value` + `var(--name)`                     |
| **Flexbox**      | `display: flex` + `justify-content` + `align-items` |
| **Responsive**   | `@media (min-width: ...)` + mobile first            |

---

## 🏠 Homework — Profile Page

Build a personal profile card using all of today's concepts:

1. ✅ External `.css` file (no inline styles)
2. ✅ CSS variables for colours and fonts in `:root`
3. ✅ box model — padding, border, margin on multiple elements
4. ✅ Flexbox layout for at least one section
5. ✅ Hover effect with `transition`
6. ✅ One media query (mobile → desktop)

```
📁 profile/
  ├── index.html
  └── style.css
```

**Submit via [CodePen](https://codepen.io) or GitHub Pages by next week.**

---

## 📚 Resources

| Resource        | URL                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------- |
| MDN Web Docs    | [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| CSS Tricks      | [css-tricks.com](https://css-tricks.com)                                                     |
| Flexbox Froggy  | [flexboxfroggy.com](https://flexboxfroggy.com)                                               |
| CSS Grid Garden | [cssgridgarden.com](https://cssgridgarden.com)                                               |
| Google Fonts    | [fonts.google.com](https://fonts.google.com)                                                 |
| CSS Zen Garden  | [csszengarden.com](http://www.csszengarden.com)                                              |
| Can I Use       | [caniuse.com](https://caniuse.com)                                                           |

---

_Cardiff University · Web Development · Next week: JavaScript Basics 🚀_
