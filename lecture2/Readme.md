# HTML Fundamentals

### Cardiff University · Web Development · 40 min lesson

---

## Agenda

| #   | Topic                        | Time  |
| --- | ---------------------------- | ----- |
| 1   | What is HTML?                | 3 min |
| 2   | Anatomy of a Tag             | 5 min |
| 3   | Page Structure               | 5 min |
| 4   | Text — Headings & Paragraphs | 5 min |
| 5   | Lists                        | 3 min |
| 6   | Links                        | 4 min |
| 7   | Images                       | 3 min |
| 8   | Tables                       | 4 min |
| 9   | Forms                        | 4 min |
| 10  | Semantic HTML                | 4 min |

---

## 1. What is HTML?

HTML (HyperText Markup Language) is the standard language for creating web pages. Created in 1991 by Tim Berners-Lee.

The three layers of every website:

| Language   | Role         | Analogy                    |
| ---------- | ------------ | -------------------------- |
| HTML       | Structure    | Walls and rooms of a house |
| CSS        | Presentation | Paint and furniture        |
| JavaScript | Behaviour    | Electricity, doors, lift   |

Try it now: open any website in your browser and press `Ctrl+U` (Windows) or `Cmd+Option+U` (Mac) — you will see the raw HTML of that page.

---

## 2. Anatomy of a Tag

```html
<p class="intro">Hello, Cardiff!</p>
```

- `<p>` — opening tag
- `class="intro"` — attribute (name + value)
- `Hello, Cardiff!` — content
- `</p>` — closing tag

### Two types of tags

```html
<!-- Paired tags — have opening and closing -->
<h1>Title</h1>
<p>Paragraph</p>
<strong>Bold text</strong>

<!-- Void elements — no content, no closing tag -->
<img src="photo.jpg" alt="A photo" />
<br />
<hr />
<input type="text" />
```

---

## 3. Page Structure

Every HTML file must follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cardiff University</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1>Welcome!</h1>
    <p>Content goes here.</p>
  </body>
</html>
```

- `<!DOCTYPE html>` — tells the browser this is modern HTML5. Always required on line 1.
- `<head>` — invisible settings: charset, title, CSS links.
- `<body>` — everything the user actually sees.

---

## 4. Text — Headings & Paragraphs

```html
<h1>Main Title</h1>
<!-- only ONE h1 per page -->
<h2>Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Rarely used</h5>
<h6>Almost never used</h6>

<p>This is a paragraph. Browsers add spacing above and below automatically.</p>

<p>This is a second paragraph.</p>

<!-- Line break — use sparingly -->
<p>Line one.<br />Line two.</p>

<!-- Horizontal divider -->
<hr />
```

### Text formatting

```html
<strong>Important text</strong>
<!-- bold + semantic meaning -->
<em>Emphasised text</em>
<!-- italic + semantic meaning -->
<mark>Highlighted text</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<small>Small print</small>
<code>console.log("hello")</code>
<sup>E = mc<sup>2</sup></sup>
<sub>H<sub>2</sub>O</sub>
```

> Use `<strong>` instead of `<b>`, and `<em>` instead of `<i>`. Semantic tags carry meaning — screen readers use them to read aloud with the correct emphasis.

---

## 5. Lists

```html
<!-- Unordered list — order does not matter -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list — order matters -->
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

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>Structure of a webpage</dd>
  <dt>CSS</dt>
  <dd>Visual style of a webpage</dd>
</dl>
```

---

## 6. Links

```html
<!-- External link -->
<a href="https://www.cardiff.ac.uk">Cardiff University</a>

<!-- Open in new tab — always add rel="noopener" for security -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>

<!-- Internal link to another page -->
<a href="about.html">About Us</a>
<a href="/contact">Contact</a>
<!-- from root -->
<a href="../index.html">Home</a>
<!-- one folder up -->

<!-- Jump to a section on the same page -->
<a href="#contact-section">Jump to Contact</a>
...
<h2 id="contact-section">Contact</h2>

<!-- Email and phone -->
<a href="mailto:hello@cardiff.ac.uk">Email Us</a>
<a href="tel:+442920874000">Call Us</a>

<!-- Image as a link -->
<a href="https://cardiff.ac.uk">
  <img src="logo.png" alt="Cardiff University" />
</a>
```

---

## 7. Images

```html
<!-- Basic image -->
<img src="photo.jpg" alt="A photo of Cardiff Bay" />

<!-- Image from the internet -->
<img src="https://example.com/image.png" alt="Description" />

<!-- With explicit dimensions -->
<img src="logo.png" alt="Cardiff University logo" width="200" height="100" />
```

The `alt` attribute is required. It:

- Is read aloud by screen readers for blind users
- Displays when the image fails to load
- Helps search engines understand the image content

---

## 8. Tables

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Course</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Computer Science</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Web Development</td>
      <td>2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 2 students</td>
    </tr>
  </tfoot>
</table>
```

- `<thead>` / `<tbody>` / `<tfoot>` — semantic wrappers for the table sections
- `<th>` — header cell (bold and centred by default)
- `<td>` — data cell
- `colspan="3"` — merge across 3 columns
- `rowspan="2"` — merge across 2 rows

> Tables are for **tabular data only** — not for page layout.

---

## 9. Forms

```html
<form action="/submit" method="POST">
  <!-- Text input -->
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" placeholder="John Smith" required />

  <!-- Email input — browser validates format -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <!-- Number input -->
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="16" max="99" />

  <!-- Dropdown -->
  <label for="course">Course:</label>
  <select id="course" name="course">
    <option value="">-- Choose --</option>
    <option value="cs">Computer Science</option>
    <option value="web">Web Development</option>
  </select>

  <!-- Radio buttons -->
  <input type="radio" id="yes" name="agree" value="yes" />
  <label for="yes">Yes</label>
  <input type="radio" id="no" name="agree" value="no" />
  <label for="no">No</label>

  <!-- Checkbox -->
  <input type="checkbox" id="terms" name="terms" />
  <label for="terms">I agree to the terms</label>

  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>

  <!-- Buttons -->
  <button type="submit">Send</button>
  <button type="reset">Clear</button>
</form>
```

Always pair `<label>` with `<input>` using matching `for` and `id` attributes. Clicking the label focuses the input — important for usability and accessibility.

### Common input types

| Type       | Description               |
| ---------- | ------------------------- |
| `text`     | Single line text          |
| `email`    | Email address (validated) |
| `password` | Hidden characters         |
| `number`   | Numeric input             |
| `date`     | Date picker               |
| `checkbox` | Boolean toggle            |
| `radio`    | One choice from a group   |
| `file`     | File upload               |
| `range`    | Slider                    |
| `color`    | Colour picker             |

---

## 10. Semantic HTML

Before HTML5, developers used `<div>` for everything. HTML5 introduced meaningful tags that describe the purpose of each section.

```html
<!-- Old way — no meaning -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main">...</div>
<div id="sidebar">...</div>
<div id="footer">...</div>

<!-- Modern way — semantic HTML5 -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>

  <aside>
    <h2>Related Links</h2>
    <ul>
      <li><a href="#">Link 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>© 2025 Cardiff University</p>
</footer>
```

### Semantic tags reference

| Tag            | Purpose                                  |
| -------------- | ---------------------------------------- |
| `<header>`     | Introductory content, logo, nav          |
| `<nav>`        | Navigation links                         |
| `<main>`       | Primary content (only one per page)      |
| `<article>`    | Self-contained content (blog post, news) |
| `<section>`    | Thematic grouping of content             |
| `<aside>`      | Sidebar, related content                 |
| `<footer>`     | Bottom of page or section                |
| `<figure>`     | Image with caption                       |
| `<figcaption>` | Caption for `<figure>`                   |
| `<time>`       | Date or time value                       |

### `div` and `span`

Use `<div>` and `<span>` only when no semantic tag fits.

```html
<!-- div — block level, takes full width -->
<div class="card">
  <h2>Cardiff Castle</h2>
  <p>A historic castle in the city centre.</p>
</div>

<!-- span — inline, stays inside text flow -->
<p>The price is <span class="price">£29.99</span> per person.</p>
```

---

## Full Page Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cardiff Blog</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>

    <main>
      <article>
        <h1>Welcome to Cardiff</h1>

        <figure>
          <img src="castle.jpg" alt="Cardiff Castle at sunset" width="600" />
          <figcaption>Cardiff Castle, built in the 11th century.</figcaption>
        </figure>

        <p>
          Cardiff is the <strong>capital city</strong> of Wales and home to over
          <em>360,000 people</em>.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>Cardiff Castle</li>
          <li>Cardiff Bay</li>
          <li>National Museum Cardiff</li>
        </ul>

        <a href="https://visitcardiff.com" target="_blank" rel="noopener">
          Visit Cardiff website
        </a>
      </article>
    </main>

    <footer>
      <p>
        © 2025 Cardiff University |
        <a href="mailto:info@cardiff.ac.uk">Contact Us</a>
      </p>
    </footer>
  </body>
</html>
```

---

## Key Takeaways

| Concept   | Key Point                                                      |
| --------- | -------------------------------------------------------------- |
| Tags      | `<tag>content</tag>` — always close what you open              |
| Structure | `<!DOCTYPE>` → `<html>` → `<head>` + `<body>`                  |
| Headings  | `<h1>` to `<h6>` — only one `<h1>` per page                    |
| Links     | `<a href="...">` — add `rel="noopener"` for `target="_blank"`  |
| Images    | `<img src="..." alt="...">` — `alt` is always required         |
| Lists     | `<ul>` unordered, `<ol>` ordered, `<li>` for each item         |
| Tables    | For data only, not layout                                      |
| Forms     | Always pair `<label>` with `<input>`                           |
| Semantic  | Use `<header>`, `<main>`, `<article>`, `<footer>` over `<div>` |

---

## Homework — Profile Page

Build a personal profile page using all of today's concepts.

```
profile/
  └── index.html
```

1. Correct `<!DOCTYPE html>` structure
2. Your name in `<h1>`, course in `<h2>`
3. A short paragraph `<p>` about yourself
4. A list `<ul>` of your hobbies
5. A link `<a>` to your favourite website
6. At least one image `<img>` with `alt` text
7. Semantic structure: `<header>`, `<main>`, `<footer>`

Submit via [CodePen](https://codepen.io) or as a `.html` file by next week. Validate your HTML at [validator.w3.org](https://validator.w3.org).

---

## Resources

| Resource       | URL                                       |
| -------------- | ----------------------------------------- |
| MDN Web Docs   | developer.mozilla.org/en-US/docs/Web/HTML |
| W3Schools HTML | w3schools.com/html                        |
| HTML Validator | validator.w3.org                          |
| CodePen        | codepen.io                                |

---

_Cardiff University · Web Development · Next lesson: CSS — Styling Your Page_
