# Contributing to TypeLate Website

Thanks for your interest in contributing! Here's how to get started.

## Development Setup

```bash
git clone https://github.com/bobo52310/TypeLate-website.git
cd TypeLate-website
npm install
npm run dev
```

Requires Node >= 22.12.0.

## Making Changes

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `npm run build` to verify the build passes
4. Test on both desktop and mobile viewports
5. Submit a pull request

## Guidelines

- **Bilingual content**: All user-facing text should include both English and 繁體中文
- **Brand colors**: Use CSS custom properties from `src/styles/global.css` (e.g., `--brand-gold`, `--brand-card`)
- **No component frameworks**: This site uses pure Astro components — no React/Vue/Svelte
- **Keep it simple**: This is a static landing page, not a web app

## Reporting Bugs

Use the [Bug Report](https://github.com/bobo52310/TypeLate-website/issues/new?template=bug_report.md) template.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
