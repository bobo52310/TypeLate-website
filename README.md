[繁體中文](README_zh-TW.md) | **English**

<div align="center">

  # TypeLate Website

  **Landing page & marketing site for [TypeLate](https://github.com/bobo52310/TypeLate)**

  An open-source voice-to-text desktop app — press a hotkey, speak, release, and your voice becomes polished text in under 3 seconds.

  [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

## Overview

Static marketing website built with Astro, showcasing TypeLate's features, use cases, and download links. Designed as a single-page site with scroll animations, bilingual content (English + 繁體中文), and a dark-gold brand theme.

### Sections

Navbar → Hero → How It Works → Video Demo → Before/After Demo → Features → Use Cases → Compatible Apps → Tech Highlights → Comparison Table → Download CTA → FAQ → Developer Intro → Footer

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 6](https://astro.build/) (static site, no SSR) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict mode) |
| Sitemap | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Node | >= 22.12.0 |

## Development

### Setup

```bash
git clone https://github.com/bobo52310/TypeLate-website.git
cd TypeLate-website
npm install
npm run dev
```

### Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
src/
├── components/       # Astro components (pure .astro, no React/Vue)
├── i18n/             # Centralized i18n strings
├── layouts/          # Base layout with scroll animations
├── pages/            # Single route (index.astro)
└── styles/           # Global CSS with brand custom properties
public/
├── assets/           # Static assets (images, icons)
├── favicon.svg
└── robots.txt
```

## Related Projects

- [TypeLate](https://github.com/bobo52310/TypeLate) — macOS / Windows desktop app (Tauri v2 + React 19 + Rust)
- [TypeLate-android](https://github.com/bobo52310/TypeLate-android) — Android app (Kotlin + Jetpack Compose)

## License

[MIT](LICENSE)
