## 2025-02-18 - Missing Accessibility on Icon-Only Buttons
**Learning:** The application uses icon-only links for social media in the footer, but they lacked `aria-label` attributes, making them invisible to screen readers. They also relied on an external font library (Font Awesome) that was not included, rendering them invisible to all users.
**Action:** Always verify that icon-only interactive elements have `aria-label` and that their font dependencies are correctly loaded. Ensure external links use `rel="noopener noreferrer"`.
