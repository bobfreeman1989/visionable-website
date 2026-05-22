# Before / After photos

Drop final photos into this directory using the following filenames:

- `before-01.webp` — yard before the project
- `after-01.webp`  — same yard after we built it

Then in `src/components/BeforeAfter.tsx`, uncomment the `beforeSrc` and
`afterSrc` lines in the `pairs` array (pair `01`).

## Photo requirements

- Format: WebP (matches the rest of the site).
- Aspect ratio: 16:9 or 16:10. Same crop / same camera angle for the pair.
- Min width: 1600px.
- Same lighting and time of day if possible — the slider is most convincing
  when only the landscaping changes between the two images.

## Adding more pairs

Add another entry to the `pairs` array in `BeforeAfter.tsx` with
`before-02.webp` / `after-02.webp`, etc. The section will automatically render
toggle buttons above the slider when more than one pair is present.
