/**
 * Generates a 1200x630 PNG OG image from the SVG template.
 * Run: node scripts/generate-og-image.mjs
 * Called automatically before build via "prebuild" npm script.
 */
import { readFileSync, writeFileSync } from "fs";
import sharp from "sharp";

const svgPath = new URL("../public/assets/og-image.svg", import.meta.url);
const outPath = new URL("../public/assets/og-image.png", import.meta.url);

const svg = readFileSync(svgPath);

await sharp(svg)
  .resize(1200, 630)
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(outPath.pathname);

console.log("✓ OG image generated: public/assets/og-image.png");
