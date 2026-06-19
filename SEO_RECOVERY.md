# SEO Recovery Report & Go-Live Runbook

**Site:** letters2numbersconverter.com
**Branch with all fixes:** `claude/dazzling-allen-Emyew`
**Status:** All code work complete and build-verified (`next build` exits 0). Awaiting production deployment.

---

## 1. Diagnosis (from live Google Search Console data via Windsor.ai)

The site suffered a **sitewide algorithmic demotion on May 17, 2026** — not a deindexing.

| Metric | Before (May 1–17) | After (May 18 →) |
| --- | --- | --- |
| Daily impressions | ~9,900/day | ~200/day |
| Avg position | 4–8 (page 1) | 20–30, then 80–97 |

Every core keyword fell from page 1 to pages 8–10:

| Query | Position now |
| --- | --- |
| letters to numbers converter | ~80 |
| letter to number converter | ~88 |
| convert letters to numbers | ~85 |
| letters to numbers | ~87 |
| alphabet to numbers | ~93 |

This pattern (uniform sitewide suppression, pages still indexed) is the signature of a **spam / unhelpful-content classification**. The likely triggers were present in the codebase and have been removed.

---

## 2. What was changed and why

### Spam-policy violations removed (most likely demotion cause)
- Fabricated `aggregateRating` review schema injected on **every** tool page (4.8★/1,250) + duplicates on specific pages.
- Fabricated product ratings + fake Amazon image on the cipher-locks post.
- Fake "Trusted By" corporate logos (L'Oréal, NYT, Library of Congress, etc.) — no such relationships.
- Six fabricated 5-star testimonials on the homepage.
- Placeholder phone number in Organization schema; "military-strength algorithms" claim; unverifiable author bio.

### Doorway / scaled-content cleanup
- 26 near-duplicate tool + blog URLs (e.g. 4 URLs serving the same converter; `best-decoder` / `best-decoder-online` / `best-decoder-web-app`) deleted and **301-redirected** to canonicals.
- Internal links, sitemaps, blog index, and tool registry updated to the canonicals.

### Technical SEO / deployability
- **Repaired a broken production build** — ~20 files instantiated Supabase/Stripe/Anthropic clients at module load, crashing `next build`. Now lazy-loaded; build verified.
- Fixed 12 duplicate-OpenGraph-`images` bugs (wrong social preview image).
- Removed stale `/sitemap-0.xml` reference from `robots.txt` (was causing a GSC sitemap-fetch error).

### On-page / content quality
- Homepage + `/tools` + ~8 high-impression tool/blog pages: keyword-rich, CTR-focused titles/descriptions (several were inheriting the generic default title or bare titles).
- Added a genuine A1Z26 reference chart to the homepage.
- Rewrote the keyword-stuffed, self-promotional `best-decoder` post into a genuinely useful "how to identify & decode any code" guide.
- Added a worked Caesar-cipher example to the cryptography post.
- Strengthened internal linking on page-1-boundary posts toward the demoted money pages.

---

## 3. Go-Live Checklist (do these in order)

1. **Deploy `claude/dazzling-allen-Emyew` to production** (merge to your production branch, or approve the Vercel deploy). Nothing recovers until the cleaned site is live.
2. **Run the catering table SQL** in Supabase so the Order Catering form works:
   - Execute `lib/catering-leads.sql` in the Supabase SQL editor.
3. **Google Search Console:**
   - Check **Security & Manual Actions → Manual actions**. If one is listed, submit a **reconsideration request** describing what was removed (fake ratings, fake endorsements, doorway pages).
   - **Request indexing** for the homepage and top pages (`/`, `/tools`, `/blog/alphanumeric-converter`, `/blog/a0z25-cipher`).
   - **Resubmit the sitemap** (`/sitemap.xml`).
4. **Verify** redirects resolve (e.g. `/tools/a1z26-translator` → `/tools/letter-number-converter`) and that `robots.txt` references only `/sitemap.xml`.

---

## 4. Expected timeline

Recovery follows Google's recrawl + reprocessing cycle after deployment — **typically 2–6 weeks**, sometimes longer for algorithmic classifications. No code change shortcuts this; the requirement is a clean, deployed site that Google re-evaluates.

Track progress in GSC: watch average position on the core keywords climb back toward page 1, then impressions and clicks follow.
