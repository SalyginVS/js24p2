---
name: Project Architecture
alwaysApply: true
---

# Project Type

Frontend web application. Vanilla JavaScript, CSS, HTML. No frameworks, no bundlers, no package managers. Files open directly in browser.

# Structure

- Each feature or page is a separate folder with its own .html, .js, .css files.
- Shared assets (images, fonts) go in a common folder if present.
- No build step. Code runs as-is in the browser.

# JavaScript

- Vanilla JS only. No jQuery, no React, no TypeScript.
- Use const by default, let when reassignment is needed, never var.
- Use arrow functions for callbacks, regular functions for top-level declarations.
- Use addEventListener instead of inline onclick attributes.
- DOM queries: document.querySelector / querySelectorAll.
- Keep functions short and single-purpose.
- Use strict equality (=== and !==).

# CSS

- Use a single .css file per page/feature.
- Use class selectors. Avoid ID selectors for styling.
- Use CSS custom properties (variables) for colors and recurring values.
- Mobile-first approach: base styles for mobile, media queries for wider screens.
- Use flexbox or grid for layout. No floats for layout purposes.

# HTML

- Semantic HTML5 elements: header, nav, main, section, article, footer.
- All images must have alt attributes.
- Use UTF-8 encoding. Include lang attribute on html tag.
- Link CSS in head, scripts at the end of body or with defer attribute.

# Naming

- Files: kebab-case (my-component.js, main-style.css).
- CSS classes: kebab-case (nav-item, btn-primary).
- JS variables and functions: camelCase (getUserName, isValid).
- JS constants for config values: UPPER_SNAKE_CASE (MAX_RETRIES, API_URL).

# Error Handling

- Wrap fetch calls in try/catch.
- Show user-friendly error messages in the UI, log details to console.
- Validate user input before processing.
