import type * as MapLibreGL from "maplibre-gl";

const MAPLIBRE_VERSION = "6.9.0";

/** Only path that still ships from the CDN as of v6 — the UMD build (dist/maplibre-gl.js) was dropped. */
const MAPLIBRE_MODULE_URL = `https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.mjs`;

/**
 * MapLibre CSS to load once in the root layout, alongside this module.
 */
export const MAPLIBRE_CSS_URL = `https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.css`;

let modulePromise: Promise<typeof MapLibreGL> | null = null;

/**
 * `import()` hidden inside a Function body: Turbopack still statically
 * resolves `import(MAPLIBRE_MODULE_URL)` (the specifier is a compile-time
 * constant) and rewrites it into its own dynamic-import runtime helper,
 * which throws (`e.x is not a function`) for a bare browser fetch like this.
 * Going through `new Function` keeps the `import()` call out of the source
 * Turbopack parses, so it's left as a genuine native import for the browser.
 */
const importFromUrl = new Function("url", "return import(url)") as (url: string) => Promise<typeof MapLibreGL>;

/**
 * Loads MapLibre GL JS from a CDN as a native runtime `import()` instead of
 * the npm package — bundling its worker through Turbopack/webpack silently
 * breaks the GeoJSON tiling pipeline (background layers paint, but no vector
 * layer ever receives tile data). The npm package stays a devDependency for
 * types only. Repeated calls resolve the same cached promise.
 */
export function loadMapLibre(): Promise<typeof MapLibreGL> {
  if (!modulePromise) {
    modulePromise = importFromUrl(MAPLIBRE_MODULE_URL);
  }
  return modulePromise;
}
