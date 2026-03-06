---
marp: true
theme: default
paginate: true
style: |
  :root {
    --color-red: #C8102E;
    --color-green: #007A33;
    --color-white: #FFFFFF;
    --color-light: #F5F5F5;
    --color-dark: #1a1a1a;
  }

  section {
    background: var(--color-white);
    color: var(--color-dark);
    font-family: 'Segoe UI', Arial, sans-serif;
    padding: 50px 60px;
  }

  h1 {
    color: var(--color-red);
    font-size: 2em;
    border-left: 8px solid var(--color-green);
    padding-left: 20px;
  }

  h2 {
    color: var(--color-green);
    font-size: 1.5em;
  }

  h3 {
    color: var(--color-red);
  }

  code {
    background: #f0f0f0;
    border-left: 4px solid var(--color-green);
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 0.85em;
  }

  pre {
    background: #e2dcdc;
    color: #000000;
    border-radius: 8px;
    padding: 20px;
    font-size: 0.78em;
    border-left: 6px solid var(--color-red);
  }

  pre code {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
  }

  ul li {
    margin-bottom: 8px;
    padding-left: 4px;
  }

  ul li::marker {
    color: var(--color-green);
  }

  .tag {
    display: inline-block;
    background: var(--color-red);
    color: white;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.75em;
    margin-right: 6px;
    font-weight: bold;
  }

  section.title-slide {
    background: var(--color-red);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.title-slide h1 {
    color: white;
    border-left-color: var(--color-green);
    font-size: 2.5em;
  }

  section.title-slide h2 {
    color: #ffe0e0;
    font-size: 1.2em;
  }

  section.green-slide {
    background: var(--color-green);
    color: white;
  }

  section.green-slide h1 {
    color: white;
    border-left-color: var(--color-red);
  }

  section.green-slide h2 {
    color: #d0ffd0;
  }

  section.dark-slide {
    background: #1a1a1a;
    color: white;
  }

  section.dark-slide h1 {
    color: #ff6b6b;
    border-left-color: var(--color-green);
  }

  footer {
    font-size: 0.7em;
    color: #aaa;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85em;
  }

  th {
    background: var(--color-red);
    color: white;
    padding: 8px 12px;
  }

  td {
    padding: 7px 12px;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) td {
    background: #f9f9f9;
  }
---

<!-- _class: title-slide -->

# 🎨 CSS Fundamentals

## Cascading Style Sheets — From Zero to Styled

### Cardiff University · Web Development

#### Module 2 · 40 minutes

---

<!-- Speaker notes:
Представьтесь. Скажите студентам, что сегодня они узнают КАК браузер превращает скучный HTML в визуально оформленные страницы.
Спросите: "Кто уже видел CSS раньше?" — поднятие рук помогает оценить уровень группы.
Обозначьте план: теория + живые примеры + мини-задание в конце.
-->

# 📋 Today's Agenda

| #   | Topic                | Time  |
| --- | -------------------- | ----- |
| 1   | What is CSS?         | 3 min |
| 2   | Selectors            | 7 min |
| 3   | Box Model            | 6 min |
| 4   | Colours & Typography | 4 min |
| 5   | Layout: Flexbox      | 6 min |
| 6   | Layout: CSS Grid     | 8 min |
| 7   | Responsive Design    | 4 min |
| 8   | Live Examples + Q&A  | 5 min |

> **Goal:** By the end, you'll be able to style a real webpage from scratch.

---

<!-- Speaker notes:
CSS = Cascading Style Sheets. Придуман Хокон Виум Ли в 1994 году.
Объясните метафору: HTML — это скелет, CSS — одежда и макияж.
Ключевое слово "Cascading" — правила применяются каскадно, от общего к частному. Покажите это на доске.
-->

# 🤔 What is CSS?

**CSS** (Cascading Style Sheets) controls the **visual presentation** of HTML elements.

```css
/* This is CSS */
h1 {
  color: red;
  font-size: 48px;
}
```

## Three ways to apply CSS:

- **Inline** — `<p style="color: red">` ❌ Not recommended
- **Internal** — `<style>` tag in `<head>` 🟡 OK for demos
- **External** — `<link rel="stylesheet" href="style.css">` ✅ Best practice

---

<!-- Speaker notes:
Покажите живой пример в браузере: один и тот же HTML без CSS и с CSS.
Сайт CSS Zen Garden — отличный пример. Один HTML, сотни разных дизайнов.
Задайте вопрос: "Почему мы разделяем HTML и CSS? Что это даёт?"
-->

# 🌐 Why Separate CSS from HTML?

```html
<!-- HTML — Structure only -->
<article>
  <h1>Welcome to Cardiff</h1>
  <p>The capital city of Wales.</p>
</article>
```

```css
/* CSS — Style only */
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

> 💡 **Separation of concerns** — one file to change the look of an entire website!

---

<!-- Speaker notes:
Селекторы — одна из самых важных тем. Без них нельзя "нацелиться" на нужный элемент.
Разберите каждый тип по очереди. Уделите особое внимание разнице между классом (.btn) и ID (#header) — класс можно использовать много раз, ID — только один раз на странице.
Спросите: "Когда вы бы использовали ID, а когда класс?"
-->

# 🎯 CSS Selectors

```css
/* Element selector — applies to ALL <p> tags */
p {
  color: #333;
}

/* Class selector — applies to class="card" */
.card {
  background: white;
  border-radius: 8px;
}

/* ID selector — applies to id="header" (unique!) */
#header {
  background: #c8102e;
}

/* Descendant — <a> inside .nav only */
.nav a {
  color: white;
  text-decoration: none;
}

/* Pseudo-class — on hover */
button:hover {
  background: #007a33;
  cursor: pointer;
}
```

---

<!-- Speaker notes:
Специфичность — это "вес" селектора. Более специфичный всегда побеждает.
Важно объяснить, что inline style > ID > class > element.
!important существует, но объясните, что это "ядерная кнопка" — использовать только в крайнем случае.
Нарисуйте таблицу специфичности на доске.
-->

# ⚖️ Specificity — Who Wins?

When rules conflict, **specificity** decides the winner:

| Selector       | Points | Example              |
| -------------- | ------ | -------------------- |
| Inline style   | 1000   | `style="color: red"` |
| ID             | 100    | `#header`            |
| Class / Pseudo | 10     | `.card`, `:hover`    |
| Element        | 1      | `p`, `h1`            |

```css
p {
  color: black;
} /* 1 point */
.text {
  color: green;
} /* 10 points — wins! */
#intro {
  color: red;
} /* 100 points — wins over both! */
```

> ⚠️ Avoid `!important` — it breaks the cascade!

---

<!-- Speaker notes:
Box Model — фундаментальная концепция. Буквально всё в CSS является прямоугольником.
Нарисуйте коробку на доске: content → padding → border → margin.
Покажите в DevTools браузера box model визуально (F12 → Elements → выберите элемент).
Объясните box-sizing: border-box — почему это важно и почему все modern сайты его используют.
-->

# 📦 The CSS Box Model

Every element is a **rectangle** with four layers:

```
┌──────────────────────────────┐
│           MARGIN             │
│   ┌──────────────────────┐   │
│   │        BORDER        │   │
│   │   ┌──────────────┐   │   │
│   │   │   PADDING    │   │   │
│   │   │  ┌────────┐  │   │   │
│   │   │  │CONTENT │  │   │   │
│   │   │  └────────┘  │   │   │
│   │   └──────────────┘   │   │
│   └──────────────────────┘   │
└──────────────────────────────┘
```

> 💡 **Tip:** Use `box-sizing: border-box` — padding is included in width!

---

<!-- Speaker notes:
Покажите живой пример: два div-а, один без padding/border, другой с ними.
Демонстрация в DevTools — студенты видят размеры в реальном времени.
Задание: "Создайте карточку товара с padding 20px, border 2px solid, margin 15px снаружи."
-->

# 📦 Box Model in Code

```css
/* Classic problem */
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid red;
  /* Actual width = 300 + 40 + 4 = 344px! 😱 */
}

/* The fix — modern approach */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.box {
  width: 300px;
  padding: 20px;
  border: 2px solid red;
  /* Actual width = 300px ✅ */
}
```

---

<!-- Speaker notes:
Цвет и типографика — то, что студенты сразу видят и могут применить.
Расскажите про форматы цвета: hex, rgb, hsl. hsl — самый человеко-понятный.
Для шрифтов: system fonts vs Google Fonts. Покажите fonts.google.com.
line-height 1.5-1.6 — золотой стандарт для читаемости.
-->

# 🎨 Colours & Typography

```css
/* Colour formats */
color: red; /* Named */
color: #c8102e; /* Hex */
color: rgb(200, 16, 46); /* RGB */
color: hsl(349, 86%, 42%); /* HSL — most intuitive! */
color: rgba(200, 16, 46, 0.8); /* With opacity */

/* Typography */
font-family: "Segoe UI", Arial, sans-serif;
font-size: 18px; /* or rem — better for accessibility */
font-weight: bold; /* 100–900 */
line-height: 1.6; /* No units — relative to font-size */
text-align: center;
letter-spacing: 0.05em;
```

---

<!-- Speaker notes:
CSS переменные (Custom Properties) — мощный инструмент. Один раз определяете цвет, меняете в одном месте — меняется везде.
Покажите практический пример: что будет если нужно поменять основной цвет бренда на 50 страницах без переменных vs с переменными.
Это то, что делает CSS более "программным".
-->

# 🔧 CSS Variables (Custom Properties)

Define once, use everywhere — like variables in code!

```css
/* Define in :root (global scope) */
:root {
  --primary: #c8102e; /* Cardiff Red */
  --success: #007a33; /* Cardiff Green */
  --white: #ffffff;
  --font-base: "Segoe UI", Arial, sans-serif;
  --radius: 8px;
}

/* Use anywhere */
.button {
  background: var(--primary);
  border-radius: var(--radius);
  font-family: var(--font-base);
}

.button:hover {
  background: var(--success); /* Change in one place! */
}
```

---

<!-- Speaker notes:
Flexbox — революционный способ вёрстки. Введён в 2012, сейчас используется везде.
Ключевые понятия: flex container (родитель) и flex items (дети).
Главная ось (main axis) и поперечная ось (cross axis).
Покажите живой пример: nav bar с justify-content: space-between.
Ресурс для практики: flexboxfroggy.com — студенты могут поиграть после занятия.
-->

# 💪 Flexbox — Modern Layout

```css
/* Parent = flex container */
.navbar {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 16px;
}

/* Children = flex items */
.nav-item {
  flex: 1; /* grow equally */
}

.logo {
  flex-shrink: 0; /* never shrink */
  width: 120px;
}
```

---

<!-- Speaker notes:
Продолжение Flexbox. Покажите все значения justify-content на доске.
flex-wrap: wrap — критически важно для адаптивности.
Задание: создайте grid из карточек (cards grid) используя flex-wrap.
Упомяните, что для 2D-сеток лучше CSS Grid, но Flexbox отлично для 1D.
-->

# 💪 Flexbox — Alignment Properties

```css
.container {
  display: flex;

  /* Main axis (default: horizontal) */
  justify-content: flex-start; /* ← default */
  justify-content: flex-end; /* → */
  justify-content: center; /* ↔ center */
  justify-content: space-between; /* |item  item| */
  justify-content: space-around; /* gaps all around */

  /* Cross axis (default: vertical) */
  align-items: stretch; /* fill height — default */
  align-items: center; /* vertical center */
  align-items: flex-end; /* stick to bottom */

  /* Wrapping */
  flex-wrap: wrap; /* items wrap to next line */
}
```

> 🎮 Practice: **flexboxfroggy.com**

---

<!-- Speaker notes:
CSS Grid — двумерная система вёрстки. Flexbox — одна ось (строка ИЛИ колонка), Grid — обе сразу (строки И колонки).
Аналогия: Flexbox — это очередь людей, Grid — это таблица рассадки в театре.
grid-template-columns: repeat(3, 1fr) — самая часто используемая строка в Grid.
fr = fraction unit — доля свободного пространства. Покажите как 1fr + 2fr + 1fr делит пространство 1:2:1.
Ресурс для практики: cssgridgarden.com
-->

# 🗂️ CSS Grid — 2D Layout

Flexbox = **one dimension** (row OR column)
Grid = **two dimensions** (rows AND columns simultaneously)

```css
.grid {
  display: grid;

  /* 3 equal columns */
  grid-template-columns: repeat(3, 1fr);

  /* Mixed: fixed sidebar + flexible main */
  grid-template-columns: 250px 1fr;

  /* Auto rows */
  grid-template-rows: auto 1fr auto;

  gap: 20px; /* gutter between all cells */
}
```

> `fr` = **fraction** of available space — `1fr 2fr 1fr` splits 25% / 50% / 25%

---

<!-- Speaker notes:
grid-column и grid-row — мощный инструмент для размещения элементов по сетке.
"span 2" = занять 2 колонки. Это очень удобно для featured cards, hero секций.
Покажите визуально на доске: нарисуйте сетку 3x3 и покажите как элемент растягивается.
Назовите типичные use-cases: page layout (header/sidebar/main/footer), card galleries, dashboard.
-->

# 🗂️ CSS Grid — Placing Items

```css
.layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 1fr 60px;
  gap: 16px;
}

/* Line numbers:  start / end */
.header {
  grid-column: 1 / 4;
} /* spans all 3 cols */
.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.main {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
.footer {
  grid-column: 1 / 4;
}

/* Shorthand with span keyword */
.featured {
  grid-column: span 2;
} /* take 2 cols */
.tall {
  grid-row: span 3;
} /* take 3 rows */
```

---

<!-- Speaker notes:
grid-template-areas — это «ASCII art» для раскладки. Очень наглядно.
Покажите как менять layout одним медиа-запросом: просто переопределить grid-template-areas.
Правило большого пальца: "Grid for layout, Flexbox for components."
Задание: создайте page layout с header, aside, main, footer используя grid-template-areas.
-->

# 🗂️ CSS Grid — Template Areas

Name your zones — the most readable layout approach!

```css
.page {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 70px 1fr 50px;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  gap: 16px;
  min-height: 100vh;
}

.page-header {
  grid-area: header;
  background: var(--color-red);
}
.page-sidebar {
  grid-area: sidebar;
  background: #f5f5f5;
}
.page-main {
  grid-area: main;
}
.page-footer {
  grid-area: footer;
  background: #333;
  color: white;
}
```

> 🎮 Practice: **cssgridgarden.com**

---

<!-- Speaker notes:
Responsive Design — обязательная тема. Более 60% трафика — мобильные устройства.
Media queries — это условия: "если ширина меньше X, применить эти стили".
mobile-first подход: начинайте со стилей для мобильного, потом добавляйте для больших экранов.
Покажите в DevTools: Device Toolbar (Ctrl+Shift+M) — смена размеров экрана.
-->

# 📱 Responsive Design

```css
/* Base styles — Mobile First */
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
    flex: 1 1 calc(50% - 8px);
  }
}

/* Desktop — 1024px and wider */
@media (min-width: 1024px) {
  .card-grid .card {
    flex: 1 1 calc(33% - 12px);
  }
}
```

---

<!-- Speaker notes:
Практический пример — объедините всё, что изучили.
Это полноценный компонент: переменные, box model, flexbox, hover состояние.
Проведите разбор построчно, чтобы студенты видели связь с предыдущими темами.
Задание: "Измените цвета и добавьте border-radius на изображение карточки."
-->

# 🛠️ Putting It Together — Card Component

```css
:root {
  --red: #c8102e;
  --green: #007a33;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card__title {
  color: var(--red);
  font-size: 1.2em;
  font-weight: 700;
}
.card__tag {
  background: var(--green);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  align-self: flex-start;
}
```

---

<!-- Speaker notes:
Подведение итогов. Напомните студентам ключевые концепции.
Дайте домашнее задание — создать страницу профиля используя все техники.
Покажите ресурсы для самостоятельного изучения.
Спросите: "Что было самым сложным? Что хотите разобрать подробнее в следующий раз?"
-->

<!-- _class: green-slide -->

# ✅ Key Takeaways

## Today you learned:

- 📌 **Selectors** — targeting elements by tag, class, ID
- ⚖️ **Specificity** — how CSS resolves conflicts
- 📦 **Box Model** — margin, border, padding, content
- 🎨 **Variables** — `--name: value` and `var(--name)`
- 💪 **Flexbox** — `display: flex` for 1D component layouts
- 🗂️ **CSS Grid** — `display: grid` for 2D page layouts
- 📱 **Media Queries** — `@media (min-width: ...)` for responsive design

---

<!-- Speaker notes:
Домашнее задание — практическая часть закрепляет теорию.
Объясните каждый пункт задания. Скажите, что оценивается не красота, а применение всех изученных свойств.
Сдача через GitHub Pages или CodePen — так студенты сразу учатся деплою.
Напомните ресурсы: MDN Web Docs — лучшая документация по CSS.
-->

# 🏠 Homework — Profile Page

**Build a personal profile card using all today's concepts:**

1. ✅ Use an **external** `.css` file
2. ✅ Define **CSS variables** for colours & fonts
3. ✅ Apply **box model** (padding, border, margin)
4. ✅ Use **Flexbox** for layout
5. ✅ Add **hover effects** with `transition`
6. ✅ Make it **responsive** with one media query

```
📁 project/
  ├── index.html
  └── style.css
```

**Submit via CodePen or GitHub Pages by next week.**

---

<!-- _class: title-slide -->

# 🙋 Questions?

## Resources:

- 📖 **MDN Web Docs** — developer.mozilla.org
- 🎮 **Flexbox Froggy** — flexboxfroggy.com
- 🎨 **CSS Tricks** — css-tricks.com
- 🖥️ **CodePen** — codepen.io

### Next week: JavaScript Basics 🚀

---
