## 2025-02-23 - Icon-only buttons require ARIA labels
**Learning:** The application uses icon-only links for social media in `homepage.html`. Without text content or `aria-label`, these are inaccessible to screen reader users, who hear nothing or just "link".
**Action:** Always verify icon-only interactive elements have an `aria-label` or `aria-labelledby` attribute. When identifying this pattern, prioritize adding these labels as a high-impact, low-effort accessibility fix.
