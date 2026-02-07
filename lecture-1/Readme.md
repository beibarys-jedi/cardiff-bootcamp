# Lecture 1 - Git

## VCS 

Version Control Systems

## Git basic principles

![Illustrative diagram related to the lecture topic](https://preview.redd.it/nm1w0gnf2zh11.png?width=1080&crop=smart&auto=webp&s=f793be53fbc0246cecc4d865b2ea479d5ea57e94)

**Figure:** Visual illustration used to support the explanation of the key concept discussed in this lecture. The image helps clarify relationships and structure that may be harder to grasp from text alone.


## Git basic commands

* `git init` — превращает текущую папку в Git-репозиторий. Появляется скрытая папка `.git`.

### 💾 Сохранение изменений
* `git add <file>` — добавляет конкретный файл в "индекс" (подготовка к сохранению).
* `git add .` — добавляет **все** измененные файлы в индекс.
* `git commit -m "описание"` — создает "слепок" изменений с комментарием.

### 🔍 Проверка статуса
* `git status` — показывает, какие файлы изменены, а какие готовы к коммиту.
* `git log` — выводит историю всех сделанных коммитов.

---

### 🌐 Работа с удаленным репозиторием
* `git fetch` — забирает данные с сервера, но **не меняет** ваш код (безопасный просмотр).
* `git pull` — забирает данные и сразу **объединяет** их с вашим кодом.
* `git push` — отправляет ваши локальные коммиты на сервер.

---

### 💡 Полезные сокращения
| Команда | Что делает |
| :--- | :--- |
| `git log --oneline` | Краткая история в одну строку |
| `git diff` | Показывает конкретные изменения в строках кода |
| `git commit --amend` | Позволяет исправить последний коммит (если еще не сделали push) |

## Code review

## Tools


