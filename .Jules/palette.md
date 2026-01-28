## 2025-05-18 - Accessible Icon-Only Buttons
**Learning:** In visual-heavy retro themes like this one, icon-only buttons (like social media links) are common for aesthetic reasons but often lack text content. This creates a significant accessibility barrier for screen reader users who might only hear "link" or the icon font filename.
**Action:** Always ensure icon-only buttons have an `aria-label` describing their function (e.g., `aria-label="Twitter"`). Additionally, when links open in a new tab, use `target="_blank"` paired with `rel="noopener noreferrer"` for both security and to inform the browser (and potentially assistive technology) of the context switch.

## 2025-05-18 - External Dependencies in Retro Themes
**Learning:** The "Retro Blast" theme relies on Font Awesome for icons, but the CDN link was missing from the template, causing icons to be invisible (0x0 size) and creating "ghost" links.
**Action:** When working with template-based themes, always verify that external dependencies (CSS/JS CDNs) are correctly included in the `<head>`. Restored the Font Awesome 6.4.0 CDN link to `templates/homepage.html`.
