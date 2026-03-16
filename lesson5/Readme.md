# Lesson 5

# JavaScript: Условия, Операторы, Циклы

> **Уровень:** Начинающий → Средний  
> **Контекст примеров:** Frontend — React, DOM, UI  
> **Стек:** Vanilla JS / ES6+

---

## Содержание

1. [if / else if / else](#1-if--else-if--else)
2. [Тернарный оператор `?:`](#2-тернарный-оператор-)
3. [Логические операторы `||` и `&&`](#3-логические-операторы--и-)
4. [Циклы](#4-циклы)
   - [for — классический](#41-for--классический)
   - [for...of — перебор значений](#42-forof--перебор-значений)
   - [for...in — перебор ключей](#43-forin--перебор-ключей)
   - [while](#44-while)
   - [do...while](#45-dowhile)
5. [Сравнение циклов — шпаргалка](#5-сравнение-циклов--шпаргалка)
6. [Итоги урока](#6-итоги-урока)
7. [Домашнее задание](#7-домашнее-задание)

---

## 1. `if` / `else if` / `else`

### Определение

`if` — условная конструкция. JavaScript проверяет выражение в скобках: если оно `true` — выполняет блок кода, если `false` — пропускает.

📚 [MDN — if...else](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)

---

### Синтаксис

```js
if (условие) {
  // выполнится, если true
} else if (другое условие) {
  // выполнится, если первое false, но это true
} else {
  // выполнится, если ВСЁ выше false
}
```

---

### Базовый пример

```js
const hour = new Date().getHours(); // текущий час: 0–23

if (hour < 12) {
  console.log("Доброе утро ☀️");
} else if (hour < 18) {
  console.log("Добрый день 🌤");
} else {
  console.log("Добрый вечер 🌙");
}
```

---

### Реальный пример: рендер UI по роли пользователя

В React-приложении часто нужно показывать разные элементы в зависимости от роли.

```js
// authUtils.js
function getNavLinks(user) {
  if (!user) {
    // пользователь не авторизован — показываем только публичные ссылки
    return ["Home", "Login", "Register"];
  } else if (user.role === "admin") {
    // администратор видит панель управления
    return ["Home", "Dashboard", "Users", "Settings", "Logout"];
  } else if (user.role === "editor") {
    return ["Home", "Articles", "Drafts", "Logout"];
  } else {
    // обычный пользователь
    return ["Home", "Profile", "Logout"];
  }
}

const user = { name: "Alice", role: "admin" };
console.log(getNavLinks(user));
// → ["Home", "Dashboard", "Users", "Settings", "Logout"]

console.log(getNavLinks(null));
// → ["Home", "Login", "Register"]
```

> 💡 `!user` — проверка на `null` / `undefined`. Если `user` не существует, `!user` вернёт `true`.  
> Используй `===` вместо `==` — строгое сравнение не делает автоматических приведений типов.

---

## 2. Тернарный оператор `?:`

### Определение

Тернарный оператор — **сокращённая форма `if/else` в одну строку**. Возвращает одно из двух значений в зависимости от условия.

📚 [MDN — Conditional (ternary) operator](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

---

### Синтаксис

```js
условие ? значение_если_true : значение_если_false;
```

---

### Базовый пример

```js
const isLoggedIn = true;

// Обычный if/else
let greeting;
if (isLoggedIn) {
  greeting = "Добро пожаловать!";
} else {
  greeting = "Пожалуйста, войдите.";
}

// То же самое — тернарным оператором
const greeting2 = isLoggedIn ? "Добро пожаловать!" : "Пожалуйста, войдите.";

console.log(greeting2); // → Добро пожаловать!
```

---

### 💼 Реальный пример: CSS-классы в компоненте

```js
// Кнопка активна или нет — в зависимости от состояния корзины
const cartCount = 3;

const buttonClass = cartCount > 0 ? "btn btn--active" : "btn btn--disabled";
const buttonLabel = cartCount > 0 ? `Корзина (${cartCount})` : "Корзина пуста";

console.log(buttonClass); // → "btn btn--active"
console.log(buttonLabel); // → "Корзина (3)"
```

```js
// Отображение статуса заказа на странице профиля
function getOrderStatus(status) {
  return status === "delivered"
    ? "✅ Доставлен"
    : status === "in_transit"
      ? "🚚 В пути"
      : status === "processing"
        ? "⏳ Обрабатывается"
        : "❓ Неизвестный статус"; // fallback
}

console.log(getOrderStatus("in_transit")); // → 🚚 В пути
console.log(getOrderStatus("delivered")); // → ✅ Доставлен
console.log(getOrderStatus("cancelled")); // → ❓ Неизвестный статус
```

> 💡 Цепочка тернаров (как выше) — альтернатива `switch`. Читабельна при правильном выравнивании, но **не злоупотребляй** — более 3 уровней лучше заменить на `if/else` или `switch`.

---

### Edge cases тернарного оператора

```js
// ❌ Антипаттерн: вложенный тернар без форматирования — нечитаемо
const x = a ? (b ? "оба true" : "только a") : "a false";

// ✅ Правильно: выравниваем цепочку
const label = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";

// ⚠️ Тернар не подходит для side effects (console.log, fetch и т.д.)
// ❌ Плохо — тернар ради выполнения кода, не ради значения
isAdmin ? console.log("admin") : console.log("user");

// ✅ Лучше — используй if/else
if (isAdmin) {
  console.log("admin");
} else {
  console.log("user");
}
```

---

## 3. Логические операторы `||` и `&&`

### Определение

| Оператор | Название | Возвращает `true`, если...  |
| -------- | -------- | --------------------------- |
| `\|\|`   | OR (ИЛИ) | хотя бы одно условие `true` |
| `&&`     | AND (И)  | все условия `true`          |

📚 [MDN — Logical OR](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_OR) · [MDN — Logical AND](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND)

---

### Базовый пример

```js
const hasInternet = true;
const hasCachedData = false;

// OR: показать данные если есть интернет ИЛИ кэш
if (hasInternet || hasCachedData) {
  console.log("Данные доступны");
}

// AND: отправить форму только если оба поля заполнены
const username = "alice";
const password = "secret";

if (username && password) {
  console.log("Форма готова к отправке ✅");
}
```

---

### 💼 Реальный пример: валидация формы + дефолтные значения

```js
// Валидация перед отправкой формы
function validateLoginForm(email, password) {
  const isEmailValid = email.includes("@") && email.length > 5;
  const isPasswordValid = password.length >= 8;

  if (isEmailValid && isPasswordValid) {
    console.log("Форма валидна, отправляем запрос...");
    return true;
  }

  console.log("Ошибка: проверьте email и пароль.");
  return false;
}

validateLoginForm("alice@mail.com", "superpassword"); // → Форма валидна...
validateLoginForm("bad", "123"); // → Ошибка...
```

```js
// || как значение по умолчанию (короткое замыкание)
function greetUser(name) {
  const displayName = name || "Гость";
  console.log(`Привет, ${displayName}!`);
}

greetUser("Alice"); // → Привет, Alice!
greetUser(""); // → Привет, Гость!  (пустая строка — falsy)
greetUser(null); // → Привет, Гость!
```

> 💡 **Короткое замыкание (short-circuit):** `||` возвращает первое _truthy_ значение, `&&` — возвращает первое _falsy_ или последнее значение, если все truthy. Это активно используется в React для условного рендера:
>
> ```js
> isLoggedIn && <UserMenu />; // рендерит UserMenu только если isLoggedIn = true
> ```

---

## 4. Циклы

### 4.1 `for` — классический

**Когда использовать:** знаешь точное количество итераций или работаешь с индексом.

📚 [MDN — for](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for)

```js
// Синтаксис: for (инициализация; условие; шаг)
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
```

#### 💼 Реальный пример: генерация пагинации

```js
// Генерируем ссылки для пагинации: страницы 1–5
const totalPages = 5;
const links = [];

for (let page = 1; page <= totalPages; page++) {
  links.push(`<a href="/page/${page}">${page}</a>`);
}

console.log(links.join(" | "));
// → <a href="/page/1">1</a> | <a href="/page/2">2</a> | ...
```

---

### 4.2 `for...of` — перебор значений

**Когда использовать:** нужны **значения** из массива, строки или другого итерируемого объекта. Не нужен индекс.

📚 [MDN — for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

```js
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// → red
// → green
// → blue
```

```js
// Работает и со строками (перебирает символы)
for (const char of "hello") {
  console.log(char); // h e l l o
}
```

#### 💼 Реальный пример: рендер списка уведомлений

```js
const notifications = [
  { id: 1, text: "Новый комментарий к вашему посту", read: false },
  { id: 2, text: "Ваш заказ отправлен", read: true },
  { id: 3, text: "Вас упомянули в обсуждении", read: false },
];

for (const notif of notifications) {
  const status = notif.read ? "✅" : "🔔";
  console.log(`${status} [${notif.id}] ${notif.text}`);
}

// → 🔔 [1] Новый комментарий к вашему посту
// → ✅ [2] Ваш заказ отправлен
// → 🔔 [3] Вас упомянули в обсуждении
```

---

### 4.3 `for...in` — перебор ключей

**Когда использовать:** нужно перебрать **ключи** объекта (`{}` — не массива!).

📚 [MDN — for...in](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in)

```js
const user = {
  name: "Alice",
  age: 28,
  role: "admin",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// → name: Alice
// → age: 28
// → role: admin
```

#### 💼 Реальный пример: динамическое формирование query-параметров для URL

```js
// Собираем строку URL из объекта фильтров
const filters = {
  category: "electronics",
  minPrice: 100,
  maxPrice: 500,
  inStock: true,
};

const queryParts = [];

for (const key in filters) {
  queryParts.push(`${key}=${filters[key]}`);
}

const queryString = queryParts.join("&");
console.log(`/products?${queryString}`);
// → /products?category=electronics&minPrice=100&maxPrice=500&inStock=true
```

> **Не используй `for...in` для массивов** — он перебирает индексы как строки (`"0"`, `"1"`) и может захватить лишние свойства. Для массивов — `for...of` или классический `for`.

---

### 4.4 `while`

**Когда использовать:** количество итераций **неизвестно заранее** — цикл крутится, пока условие `true`.

📚 [MDN — while](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)

```js
let count = 0;

while (count < 3) {
  console.log(`Итерация ${count}`);
  count++;
}
// → Итерация 0
// → Итерация 1
// → Итерация 2
```

#### 💼 Реальный пример: polling — опрос сервера до получения результата

```js
// Симуляция: ждём, пока задача на сервере не выполнится
let jobStatus = "pending";
let attempts = 0;
const maxAttempts = 5;

// В реальности здесь был бы async/await + fetch
while (jobStatus !== "done" && attempts < maxAttempts) {
  attempts++;
  console.log(`Проверка статуса... попытка ${attempts}`);

  // Симулируем: задача завершается на 3-й попытке
  if (attempts === 3) {
    jobStatus = "done";
  }
}

if (jobStatus === "done") {
  console.log("✅ Задача завершена!");
} else {
  console.log("❌ Превышено максимальное число попыток.");
}

// → Проверка статуса... попытка 1
// → Проверка статуса... попытка 2
// → Проверка статуса... попытка 3
// → ✅ Задача завершена!
```

> Всегда убеждайся, что условие `while` **когда-нибудь станет `false`** — иначе браузер зависнет из-за бесконечного цикла.

---

### 4.5 `do...while`

**Когда использовать:** нужно **выполнить тело цикла хотя бы один раз**, даже если условие сразу `false`.

📚 [MDN — do...while](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while)

```js
// Синтаксис: сначала выполняем, потом проверяем
let i = 0;

do {
  console.log(`Выполнено: ${i}`);
  i++;
} while (i < 3);

// → Выполнено: 0
// → Выполнено: 1
// → Выполнено: 2
```

#### Разница между `while` и `do...while`

```js
let x = 10; // условие сразу false (x < 3 → false)

// while — не выполнится ни разу
while (x < 3) {
  console.log("while:", x); // не выводится
}

// do...while — выполнится 1 раз
do {
  console.log("do...while:", x); // → do...while: 10
} while (x < 3);
```

#### 💼 Реальный пример: показ onboarding-модала при первом визите

```js
// Показываем модал хотя бы раз, потом проверяем флаг в localStorage
let hasSeenOnboarding = false; // новый пользователь

do {
  console.log("Показываем онбординг-тур пользователю... 👋");
  hasSeenOnboarding = true; // пользователь увидел — ставим флаг

  // В реальном коде: localStorage.setItem("onboarding", "true");
} while (!hasSeenOnboarding);

console.log("Онбординг завершён, флаг сохранён.");
// → Показываем онбординг-тур пользователю... 👋
// → Онбординг завершён, флаг сохранён.
```

---

## 5. Сравнение циклов — шпаргалка

| Цикл         | Используй когда...                       | Перебирает    | Подходит для                |
| ------------ | ---------------------------------------- | ------------- | --------------------------- |
| `for`        | Знаешь количество итераций, нужен индекс | Счётчик       | Массивы, пагинация, матрицы |
| `for...of`   | Нужны **значения**, индекс не важен      | Значения      | Массивы, строки, Set, Map   |
| `for...in`   | Нужны **ключи** объекта                  | Ключи         | Объекты `{}`, query-params  |
| `while`      | Количество итераций неизвестно           | Условие       | Polling, ожидание события   |
| `do...while` | Тело должно выполниться **хотя бы раз**  | Условие после | Onboarding, первый рендер   |

---

## 6. Итоги урока

### Условия

- `if/else if/else` — основная ветвящаяся логика
- `===` строже и безопаснее, чем `==` — всегда используй его
- `!value` проверяет на `null`, `undefined`, `""`, `0`, `false` (все они _falsy_)

### Тернарный оператор

- Идеален для коротких условий **возвращающих значение**: `const x = a ? b : c`
- Цепочку можно строить до 3 уровней с правильным выравниванием
- **Не** используй для side effects (вызовов функций, мутаций)

### Логические операторы

- `||` возвращает первое _truthy_ значение → удобно для дефолтов: `name || "Гость"`
- `&&` возвращает первое _falsy_ или последнее значение → удобно для условного рендера в JSX
- Можно комбинировать: `(a || b) && c`

### Циклы

- `for` — когда нужен индекс или фиксированное число итераций
- `for...of` — для значений итерируемых структур (массив, строка, Set)
- `for...in` — только для ключей объектов, не для массивов
- `while` — когда условие выхода динамическое
- `do...while` — когда нужно выполнить тело минимум один раз

---

## 7. Домашнее задание

### Задание 1 — Условия + тернар

Есть массив товаров. Выведи для каждого: название, цену и метку — `"💸 Дорого"` если цена > 1000, иначе `"✅ Доступно"`. Используй тернарный оператор.

```js
const products = [
  { name: "Наушники", price: 2500 },
  { name: "Чехол", price: 300 },
  { name: "Клавиатура", price: 999 },
  { name: "Монитор", price: 15000 },
];

// Твой код здесь...
// Ожидаемый вывод:
// Наушники — 2500₽ 💸 Дорого
// Чехол — 300₽ ✅ Доступно
// ...
```

### Задание 2 — `for...in`

Есть объект с настройками темы. Используй `for...in` чтобы вывести все CSS-переменные в формате `--key: value`.

```js
const theme = {
  primaryColor: "#6200ea",
  fontSize: "16px",
  borderRadius: "8px",
  spacing: "4px",
};

// Ожидаемый вывод:
// --primaryColor: #6200ea
// --fontSize: 16px
// ...
```

### Задание 3 — `while` + логика

Симулируй бесконечную ленту: выводи посты по одному, пока не встретишь пост с `pinned: true` — тогда останови цикл и выведи `"📌 Закреплённый пост найден"`.

```js
const feed = [
  { id: 1, text: "Пост 1", pinned: false },
  { id: 2, text: "Пост 2", pinned: false },
  { id: 3, text: "Важное объявление", pinned: true },
  { id: 4, text: "Пост 4", pinned: false },
];
```

---

> 💬 **Совет по отладке:** Открой DevTools (`F12`) → Console и запускай код прямо там. Для сложных примеров используй [playcode.io](https://playcode.io) или [codesandbox.io](https://codesandbox.io) — онлайн-редакторы без установки.

---

_Следующий урок: Functions — declaration vs expression, arrow functions, closures, callbacks_
