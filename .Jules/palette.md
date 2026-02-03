## 2026-02-03 - Invisible Interactive Elements
**Learning:** Icon-only buttons (like social media links) that rely on external fonts (Font Awesome) become completely invisible and inaccessible if the font library fails to load or is missing.
**Action:** Always include fallback text or `aria-label` attributes for icon-only buttons, and verify external dependencies are correctly linked.
