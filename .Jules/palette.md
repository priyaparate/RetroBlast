## 2026-01-18 - Icon-Only Links Require Context
**Learning:** The application uses icon-only links for social media in the footer without any text alternative. This makes them invisible to screen readers, leaving users with no context about where the links lead.
**Action:** Always verify icon-only interactive elements have `aria-label` or visually hidden text. Added `aria-label` to Twitter, Instagram, and YouTube links to expose their purpose to assistive technology.
