# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## What this is

AJ's Diamond Detailing — a **real client** business site (auto detailing, Gainesville
FL). Static HTML/CSS/JS, no build step. See the root `../CLAUDE.md` for shared
conventions (preview/deploy commands, SEO expectations, image guidelines).

## Structure

`index.html` at root, `css/style.css`, `js/main.js` (wrapped in an IIFE — keep that
pattern), photos in `images/`. **`images/README.md` documents exactly which real
photos are needed, their filenames, and sizes** — consult it before touching images.

## Design language — "Showroom Noir"

Redesigned from the original generic layout into a luxury-automotive theme: warm
obsidian near-black base (`--color-bg #0d0b0a`), molten champagne-gold accent
(`--color-accent #e3ad5f`), a single jade glow used sparingly for atmosphere.
Fraunces (display) + Hanken Grotesk (body). Tokens are at the top of `css/style.css`
— match this palette, don't reintroduce the old generic look.

## Features

- Before/after image comparison slider, `#ba-slider`.
- Sticky nav with `.scrolled` state on scroll, `.nav-toggle` hamburger for mobile.
- Scroll-reveal via IntersectionObserver (`fade-in` class).

## Contact form — not wired yet

The booking form (`index.html`, `.booking-form`) is currently a **non-functional
stub**: `onsubmit="return false"` and an explicit note in the markup ("connect it to
your email, Formspree, or a booking tool before going live"). It does not submit
anywhere. Before launch this needs to be wired — to match the other sites, the
straightforward option is the shared `MSI-Forms` backend: add this site's origin to
`ALLOWED_ORIGINS` in `MSI-Forms/api/submit.js`, then have `js/main.js` `fetch`-POST
JSON to `https://forms.caiomsi.com/api/submit` like `Caiomsi-Main` or `MSI-Studio` do,
including a hidden `company` honeypot field.

## Pre-launch checklist

- No custom domain configured yet (GitHub Pages default URL).
- Check for `placehold.co` image URLs and any `REPLACE WITH ...` / example-domain
  (`ajsdiamonddetailing.com`) placeholder strings before this goes live.
