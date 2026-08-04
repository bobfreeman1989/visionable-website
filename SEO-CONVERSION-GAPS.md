# SEO & Conversion Gaps — Status

Audit 2026-08-01, fixes applied the same day against `main` @ 88ce5cb.
Second pass 2026-08-04 (freshness signals + 404), same working tree.
Everything under "Done" was verified in the production build output
(`.next/server/app/**/*.html`), which is the HTML that ships — not in dev.
Changes are in the working tree, **not committed**.

---

## Done — 2026-08-04 pass

### P1 — `lastmod` was build time, not content time

Every URL in [sitemap.ts](src/app/sitemap.ts) carried `lastModified: new Date()`,
so all 38 entries claimed to have changed on every deploy. An inaccurate `lastmod`
is not a neutral cost — it is the signal being discarded.

`ServiceData` and `CityData` gained an `updatedAt` field (10 + 11 entries, all
`2026-08-01`, the date their copy actually changed), blog URLs use the post's own
revision date, index pages take the max of their children, and pages whose content
lives in components inherit a single `TEMPLATE_REVISION` constant. No `new Date()`
remains in the sitemap.

Verified in `.next/server/app/sitemap.xml.body`: 38 URLs, all `<lastmod>2026-08-01`,
zero build-time timestamps.

### P1 — `dateModified` always mirrored `datePublished`

All 12 posts were revised on 2026-08-01 (in-body service links, real project
photography replacing stock), but the Article schema still said they had never
changed, and readers saw no updated date either.

Frontmatter gained an optional `updated` key, threaded through `BlogPost` and
`BlogPostMeta`. `dateModified` falls back to `datePublished` when it is absent, so
an untouched post never claims a revision it did not have. The post template shows
`· Updated <date>` in the byline, in a `<time datetime>` element, only when the
revision is later than publication.

Verified on `/blog/how-to-choose-pavers`: `datePublished 2024-02-10`,
`dateModified 2026-08-01`, byline reads "Visionable Landscaping · Updated August 1,
2026".

### P2 — No 404 page

Next's default 404 returns the right status code but is a blank page: no nav, no
links, no CTA. Added [not-found.tsx](src/app/not-found.tsx) — all 10 services and
all 11 cities (not a hand-picked subset, since a 404 is the one page where the
visitor's intent is genuinely unknown), plus a contact CTA and a blog link. No
`robots` directive: Next already emits `noindex` for the route, and a second meta
tag would just duplicate it.

Verified: `/services/this-page-does-not-exist`, `/blog/nope` and `/no-such-page`
all return **404**; a real service page returns 200. Rendered HTML carries 10
service links, 11 city links, 6 working contact CTAs, one `meta robots noindex`.

### P2 — Dead `images.unsplash.com` config

Dropped from [next.config.mjs](next.config.mjs) after confirming zero `unsplash`
references remain anywhere in `src/` (grep exit 1).

### Gates — 2026-08-04

`node_modules` was empty at the start of this pass, so the 08-01 gates could not
have been re-run as-is; `npm ci` first. Then `./node_modules/.bin/tsc --noEmit` →
exit 0, `npm run build` → exit 0, 0 warnings, 38 sitemap URLs. Browser console on
`/blog/how-to-choose-pavers` → no errors.

Note: use `./node_modules/.bin/tsc`, not `npx tsc` — npx installs an unrelated
`tsc@2.0.4` package from npm that exits 1 with a message about not being the real
compiler.

---

## Done — 2026-08-01 pass

### P0 — Dead primary CTA (was 37 pages, now 0)

The `CTABanner` default `primaryHref` was `#contact`, but only the homepage has
an element with that id. Every other page's main conversion button did nothing:
10 service pages, 11 city pages, /about, /services, /areas, /blog, and 12 blog
posts. The `PageHero` CTA and the city sticky rail pointed at `/#contact`,
bouncing SEO traffic back to the homepage instead of converting in place.

Fixed in two layers:

- **Pages without their own form** (about, index pages, blog posts): the
  CTABanner default is now `/#contact`, a working link to the homepage form.
- **Service and city pages**: each now renders its own `<ContactCTA>` section
  with `id="contact"`, and the hero CTA, banner CTA and (on city pages) the
  sticky rail all point at it. `PageHero` gained an optional `ctaHref`.

The form arrives pre-answered: service pages preselect the matching dropdown
option via `contactOptionForService()` in [services.ts](src/lib/services.ts),
and both page types get a context-specific details placeholder.

Verified: all 10 service pages carry 1 contact anchor, 2 on-page CTAs and the
correct preselected option (checked individually — e.g. pergola-installation →
"Pergola / Shade Structures", complete-backyard-remodel → "Complete Backyard
Redesign"). All 11 city pages carry 1 anchor and 3 on-page CTAs. The four index
pages carry 0 dead hashes and 6 working `/#contact` links each.

### P1 — Blog internal linking (was 0 links, now 2–4 per post)

No post linked to a single service or city page. Every post now carries 2–4
contextual in-body links, placed at the first natural mention of each term, plus
a "The services behind this article" card block in the post template. That block
derives its cards from the links in the post's own body, so it cannot drift from
the article.

### P1b — Stale 2024 content

`5-landscaping-trends-2024.md` → `silicon-valley-backyard-landscaping-trends.md`,
title de-yeared, with a permanent redirect in [next.config.mjs](next.config.mjs)
(verified: 308 → new slug). The body was left alone — the five trends it lists
are still accurate, and rewriting them would have meant inventing claims. **The
post still shows its original January 2024 date.** A real content refresh with a
new date is a judgement call for Bob, not something to fake.

### Stock photography removed

Five posts used Unsplash stock covers and two had inline stock images, against
PRODUCT.md's explicit anti-reference. All seven now use real project photos from
the gallery with accurate alt text, and the one post with an empty cover got one.
Zero `images.unsplash.com` references remain in `src/`.

### P2 — City pages

Each city page now has a 4-question FAQ block plus FAQPage JSON-LD, generated
from city data by `faqsForCity()` in [areas.ts](src/lib/areas.ts). Every answer
restates a commitment already made elsewhere on the site (licence number, free
consultation, in-house crew, warranty) so no page promises something the others
do not. The arbitrary `services.slice(0, 6)` is gone — all 10 services are now
linked from all 11 city pages.

### Gates

`npx tsc --noEmit` → exit 0. `npm run build` → exit 0, 44 static pages, 0
warnings. Browser console → no errors.

---

## Not done — needs Bob

1. **Enable Web Analytics** on Vercel project **visionable-clean** (the project
   actually serving the domain; `visionable-website` is a zombie with no deploys
   since 2026-05-31). `<Analytics />` is already mounted in code — this is a
   dashboard toggle. Until it is on, none of the above can be measured.
2. **Confirm `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL`** exist in that project's
   production env, and verify the Resend sending domain. The fallback sender is
   the Resend sandbox address, which only delivers to the Resend account owner.
   This is the single most expensive unverified assumption on the site.
3. **End-to-end form test** — submitting the form sends a real email, so it needs
   Bob's go-ahead.
4. **Google Search Console** access, or monthly exports.
5. **Archive the zombie Vercel project** `visionable-website` (destructive, needs
   explicit approval).

## Follow-ups worth doing, deliberately left out of scope

- `npm run lint` is unusable: `next lint` drops into an interactive ESLint setup
  prompt and exits 1, so there is no working lint gate in CI or locally.
- The blog post template still hardcodes `author: "Visionable Team"`. The
  updated-date half of this was fixed on 08-04; a real byline is a content call.
- **IndexNow** (Bing/Yandex) is not wired up. Worth it for faster Bing pickup after
  a content change, but `200/202` only means the notification was accepted — not
  that anything was crawled or indexed, and Google does not process IndexNow.
- **AI crawlers**: `robots.ts` allows everything, which means `OAI-SearchBot`
  (ChatGPT search visibility) and `GPTBot` (model training) are both allowed. Bob
  reviewed this on 2026-08-04 and chose to keep both open — exposure is the point
  for a local trades business. Revisit only if that calculus changes.
- **Keyword and content strategy** is untouched and will stay untouched until
  there is Search Console data. Anything written without it would be invented
  search volume.
