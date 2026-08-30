# Attendance Recording — Implementation Handoff

Target reader: the engineer (or coding agent) implementing this. Reference prototype:
`docs/attendance-prototype.html` — open it in a browser, no build step. It is the
behavioral source of truth for anything this document leaves ambiguous.

---

## 0. Read this first

**What I saw:** the design brief, and `DESIGN.md` / `DESIGN.json` / `PRODUCT.md` in this repo.

**What I did not see:** the attendance codebase. It is not in this repository — this repo is
the marketing site. Every schema name, table, and endpoint below is a *proposal shaped to the
described behavior*, not a description of what exists. Before writing code, reconcile against
the real system:

- [ ] What is the existing attendance table actually called, and what are its columns?
- [ ] Is `task_id` nullable? (Phase 1 stops collecting task in the field — see §3.6.)
- [ ] **Is dispatch/scheduling data available?** The entire design rests on it. See §10, Q1.
- [ ] What consumes attendance rows downstream (payroll export, job-cost report)? Those
      consumers must not change in Phase 1.
- [ ] Is there an existing offline/sync layer, or does this introduce the first one?

If any answer contradicts this document, the real system wins — flag it rather than bending
the code around a wrong assumption here.

---

## 1. The problem, and the one idea

Today one attendance record = **one person + one project + one line item + one task**. A foreman
with a 5-person crew working 2 line items enters 10 rows, each with 4 inputs, and 9 of those
rows carry information identical to the first. The system is asking a person to decompose a
collective fact into individually-typed rows.

**The change: the unit of record becomes one site, one stretch of time.** The crew is a property
of that block. A line item attaches to the *block*, not to each person.

Everything else follows from that:

| Consequence | Effect |
|---|---|
| The schedule already knows who/where/what | Attendance becomes *confirm or correct*, not re-entry |
| Line item hangs on the block | Changing work re-costs the whole crew in one action |
| Presence is the default | Only exceptions require input |
| Cost attribution stored once | Correcting it is a one-row edit, not N rows |

Measured in the prototype: a full day across 3 sites and 10 people goes from ~80 inputs to ~4.

---

## 2. Build target: Phase 1 only

Build Phase 1. Phase 2 is documented for context so you don't design yourself into a corner,
but **do not build it in the same change**.

| Phase | Scope | Schema |
|---|---|---|
| **1 — build this** | Site cards, confirm-all, line item inherited from dispatch, exception sheet, block splitting, drag-to-reassign | **None.** Writes expand into the existing per-person table (§3.7) |
| 2 — later | Persist `work_block` / `attendance` as first-class, weekly office allocation | Migration, per-project rollout |
| 3 — if wanted | Geofence *suggestions* (never auto clock-in) | — |

Phase 1 is deliberately shaped so payroll and job-cost reporting keep reading exactly what they
read today. That is what makes it safe to ship fast.

---

## 3. Domain model and math

This is the section to get right. The UI is straightforward; the hours arithmetic is where
real money is wrong or right.

### 3.1 Entities (conceptual — Phase 1 keeps these in memory / a thin table, Phase 2 persists them)

```
SiteDay      (site_id, date, shift_start, shift_end, breaks[])
WorkBlock    (site_day, line_item_id, start_at, end_at)      -- ordered, contiguous, gapless
Presence     (site_day, person_id, intervals[], absence_code) -- intervals may be empty
```

### 3.2 The shift

Default shift: `08:00–16:30` local, with one **unpaid** break `12:00–12:30` → **8.0 paid hours**.
Confirm the paid/unpaid break policy before building (§10, Q2) — it changes every number on screen.

Store real `timestamptz`. Do **not** store "offset in paid hours". The prototype uses paid-hour
offsets and inserts lunch at display time; that is a prototype shortcut that breaks on any
non-standard day.

### 3.3 Paid duration

```
paid(range) = |range ∩ shift| − |range ∩ breaks|
```

### 3.4 Labor hours — the part the prototype approximates

```
hours(person, block) = paid( presence_intervals(person) ∩ block_range )

cost_to_line_item(L) = Σ over blocks where block.line_item = L
                         Σ over persons  hours(person, block)
```

⚠️ **The prototype distributes a person's daily total proportionally across blocks.** That is
wrong whenever presence is not the full day. If Danny arrives 2h late and the crew switched
line items at 13:00, the proportional method charges part of his absence to the afternoon line
item. **Implement the interval-intersection formula above, not the prototype's shortcut.**

### 3.5 Status → presence intervals

The sheet offers statuses; each is sugar for an interval set. Store the intervals; keep the
status as a label for display and reporting.

| Status | Intervals | Paid |
|---|---|---|
| On site, full day | `[shift_start, shift_end]` | 8.0 |
| Late *n*h | `[shift_start + n, shift_end]` | 8.0 − n |
| Left early *n*h | `[shift_start, shift_end − n]` | 8.0 − n |
| Half day (AM / PM) | first or second half | 4.0 |
| Personal / sick | `[]` + absence code | 0.0 |
| Moved to another site at *t* | `[shift_start, t]` here, `[t, shift_end]` there | splits |

### 3.6 Task is no longer collected in the field

Deliberate. A foreman cannot reliably distinguish "stone cutting" from "stone setting" while
wearing gloves in direct sun; forcing the choice yields confidently-wrong data. Phase 1 writes
`task_id = NULL`, or the line item's default task if the column is `NOT NULL`. Task-level
precision, if genuinely needed, is recovered in the office (Phase 2 weekly allocation).

Confirm nothing downstream hard-depends on task before shipping.

### 3.7 Phase 1 write shim

On submit of a site-day, inside one transaction:

```
DELETE existing attendance rows WHERE site_id = ? AND date = ?
INSERT one row per (person, block) where hours > 0:
    { person_id, date, hours, project_id, line_item_id: block.line_item, task_id: <null|default> }
```

Delete-and-reinsert keyed on `(site_id, date)` makes the write idempotent and makes edits
trivially correct. Guard it: refuse to write if the day is payroll-locked (§8).

### 3.8 Invariants (turn these into tests)

1. Blocks are contiguous, gapless, and exactly cover the shift.
2. `Σ paid(block) == paid(shift)` for every site-day.
3. Every block has a `line_item_id`.
4. A person's intervals within a site-day are pairwise disjoint.
5. **A person's intervals across all sites on a date are pairwise disjoint** — no double-booking.
   This is the one that catches real data-entry errors; enforce it server-side.
6. `Σ hours(person, ·)` over all sites ≤ shift length, unless overtime is explicitly enabled.

### 3.9 Rounding

Store to the minute. The UI edits in **30-minute steps**. Display as one decimal hour (`6.0h`).
Never round on write; round only for display.

---

## 4. Screens

### 4.1 Today (field, phone) — the primary screen

Vertical list of **site cards**, one per active site for this foreman today, plus an
**Unassigned** pool at the bottom. Sticky footer with running totals and Submit.

Site card, top to bottom:

1. Site name + address, and a state badge (`Open` → `30.0h logged`)
2. **What the crew is on** — work-item selector, one button per line item available in the
   site's current phase (cap at ~5; more than that means the phase filter is too loose)
3. **Time bar** — the day as proportional colored segments, one per block, with draggable
   boundaries; axis reads `8:00 … incl. 0.5h lunch … 16:30`
4. **Crew** — chips, one per assigned person, showing name + hours + exception note
5. **Confirm all N as scheduled** — the primary action; becomes a green "posted" summary with Undo

### 4.2 Exception sheet (bottom sheet)

Opens on tapping a crew chip. Options: On site full day / Late 2h / Left early 2h / Half day /
Personal / Sick / **Move to «other site» after lunch** (one per other active site) / Close.

The "Move to" entries are the keyboard-accessible equivalent of the drag gesture and must
produce byte-identical results.

### 4.3 Weekly review (office, desktop) — Phase 2

Per-line-item actual vs budget with over-budget called out, an unallocated-hours flag, and a
drag-to-split allocator. Present in the prototype for direction; not in the Phase 1 build.

---

## 5. Interactions and acceptance criteria

### I1 — Confirm all
Tapping **Confirm all N as scheduled** sets every crew member still in `scheduled` state to
present-full-day, marks the site-day confirmed, and posts hours.

- Does **not** overwrite anyone already given an exception.
- Undo returns everyone set by this action to `scheduled` and unconfirms; exceptions survive.
- One tap → one write. Counts as **1** action regardless of crew size.

### I2 — Switch work item → split the day
Tapping a work item that is not the current one splits the trailing block.

- First switch: split the day at its midpoint, rounded to 30 min.
- Later switches: split the trailing block in half; if the remainder would be < 30 min, replace
  the trailing block's line item instead of creating a sliver.
- All crew hours redistribute across blocks per §3.4 with **no further input**.
- Toast names the resulting boundary time.

### I3 — Drag a boundary
Boundaries on the time bar are draggable and keyboard-operable.

- Snap 30 min; neither adjacent block may go below 30 min.
- `role="slider"`, `tabindex="0"`, `←`/`→` step 30 min, `aria-valuenow` in paid hours.
- Hit area 22px wide centered on the boundary (larger than the 18px visual dot).
- Adjacent block absorbs the change; total day length is invariant.

### I4 — Log an exception
Tapping a chip opens the sheet; choosing a status applies §3.5 and re-costs the day.

- Chip restyles by state: present (green), partial (amber tint), absent (clay, name struck through).
- Sheet closes on Escape and on scrim tap without applying.

### I5 — Reassign by drag
Drag a crew chip onto another site card, or from the Unassigned pool onto any site.

- Pool → site: person joins that site, full day.
- Site → site: day splits at the shift midpoint; the person appears on **both** cards with a
  split marker; each half costs to its own job.
- Site → pool: person is removed and restored to unassigned.
- Drop target highlights on hover; dropping outside any target cancels with no change.
- **Keyboard equivalent:** "Move to «site» after lunch" in the sheet, same result.

**Implementation notes that will save you a day** (all proven in the prototype):

- Pointer Events throughout, `touch-action: none` on draggables. Not HTML5 drag-and-drop —
  it does not work on touch.
- **Tap vs drag:** start dragging only after 9px of movement; suppress the synthetic `click`
  after a real drag (set a flag, clear it in `setTimeout(…, 0)`), or every drop also opens the
  exception sheet.
- **Edge auto-scroll is mandatory, not polish.** The pool is below the fold; without it you
  cannot drag a person to an off-screen site card. 64px edge zone, ≤13px/frame on `requestAnimationFrame`,
  and **re-evaluate the drop target every frame** while scrolling.
- Resolve drop targets with `elementFromPoint` after temporarily hiding the drag ghost.

### I6 — Submit
Enabled only when every site-day is confirmed. Idempotent (§3.7).

---

## 6. Design tokens

Use the existing system in `DESIGN.md` / `DESIGN.json`. **Single light theme — no dark mode.**
This is a field tool used outdoors, where the warm light ground is the legible one. Do not add
a `prefers-color-scheme` block.

| Role | Value |
|---|---|
| Page / surface / surface-alt | `#FEFDFB` / `#FAFAF8` / `#F5F5F2` |
| Card | `#FFFFFF`, 1px `#E7E5E4`, radius 16px |
| Ink / body | `#1C1917` / `#57534E` |
| Muted | `#6F6862` — see deviation below |
| Forest green | `#1B6B2A` (hover `#145520`) |
| Marigold | `#E8960C` |
| Time-block scale | `#1B6B2A` → `#4DA164` → `#8FC9A2`, inks `#FFF` / `#0B2D12` / `#0B2D12` |
| Radii | button 8 · tile 12 · card 16 · pill 9999 |
| Motion | 300ms `cubic-bezier(.16,1,.3,1)`; −2px CTA lift |
| Type | DM Serif Display 400 (display/headline/title) + Source Sans 3 (body/label) |

Rules from the system that are easy to violate here:

- **Serif at 400 only.** `font-semibold` on DM Serif triggers faux-bold. Hierarchy by size.
- **Marigold rarity.** Solid `#E8960C` is for the confirm CTA and nothing else. Exception chips
  use the pale tint `#FBE9C9` with `#7E5004` text. The crew-lead ring is green, not marigold.
- **Flat by default.** Cards rest on a hairline with no shadow and lift only on interaction.
  The only edge accent is a 1px top hairline — never a thick side stripe.
- **All-caps for labels only**, 600 weight, 0.05em tracking.

**Two deliberate deviations from `DESIGN.json`, both for AA:**

1. `--ink-muted` is `#6F6862`, not `#78716C`. The documented value measures 4.41:1 on
   `surface-alt` — below AA, which `DESIGN.md`'s own accessibility section requires.
2. Emphasis text on warm white uses `marigold-dark` `#A56804`. Solid marigold on `#FEFDFB` is
   2.35:1 and fails even the 3:1 large-text bar. The marketing hero gets away with marigold
   because it sits on a dark photo scrim.

### Numerals

Every hours figure, time, and line-item code uses `font-variant-numeric: tabular-nums` so
columns align and digits don't jitter as values change.

### Adaptive block labels

A time-block segment shows `CODE · 4.0h` at ≥30% width, `4.0h` at ≥16%, and nothing below that.
Without this, boundary grips sit on top of unreadable text on short blocks.

---

## 7. Accessibility

Target WCAG 2.1 AA, consistent with `DESIGN.md`.

- Every drag gesture has a keyboard-equivalent path producing an identical result (I5).
- Time-bar boundaries and the allocator are `role="slider"` with arrow-key control.
- Focus visible everywhere: `2px solid #1B6B2A`, `offset 2px`.
- Crew chips are real `<button>`s with a descriptive `aria-label` (`"Danny Pham — 6.0h, late 2h, tap to adjust"`).
- Sheet is `role="dialog" aria-modal="true"`, closes on Escape, focus moves to its first option.
- `prefers-reduced-motion` collapses all transitions.
- Contrast: **every** text element was measured in the prototype, not a sample. Keep it that way —
  a sweep over all rendered text is ~20 lines of test code and catches the pairs a spot-check misses.
- **Buttons do not inherit `color`.** Set it explicitly or they fall back to the UA default.
  This bit the prototype and was invisible until measured.

---

## 8. What the prototype does *not* solve

Decide these before shipping; none are visible in the mockup:

| Gap | Why it matters |
|---|---|
| **Overtime** | >8h days, 6th/7th day, double-time. No rules modeled. |
| **Concurrent edits** | Two foremen on one site-day. Last-write-wins will silently lose hours. |
| **Payroll lock** | Once exported, records must be immutable. §3.7 deletes and reinserts — it *must* refuse on locked days. |
| **Audit trail** | Who changed whose hours, when. Required the first time someone disputes a paycheck. |
| **Offline conflict** | Queue-and-replay is easy; merge is not. Surface conflicts to the office, never auto-merge. |
| **Dispatch changed after confirm** | Schedule edited post-confirmation — reconcile or ignore? |
| **Overnight / multi-day blocks** | Shift model assumes one calendar day. |
| **DST / timezones** | Day boundary arithmetic on transition days. |
| **Non-hourly people** | Subcontractors, salaried supers — do they appear on cards at all? |

---

## 9. Test plan

**Unit — the hours math (highest value, cheapest to write)**
- `paid()` with and without break overlap
- `hours(person, block)` for: full day, late, left early, half day, absent, site-split
- Regression: late arrival + midday line-item switch charges the *correct* block (§3.4)
- Invariants §3.8 (1)–(6), especially cross-site disjointness

**Integration**
- Shim writes the same row shape existing reports read
- Submit twice → identical rows, no duplicates
- Submit against a payroll-locked day → rejected, nothing written

**E2E**
- I1–I6 each end-to-end
- Drag with auto-scroll to an off-screen card
- Keyboard-only completion of a full day, including a reassignment

**Accessibility**
- Contrast sweep over all rendered text
- Keyboard-only pass with visible focus at every stop

---

## 10. Open questions

Ordered by how much they change the build.

**Q1 — Is dispatch/scheduling data available as the seed?** *Blocking.* The whole design is
"confirm or correct", which requires something to confirm. If crews are not scheduled in a
system, Phase 1 falls back to seeding each card from **the crew that worked this site most
recently**, and the copy changes from "Confirm all as scheduled" to "Same crew as last time".
Still a large win, but confirm before building.

**Q2 — Is the lunch break paid?** Auto-deducted, or confirmed by the foreman? Changes every
number on screen.

**Q3 — Is `task_id` required downstream?** If yes, is a per-line-item default task acceptable
(§3.6)?

**Q4 — Overtime rules?** Needed before the footer total can be trusted.

**Q5 — Who may edit after submit, and for how long?** Foreman until midnight, office until
payroll lock, is a common and reasonable answer.

**Q6 — How many line items are typically live in one phase?** The selector assumes ~3–5. If it
is routinely 15, that component needs a different design (search, or a recents list).

---

## 11. Definition of done

- [ ] A foreman completes a normal 3-site, 10-person day in **under 8 taps total**
- [ ] Every interaction in §5 has a keyboard path
- [ ] Existing payroll and job-cost reports are byte-identical for an unchanged day
- [ ] §3.8 invariants enforced server-side, not only in the UI
- [ ] Contrast sweep passes over all text
- [ ] Works with the network off, and syncs cleanly on reconnect
