/** Minimal geometry helpers shared by the small map components — no turf dependency needed for this. */

function visitCoords(coords: unknown, fn: (x: number, y: number) => void): void {
  const arr = coords as unknown[];
  if (typeof arr[0] === "number") {
    fn(arr[0] as number, arr[1] as number);
  } else {
    arr.forEach((c) => visitCoords(c, fn));
  }
}

export function computeBounds(features: GeoJSON.Feature[]): [[number, number], [number, number]] | null {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  features.forEach((f) => {
    const geom = f.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
    if (!("coordinates" in geom)) return;
    visitCoords(geom.coordinates, (x, y) => {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    });
  });
  if (!Number.isFinite(minX)) return null;
  return [
    [minX, minY],
    [maxX, maxY],
  ];
}

/** Centroid approximated as the bounding-box center — good enough to place a marker, not for precise area work. */
export function computeCentroid(features: GeoJSON.Feature[]): [number, number] | null {
  const bounds = computeBounds(features);
  if (!bounds) return null;
  const [[minX, minY], [maxX, maxY]] = bounds;
  return [(minX + maxX) / 2, (minY + maxY) / 2];
}

/** Fetches a country's own outline GeoJSON and returns its bounding box, for framing a map on the whole country. */
export async function fetchOutlineBounds(url: string): Promise<[[number, number], [number, number]] | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  const geojson: GeoJSON.FeatureCollection = await res.json();
  return computeBounds(geojson.features);
}

/**
 * A longitude span this wide only happens when a country's outline wraps the
 * antimeridian (e.g. the US's Aleutian islands) — naively fitting to it would
 * zoom out to show mostly ocean, so callers should fall back to an authored
 * center/zoom instead in that case.
 */
export const ANTIMERIDIAN_SPAN_THRESHOLD = 100;

export function isFittableBounds(bounds: [[number, number], [number, number]]): boolean {
  return bounds[1][0] - bounds[0][0] < ANTIMERIDIAN_SPAN_THRESHOLD;
}

function ringArea(ring: number[][]): number {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1]);
  }
  return Math.abs(a / 2);
}

/**
 * A point guaranteed inside the outer ring: on the horizontal line through the
 * ring's vertex-average latitude, the midpoint of the widest interior segment.
 */
function interiorPoint(ring: number[][]): [number, number] {
  const y = ring.reduce((s, p) => s + p[1], 0) / ring.length;
  const xs: number[] = [];
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [x1, y1] = ring[j];
    const [x2, y2] = ring[i];
    if ((y1 > y) !== (y2 > y)) xs.push(x1 + ((y - y1) * (x2 - x1)) / (y2 - y1));
  }
  xs.sort((a, b) => a - b);
  let best: [number, number] = [ring[0][0], ring[0][1]];
  let bestWidth = -1;
  for (let k = 0; k + 1 < xs.length; k += 2) {
    if (xs[k + 1] - xs[k] > bestWidth) {
      bestWidth = xs[k + 1] - xs[k];
      best = [(xs[k] + xs[k + 1]) / 2, y];
    }
  }
  return best;
}

/**
 * One label point per feature, placed inside its largest polygon part — a
 * symbol layer on the polygons themselves would repeat the name on every
 * island of an archipelago region (Philippines, Indonesia, Greece…).
 */
export function computeLabelPoints(fc: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection<GeoJSON.Point> {
  const features: GeoJSON.Feature<GeoJSON.Point>[] = [];
  for (const f of fc.features) {
    const g = f.geometry;
    const polygons = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    let largest: number[][] | null = null;
    let largestArea = -1;
    for (const poly of polygons) {
      const area = ringArea(poly[0]);
      if (area > largestArea) {
        largestArea = area;
        largest = poly[0];
      }
    }
    if (!largest) continue;
    features.push({ type: "Feature", properties: f.properties, geometry: { type: "Point", coordinates: interiorPoint(largest) } });
  }
  return { type: "FeatureCollection", features };
}
