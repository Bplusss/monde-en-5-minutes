import type * as MapLibreGL from "maplibre-gl";

/**
 * MapLibre is loaded from a CDN <script> in the root layout instead of the npm
 * ESM build — bundling its worker through Turbopack/webpack silently breaks
 * the GeoJSON tiling pipeline (background layers paint, but no vector layer
 * ever receives tile data). The npm package stays a devDependency for types only.
 */
declare global {
  interface Window {
    maplibregl: typeof MapLibreGL;
  }
}

export {};
