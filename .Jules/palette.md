## 2026-01-27 - Hidden UI Dependencies
**Learning:** Social icon links were completely invisible because the FontAwesome CDN was missing, and they lacked `aria-label`s making them inaccessible to screen readers. This created a "double failure" state where the UI was broken for everyone.
**Action:** When using icon libraries, always check if the CDN/local asset is actually loaded, and enforce `aria-label` on all icon-only links during code review.
