# Фотосессии новорождённых

## Структура

...

## CSS

CSS переменные (Design Tokens):

```css
:root {
  /* Colors */
  --brand-primary: #f5ede0; /* Основной фон */
  --brand-secondary: #eee3d0; /* Вторичный фон */
  --brand-accent: #e2c08d; /* Акцент (кнопки) */
  --brand-text: #3d3d3d; /* Текст */

  /* Typography */
  --font-h1: 55px;
  --font-h2: 45px;
  --font-h3: 35px;
  --font-h4: 28px;
  --font-body: 22px;

  /* Spacing */
  --spacing-section: 80px;
  --spacing-section-mobile: 40px;
}
```

### Фоновые классы (для секций)

Секции используют CSS классы:

| Класс                 | CSS переменная           | Цвет по умолчанию |
| --------------------- | ------------------------ | ----------------- |
| `.bg-brand-primary`   | `var(--brand-primary)`   | #F5EDE0           |
| `.bg-brand-secondary` | `var(--brand-secondary)` | #EEE3D0           |
| `.bg-brand-accent`    | `var(--brand-accent)`    | #E2C08D           |
| `.bg-brand-white`     | `var(--color-white)`     | #FFFFFF           |
| `.bg-brand-dark`      | `var(--brand-dark)`      | #171717           |

**Для изменения цветов** — редактируйте `:root` в `base-styles.css`.

### common.css

Переиспользуемые классы:

| Класс                                    | Описание                    |
| ---------------------------------------- | --------------------------- |
| `.text-h1`, `.text-h2`, `.text-h3`       | Заголовки                   |
| `.text-bold-big`, `.text-medium-big`     | 28px текст                  |
| `.text-bold-small`, `.text-medium-small` | 22px текст                  |
| `.btn-primary-custom`                    | Кнопка с акцентом (#E2C08D) |
| `.btn-outline-custom`                    | Контурная кнопка            |
| `.img-placeholder`                       | Плейсхолдер изображения     |

## JavaScript

### common.js

### quiz.js

Логика quiz-воронки:

- Сохранение ответов в localStorage
- Валидация формы
- Отправка на Google Sheets

В этом лендинге два направления: "Фотосессии беременных" и "Фотосессии новорождённых". Если выбрать "Фотосессии новорождённых", то попадаeм на квизы для новорождённых.

Логика:
• quiz-1.html → ветка:
o Babybauch → quiz-2.html
o Newborn → quiz-6.html

Babybauch:
• quiz-2.html → quiz-3.html
• quiz-3.html → quiz-4.html
• quiz-4.html → quiz-5.html
• quiz-5.html → quiz-form.html

Newborn:
• quiz-6.html:
o Bereits Elternteil → quiz-7.html
o Noch schwanger → quiz-10.html
• quiz-7.html → quiz-8.html
• quiz-10.html → quiz-8.html
• quiz-8.html → quiz-9.html
• quiz-9.html → quiz-5.html
• quiz-5.html → quiz-form.html

Конфигурация через data-атрибуты:

```html
<body
  data-quiz-storage-key="my_quiz"
  data-quiz-success-page="thank-you.html"
  data-quiz-google-script="https://script.google.com/..."
></body>
```

## Как изменить цвета (для клиента)

Откройте файл `css/base-styles.css` и измените значения в `:root`:

```css
:root {
  /* ====== ЦВЕТА - РЕДАКТИРУЙТЕ ЗДЕСЬ ====== */
  --brand-primary: #f5ede0; /* Основной фон секций */
  --brand-secondary: #eee3d0; /* Вторичный фон секций */
  --brand-accent: #e2c08d; /* Кнопки, акценты */
  --brand-text: #3d3d3d; /* Цвет текста */
}
```

### Пример: Изменить на розовую тему

```css
:root {
  --brand-primary: #fff0f5; /* Светло-розовый */
  --brand-secondary: #ffe4e9; /* Розовый */
  --brand-accent: #ff69b4; /* Ярко-розовый */
  --brand-text: #333333; /* Темный текст */
}
```

Сохраните файл — все страницы лендинга обновятся

---

## Что можно изменять

| Элемент               | Как изменить                                    | Файл                  |
| --------------------- | ----------------------------------------------- | --------------------- |
| **Цвета фонов**       | Изменить `--brand-primary`, `--brand-secondary` | `css/base-styles.css` |
| **Цвет кнопок**       | Изменить `--brand-accent`                       | `css/base-styles.css` |
| **Цвет текста**       | Изменить `--brand-text`                         | `css/base-styles.css` |
| **Шрифт**             | Изменить `--font-family`                        | `css/base-styles.css` |
| **Размер заголовков** | Изменить `--font-h1`, `--font-h2`               | `css/base-styles.css` |
| **Тексты**            | Найти и заменить в HTML                         | `*.html`              |
| **Изображения**       | Заменить URL в `src="..."`                      | `*.html`              |

---

## Что нельзя изменять

- Структуру HTML тегов
- Названия CSS классов
- JavaScript файлы
- Bootstrap файлы

---

## Типичные изменения

### Изменить текст кнопки

Найти в HTML:

```html
<a href="quiz-1.html" class="btn btn-primary-custom">
  Jetzt Gutschein sichern
</a>
```

Заменить текст между `>` и `</a>`.

### Изменить изображение

Найти в HTML:

```html
<img src="https://example.com/photo.jpg" alt="Описание" />
```

Заменить URL в `src="..."`.

### Изменить ссылку

Найти `href="..."` и заменить URL.
