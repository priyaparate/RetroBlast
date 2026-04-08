## 2024-05-22 - Missing Form Labels Pattern
**Learning:** The application consistently uses inputs with placeholders but without visible or programmatic labels (aria-label). This suggests a "minimalist retro" aesthetic priority over standard accessibility practices.
**Action:** When working on forms in this codebase, always check for missing labels. If visible labels disrupt the design, add `aria-label` attributes matching the placeholder text to ensure screen reader accessibility without altering the visual style.
