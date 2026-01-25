## 2025-05-15 - Icon-Only Buttons and External Dependencies
**Learning:** Icon-only buttons (like social links) that rely on external libraries (FontAwesome) are a double point of failure. If the library fails to load (missing CDN), the buttons disappear completely. If loaded, they are invisible to screen readers without ARIA labels.
**Action:** Always pair icon-only buttons with `aria-label` AND ensure the icon library is properly included. Consider checking for missing CDNs in legacy templates.
