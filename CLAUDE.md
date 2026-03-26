# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Sibling projects:**
> - [TypeLate-macos](../TypeLate-macos/) — macOS/Windows desktop app, built with Tauri v2 + React 19 + Rust. The core product with Groq Whisper transcription, LLM enhancement, vocabulary sync, and SQLite storage.
> - [TypeLate-android](../TypeLate-android/) — Android app, built with Kotlin + Jetpack Compose. Shares the same transcription pipeline, enhancement prompts, hallucination filter, and vocabulary sync format.

## What This Is

Landing page / marketing website for [TypeLate](https://github.com/bobo52310/TypeLate) — an open-source voice-to-text desktop app (macOS & Windows) built with Tauri v2, React 19, and Rust. This repo is the **website only**, not the app itself.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test framework or linter is configured.

## Tech Stack

- **Astro 6** (static site, no SSR)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (configured in `astro.config.mjs`)
- **TypeScript** (strict mode via `astro/tsconfigs/strict`)
- Node >= 22.12.0

## Architecture

Single-page static site. One route (`src/pages/index.astro`) composes section components in order:

`Navbar → Hero → HowItWorks → Features → TechHighlights → DownloadCTA → Footer`

### Key Patterns

- **Bilingual content**: Every section shows English headings/descriptions with Chinese (zh-TW) subtitles inline. A centralized i18n file exists at `src/i18n/en.ts` but components currently use **hardcoded bilingual text** directly in their frontmatter, not the i18n file.
- **CSS custom properties for theming**: Brand colors defined as CSS variables in `src/styles/global.css` (e.g., `--brand-bg`, `--brand-gold`, `--brand-card`). Components reference these via inline `style` attributes rather than Tailwind classes for brand colors.
- **Scroll animations**: `fade-in` / `fade-in-child` classes trigger via IntersectionObserver (defined in `Layout.astro`'s `<script>` block). Nav blur-on-scroll is also handled there.
- **NotchHudDemo**: CSS + JS animated demo simulating TypeLate's macOS notch HUD (recording → transcribing → success loop). Self-contained state machine in its own `<script>`.
- **Download URLs**: Hardcoded GitHub release URLs in `Hero.astro`, `DownloadCTA.astro`, and `Navbar.astro` pointing to `bobo52310/TypeLate/releases/latest/download/`. Not centralized — updates require changing multiple files.
- **No component framework**: Pure Astro components (`.astro`), no React/Vue/Svelte on the website side. SVG icons are inline.
