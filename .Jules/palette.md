# Palette's Journal - Critical Learnings

## 2026-01-12 - Retro Theme Accessibility & Feedback
**Learning:** The "Retro" aesthetic (neon on dark backgrounds, placeholders as labels) often compromises accessibility and usability. Specifically, users were missing context on form errors because `flash()` messages weren't rendered, and screen readers lacked context due to missing labels.
**Action:** When working with this design system:
1.  Always add `aria-label` to inputs when the design dictates "placeholder only".
2.  Use high-contrast neon colors (e.g., `#ff0099` with text-shadow) for feedback messages to maintain the theme while ensuring visibility.
3.  Ensure non-blocking feedback (avoid `alert()`) to maintain the immersive arcade feel.
