## 2025-05-18 - Missing Icon Libraries
**Learning:** Icon-only buttons (like social media links) rely on external libraries (Font Awesome) that might be missing from the page templates, rendering them invisible.
**Action:** Always verify that icon fonts are properly linked in the `<head>` when seeing class names like `fab fa-twitter`.

## 2025-05-18 - Non-Standard Indentation
**Learning:** Templates may use non-breaking spaces for indentation, which breaks standard diff patching.
**Action:** Use `write_file` to overwrite entire files or exercise extreme caution with whitespace when modifying templates.
