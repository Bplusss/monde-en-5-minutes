// Downloads (once, cached) the Natural Earth 1:10m datasets that every
// country's outline/regions map is built from — see rebuild-country-maps.mjs.
import { existsSync, mkdirSync } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";

const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/natural-earth");
const BASE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson";

const FILES = {
  admin0: "ne_10m_admin_0_countries.geojson",
  admin1: "ne_10m_admin_1_states_provinces.geojson",
  rivers: "ne_10m_rivers_lake_centerlines.geojson",
};

async function download(name) {
  const dest = path.join(CACHE_DIR, name);
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log(`Downloading ${name}...`);
  const res = await fetch(`${BASE}/${name}`);
  if (!res.ok) throw new Error(`Failed to fetch ${name}: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

export async function ensureNaturalEarthData() {
  const paths = {};
  for (const [key, name] of Object.entries(FILES)) {
    paths[key] = await download(name);
  }
  return paths;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  ensureNaturalEarthData().then((p) => console.log(p));
}
