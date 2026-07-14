# AR Air Website Design Rules

These rules apply when implementing Figma-driven or visual redesign work in this static AR Air website.

## Project Structure

- This is a static site using plain `html`, `css`, and `javascript`; do not introduce React, Vue, Tailwind, or a bundler unless the user asks for a framework migration.
- Pages live at the repository root as standalone `.html` files.
- Global styling lives in `styles.css`; interactive behavior lives in `script.js`.
- Local visual assets live in `assets/`. Use the existing logo and HVAC render assets before adding new imagery.

## Design Tokens And Styling

- IMPORTANT: Define new colors, spacing, radius, shadow, and typography values as CSS custom properties on the page scope or `:root`.
- IMPORTANT: Avoid hardcoded one-off colors in component rules when a token can be used.
- Keep the AR Air palette mostly white, cold blue, black/ink, and restrained gray. Use the logo's orange/red only as a small brand accent, not a dominant page background.
- Use responsive CSS with `clamp()`, `min()`, `max()`, CSS grid, flexbox, and media queries. Do not scale type directly with `vw` alone.
- Prefer full-width sections and editorial layout. Use cards only for repeated items, forms, or true interactive objects.
- Avoid nested cards, decorative orbs, heavy gradients, and generic SaaS card grids.

## Component And Markup Conventions

- Use semantic HTML: `header`, `nav`, `main`, `section`, `footer`, real headings, links, labels, and buttons.
- Keep class names descriptive and page-scoped for redesigns, for example `v3-hero`, `v3-services`, or `air-*`.
- Preserve contact paths: phone `+1 (916) 547-9721`, email `service@arairpro.com`, and service area copy for Sacramento, Yuba City, Marysville, Oroville, Chico, and beyond.
- Preserve the logo assets exactly as provided: `assets/ar-air-mark-gradient.svg` for home/nav mark and `assets/ar-air-logo-gradient.svg` where the full logo is needed.

## Figma MCP Integration Rules

When a Figma file or node is provided:

1. Run `get_design_context` for the exact node first.
2. If the response is too large, run `get_metadata`, then re-fetch only the required node.
3. Run `get_screenshot` for the target node before coding.
4. Download or reference any returned localhost assets directly.
5. Translate generated output into this static site's plain HTML/CSS/JS conventions.
6. Validate the implemented page against the Figma screenshot at desktop and mobile widths.

## Asset Handling

- Store downloaded Figma images or SVGs in `assets/` unless the Figma MCP server returns a localhost asset URL that should be used directly.
- IMPORTANT: Do not add icon packages. Use inline SVG icons or existing local assets.
- Optimize image usage by sizing with CSS constraints and using `loading="lazy"` for below-the-fold images.
- Do not use placeholder visuals when a real HVAC asset is already available.

## Motion Rules

- Motion should make the HVAC equipment feel premium and physical: entrance fades, small floating movement, scroll-linked assembly, and focused hover states.
- Respect `prefers-reduced-motion`.
- Keep animations transform/opacity based for smooth mobile performance.
- Scroll-linked animation must have stable dimensions so text and equipment do not jump or overlap.

## Verification

- After visual changes, run the local static server and verify `http://localhost:4173/index.html`.
- Capture at least one desktop and one mobile screenshot.
- Check for console errors and obvious horizontal overflow.
- Confirm contact links and the quote form remain reachable.
