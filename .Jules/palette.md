## 2026-01-11 - Missing Form Labels
**Learning:** Several forms (`signup`, `login`) relied solely on `placeholder` attributes for user guidance, which is a major accessibility anti-pattern.
**Action:** Always check for `<label>` elements in forms and ensure they are programmatically associated with inputs via `for`/`id` attributes.
