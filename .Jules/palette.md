## 2026-01-20 - Non-standard Indentation in Templates
**Learning:** `templates/homepage.html` uses Non-Breaking Spaces (U+00A0) for indentation instead of standard spaces or tabs. This causes standard search/replace tools to fail if they expect standard whitespace.
**Action:** When modifying templates in this repo, inspect the file encoding and whitespace characters first. Use precise replacement scripts or handle NBSPs explicitly.
