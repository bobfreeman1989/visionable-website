# Playbook: Public Reviews, Open Pricing, One Quantified Promise

Source study: sequoiaoutdoor.com, read 2026-09-16 (home, /reviews/, /completion-time-guarantee/,
/paver-installation-contractors/). This document records *how* they do three things, what
transfers to Visionable, what does not, and the concrete changes to make. It is a spec, not a
diff. Implementation is a separate, authorized task.

Cross-reference: PRODUCT.md (anti-references: no badge soup, no hard-sell pricing blocks),
SEO-CONVERSION-GAPS.md (current state of the live site).

---

## 1. Per-platform review ledger

### How Sequoia does it

- One block, one heading ("Our reputation lives in public"), then a row per platform:
  platform name, count, rating, and a **link out to the platform itself**. Six rows.
- A footnote explains the arithmetic: which platforms carry stars, which are excluded
  from the average, and that every review is homeowner-submitted and unedited.
- Small honest asides per row ("we are not allowed to ask" on Yelp, "formerly HomeAdvisor"
  on Angi). These read as candor, not marketing.
- A dedicated /reviews/ page repeats the ledger, then shows the full text of individual
  reviews with platform tag, reviewer name and date, filterable by platform.
- Certifications (CMHA, BBB) sit *below* the ledger as two explained cards, not as a logo row.

### What they got wrong (do not copy)

- Counts are hardcoded in two places and already disagree: home says Google 24 / Yelp 16 /
  Angi 15; /reviews/ says Google 16 / Angi 13 and omits Yelp entirely. The footnote on
  /reviews/ even admits "live totals are the ones shown on each platform rather than a number
  written into this page". One source of truth or none.

### What Visionable has today

- Hero pill: "5.0 on Google & Yelp" (Hero.tsx:31), no count, no link.
- Testimonials carousel: 5 excerpts in `src/content/testimonials.ts`, two of them anonymous
  ("Backyard Client", "Rock Yard Client"), no platform, no date, no link out.
- Footer: one Yelp link. FAQ answer mentions "Yelp page with 200+ project photos".
- No /reviews route.

### Spec for Visionable

**Content model.** Add `src/content/review-platforms.ts`:

```
{ platform: "Google" | "Yelp" | "Houzz" | "Nextdoor",
  count: number, rating?: number, url: string, note?: string, verifiedAt: "YYYY-MM-DD" }
```

`verifiedAt` is mandatory. The ledger renders "counts verified <date>" so a stale number is
visibly stale rather than silently wrong. Counts live in this one file and nowhere else; the
hero pill reads from it.

**Home.** Replace the Testimonials section header with the ledger (2 to 4 rows, each a
link out), keep the carousel beneath it. Each carousel card gains `platform`, `date`, and
`url` fields; anonymous entries either get attributed from the source review or are removed.
PRODUCT.md forbids badge soup: this is a **typeset list**, not a logo strip. Platform names
in text, one accent-colour count, one outbound arrow. No third-party logos.

**Hero pill.** "5.0 on Google & Yelp" becomes "{rating} · {n} reviews on Google, Yelp and
Houzz", linking to `/reviews`.

**/reviews page.** Ledger at top, then every review in full (not excerpts), platform tag,
name, city, date, link to the source. Filter by platform. Under it, the licence card:
CSLB #1101860 with a link to the CSLB lookup, and the insurance statement. That is the
"more than a star rating" block, and it replaces any future temptation to add seals.

**Schema.** Do *not* add `AggregateRating` to the Organization unless the reviews are
rendered on the same page it appears on; Google's guidance has tightened and self-serving
ratings on the home page are a known manual-action trigger. Keep it on `/reviews` only, if at
all, and only with the reviews visibly present.

**Inputs needed from Bob.**
- Live counts and ratings on Google Business Profile, Yelp, Houzz, Nextdoor (I could not
  fetch Yelp or GBP from the browser; both block automated readers).
- Whether the two anonymous testimonials can be attributed, or should be dropped.
- Whether Houzz / Nextdoor profiles exist and are maintained.

---

## 2. Open pricing

### How Sequoia does it

- A "Priced in the open" section with three layers, each answering a different question:
  1. **Rate band** by application: driveways $30 to $38, patio fields $34 to $41,
     small areas $45 to $120+ per sq ft. With the reason small areas cost more
     (fixed mobilisation over fewer feet).
  2. **What the rate includes**, itemised: excavation depth by load class, base depth by load
     class, bedding, edge, paver, joint sand, delivery. This is what makes the number
     comparable to a competitor's quote.
  3. **A worked example**: one Atherton project, all-in range, then 12 line items each with
     its own range. Labelled "rounded from the signed proposal, not verified final
     expenditure".
- A stated **project minimum** ($25,000) and a stated design fee policy (paid, credited
  toward the build within 30 days).
- Ranges are repeated on every service page with the same numbers, plus a "see what
  homeowners near you invested" link into the case-study map.
- Every figure carries a provenance line: "from real signed Peninsula proposals and our
  current price book, rounded and anonymised to town level".

### What Visionable has today

- Service-page fact strips already publish ranges: pavers $15 to $35 / sq ft, remodel
  $20K to $60K+, fire pits $3K to $5K, kitchens $15K to $40K+ (`service-facts.ts`).
- FAQ #1 "How much does an outdoor living project cost?" on the home page.
- Contact form has budget bands starting at "Under $10,000".
- No "what is included" list, no worked example, no stated minimum, no provenance.

So the gap is not *whether* to publish numbers, it is that the numbers float without an
anchor. "$15 to $35 / sq ft" is a 2.3x spread with nothing to explain it.

### Spec for Visionable

**One pricing section on the paver and remodel service pages**, and a summary card on
home linking to it. Not a standalone /pricing page yet; the service page is where the
buyer is when they ask. Three parts, mirroring the layers above but in Visionable's voice
(PRODUCT.md: speak human, quiet confidence):

1. **Rate bands with the reason for the spread.** Split the $15 to $35 into what actually
   drives it: area size, vehicle vs pedestrian base, material tier. Three bands, each with
   a one-line "why".
2. **What every quote includes.** Excavation and haul-off, base depth by use, bedding, edge
   restraint, material, joint sand, cleanup. Sourced from Bob's actual quote template so the
   site and the Joist estimate say the same thing.
3. **One worked example** from a real completed project, anonymised to city: all-in range
   and 6 to 10 line items. Pick a project already in `gallery.ts` so the photos are on the
   same page.

**Provenance line** under every number: "Ranges are rounded from signed Visionable
proposals; your figure comes from the site visit and the scope you choose."

**Stated minimum.** PRODUCT.md targets $20K to $60K+ buyers, yet the form's first budget
band is "Under $10,000" and a testimonial is a fence repair. A published minimum is the
cleanest qualifier the site can have. Recommend "$15,000 for design-build projects" with a
line that smaller repairs are quoted separately, but the number is Bob's call.

**Design fee.** State it. Either "free consultation, design included in the build" (the
current position) or a paid design credited toward the build. Sequoia's paid-and-credited
model filters tyre-kickers; Visionable's free model lowers the first step. Both are
defensible; the site must say which.

**Inputs needed from Bob.**
- Current real rate bands and what drives them (from the Joist price book).
- The standard inclusions list from the quote template.
- One completed project with its signed proposal to anonymise into the worked example.
- Project minimum, if any. Design fee policy.

---

## 3. One quantified promise as the H1

### How Sequoia does it

- H1: "Estate-grade outdoor spaces, finished on time or you get paid." The *whole site*
  hangs from that clause: nav strip ("On-Time or You Get Paid"), hero, a "Lead promise"
  section, a dedicated /completion-time-guarantee/ page, and a line in every service hero.
- The promise is **specific, tiered and bounded**: $1,000 at 8 to 14 days late, $2,000 at
  15 to 21, 10% at 22+, one tier, capped at 10%. Excusable delays listed. Eligibility
  (projects at or above the minimum). When the clock starts (pre-construction walkthrough,
  after permits and long-lead items clear). Binding terms in a contract addendum.
- Warranties are stated *by scope* (2-year workmanship on pavers/turf/walls, 1-year on
  concrete/stone/irrigation) and explicitly subordinate to the lead promise. They do not
  claim "lifetime" anything.
- The guarantee page has its own FAQ, so the promise ranks for its own queries.

### What Visionable has today

- H1: "We Make It Visionable" plus a descriptive subline. Brand spine, zero claim.
- Promises scattered and unquantified: "on time, on budget, with daily photo updates"
  (Process step 3), "warranty" (step 4), "See your yard in 3D before we build"
  (whyChooseItems). None has a number, a page, or terms.

### Spec for Visionable

Pick **one** promise, quantify it, give it a page, and make it the H1's second clause.
Keep "We Make It Visionable" as the eyebrow or the first clause; the promise is the H1
payload. Candidates, in order of fit with what the business already does:

| Candidate | Already true? | Exposure | Notes |
|---|---|---|---|
| **"See it in 3D before we build, or the design is free."** | 3D is step 2 of the process today | Low: cost of a design | Unique in the East Bay set, matches the brand spine, no schedule risk |
| "Finished on the promised date, or we credit $X per week late." | "on time" is claimed but not defined | Medium: schedule credits | Directly copies Sequoia; credible only if Bob is willing to write the tiers into contracts |
| "Every base photographed before it is covered." | Unknown | Low | Strong for pavers, weak as a whole-site H1 |

Recommendation: the 3D promise. It is the thing Visionable already does that competitors
do not, it costs nothing new to honour, and it turns the existing "See It Before It's Real"
copy into a claim with teeth.

**Required pieces for whichever is chosen:**
- Plain-language terms: who is eligible, when the clock starts, what is excluded, what you
  get. Five sentences, on the page and in the contract.
- A `/guarantee` route (or `/3d-design-promise`) with the terms, a 3-step "how it works",
  and its own FAQ with `FAQPage` schema.
- One line in the nav strip, one card on home, one line in every service hero.
- Warranties restated by scope in the same page, replacing the undefined "warranty" word in
  Process step 4 and FAQ #7.

**Inputs needed from Bob.**
- Which promise. This is a business commitment, not a copy choice.
- Actual workmanship warranty terms by scope, as written in current contracts.

---

## 4. Sequencing and dependencies

1. **Reviews ledger** first. Zero business risk, needs only the live counts, and it fixes the
   unlinked "5.0 on Google & Yelp" claim the hero already makes.
2. **Pricing anchor** second. Needs the price book and one proposal; the service pages
   already have the slot (`serviceFacts` strip).
3. **Promise** last. Needs a decision and a contract addendum before the H1 changes.
   Do not ship the H1 before the terms page exists.

## 5. Verification when implemented

- Every count and rate on the site traces to one content file with a `verifiedAt` date.
- Grep for the old hero string and old `$15–$35` after the change; both should be gone.
- `/reviews` and the promise page appear in `sitemap.ts` with real `updatedAt` dates.
- Home page word count stays under roughly 1,800; Sequoia's 3,000-word home is the thing
  not to copy.
- Rendered check on mobile: ledger rows remain tappable links, no logo strip appears.
