## 2025-05-15 - Missing Icon Fonts and Accessibility Labels
**Learning:** Icon-only buttons (like social media links) that rely on external font libraries (Font Awesome) must ensure the library is actually loaded. Without it, users see empty boxes. Furthermore, without `aria-label` attributes, these empty boxes are completely invisible to screen reader users, creating a "double failure" of accessibility and usability.
**Action:** Always verify that icon fonts are loaded in the `<head>` and strictly enforce `aria-label` on any link or button that contains only an icon.
