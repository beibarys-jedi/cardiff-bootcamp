---
marp: true
theme: default
paginate: true
style: |
  :root {
    --red:   #C8102E;
    --green: #007A33;
    --white: #FFFFFF;
    --dark:  #1a1a1a;
    --light: #f5f5f5;
  }

  section {
    background: var(--white);
    color: var(--dark);
    font-family: 'Segoe UI', Arial, sans-serif;
    padding: 50px 60px;
  }

  h1 {
    color: var(--red);
    font-size: 1.9em;
    border-left: 8px solid var(--green);
    padding-left: 20px;
    margin-bottom: 24px;
  }

  h2 {
    color: var(--green);
    font-size: 1.35em;
    margin-top: 24px;
  }

  pre {
    background: #d3cccc;
    color: #000000;
    border-radius: 8px;
    padding: 18px 22px;
    font-size: 0.76em;
    border-left: 6px solid var(--red);
    margin: 12px 0;
  }

  pre code {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
  }

  code {
    background: #f0f0f0;
    color: var(--red);
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.88em;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li::marker {
    color: var(--green);
  }

  blockquote {
    border-left: 4px solid var(--green);
    background: #f0fff4;
    padding: 10px 18px;
    margin: 16px 0;
    border-radius: 0 8px 8px 0;
    font-size: 0.9em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82em;
  }

  th {
    background: var(--red);
    color: white;
    padding: 8px 14px;
    text-align: left;
  }

  td {
    padding: 7px 14px;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) td { background: #f9f9f9; }

  section.title-slide {
    background: var(--red);
    color: white;
    justify-content: center;
  }

  section.title-slide h1 {
    color: white;
    border-left-color: var(--green);
    font-size: 2.4em;
  }

  section.title-slide h2 {
    color: #ffd0d0;
    font-size: 1.1em;
    margin-top: 16px;
  }

  section.title-slide p {
    color: #ffe0e0;
  }

  section.green-slide {
    background: var(--green);
    color: white;
  }

  section.green-slide h1 {
    color: white;
    border-left-color: var(--red);
  }

  section.green-slide ul li::marker { color: #90ee90; }
  section.green-slide blockquote {
    background: rgba(255,255,255,0.15);
    border-left-color: white;
    color: white;
  }

  section.dark-slide {
    background: #1a1a1a;
    color: #f0f0f0;
  }

  section.dark-slide h1 {
    color: #ff6b6b;
    border-left-color: var(--green);
  }
---

<!-- _class: title-slide -->

# 🌐 HTML Fundamentals

## The Building Blocks of Every Website

### Cardiff University · Web Development

#### Module 1 · 40 minutes

---

<!--
Speaker notes:
Начните с простого вопроса: "Кто из вас сегодня открыл сайт в браузере?"
Все подняли руки — значит, все уже видели HTML в действии.
Объясните метафору: если сайт — это дом, то HTML — это стены и комнаты (структура), CSS — это краска и мебель (внешний вид), JavaScript — это электричество и двери (поведение).
Скажите, что сегодня — только HTML, и это хорошая новость: это самый простой язык из трёх.
-->

# 🏠 Web = HTML + CSS + JS

| Язык           | Роль        | Аналогия             |
| -------------- | ----------- | -------------------- |
| **HTML**       | Структура   | Стены и комнаты дома |
| **CSS**        | Внешний вид | Краска, мебель       |
| **JavaScript** | Поведение   | Свет, двери, лифт    |

## Сегодня — только HTML 🎯

> 💡 HTML расшифровывается как **HyperText Markup Language** — язык разметки гипертекста. Он существует с **1991 года**.

---

<!--
Speaker notes:
Покажите в браузере: откройте любой сайт, нажмите Ctrl+U (или правая кнопка → View Page Source).
Студенты увидят "живой" HTML реального сайта — это всегда производит впечатление.
Объясните, что браузер читает этот текст и превращает его в то, что мы видим.
Скажите: "HTML — это не программирование, это разметка. Вы просто описываете структуру."
-->

# 🔍 Как выглядит HTML?

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, Cardiff! 👋</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
```

> 💡 **Попробуйте сейчас:** откройте браузер → нажмите `Ctrl+U` → вы увидите HTML любого сайта!

---

<!--
Speaker notes:
Тег — это основная единица HTML. Объясните структуру: открывающий тег, содержимое, закрывающий тег.
Нарисуйте на доске: <tag> content </tag>
Аналогия: теги как скобки в математике — всегда нужно закрывать то, что открыли.
Расскажите про самозакрывающиеся теги (void elements): <img>, <br>, <hr>, <input> — у них нет содержимого, поэтому нет закрывающего тега.
-->

# 🏷️ Anatomy of an HTML Tag

```
 открывающий тег        закрывающий тег
       ↓                      ↓
    <p class="intro">  Hello!  </p>
        ↑                  ↑
    атрибут            содержимое
```

## Два вида тегов:

```html
<!-- Парные — имеют открывающий и закрывающий тег -->
<h1>Title</h1>
<p>Paragraph</p>
<strong>Bold text</strong>

<!-- Одиночные (void elements) — нет содержимого -->
<img src="photo.jpg" alt="A photo" />
<br />
<hr />
<input type="text" />
```

---

<!--
Speaker notes:
Это самый важный слайд урока. Объясните структуру страницы как матрёшку.
<!DOCTYPE html> — обязательная первая строка, говорит браузеру "это современный HTML".
<html> — корень всего.
<head> — невидимая часть: настройки, заголовок вкладки, подключение CSS.
<body> — всё что видит пользователь.
Создайте файл index.html вместе со студентами в VS Code прямо сейчас.
-->

# 📄 HTML Page Structure

```html
<!DOCTYPE html>
<!-- версия HTML (всегда HTML5) -->
<html lang="en">
  <!-- корневой элемент, язык -->

  <head>
    <!-- невидимая часть -->
    <meta charset="UTF-8" />
    <!-- кодировка (всегда UTF-8) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cardiff University</title>
    <!-- название вкладки -->
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- всё что видит пользователь -->
    <h1>Welcome!</h1>
    <p>Content goes here.</p>
  </body>
</html>
```

> ⚠️ Каждый HTML файл **должен** начинаться с `<!DOCTYPE html>`

---

<!--
Speaker notes:
Заголовки — самый простой элемент для объяснения иерархии.
Аналогия: h1 = название книги, h2 = глава, h3 = параграф.
ВАЖНО: h1 должен быть только один на странице — это важно для SEO и доступности.
Покажите разницу в размерах в браузере.
Параграфы — базовый текстовый блок. Браузер автоматически добавляет отступы сверху и снизу.
-->

# 📝 Text — Headings & Paragraphs

```html
<h1>Main Title (only one per page!)</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Rarely used</h5>
<h6>Almost never used</h6>

<p>
  This is a paragraph. Browsers add space above and below automatically.
  Multiple spaces are collapsed to one.
</p>

<p>This is a second paragraph. Each &lt;p&gt; starts on a new line.</p>

<!-- Line break (use sparingly!) -->
<p>Line one.<br />Line two.</p>

<!-- Horizontal rule -->
<hr />
```

---

<!--
Speaker notes:
Форматирование текста — здесь важно объяснить семантику.
<strong> vs <b>: оба делают текст жирным, но <strong> говорит "это важно", <b> просто "жирный".
<em> vs <i>: аналогично — <em> означает ударение/акцент, <i> просто курсив.
Скринридеры для слепых читают <strong> с ударением в голосе!
Это введение в концепцию семантического HTML.
-->

# ✍️ Text Formatting

```html
<!-- Semantic (recommended) -->
<strong>Important text</strong>
<!-- bold + meaning -->
<em>Emphasised text</em>
<!-- italic + meaning -->
<mark>Highlighted text</mark>
<!-- yellow highlight -->
<del>Deleted text</del>
<!-- strikethrough -->
<ins>Inserted text</ins>
<!-- underline -->
<small>Small print</small>
<sub>H<sub>2</sub>O</sub>
<!-- subscript -->
<sup>E = mc<sup>2</sup></sup>
<!-- superscript -->
<code>console.log("Hello")</code>
<!-- inline code -->

<!-- Non-semantic (avoid) -->
<b>Just bold</b>
<i>Just italic</i>
```

> 💡 **Semantic** means the tag describes the _meaning_, not just the visual style. Screen readers use this!

---

<!--
Speaker notes:
Списки — одни из самых используемых элементов.
ul = unordered list (маркированный). Когда порядок не важен: список покупок, навигация.
ol = ordered list (нумерованный). Когда порядок важен: инструкции, рейтинги.
dl = description list (редко, но полезно): словари, FAQ.
Каждый элемент списка — <li> (list item).
Покажите вложенные списки — студенты часто удивляются, что это так просто.
-->

# 📋 Lists

```html
<!-- Unordered list (bullets) — order doesn't matter -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list (numbers) — order matters -->
<ol>
  <li>Open VS Code</li>
  <li>Create index.html</li>
  <li>Write your HTML</li>
  <li>Open in browser</li>
</ol>

<!-- Nested list -->
<ul>
  <li>
    Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

---

<!--
Speaker notes:
Ссылки — то, что делает веб "гипертекстом".
href = Hypertext REFerence. Без href ссылка не работает.
Разница между абсолютными и относительными путями — важная концепция.
target="_blank" — открывает в новой вкладке. Добавьте rel="noopener" по соображениям безопасности.
Покажите: можно сделать ссылкой любой элемент — текст, картинку, кнопку.
Специальные ссылки: mailto: и tel: — студентам обычно нравится это узнавать.
-->

# 🔗 Links

```html
<!-- External link -->
<a href="https://www.cardiff.ac.uk">Cardiff University</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank" rel="noopener"> Google </a>

<!-- Internal link (same website) -->
<a href="about.html">About Us</a>
<a href="/contact">Contact</a>
<!-- from root -->
<a href="../index.html">Home</a>
<!-- one folder up -->

<!-- Link to section on same page -->
<a href="#contact-section">Jump to Contact</a>
<h2 id="contact-section">Contact</h2>

<!-- Email & phone -->
<a href="mailto:hello@cardiff.ac.uk">Email Us</a>
<a href="tel:+442920874000">Call Us</a>
```

---

<!--
Speaker notes:
Изображения — первый "одиночный" тег, который студенты будут использовать часто.
src = source, путь к файлу. Может быть локальным или URL.
alt = alternative text — ОБЯЗАТЕЛЕН! Это текст для слепых пользователей и для случаев когда картинка не загрузилась.
width и height — рекомендуется указывать для предотвращения "прыжков" страницы при загрузке.
Покажите разницу между абсолютным путём (URL) и относительным (локальный файл).
-->

# 🖼️ Images

```html
<!-- Basic image -->
<img src="photo.jpg" alt="A photo of Cardiff Bay" />

<!-- Image from the internet -->
<img src="https://example.com/image.png" alt="Description of the image" />

<!-- With size -->
<img src="logo.png" alt="Cardiff University logo" width="200" height="100" />

<!-- Image as a link -->
<a href="https://cardiff.ac.uk">
  <img src="logo.png" alt="Cardiff University" />
</a>
```

> ⚠️ **Always write `alt` text!**
>
> - Screen readers read it aloud for blind users
> - Shows when image fails to load
> - Helps search engines understand the image

---

<!--
Speaker notes:
Таблицы — часто пугают новичков, но структура логична.
table > tr > td — три уровня вложенности.
thead/tbody/tfoot — семантические обёртки, не обязательны но правильны.
th = table header — автоматически жирный и по центру.
Объясните colspan и rowspan через аналогию с Excel: "объединить ячейки".
ВАЖНО: таблицы — для данных, НЕ для вёрстки! В старые времена всё делали таблицами — это было плохо.
-->

# 📊 Tables

```html
<table>
  <thead>
    <!-- заголовок таблицы -->
    <tr>
      <!-- table row -->
      <th>Name</th>
      <!-- table header cell -->
      <th>Course</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <!-- тело таблицы -->
    <tr>
      <td>Alice</td>
      <!-- table data cell -->
      <td>Computer Science</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Web Development</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```

> ⚠️ Tables are for **data**, not for page layout!

---

<!--
Speaker notes:
Формы — интерактивная часть HTML. Здесь пользователи вводят данные.
action — куда отправить данные (URL сервера).
method — GET (данные в URL) или POST (данные в теле запроса).
label + for/id — связывают подпись с полем. Клик на label фокусирует поле!
Покажите разные типы input — студентов обычно удивляет количество встроенных типов.
required, placeholder, disabled — атрибуты валидации и UX.
-->

# 📝 Forms

```html
<form action="/submit" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" placeholder="John Smith" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="course">Course:</label>
  <select id="course" name="course">
    <option value="">-- Choose --</option>
    <option value="cs">Computer Science</option>
    <option value="web">Web Development</option>
  </select>

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send</button>
</form>
```

---

<!--
Speaker notes:
Семантический HTML — одна из самых важных концепций современного веба.
До HTML5 (2014) все использовали <div> для всего. Проблема: браузер не знает, что есть что.
После HTML5: специальные теги для каждой части страницы.
Покажите две версии кода: с div и с семантическими тегами. Визуально одинаково, но смысл разный.
Преимущества: SEO, доступность, читаемость кода.
Это как разница между "коробка" и "холодильник" — оба хранят вещи, но мы понимаем назначение.
-->

# 🧠 Semantic HTML

```html
<!-- ❌ Before HTML5 — everything was a <div> -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main">...</div>
<div id="footer">...</div>

<!-- ✅ Modern HTML5 — meaningful tags -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
  <aside>Related links...</aside>
</main>

<footer>© 2025 Cardiff University</footer>
```

---

<!--
Speaker notes:
div и span — два "нейтральных" контейнера без семантики. Используются когда нет подходящего семантического тега.
Ключевое различие: block vs inline.
Block элементы занимают всю ширину строки, начинаются с новой строки: div, p, h1, ul, table.
Inline элементы занимают только своё содержимое, не разрывают строку: span, a, img, strong, em.
Нарисуйте на доске: блочные элементы как кирпичи (каждый на своей строке), строчные как слова в предложении.
-->

# 📦 `div` and `span`

```html
<!-- div — block container (takes full width) -->
<div class="card">
  <h2>Cardiff Castle</h2>
  <p>A historic castle in the city centre.</p>
</div>

<!-- span — inline container (stays in line) -->
<p>The price is <span class="price">£29.99</span> per person.</p>
```

## Block vs Inline

| Block                 | Inline                   |
| --------------------- | ------------------------ |
| `div`, `p`, `h1`–`h6` | `span`, `a`, `strong`    |
| `ul`, `ol`, `table`   | `em`, `img`, `code`      |
| Starts on new line    | Stays in text flow       |
| Takes full width      | Takes only content width |

---

<!--
Speaker notes:
Атрибуты — дополнительная информация для тега.
Глобальные атрибуты работают на ЛЮБОМ теге.
id — уникальный идентификатор на странице. Используется для CSS (#id) и JavaScript.
class — группа элементов. Один элемент может иметь несколько классов.
data-* атрибуты — произвольные данные, которые JavaScript может читать.
Комментарии — невидимы в браузере, только в коде. Полезны для заметок.
-->

# ⚙️ Attributes & Comments

```html
<!-- Global attributes — work on ANY tag -->
<p id="intro">Unique ID — only one per page</p>
<p class="highlight">CSS class — reusable</p>
<p class="highlight large bold">Multiple classes</p>
<p hidden>This is invisible</p>
<p title="Tooltip text">Hover over me</p>
<p lang="cy">Cymraeg</p>

<!-- data-* attributes — custom data for JavaScript -->
<button data-product-id="42" data-price="9.99">Add to Cart</button>

<!-- Comments — invisible to users, only in source code -->
<!-- This is a comment -->

<!--
  Multi-line comment
  Great for TODO notes
-->
```

---

<!--
Speaker notes:
Итоговый пример — объедините всё в одну страницу. Это "домашнее задание" или "живое задание" на занятии.
Пройдитесь по каждой секции и спросите студентов: "Какой тег здесь использован? Почему?"
Обратите внимание на структуру: header → main → article + aside → footer.
Это реальная структура настоящего сайта — не игрушечная.
-->

<!-- _class: dark-slide -->

# 🛠️ Full Page Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cardiff Blog</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> |
        <a href="/contact">Contact</a>
      </nav>
    </header>
    <main>
      <article>
        <h1>Welcome to Cardiff 🏴󠁧󠁢󠁷󠁬󠁳󠁿</h1>
        <img src="castle.jpg" alt="Cardiff Castle" width="600" />
        <p>Cardiff is the <strong>capital city</strong> of Wales.</p>
        <a href="https://visitcardiff.com" target="_blank"> Visit Cardiff → </a>
      </article>
    </main>
    <footer>
      <p>© 2025 Cardiff University</p>
    </footer>
  </body>
</html>
```

---

<!-- _class: green-slide -->

# ✅ Key Takeaways

- 🏷️ **Tags** wrap content: `<tag>content</tag>`
- 📄 **Structure**: `<!DOCTYPE>` → `<html>` → `<head>` + `<body>`
- 📝 **Text**: `<h1>`–`<h6>`, `<p>`, `<strong>`, `<em>`
- 🔗 **Links**: `<a href="...">` — always add `rel="noopener"` for `_blank`
- 🖼️ **Images**: `<img src="..." alt="...">` — alt is **required**
- 📋 **Lists**: `<ul>` unordered, `<ol>` ordered, `<li>` items
- 🧠 **Semantic**: use `<header>`, `<main>`, `<article>`, `<footer>`
- 📦 **Block vs Inline**: `<div>` vs `<span>`

> Next lesson: **CSS** — making it look good 🎨

---

# 🏠 Homework

**Build your personal profile page:**

```
📁 profile/
  └── index.html
```

1. ✅ Correct `<!DOCTYPE html>` structure
2. ✅ Your name in `<h1>`, course in `<h2>`
3. ✅ A short paragraph `<p>` about yourself
4. ✅ A list `<ul>` of your hobbies
5. ✅ A link `<a>` to your favourite website
6. ✅ At least one image `<img>` with `alt` text
7. ✅ Use semantic tags: `<header>`, `<main>`, `<footer>`

**Submit via CodePen or as a `.html` file by next week.**

---

<!-- _class: title-slide -->

# 🙋 Questions?

## Resources

- 📖 **MDN Web Docs** — developer.mozilla.org
- 🎮 **HTML Tutorial** — w3schools.com/html
- 🖥️ **Try it live** — codepen.io
- 🔍 **Validate your HTML** — validator.w3.org

### Next week: CSS — Styling Your Page 🎨
