---
name: Visionable Landscaping
description: Premium Bay Area outdoor living design and build, drawn with the calm of a garden atelier.
colors:
  cultivated-forest-green: "#1B6B2A"
  forest-green-dark: "#145520"
  forest-green-light: "#238636"
  golden-marigold: "#E8960C"
  marigold-dark: "#A56804"
  background: "#FEFDFB"
  surface: "#FAFAF8"
  surface-alt: "#F5F5F2"
  foreground: "#1A1917"
  ink-strong: "#1C1917"
  ink-body: "#57534E"
  ink-muted: "#78716C"
  border: "#E7E5E4"
  border-subtle: "#F5F5F4"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  button: "8px"
  tile: "12px"
  card: "16px"
  pill: "9999px"
spacing:
  field-y: "0.75rem"
  field-x: "1rem"
  card: "2rem"
  section-y: "3.5rem"
  container-x: "1rem"
components:
  button-accent:
    backgroundColor: "{colors.golden-marigold}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
  button-primary:
    backgroundColor: "{colors.cultivated-forest-green}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.forest-green-dark}"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px 32px"
  button-inverse:
    backgroundColor: "{colors.background}"
    textColor: "{colors.cultivated-forest-green}"
    rounded: "{rounded.button}"
    padding: "14px 32px"
  input-field:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.foreground}"
    rounded: "{rounded.button}"
    padding: "12px 16px"
  card-service:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.card}"
    padding: "32px"
  chip-filter:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  chip-filter-active:
    backgroundColor: "{colors.cultivated-forest-green}"
    textColor: "#FFFFFF"
  chip-tag:
    backgroundColor: "#EDF3EE"
    textColor: "{colors.cultivated-forest-green}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Design System: Visionable Landscaping

## 1. Overview

**Creative North Star: "The Garden Atelier"**

This is the visual language of a refined maker's studio, not a contractor's flyer. Headlines are set in a high-contrast display serif and given room to breathe; body copy is a clean humanist sans; surfaces are warm off-white rather than clinical white. The work of persuasion is done by full-bleed project photography and generous space, not by loud chrome. The feeling a premium homeowner should get is "these people have taste and will get the details right," which is exactly the strategic line in PRODUCT.md: refined and confident, quiet luxury, craftsmanship without shouting.

Color is disciplined. Cultivated Forest Green carries the brand and the everyday chrome (links, nav, secondary actions). Golden Marigold is the scarce conversion color, used for the one action that matters on a given view and almost nothing else. Depth is restrained: cards sit flat with a hairline border at rest and lift on hover, so motion reads as a quiet response to intent rather than decoration. A near-invisible fractal noise texture (0.03 opacity) warms the larger light sections and reinforces the handmade, atelier feel.

The system explicitly rejects the generic home-services look named in PRODUCT.md: clip-art icons, stock crew photography, loud "FREE QUOTE" banners, badge soup, and crowded template layouts. Restraint is the premium signal. When in doubt, remove an element and add space.

**Key Characteristics:**
- Display serif (DM Serif Display) over humanist sans (Source Sans 3); hierarchy by size, not weight.
- Warm neutral world: backgrounds tint warm, never pure clinical white at the page level.
- Two-color discipline: forest green for brand chrome, marigold for the single most important action.
- Flat surfaces with hairline borders that lift on hover; no resting drop-shadows except nav and menus.
- Photography-led, space-rich, calm. Proof over promises, show the vision before selling the service.

## 2. Colors

A warm, horticultural palette: a deep cultivated green and a golden accent set against warm off-whites and a quiet neutral text scale.

### Primary
- **Cultivated Forest Green** (#1B6B2A): The brand spine. Used for nav links, primary (green) buttons, service icons, focus rings, link hovers, and selected states. This is the color of everyday brand chrome.
- **Forest Green Dark** (#145520): Hover and pressed state for green surfaces and buttons.
- **Forest Green Light** (#238636): Sparing use only, for a lighter green moment where #1B6B2A would feel heavy. Not a general-purpose tint.

### Secondary
- **Golden Marigold** (#E8960C): The conversion accent. Reserved for the single most important action on a view (the hero CTA, the form submit) and for the rating stars. Its scarcity is the entire point.
- **Marigold Dark** (#A56804): Hover and pressed state for marigold actions.

### Neutral
- **Warm Off-White Background** (#FEFDFB): The page canvas. Warmer than white, it is the default ground everything sits on.
- **Surface** (#FAFAF8): Warm off-white for panels and quiet containers (the contact form card sits on this).
- **Surface Alt** (#F5F5F2): A half-step deeper warm neutral for zone separation.
- **Warm Ink** (#1A1917): The canonical near-black for text. Warm, never a pure cold black.
- **Ink Strong** (#1C1917), **Ink Body** (#57534E), **Ink Muted** (#78716C): The functional text scale, the warm Tailwind stone ramp, used site-wide for headings, body, and meta so text agrees with the warm photography.
- **Border** (#E7E5E4) and **Border Subtle** (#F5F5F4): Hairline borders on cards, inputs, nav, and dividers. Borders, not shadows, do the resting separation.

### Named Rules
**The Marigold Rarity Rule.** Golden Marigold (#E8960C) means "act now." It belongs to one action per view and the rating stars, nothing else. If marigold covers more than roughly 10% of a screen, the screen is wrong. Forest green carries everything else. Marigold buttons carry warm-ink text (#1A1917), not white: white on marigold is about 2.4:1 and fails WCAG AA.

**The Warm Neutral Rule.** Neutrals tint warm, on the Tailwind stone ramp. The page ground is #FEFDFB and large panels are #FAFAF8 or #F5F5F2, never a clinical pure white field. Pure #FFFFFF is allowed only for crisp content cards sitting on a warm ground.

## 3. Typography

**Display Font:** DM Serif Display (with Georgia, serif fallback)
**Body Font:** Source Sans 3 (with system-ui, sans-serif fallback)

**Character:** A high-contrast, slightly editorial display serif paired with a calm, highly legible humanist sans. The serif gives headlines an air of craft and confidence; the sans keeps long-form reading effortless. The tension between the two carries the hierarchy.

### Hierarchy
- **Display** (DM Serif Display 400, clamp(2.5rem, 5vw, 4.5rem), line-height 1.1): Hero headline only ("We Make It Visionable"). The accent word is set in Golden Marigold.
- **Headline** (DM Serif Display 400, clamp(1.875rem, 4vw, 2.25rem)): Section titles ("Every Vision Needs a Plan").
- **Title** (DM Serif Display 400, 1.25rem; CTA banners step to 1.5rem): Card titles, form headings.
- **Body** (Source Sans 3 400, 1rem, line-height ~1.65): Paragraph copy, set in Ink Body with relaxed leading. Cap measure at 65 to 75 characters; section intros already cap around max-w-2xl.
- **Label** (Source Sans 3 600, 0.75rem, letter-spacing 0.05em, uppercase): Service tags, section eyebrows ("Areas We Serve"). The smallest tags drop to 11px.

### Named Rules
**The Serif Weight Rule.** DM Serif Display ships a single weight (400). Applying font-bold or font-semibold to a serif heading triggers synthetic faux-bold, which smears a display serif and reads cheap. Set serif headings at 400 and create hierarchy with size, never with weight.

**The Label Caps Rule.** All-caps is for labels and tags only (Source Sans 3 600, 0.05em tracking). Never set headings or body copy in all caps.

## 4. Elevation

Depth is quiet and earned. Surfaces are flat at rest, separated by warm hairline borders (#E5E7EB) rather than shadows. A soft shadow and a small upward translate appear only as a response to interaction (hover, focus). The fixed navigation and floating dropdown menus are the only elements that carry a resting shadow, because they genuinely float above the page.

### Shadow Vocabulary
- **Resting Float** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`, Tailwind shadow-sm): The fixed nav bar only.
- **Menu / Action** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)`, shadow-md): Dropdown menus, the active filter pill, the form submit button.
- **Lift** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`, shadow-lg): Cards and CTAs on hover, mobile menu.
- **Marigold Glow** (`box-shadow: 0 20px 25px -5px rgba(232,150,12,0.3)`, shadow-xl tinted): The hero conversion button on hover only. The one place a colored shadow is allowed.

### Named Rules
**The Flat-by-Default Rule.** A surface is flat with a 1px warm border until the user interacts with it. On hover or focus it earns a Lift shadow and a translate-y of 4px (cards) or 2px (CTAs), returning to flat on release. Never ship a resting drop-shadow on a card.

## 5. Components

### Buttons
- **Shape:** Gently rounded (8px, rounded-lg). Pills (9999px) are reserved for chips and badges, not buttons.
- **Accent (primary conversion):** Golden Marigold fill, warm-ink text (#1A1917, since white on marigold fails AA), 16px by 32px padding, large label (1.125rem, 600), trailing arrow icon. Hover lifts (translate-y plus the Lift or Marigold Glow shadow); it does not darken, since a darker marigold would drop the dark-text contrast. This is the hero and form submit button.
- **Primary (green):** Forest Green fill, white text, compact 10px by 24px padding, 0.875rem 600 label. The nav "Book Consultation" button. Hover to Forest Green Dark, transition-colors only.
- **Ghost on dark:** Transparent with a 2px white/30 border and white text, for secondary actions over photography or green ("See 200+ Visions Built"). Hover fills white/10.
- **Inverse on green:** White fill, Forest Green text, for the primary action inside a green CTA banner. Hover lightens slightly and lifts 2px.

### Chips
- **Filter pill:** Pill shape (9999px), 0.875rem 500. Idle is white with a hairline border and Ink Body text; hover shifts border and text to Forest Green. Active is solid Forest Green, white text, with a Menu shadow. Uses aria-pressed.
- **Tag chip:** Tiny uppercase label (11px, 600, 0.05em tracking) in Forest Green on a pale green tint (#EDF3EE, green at 8%), pill shaped, 2px by 10px padding. For "Most Requested" style tags.

### Cards / Containers
- **Corner Style:** Generous (16px, rounded-2xl). Icon tiles inside cards use 12px (rounded-xl).
- **Background:** White content card on a warm ground. The contact form container instead sits on Surface (#FAFAF8).
- **Border:** 1px hairline (#E5E7EB). On hover the border tints to Forest Green at 30%.
- **Shadow Strategy:** Flat at rest, Lift shadow plus translate-y 4px on hover (see Elevation).
- **Internal Padding:** Roomy (32px, p-8) on featured cards and the form.
- **Signature detail:** A 2px Forest Green hairline along the top edge that animates in from the left on hover (scale-x 0 to 1, origin-left). This is a top-edge accent, never a side stripe.

### Inputs / Fields
- **Style:** White fill, 1px #E5E7EB border, 8px radius, 12px by 16px padding, 0.875rem text. Labels are 0.875rem 500 in Ink Body, 4px above the field.
- **Focus:** Border goes transparent and a 2px Forest Green ring appears (focus:ring-2 focus:ring-primary). Always visible, never removed.
- **Error:** Inline row with an alert icon, red-600 text on a red-50 tint, 8px radius, role="alert".

### Navigation
- **Style:** Fixed top bar, white, 1px bottom border (#F3F4F6), Resting Float shadow. Logo left, links center-right, phone plus green "Book Consultation" CTA far right.
- **Links:** 0.875rem 500, Ink Body, hover to Forest Green (transition-colors). Dropdowns are white panels (12px radius, Menu shadow, hairline border) revealed on hover with a 2px pad bridge.
- **Mobile:** Hamburger toggles a full white sheet with grouped, eyebrow-labeled sections and the green CTA pinned at the bottom.

### Hero (signature)
- Full-bleed project photograph behind a left-to-right dark green gradient scrim (from green-950/90 through green-900/80 to green-950/60) that guarantees text contrast. Display serif headline in white with the brand word in Golden Marigold, a small rating pill above, the Accent button plus a Ghost-on-dark button below, and a row of thin-line trust badges.

## 6. Do's and Don'ts

### Do:
- **Do** lead with real, full-bleed project photography and let the dark green gradient scrim carry hero text contrast.
- **Do** reserve Golden Marigold (#E8960C) for the single primary action per view, with warm-ink text (#1A1917) on it for AA contrast; use Cultivated Forest Green (#1B6B2A) for brand chrome, links, and secondary actions.
- **Do** keep surfaces flat with a hairline border (#E5E7EB) at rest and lift them (translate-y, shadow-lg) only on hover or focus.
- **Do** give elements room: 32px card padding, generous section spacing, one clear path to the free consultation per section.
- **Do** pair DM Serif Display headings with Source Sans 3 body, and separate two headings by size, not weight.
- **Do** prefer warm surfaces (#FEFDFB page, #FAFAF8 panels) over pure white for large areas, and keep focus rings visible (focus:ring-2 focus:ring-primary).
- **Do** write descriptive alt text on every project image; the imagery carries the brand.

### Don't:
- **Don't** use clip-art service icons or stock "happy crew" photography. Use real project photos and thin line icons (strokeWidth 1.5).
- **Don't** add loud "FREE QUOTE" banners, countdown urgency, or hard-sell pricing blocks.
- **Don't** pile up badge soup: rows of trust seals, review-platform logos, and certification clutter. One quiet 5.0 rating line is enough.
- **Don't** build crowded, busy layouts that read as a default template or a bargain operator. Restraint is the premium signal.
- **Don't** apply font-bold or font-semibold to DM Serif Display headings; it triggers faux-bold. Use size for hierarchy.
- **Don't** use a colored border-left or border-right thicker than 1px as a stripe accent; the only edge accent is the top hairline that animates in on hover.
- **Don't** use gradient text (background-clip: text); emphasize the word "Visionable" with solid Golden Marigold, as the hero already does.
- **Don't** reach for glassmorphism, a modal as the first thought, the big-number hero-metric template, or identical icon-heading-text card grids repeated down the page.
- **Don't** let Golden Marigold spread across a screen; its scarcity is what makes it mean "act."
