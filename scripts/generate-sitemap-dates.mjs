// Snapshots each country's real last-modified date (from git history) into
// data/sitemap-dates.json, which app/sitemap.ts reads at build time instead
// of stamping every URL with the literal build timestamp.
//
// Why a snapshot file rather than running `git log` inside the Next.js build:
// Vercel's default checkout is a shallow clone, so per-path git history is
// not reliably available at build time. Running this script locally and
// committing its output sidesteps that entirely.
//
// Usage: node scripts/generate-sitemap-dates.mjs
//   Re-run (and commit the result) whenever a country's data changes enough
//   to be worth reflecting in the sitemap.
import { execSync } from "node:child_process";
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

function lastCommitDate(relPath) {
  const out = execSync(`git log -1 --format=%cs -- "${relPath}"`, { cwd: ROOT, encoding: "utf8" }).trim();
  return out || null;
}

function main() {
  const slugs = readdirSync(DATA_DIR).filter((name) => existsSync(path.join(DATA_DIR, name, "index.ts")));
  const dates = {};
  for (const slug of slugs) {
    const date = lastCommitDate(`data/${slug}`);
    if (date) dates[slug] = date;
  }
  writeFileSync(path.join(DATA_DIR, "sitemap-dates.json"), JSON.stringify(dates, null, 2) + "\n");
  console.log(`Wrote data/sitemap-dates.json for ${Object.keys(dates).length} countries.`);
}

main();
