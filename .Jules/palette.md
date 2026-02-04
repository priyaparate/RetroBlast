## 2025-05-21 - Icon-Only Accessibility and Missing Assets
**Learning:** Found social media links in the footer that were both inaccessible (missing `aria-label`) and invisible (missing Font Awesome CDN).
**Action:** When working on UI components, double-check that external asset libraries (fonts, icons) are correctly linked in the `<head>` and that all icon-only buttons have descriptive `aria-label` attributes.
