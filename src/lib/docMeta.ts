import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(process.cwd());
const DOCS_DIR_REL = "src/content/docs";

const GITHUB_OWNER = "bobo52310";
const GITHUB_REPO = "TypeLate-website";
const GITHUB_BRANCH = "main";

/**
 * Resolve the on-disk file for a doc slug. Try .md first, then .mdx.
 * Returns the path relative to repo root, or null if neither exists.
 */
function resolveDocFile(slug: string): string | null {
  for (const ext of ["md", "mdx"]) {
    const rel = path.join(DOCS_DIR_REL, `${slug}.${ext}`);
    const abs = path.join(REPO_ROOT, rel);
    if (existsSync(abs)) return rel;
  }
  return null;
}

/**
 * Last-modified ISO date for a doc, derived from git log.
 * Returns null if the file isn't tracked or git is unavailable.
 */
export function getDocLastUpdated(slug: string): string | null {
  const rel = resolveDocFile(slug);
  if (!rel) return null;
  try {
    const out = execSync(`git log -1 --format=%aI -- ${rel}`, {
      cwd: REPO_ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return out || null;
  } catch {
    return null;
  }
}

/**
 * GitHub URL to edit the source markdown for a doc.
 */
export function getDocEditUrl(slug: string): string | null {
  const rel = resolveDocFile(slug);
  if (!rel) return null;
  return `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/edit/${GITHUB_BRANCH}/${rel}`;
}
