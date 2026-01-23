# Palette's UX Journal

This journal records critical UX and accessibility learnings.

## 2026-01-23 - Hidden Non-Breaking Spaces in Templates
**Learning:** `templates/homepage.html` utilizes non-breaking spaces (`\xa0`) for indentation. This breaks standard diffs and search/replace operations.
**Action:** Always inspect raw bytes when editing templates in this project. Use targeted replacement scripts to preserve specific byte sequences.
