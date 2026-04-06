# Landing Page — Newborn Photography

## Project Structure

- assets/
  - icons/ # SVG/PNG icons (social, UI)
  - images/ # Photos for the landing + quiz pages
    - babybauch/ # Pregnancy (Babybauch) photos
    - newborn/ # Newborn photos

- css/
  - quiz-thanks/ # Styles for quiz flow + form + thank-you page
    - quiz-form.css
    - quiz-header.css
    - quiz-question.css
    - thank-you-hero.css
  - sections/ # Styles for landing page sections (index.html)
    - about.css
    - author-footer.css
    - benefits.css
    - faq.css
    - features.css
    - footer.css
    - fullwidth-image.css
    - gallery.css
    - hero.css
    - legal-footer.css
    - process.css
    - promotional.css
    - services.css
  - base-styles.css # Design tokens (CSS variables), base settings
  - bootstrap.min.css # Local Bootstrap build
  - common.css # Typography utilities, buttons, shared helpers

- js/
  - bootstrap.bundle.min.js # Bootstrap JS bundle (local)
  - common.js # Shared scripts (if used across pages)
  - gallery-swiper.js # Swiper gallery initialization for the landing page
  - quiz.js # Quiz logic (saving answers, form submit, navigation)

- index.html # Main landing page
- quiz-1.html # Quiz
- quiz-2.html # Quiz
- quiz-3.html # Quiz
- quiz-4.html # Quiz
- quiz-5.html # Quiz
- quiz-6.html # Quiz
- quiz-7.html # Quiz
- quiz-8.html # Quiz
- quiz-9.html # Quiz
- quiz-10.html # Quiz
- quiz-form.html # Final registration form page
- thank-you.html # Thank-you page after successful submission

- README.md
- .gitignore

---

## CSS

### Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --brand-primary: #f5ede0; /* Main background */
  --brand-secondary: #eee3d0; /* Secondary background */
  --brand-accent: #e2c08d; /* Accent (buttons) */
  --brand-text: #3d3d3d; /* Text color */

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

### Background Classes

| Class                 | CSS Variable             | Default Color |
| --------------------- | ------------------------ | ------------- |
| `.bg-brand-primary`   | `var(--brand-primary)`   | #F5EDE0       |
| `.bg-brand-secondary` | `var(--brand-secondary)` | #EEE3D0       |
| `.bg-brand-accent`    | `var(--brand-accent)`    | #E2C08D       |
| `.bg-brand-white`     | `var(--color-white)`     | #FFFFFF       |
| `.bg-brand-dark`      | `var(--brand-dark)`      | #171717       |

To change colors — edit `:root` in `css/base-styles.css`.

### Reusable Classes (common.css)

| Class                                    | Description             |
| ---------------------------------------- | ----------------------- |
| `.text-h1`, `.text-h2`, `.text-h3`       | Headings                |
| `.text-bold-big`, `.text-medium-big`     | 28px text               |
| `.text-bold-small`, `.text-medium-small` | 22px text               |
| `.btn-primary-custom`                    | Accent button (#E2C08D) |
| `.btn-outline-custom`                    | Outline button          |
| `.img-placeholder`                       | Image placeholder       |

---

## JavaScript

### common.js

### quiz.js — Quiz Flow Logic

- Saves answers to `localStorage`
- Form validation
- Submits data to Google Sheets

### Quiz Flow

The landing covers two directions: **Babybauch** (pregnancy) and **Newborn** photography.

quiz-1.html
├── Babybauch → quiz-2.html → quiz-3.html → quiz-4.html → quiz-5.html → quiz-form.html
└── Newborn → quiz-6.html
├── Bereits Elternteil → quiz-7.html → quiz-8.html → quiz-9.html → quiz-5.html → quiz-form.html
└── Noch schwanger → quiz-10.html → quiz-8.html → quiz-9.html → quiz-5.html → quiz-form.html

### Configuration via Data Attributes

```html
<body
  data-quiz-storage-key="my_quiz"
  data-quiz-success-page="thank-you.html"
  data-quiz-google-script="https://script.google.com/..."
></body>
```

---

## Customization

### How to Change Colors

Open `css/base-styles.css` and edit the values in `:root`:

```css
:root {
  /* ====== COLORS — EDIT HERE ====== */
  --brand-primary: #f5ede0; /* Main section background */
  --brand-secondary: #eee3d0; /* Secondary section background */
  --brand-accent: #e2c08d; /* Buttons, accents */
  --brand-text: #3d3d3d; /* Text color */
}
```

**Example: Switch to a pink theme**

```css
:root {
  --brand-primary: #fff0f5; /* Light pink */
  --brand-secondary: #ffe4e9; /* Pink */
  --brand-accent: #ff69b4; /* Hot pink */
  --brand-text: #333333; /* Dark text */
}
```

Save the file — all pages will update automatically.

### What You Can Change

| Element             | How                                         | File                  |
| ------------------- | ------------------------------------------- | --------------------- |
| Section backgrounds | Edit `--brand-primary`, `--brand-secondary` | `css/base-styles.css` |
| Button color        | Edit `--brand-accent`                       | `css/base-styles.css` |
| Text color          | Edit `--brand-text`                         | `css/base-styles.css` |
| Font family         | Edit `--font-family`                        | `css/base-styles.css` |
| Heading sizes       | Edit `--font-h1`, `--font-h2`               | `css/base-styles.css` |
| Text content        | Find and replace in HTML                    | `*.html`              |
| Images              | Replace URL in `src="..."`                  | `*.html`              |

### What You Should Not Change

- HTML tag structure
- CSS class names
- JavaScript files
- Bootstrap files

---

## Common Edits

### Change button text

```html
<a href="quiz-1.html" class="btn btn-primary-custom">
  Jetzt Gutschein sichern
</a>
```

Replace the text between `>` and `</a>`.

### Change an image

```html
<img src="https://example.com/photo.jpg" alt="Description" />
```

Replace the URL in `src="..."`.

### Change a link

Find `href="..."` and replace the URL.
