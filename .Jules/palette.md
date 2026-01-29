## 2024-05-23 - Icon Font Dependency Gaps
**Learning:** Icon-only buttons relying on external CSS libraries (like Font Awesome) are double points of failure: if the CDN is missing, they become invisible AND inaccessible.
**Action:** Always verify that icon libraries are actually loaded in the `<head>`, and ensure `aria-label` provides a fallback name even if the icon fails to render.
